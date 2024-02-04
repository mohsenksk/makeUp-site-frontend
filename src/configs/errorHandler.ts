import { useLocation } from "react-router-dom";



 const ErrorHandler =(response:any ) => {
    let history = useLocation;

    console.log(response.message)
     switch (response.message) {
         case "token_invalid":
          history.redirect("http://127.0.0.1:5173/login");
           return;
        case "email or password is wrong!" :
            history.redirect("http://127.0.0.1:5173/login");
            return;
        default:
          return response;

}
 }
// const mapDispatchToProps = {
//     setUserData : getPublicDataResponse
// }
// const mapStateToProps = (state) => {
//     return {
//       userData: selectorUserData(state)
//     };
//   };


export default (ErrorHandler);
