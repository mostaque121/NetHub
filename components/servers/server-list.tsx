"use client";
import { deleteServer } from "@/app/actions/server";
import { ServerLink } from "@/app/generated/prisma";
import { Tv } from "lucide-react";
import { useMemo, useState } from "react";
import ServerCard from "../card/ftp-card";
import { ConfirmDialog } from "../ui/confirm-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import ServerControl from "./server-control";
import ServerForm from "./server-form";

export default function ServerList({ servers }: { servers: ServerLink[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "ALL" | "TV" | "FTP"
  >("ALL");
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [toDeleteServer, setToDeleteServer] = useState<ServerLink | null>(null);
  const [toEditServer, setToEditServer] = useState<ServerLink | null>(null);

  // 🔍 Filtered servers (by category + search)
  const filteredServers = useMemo(() => {
    return servers.filter((server) => {
      // Category filter
      if (selectedCategory !== "ALL" && server.type !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase();

        const matchName = server.name?.toLowerCase().includes(term);
        const matchUrl = server.url?.toLowerCase().includes(term);
        const matchWorkingIn = server.workingIn?.some((w) =>
          w.toLowerCase().includes(term)
        );

        return matchName || matchUrl || matchWorkingIn;
      }

      return true;
    });
  }, [servers, searchTerm, selectedCategory]);

  return (
    <div className="py-12 px-4 md:px-8 container mx-auto">
      <ServerControl
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServers.map((channel) => (
          <ServerCard
            setIsDeleteOpen={setIsDeleteOpen}
            setIsEditOpen={setIsEditOpen}
            setToDeleteServer={setToDeleteServer}
            setToEditServer={setToEditServer}
            key={channel.id}
            {...channel}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredServers.length === 0 && (
        <div className="text-center py-12">
          <Tv className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No Server found</h3>
          <p className="text-muted-foreground">
            {searchTerm || selectedCategory !== "ALL"
              ? "Try adjusting your search or filters"
              : "Add your first server to get started"}
          </p>
        </div>
      )}

      <div>
        {toEditServer && (
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogContent className="min-w-[calc(100%-100px)] bg-muted p-0 py-4">
              <DialogHeader>
                <DialogTitle className="px-4">Edit Server</DialogTitle>
              </DialogHeader>
              <ServerForm
                server={toEditServer}
                onCloseForm={() => {
                  setIsEditOpen(false);
                  setToEditServer(null);
                }}
              />
            </DialogContent>
          </Dialog>
        )}

        {/* Delete Confirmation */}

        {toDeleteServer && (
          <ConfirmDialog
            open={isDeleteOpen}
            title={`Delete Server`}
            description={`Are you sure you want to delete this Server? This action cannot be undone.`}
            onConfirm={() => deleteServer(toDeleteServer.id)}
            onCancel={() => {
              setIsDeleteOpen(false);
              setToDeleteServer(null);
            }}
            confirmText="Delete"
            cancelText="Cancel"
            confirmClassName="bg-destructive text-white hover:bg-destructive/90"
          />
        )}
      </div>
    </div>
  );
}
