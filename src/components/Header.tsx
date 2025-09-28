
import { SvgIcon } from '@progress/kendo-react-common';
import { buildingBlocksIcon } from '@progress/kendo-svg-icons';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header className="neo-blur px-7 h-16 fixed top-0 left-0 right-0 z-50 animate-fade-in flex items-center justify-between w-[97%] md:w-[80%] mx-auto mt-4 rounded-3xl">
      <Link to="/" className="flex items-center space-x-2 py-2">
        <SvgIcon icon={buildingBlocksIcon} size="medium" />
        {/* <buildingBlocksIcon  /> */}
        <h1 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
          Build It
        </h1>
      </Link>

      <div className="flex items-center">
        <div>New Site</div>
      </div>
    </header>
  );
};

export default Header;
