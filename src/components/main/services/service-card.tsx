import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, BadgeCheck, LucideIcon } from "lucide-react";

interface ServicesCardInterface {
  label: string;
  icon: LucideIcon;
  content: {
    id: string;
    text: string;
  }[];
}

const ServicesCard = ({
  label,
  icon: Icon,
  content,
}: ServicesCardInterface) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex flex-col items-start justify-end gap-y-3 w-full h-44 rounded-xl bg-inherit border bg-white hover:bg-neutral-200 dark:bg-neutral-800 hover:dark:bg-neutral-700 text-xl text-neutral-800 dark:text-neutral-200">
          <Icon className="w-12 h-12" />
          <p className="">{label}</p>
          <span className="flex text-[15px] items-center justify-start text-muted-foreground gap-x-5">
            View more
            <ArrowRight />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-8 py-12 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-center md:text-3xl text-xl text-neutral-700 dark:text-neutral-400">
            {label}
          </DialogTitle>
          <DialogDescription className="pt-12">
            <div className="flex flex-col items-start justify-center gap-y-3">
              {content?.map((line) => (
                <p
                  key={line.id}
                  className="flex items-center justify-center gap-x-3"
                >
                  <BadgeCheck /> {line.text}
                </p>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default ServicesCard;
