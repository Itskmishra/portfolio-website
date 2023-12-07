import Link from "next/link";
import { ModeToggle } from "../theme-toggle";
import { routes } from "./constants";

const DesktopLinks = () => {
  return (
    <div className="flex items-center justify-center gap-7">
      {routes.map(({ label, href, icon: Icon }) => (
        <Link href={href} key={href}>
          {label}
        </Link>
      ))}
      {/* Theme toggle btn */}
      <ModeToggle />
    </div>
  );
};
export default DesktopLinks;
