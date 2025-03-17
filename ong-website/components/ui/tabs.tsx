import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import * as React from "react";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn("inline-flex space-x-1", className)} {...props} />
));

TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn("px-4 py-2", className)} {...props} />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = TabsPrimitive.Content;
