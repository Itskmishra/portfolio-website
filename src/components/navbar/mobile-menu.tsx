import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { ModeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { Blocks } from "lucide-react";
import { routes } from "./constants";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"}>
          <Blocks />
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetDescription>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-3 flex items-center justify-end px-8">
                <ModeToggle />
              </div>
              {routes.map(({ label, href, icon: Icon }) => (
                <Link
                  href={href}
                  key={href}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <Icon />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
