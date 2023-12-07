import Footer from "@/components/footer/footer";
import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import ScrollUp from "@/components/scroll-up";

const MainRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      {children}
      <Footer />
    </>
  );
};
export default MainRoutesLayout;
