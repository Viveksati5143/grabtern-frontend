import React, { useState, useEffect } from "react";
import Sidebar from "../../components/mentorDashboard/sidebar";
import Profile from "../../components/mentorDashboard/profile";
import Sessions from "../../components/mentorDashboard/sessions";
import Calendar from "../../components/mentorDashboard/calendar";
import Queries from "../../components/mentorDashboard/queries";
import Home from "../../components/mentorDashboard/home";
import Header from "../../components/layout/Header";
import Bookings from "../../components/mentorDashboard/Bookings";
import Payments from "../../components/mentorDashboard/Payment";
import ComingSoon from "../../components/basic/ComingSoon";

function MentorDashboard() {
  // getting page name on change in tab
  const [component, setComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mentor, setMentor] = useState({});

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setComponent(params.get("tab") || "");
  }, [window.location.search]);

  return (
    <>
      <div className="tw-flex">
        {/* <Header navbarBackground={true} /> */}
        <Sidebar
          mentor={mentor}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          {component === "" && (
            <Home
              setIsSidebarOpen={setIsSidebarOpen}
              mentor={mentor}
              setMentor={setMentor}
            />
          )}
          {component === "profile" && <Profile />}
          {component === "calendar" && <Calendar />}
          {component === "sessions" && <Sessions />}
          {component == "queries" && <Queries />}
          {component == "bookings" && <Bookings />}
          {component == "payments" && <Payments />}
          {component == "services" && <ComingSoon />}
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
