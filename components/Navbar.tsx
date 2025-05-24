import React from "react";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-15 lg:px-24 px-4 flex items-center justify-between">
      <LinksDropdown />
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
