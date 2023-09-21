import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Introtoveerge } from "./pages/Introtoveerge/Introtoveerge";
import { Fisrttimesetup } from "./pages/Firsttimesetup/Firsttimesetup";
import Changelisting from "./pages/listings/Changelisting/Changelisting";
import Delist from "./pages/listings/Delist/Delist";
import Archiveunit from "./pages/listings/Archiveunit/Archiveunit";
import Createunit from "./pages/listings/Createunit/Createunit";
import Overview from "./pages/listings/Overview/Overview";
import Createlisting from "./pages/listings/Createlisting/Createlisting";
import Fractionasset from "./pages/listings/Fractionasset/Fractionasset";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Header } from "./components/Header/Header";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import { Show } from "@chakra-ui/react";
import Approved from "./pages/Approved/Approved";
import { Ticketing } from "./pages/Ticketing/Ticketing";
import { CreateLeadAccount } from "./pages/lead&account/Createaccount/Createaccount";
import { SendAnOffer } from "./pages/lead&account/sendAnOffer/sendAnOffer";
import { HomeOwnersPacket } from "./pages/lead&account/HomeOwnersPacket/HomeOwnersPacket";
import { InviteTeamMembers } from "./pages/InviteTeamMembers/InviteTeamMembers";
import { Terms } from "./pages/Terms/Terms";
import { Privacy } from "./pages/Privacy/Privacy";
function App() {
  return (
    <div className="help_container">
      <Header />
      <Show pb='100px' breakpoint="(min-width: 769px)">
        <Searchbar />
      </Show>
      <div className="wrapper">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/into_to_veerge" element={<Introtoveerge />} />
          <Route path="/fisrt_time_setup" element={<Fisrttimesetup />} />
          {/* <Route path="/Verified_whats_next" element={<Verified />} /> */}
          <Route path="/approved_whats_next" element={<Approved />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/listings/create_listing" element={<Createlisting />} />
          <Route path="/listings/change_listing" element={<Changelisting />} />
          <Route path="/listings/overview" element={<Overview />} />
          <Route path="/listings/delist" element={<Delist />} />
          {/* <Route path="/inspections" element={<Inspections />} /> */}
          {/* <Route path="/change_contact" element={<Changecontact />} /> */}
          {/* <Route
            path="/fractional_real_estate"
            element={<Fractionalestate />}
          /> */}
          {/* <Route path="/veerge_and_data" element={<Veergedata />} /> */}
          {/* <Route path="/create_online_store" element={<Onlinestore />} /> */}
          <Route path="/listings/archive_unit" element={<Archiveunit />} />
          <Route path="/listings/create_unit" element={<Createunit />} />
          <Route path="/listings/fractionalize_asset" element={<Fractionasset />} />
          <Route path="/lead/create_account" element={<CreateLeadAccount />} />
          <Route path="/lead/send_an_offer" element={<SendAnOffer />} />
          <Route path="/lead/home_owners_packet" element={<HomeOwnersPacket />} />
          <Route path="/invite_team_members" element={<InviteTeamMembers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* <Route path="/agents_signup" element={<Agents />} /> */}
          {/* <Route path="/create_client_account" element={<Clientaccount />} /> */}
          {/* <Route path="/users_experience" element={<Usersexperience />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
