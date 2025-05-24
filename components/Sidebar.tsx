'use client'
import React from "react";

import links from "@/utils/links";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <div className="flex h-full flex-col mt-20 gap-y-4" >
        {links.map((link) => {
          return (
            <Button
              variant={pathname === link.href ? "default" : "link"}
              asChild
              key={link.href}
            >
              <Link className="flex items-center gap-x-2" href={link.href}>
                {" "}
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
