import Title from "./title";
import DesktopLinks from "./desktop-links";

const DesktopNavbar = () => {
  return (
    // Main Div
    <nav className="md:block hidden w-full fixed py-3 px-6 shadow-md bg-white dark:bg-neutral-900 shadow-gray-200 dark:shadow-neutral-800 z-30">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Home Button */}
        <Title />
        {/* navigation routes */}
        <DesktopLinks />
      </div>
    </nav>
  );
};
export default DesktopNavbar;
