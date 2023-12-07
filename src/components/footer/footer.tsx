import Link from "next/link";
import { footerLinks } from "./constant";

const Footer = () => {
  return (
    <div className="w-full border-t px-5 py-3 space-y-5 h-40 mt-12">
      <div className="grid justify-center">
        <h1 className="text-lg font-semibold">skmishra</h1>
      </div>
      <div className="grid grid-cols-3 max-w-sm mx-auto">
        {footerLinks.map(({ href, label, icon: Icon }) => (
          <Link
            href={href}
            className="flex items-center justify-center gap-x-3"
          >
            <Icon />
            {label}
          </Link>
        ))}
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Thanks for visiting my website.Hope you like it.
      </p>
      <p className="mt-auto flex items-center justify-center border-t text-[10px] text-muted-foreground py-3">
        &copy; Developed by skmishra
      </p>
    </div>
  );
};
export default Footer;
