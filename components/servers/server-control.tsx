"use  client";
import { linkType } from "@/app/generated/prisma";
import { Search } from "lucide-react";
import { AddBtn } from "../ui/add-button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ServerForm from "./server-form";

interface SectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: "ALL" | linkType;
  setSelectedCategory: (category: "ALL" | linkType) => void;
}
export default function ServerControl({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: SectionProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search channels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-border bg-input"
        />
      </div>

      <div className="flex gap-2 flex-wrap md:justify-normal items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant={selectedCategory === "ALL" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("ALL")}
            className="cursor-pointer hover:text-"
          >
            ALL
          </Button>
          <Button
            variant={selectedCategory === "FTP" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("FTP")}
            className="cursor-pointer"
          >
            FTP
          </Button>
          <Button
            variant={selectedCategory === "TV" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("TV")}
            className="cursor-pointer"
          >
            TV
          </Button>
          <Button
            variant={selectedCategory === "DEV" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("DEV")}
            className="cursor-pointer"
          >
            Dev
          </Button>
        </div>
        <AddBtn title="Add Server" FormComponent={ServerForm} />
      </div>
    </div>
  );
}
