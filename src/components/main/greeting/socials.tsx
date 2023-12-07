import Link from "next/link";
import { socialLinks } from "./constants";

const Socials = () => {
  return (
    <div className="grid items-center cols-span-1 gap-7">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Link href={href} className="" key={label}>
          <Icon className="w-6 h-6 md:w-9 md:h-9 text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300" />
        </Link>
      ))}
    </div>
  );
};
export default Socials;
