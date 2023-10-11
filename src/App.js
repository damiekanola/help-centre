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
import { Blog } from "./pages/Blog/Blog";
import Transforming_business from "./pages/Blog/transforming_business";
import Inventory from "./pages/Blog/inventory";
import Revenue_recognition from "./pages/Blog/revenue_recognition";
import Lead_management from "./pages/Blog/lead_management";
import A_letter from "./pages/Blog/a_letter";
import Understanding_fraction from "./pages/Blog/understanding_fraction";
import Smart_payment from "./pages/Blog/smart_payment";
import Fractional_ownership from "./pages/Blog/fractional_ownership";
import New_era from "./pages/Blog/new_era";
import Veerge_data from "./pages/Blog/veerge_data";
import Why_veerge from "./pages/Blog/why_veerge";
import { Usersexperience } from "./pages/Usersexperience/Usersexperience";

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
          <Route path="/approved_whats_next" element={<Approved />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/listings/create_listing" element={<Createlisting />} />
          <Route path="/listings/change_listing" element={<Changelisting />} />
          <Route path="/listings/overview" element={<Overview />} />
          <Route path="/listings/delist" element={<Delist />} />
          <Route path="/listings/archive_unit" element={<Archiveunit />} />
          <Route path="/listings/create_unit" element={<Createunit />} />
          <Route path="/listings/fractionalize_asset" element={<Fractionasset />} />
          <Route path="/lead/create_account" element={<CreateLeadAccount />} />
          <Route path="/lead/send_an_offer" element={<SendAnOffer />} />
          <Route path="/lead/home_owners_packet" element={<HomeOwnersPacket />} />
          <Route path="/invite_team_members" element={<InviteTeamMembers />} />
          <Route path="/users_experience" element={<Usersexperience />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/transforming_business" element={<Transforming_business />} />
          <Route path="/blog/inventory" element={<Inventory />} />
          <Route path="/blog/revenue_recognition" element={<Revenue_recognition />} />
          <Route path="/blog/lead_management" element={<Lead_management />} />
          <Route path="/blog/a_letter" element={<A_letter />} />
          <Route path="/blog/understanding_fraction" element={<Understanding_fraction />} />
          <Route path="/blog/smart_payment" element={<Smart_payment />} />
          <Route path="/blog/fractional_ownership" element={<Fractional_ownership />} />
          <Route path="/blog/new_era" element={<New_era />} />
          <Route path="/blog/veerge_data" element={<Veerge_data />} />
          <Route path="/blog/why_veerge" element={<Why_veerge />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;