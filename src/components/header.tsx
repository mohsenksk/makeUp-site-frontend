import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";


const Header = ({ navbarState, onHamburClick, userData }:any) => {
  return (
    <div className="z-20" style={{ fontFamily: "Lalezar" }}>
      <div
        
        className="hidden lg:flex lg:flex-row border-2 border-gray-200 bg-gray-100 py-12 px-20 justify-between "
      >
        <div className="flex  space-x-2 align-center my-auto">
          <p className="my-2">
            {userData ? userData.data.fullName : "بدون نام"}
          </p>
          <CgProfile className="my-auto" size={30} />
        </div>
      </div>
      <div
       
        className=" justify-between lg:hidden flex flex-column shadow-lg bg-gray-100 py-6 space-y-12"
      >
        <div className="flex flex-row space-x-4 pr-6 justify-center">
          <span className="pt-4">مدیر</span>
        </div>
      </div>
      <div className="lg:hidden flex justify-end p-6">
        <GiHamburgerMenu
          onClick={() => {
            onHamburClick(!navbarState);
          }}
          size={30}
          style={{ color: "black", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

//const mapStateToProps = (state) => {
  //return {
   // userData: selectorUserData(state),
  //};
//};

export default (Header);
