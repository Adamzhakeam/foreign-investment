import React from "react";
import { icons } from "./icons";

function SideBar() {
  return (
    <div className=" font-Finlandica">
      <img
        src="https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg"
        alt="avatar for the user"
        className=" h-12 w-14 rounded-full"
      />
      <p>isaac.magambo</p>
      <div className="mt-5">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="bg-white my-5 text-center rounded-md p-2 shadow-3xl"
          >
            <span>{icon.icon}</span>
            <p className=" font-semibold">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
