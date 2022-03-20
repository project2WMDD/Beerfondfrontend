import React from "react";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Router,
//   } from "react-router-dom";
// import LandingPage from './LandingPage';
// import LoginForm from './LoginForm';
import Signup from "./Signup";

function Links() {
  return (
    <div>
      <Signup />
    </div>
    //     <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/Signupform" element={<Signup />}>
    //         <Route path="/Loginform" element={<LoginForm />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
  );
}

export const link2 = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

// const Links = () =>{
//     return(
//         <Router>
//             <div>
//                 <Link to="/landingpage"></Link>
//             </div>
//         </Router>
//     )
// }

export default Links;
