import React from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import MainBody from "../../components/mainBody/MainBody";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="flex mx-5 justify-between pt-5 w-[90%]">
          <MainBody />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
