import  { useState } from "react";
import Header from "./header";
import SideBar from "./SideBar";


const Template = ({ children, userData }:any) => {
  const [navbarState, setNavbarState] = useState(false);
  const handleCrossClick = () => setNavbarState(false);

  return (
    <>
      <Header
        navbarState={navbarState}
        onHamburClick={(newState:any) => {
          setNavbarState(newState);
        }}
      />

      <div className="lg:flex lg:justify-start bg-black " style={{direction:"rtl"}}>
        
        <SideBar
          navbarState={navbarState}
          setNavbarState={setNavbarState}
          handleCrossClick={() => {
            handleCrossClick();
          }}
        />
        <div className="w-full lg:w-10/12 bg-white">
        {children}
        </div>
        
      </div>
    </>
  );
};



export default (Template);
