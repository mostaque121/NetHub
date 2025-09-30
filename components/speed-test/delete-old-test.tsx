"use client";

import { deleteOldSpeedTests } from "@/app/actions/speed-test";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { ConfirmDialog } from "../ui/confirm-dialog";

export default function DeleteOldTest() {
  const [loading, setLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClick = async () => {
    setIsDeleteOpen(true);
    try {
      setLoading(true);
      const result = await deleteOldSpeedTests();

      toast.success(`Deleted ${result.count} old tests.`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete old tests.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="cursor-pointer"
        variant="destructive"
        disabled={loading}
      >
        <Trash className="mr-2" />
        {loading ? "Deleting..." : "Delete Older Tests"}
      </Button>

      <ConfirmDialog
        open={isDeleteOpen}
        title={`Delete Server`}
        description={`Are you sure you want to delete old all? This action cannot be undone.`}
        onConfirm={handleClick}
        onCancel={() => {
          setIsDeleteOpen(false);
        }}
        confirmText="Delete"
        cancelText="Cancel"
        confirmClassName="bg-destructive cursor-pointer text-white hover:bg-destructive/90"
      />
    </>
  );
}
