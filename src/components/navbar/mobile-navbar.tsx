import Title from "./title";
import MobileMenu from "./mobile-menu";

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t px-6 md:hidden block py-4 bg-white dark:bg-neutral-900 z-30">
      <div className="flex items-center justify-between">
        {/* Home Button */}
        <Title />
        {/* Routes */}
        <MobileMenu />
      </div>
    </div>
  );
};
export default MobileNavbar;
