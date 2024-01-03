import { Nav, Navbar} from "rsuite";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Sidenav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import {
  Bars3BottomRightIcon,
  CogIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import "../index.css";

export default function NavB() {
  const [isdrop, setIsDrop] = useState(false);
  return (
    <>
      <div className="hidden md:block">
        <Navbar
          appearance="subtle"
          style={{
            backgroundColor: "",
          }}
        >
          <Nav>
            <Nav.Item>
              <button className="md:flex sm:hidden m-1 w-full bg-violet-400 hover:bg-teal-600 text-white border-2 border-violet-800 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                 ثبت نام   /    ورود  
              </button>

            </Nav.Item>
            <Nav.Item href="/" icon={<HomeIcon />}>صفحه اصلی</Nav.Item>
            <Nav.Item>جدیدترین ها</Nav.Item>
            <Nav.Item>محصولات</Nav.Item>
            <Nav.Menu trigger={"hover"} title="محصولات">
              <Nav.Item>پوست و مو</Nav.Item>
              <Nav.Item>کرم </Nav.Item>
              <Nav.Menu title="شوینده ها">
                <Nav.Item>شوینده</Nav.Item>
                <Nav.Item>پاک کننده</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>ارتباط با ما</Nav.Item>
          </Nav>
        </Navbar>
      </div>
      <div className="-mr-2 flex md:hidden bg-white rounded-md ">
        <button
          type="button"
          className="block z-50 m-1 w-11  rounded-md bg-violet-400 text-gray-800"
          onClick={() => setIsDrop(!isdrop)}
        >
          {isdrop ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3BottomRightIcon className="h-6 w-10" aria-hidden="true" />
          )}
        </button>
        <button className="sm:flex m-1  md:hidden w-1/2 bg-violet-400 hover:bg-teal-600 text-white border-2 border-violet-800 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
          ورود /ثبت نام
        </button>
      </div>
      <Transition
        className="block bg-slate-500 rounded-e-lg w-full"
        show={isdrop}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Sidenav className="relative ">
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
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
      </Transition>
    </>
  );
}
