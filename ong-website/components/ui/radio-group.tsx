import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import * as React from "react";

export const RadioGroup = RadioGroupPrimitive.Root;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn("h-4 w-4 rounded-full border", className)}
    {...props}
  />
));

RadioGroupItem.displayName = "RadioGroupItem";
