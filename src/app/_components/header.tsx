import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/app/_components/header-navbar";
import { HeaderPopover } from "@/app/_components/header-popover";
import HeaderButton from "./header-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <Link href="/">
          <Image
            src="/logo_long.webp"
            alt="logo_long"
            width={150}
            height={150}
          />
        </Link>
        <div className="flex items-center space-x-6">
          <Navbar />
          <HeaderPopover />
        </div>
        <HeaderButton />
      </div>
    </header>
  );
}
