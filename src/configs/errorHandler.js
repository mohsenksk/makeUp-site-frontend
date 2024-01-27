import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getPublicDataResponse } from '../redux/action/publicData.action';
import { selectorUserData } from '../redux/store/selector';

 const ErrorHandler =(response ) => {
    let history = useHistory();
    console.log(response.message)
     switch (response.message) {
         case "token_invalid":
             history.location.push("/login");
           return;
        case "forbiden" :
            history.location.push("/login");
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
