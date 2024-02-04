import { useEffect, useRef} from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Nav, Sidenav } from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';


const SideBar = ({ navbarState, handleCrossClick, setNavbarState }: any) => {

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (navbarState && ref.current && !ref.current.contains(e.target)) {
        setNavbarState(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarState]);

  return (
    <div
      className={`min-h-screen lg:flex z-20 w-8/12 lg:w-3/12  right-0 lg:border-l-2 overflow-auto
    ${
      navbarState
        ? "h-full absolute border-2 rounded-lg mt-1 border-gray-400 shadow-xl"
        : "hidden"
    } lg:translate-x-0 flex-row bg-slate-100 `}
      ref={ref}
      style={{ direction: "rtl" }}
    >

        <div className="px-2 my-1 lg:my-0 flex  content-center justify-between">
          <AiFillCloseCircle
            className="lg:hidden"
            size={30}
            style={{ color: "", cursor: "pointer" }}
            onClick={() => handleCrossClick()}
          />
        </div>
        <Sidenav className="relative ">
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1"  icon={<DashboardIcon />}>
                صفحه اصلی
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                درباره ما
              </Nav.Item>
              <Nav.Menu eventKey="3" title="محصولات" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">محصولات1</Nav.Item>
                <Nav.Item eventKey="3-2">محصولات2</Nav.Item>
                <Nav.Item eventKey="3-3">محصولات3</Nav.Item>
                <Nav.Item eventKey="3-4">محصولات1</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>

    </div>
  );
};
export default SideBar;

