"use client";
import { linkType, ServerLink } from "@/app/generated/prisma";
import { Folder, Pencil, Play, Trash2, Tv } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ServerCardProps {
  id: string;
  name: string;
  description: string | null;
  url: string;
  type: linkType;
  workingIn: string[];
  createdAt: Date;
  setIsEditOpen: (open: boolean) => void;
  setIsDeleteOpen: (open: boolean) => void;
  setToDeleteServer: (server: ServerLink) => void;
  setToEditServer: (server: ServerLink) => void;
}

export default function ServerCard({
  id,
  name,
  description,
  type,
  url,
  workingIn,
  createdAt,
  setToDeleteServer,
  setToEditServer,
  setIsEditOpen,
  setIsDeleteOpen,
}: ServerCardProps) {
  const serverData: ServerLink = {
    id,
    name,
    description,
    url,
    type,
    workingIn,
    createdAt,
  };

  return (
    <Card className="group gap-4 hover:glow-cyan transition-all duration-300 border-border bg-card backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          {/* Title + Type */}
          <div className="flex items-center space-x-2">
            {type === "TV" ? (
              <Tv className="w-5 h-5 text-primary" />
            ) : (
              <Folder className="w-5 h-5 text-primary" />
            )}
            <CardTitle className="text-lg">{name}</CardTitle>
            <Badge
              variant={type === "TV" ? "default" : "secondary"}
              className="ml-2 text-xs"
            >
              {type}
            </Badge>
          </div>

          {/* Hover actions */}
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground cursor-pointer hover:text-primary hover:bg-muted"
              onClick={() => {
                setToEditServer(serverData);
                setIsEditOpen(true);
              }}
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive cursor-pointer hover:text-destructive"
              onClick={() => {
                setToDeleteServer(serverData);
                setIsDeleteOpen(true);
              }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {/* URL */}
        <div className="text-xs text-muted-foreground mb-2 font-mono break-all">
          {url}
        </div>

        {/* Working regions */}
        {workingIn?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {workingIn.map((region, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs bg-primary-foreground"
              >
                {region}
              </Badge>
            ))}
          </div>
        )}

        {/* Play button */}
        <Button
          className="w-full group-hover:glow-cyan cursor-pointer transition-all duration-300"
          onClick={() => window.open(url, "_blank")}
        >
          <Play className="w-4 h-4 mr-2" />
          {type === "TV" ? "Open Stream" : "Open FTP"}
        </Button>
      </CardContent>
    </Card>
  );
}
