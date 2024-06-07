"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Link } from "lucide-react";

const links = [
  { href: "/", text: "Search Now!" },
  { href: "/services", text: "Services" },
  { href: "/about", text: "About" },
  { href: "/account", text: "Account" },
  { href: "/account/dashboard", text: "User Dashboard" },
  { href: "/account/settings", text: "Settings" },
];

export default function HeaderButton() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Bumperpass Navigation Options</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
        </div>
        <SheetFooter>
          <SheetClose></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
