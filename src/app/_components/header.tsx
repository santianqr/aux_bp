import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/app/_components/header-navbar";
import { HeaderPopover } from "@/app/_components/header-popover";
import { HeaderButton } from "./header-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-center md:justify-between">
        <HeaderButton classname="cursor-pointer block md:hidden absolute left-0" />

        <Link href="/">
          <Image
            src="/logo_long.webp"
            alt="logo_long"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          <Navbar />
          <HeaderPopover />
        </div>
      </div>
    </header>
  );
}
