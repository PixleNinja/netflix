// import { LOGO_URL } from "../utils/Constants";
import { LOGO } from "../utils/Constants";

const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50">
          <img className="w-60"  src={LOGO} alt="logo" />
        </div>
    )      
};

export default Header;
