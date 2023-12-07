import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cloud, CloudCog, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardDailogInt {
  label: string;
  github: string | undefined;
  hosted: string | undefined;
  description: string;
  img_url: string;
}

const CardDailog = ({
  label,
  github,
  hosted,
  description,
  img_url,
}: CardDailogInt) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex flex-col items-start bg-white dark:bg-neutral-800  px-7 py-5 space-y-3 h-40 w-full rounded-xl relative">
          {img_url && (
            <Image
              src={img_url}
              alt=""
              fill
              className="rounded-xl object-cover"
            />
          )}
          <p className="z-20 text-neutral-200 font-semibold text-xl">{label}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-2">
            {label}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="w-full flex items-center justify-center gap-3">
          {github && (
            <Button size={"lg"} className="w-full">
              <Link href={github} className="w-full flex items-center">
                <span className="text-lg mr-3">Github repo</span>
                <Github />
              </Link>
            </Button>
          )}
          {hosted && (
            <Button size={"lg"} className="w-full">
              <Link href={hosted} className="w-full flex items-center">
                <span className="text-lg mr-3">Hosted link</span>
                <Cloud />
              </Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CardDailog;
