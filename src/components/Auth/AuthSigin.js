import React from "react";
import SignIn from "../SignInComponent/SignIn";
function AuthSigin() {
  return (
    <div className="flex justify-center font-Finlandica">
      <div className="lg:w-[33%] flex justify-center rounded-xl bg-white mt-5">
        <div className="lg:w-[90%]">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default AuthSigin;
