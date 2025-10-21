import React, {useEffect, useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {Homepage} from './pages/Homepage/Homepage';

import Delist from './pages/listings/Delist/Delist';
import Createunit from './pages/listings/Createunit/Createunit';
import Overview from './pages/listings/Overview/Overview';
import Createlisting from './pages/listings/Createlisting/Createlisting';
import Fractionasset from './pages/listings/Fractionasset/Fractionasset';
import {Searchbar} from './components/Searchbar/Searchbar';
import {Header} from './components/Header/Header';
import ScrollToTop from './ScrollToTop';
import './App.css';

import SendAnOffer from './pages/lead&account/sendAnOffer/sendAnOffer';
import HomeOwnersPacket from './pages/lead&account/HomeOwnersPacket/HomeOwnersPacket';
import {InviteTeamMembers} from './pages/InviteTeamMembers/InviteTeamMembers';
import {Terms} from './pages/Terms/Terms';
import {Privacy} from './pages/Privacy/Privacy';

import {Usersexperience} from './pages/Usersexperience/Usersexperience';
import {VeergePlus} from './pages/VeergePlus/VeergePlus';
import {AgentPortal} from './pages/Agents/Portal/portal';
import {AgentProcess} from './pages/Agents/AgentProcess/AgentProcess';
import {ApplicationGuide} from './pages/ApplicationGuide/ApplicationGuide';
import {VeergeThemes} from './pages/VeergeThemes/VeergeThemes';
import {Protected} from './pages/Protected/Protected';

import {OverviewofMyxellia} from './pages/OverviewofMyxellia/OverviewofMyxellia';
import {AccountApproved} from './pages/AccountApproved/AccountApproved';
import {WhereToStart} from './pages/WhereToStart/WhereToStart';
import {GettingStarted} from './pages/GettingStarted/GettingStarted';
import {PartnerProgram} from './pages/PartnerPrograms/PartnerPrograms';
import {SettingUp} from './pages/SettingUp/SettingUp';
import {Listings} from './pages/listings/listings';
import {Fractionalise} from './pages/Fractionalise/Fractionalise';
import {Archiveunit} from './pages/listings/Archiveunit/Archiveunit';
import {ClientAccount} from './pages/Clients/ClientAccount/ClientAccount';
import {UpdateDocuments} from './pages/Clients/UpdateDocuments/UpdateDocuments';
import {ManagingClients} from './pages/Clients/ManagingClients/ManagingClients';
import {ClientPayments} from './pages/Clients/ClientsPayments/Clientpayments';
import {ManageOwnership} from './pages/Clients/ManageOwnership/ManageOwnership';
import {ManageOccupants} from './pages/listings/MangeOccupants/ManageOccupants';
import {Schedule} from './pages/listings/Schedule/Schedule';
import {Changelisting} from './pages/listings/Changelisting/Changelisting';

function App() {
  const location = useLocation();
  const currLocation = location.pathname;

  useEffect(() => {
    // if (!currLocation.startsWith('/blog')) {
    //   console.log('Dark Page');
    document.documentElement.style.setProperty('--global-background', '#0d0d0d');
    // } else {
    //   console.log('Light Page');
    //   document.documentElement.style.setProperty('--global-background', 'white');
    // }
  }, [currLocation]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) element.scrollIntoView();
    }, 1000);
  }, []);

  return (
    <div className="routes_container">
      <Header />
      <Searchbar />
      <ScrollToTop />
      <div className="">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<OverviewofMyxellia />} />
          <Route path="/approved_what_next" element={<AccountApproved />} />
          <Route path="/where_to_start" element={<WhereToStart />} />
          <Route path="/getting_started" element={<GettingStarted />} />
          <Route path="/partner_program" element={<PartnerProgram />} />
          <Route path="/setting_up" element={<SettingUp />} />
          <Route path="/how_protected" element={<Protected />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/fractionalise" element={<Fractionalise />} />
          <Route path="/listings/archive_unit" element={<Archiveunit />} />
          <Route path="/clients/client_account" element={<ClientAccount />} />
          <Route path="/clients/update_documents" element={<UpdateDocuments />} />
          <Route path="/clients/manage_clients" element={<ManagingClients />} />
          <Route path="/clients/client_payment" element={<ClientPayments />} />
          <Route path="/clients/mananage_ownership" element={<ManageOwnership />} />
          <Route path="/clients/mananage_occupants" element={<ManageOccupants />} />
          <Route path="/clients/schedule" element={<Schedule />} />

          <Route path="/listings/create_listing" element={<Createlisting />} />
          <Route path="/listings/change_listing" element={<Changelisting />} />
          <Route path="/listings/overview" element={<Overview />} />
          <Route path="/listings/delist" element={<Delist />} />
          <Route path="/listings/create_unit" element={<Createunit />} />
          <Route path="/listings/fractionalize_asset" element={<Fractionasset />} />

          <Route path="/lead/send_an_offer" element={<SendAnOffer />} />
          <Route path="/lead/home_owners_packet" element={<HomeOwnersPacket />} />
          <Route path="/agent/portal" element={<AgentPortal />} />
          <Route path="/realtor/portal" element={<AgentPortal />} />
          <Route path="/agent/process" element={<AgentProcess />} />
          <Route path="/realtor/process" element={<AgentProcess />} />
          <Route path="/invite_team_members" element={<InviteTeamMembers />} />
          <Route path="/users_experience" element={<Usersexperience />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/veerge_plus" element={<VeergePlus />} />
          <Route path="/application_guide" element={<ApplicationGuide />} />
          <Route path="/veerge_themes" element={<VeergeThemes />} />
        </Routes>
      </div>
      <div className="light_pages">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
