import { ModeToggle } from "./ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-15 lg:px-24 px-4 flex items-center justify-between">
      <div>
        {" "}
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
