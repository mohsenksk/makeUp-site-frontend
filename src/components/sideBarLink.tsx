
import { Link } from "react-router-dom";
import { MenuItem } from 'react-pro-sidebar';

const SideBarLink = ({ link, title, icon}:any) => {
  // const location = useLocation().pathname;
  // const [dropDownState, setDropDownState] = useState(false);
  return (

      <Link
        to={link}
        style={{ direction: "rtl", textDecoration: "none" ,fontFamily: "Lalezar" }}
        className="flex flex-row items-center px-2 transform hover:bg-gray-200 rounded-xl
                hover:translate-x-2 hover:text-green-800 transition-transform ease-in duration-200 text-gray-500 "
      >
        <MenuItem>
        <span
          className="inline-flex items-center justify-center h-12 w-8 
                  text-lg text-gray-400"
        >
          <img src={icon} className="justify-start ml-2" />
        </span>
        {title}

        </MenuItem>
        
      </Link>  
  );
};

export default SideBarLink;