import React from "react";
import { Route, Routes } from "react-router-dom";
import { Leftsidenav } from "./components/Leftsidenav/Leftsidenav";
import { Introtoveerge } from "./pages/Introtoveerge/Introtoveerge";
import { Fisrttimesetup } from "./pages/Firsttimesetup/Firsttimesetup";
import { Verified } from "./pages/Verified/Verified";
import { Createlisting } from "./pages/Createlisting/Createlisting";
import { Fractionalestate } from "./pages/Fractionalestate/Fractionalestate";
import { Veergedata } from "./pages/Veergedata/Veergedata";
import { Onlinestore } from "./pages/Onlinestore/Onlinestore";
import { Clientaccount } from "./pages/Clientaccount/Clientaccount";
import { Usersexperience } from "./pages/Usersexperience/Usersexperience";
import { Inspections } from "./pages/Inspections/Inspections";
import { Delist } from "./pages/Delist/Delist";
import { Changecontact } from "./pages/Changecontact/Changecontact";
import { Archiveunit } from "./pages/Archiveunit/Archiveunit";
import { Createunit } from "./pages/Createunit/Createunit";
import { Agents } from "./pages/Agents/Agents";
import { Fractionasset } from "./pages/Fractionasset/Fractionasset";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Header } from "./components/Header/Header";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import { Show } from "@chakra-ui/react";
function App() {
  return (
    <div className="help_container">
      <Header />
      <Show breakpoint="(min-width: 769px)">
        <Searchbar />
      </Show>
      <div className="wrapper">
        <Leftsidenav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Introtoveerge />} />
          <Route path="/fisrt_time_setup" element={<Fisrttimesetup />} />
          <Route path="/Verified_whats_next" element={<Verified />} />
          <Route path="/create_listing" element={<Createlisting />} />
          <Route path="/delist" element={<Delist />} />
          <Route path="/inspections" element={<Inspections />} />
          <Route path="/change_contact" element={<Changecontact />} />
          <Route
            path="/fractional_real_estate"
            element={<Fractionalestate />}
          />
          <Route path="/veerge_and_data" element={<Veergedata />} />
          <Route path="/create_online_store" element={<Onlinestore />} />
          <Route path="/archive_unit" element={<Archiveunit />} />
          <Route path="/create_unit" element={<Createunit />} />
          <Route path="/agents_signup" element={<Agents />} />
          <Route path="/fractionalize_asset" element={<Fractionasset />} />
          <Route path="/create_client_account" element={<Clientaccount />} />
          <Route path="/users_experience" element={<Usersexperience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
