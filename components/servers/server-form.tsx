"use client";
import { addServer, updateServer } from "@/app/actions/server";
import { linkType, ServerLink } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { LoadingButton } from "../ui/loading-button";
import { WorkingInField } from "../ui/working-in";

export const serverSchema = z.object({
  name: z.string().min(2, "Name must be more than 2 characters"),
  url: z.url("Must be a valid URL"),
  description: z.string().optional(),
  type: z.enum(linkType),
  workingIn: z.array(z.string()).optional(),
});

type serverFormValues = z.infer<typeof serverSchema>;

interface ServerFormProps {
  onCloseForm: () => void;
  server?: ServerLink;
}

export default function ServerForm({ onCloseForm, server }: ServerFormProps) {
  const defaultValues: Partial<serverFormValues> = {
    name: server?.name || "",
    url: server?.url || "",
    description: server?.description || "",
    type: server?.type || "FTP",
    workingIn: server?.workingIn || [],
  };

  const form = useForm<serverFormValues>({
    resolver: zodResolver(serverSchema),
    defaultValues,
  });

  async function onSubmit(data: serverFormValues) {
    try {
      if (server) {
        await updateServer(server.id, data);
        toast.success("Server Updated");
      } else {
        const result = await addServer(data);
        if (result.success) {
          toast.success("Server Added");
        } else {
          toast.error("Error", {
            description: "Something went wrong. Please try again.",
          });
        }
      }
      onCloseForm();
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="relative qualification w-full bg-muted max-h-[calc(100vh-100px)] overflow-y-auto">
      <div className="p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 relative"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Server Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* URL */}
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Server Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Description (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type (Radio buttons) */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="TV"
                        checked={field.value === "TV"}
                        onChange={() => field.onChange("TV")}
                      />
                      TV
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="FTP"
                        checked={field.value === "FTP"}
                        onChange={() => field.onChange("FTP")}
                      />
                      FTP
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Dev"
                        checked={field.value === "DEV"}
                        onChange={() => field.onChange("DEV")}
                      />
                      Dev
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* WorkingIn custom field */}
            <FormField
              control={form.control}
              name="workingIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Working In</FormLabel>
                  <FormControl>
                    <WorkingInField
                      value={field.value || []}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Actions */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                onClick={() => onCloseForm()}
                variant="outline"
                className="cursor-pointer"
              >
                Cancel
              </Button>

              <LoadingButton loading={form.formState.isSubmitting}>
                {server ? "Update" : "Add"} Server
              </LoadingButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
