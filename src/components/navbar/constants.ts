import {
  BadgeInfo,
  Contact,
  FileStack,
  FileText,
  HelpingHand,
  Home,
} from "lucide-react";

export const routes = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: BadgeInfo,
  },
  {
    label: "Skills",
    href: "#skill",
    icon: FileText,
  },
  {
    label: "Services",
    href: "#services",
    icon: HelpingHand,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    icon: FileStack,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Contact,
  },
];
