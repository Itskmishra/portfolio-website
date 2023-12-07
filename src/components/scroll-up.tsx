"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ScrollUp = () => {
  return (
    <Link href={"#home"}>
      <Button
        variant={"link"}
        size={"icon"}
        className="fixed md:bottom-10 bottom-20 left-4 md:left-10 bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black"
      >
        <ArrowUp />
      </Button>
    </Link>
  );
};
export default ScrollUp;
