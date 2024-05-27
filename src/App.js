import React, {useEffect, useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {Homepage} from './pages/Homepage/Homepage';
import {Introtoveerge} from './pages/Introtoveerge/Introtoveerge';
import {Fisrttimesetup} from './pages/Firsttimesetup/Firsttimesetup';
import Changelisting from './pages/listings/Changelisting/Changelisting';
import Delist from './pages/listings/Delist/Delist';
import Archiveunit from './pages/listings/Archiveunit/Archiveunit';
import Createunit from './pages/listings/Createunit/Createunit';
import Overview from './pages/listings/Overview/Overview';
import Createlisting from './pages/listings/Createlisting/Createlisting';
import Fractionasset from './pages/listings/Fractionasset/Fractionasset';
import {Searchbar} from './components/Searchbar/Searchbar';
import {Header} from './components/Header/Header';
import ScrollToTop from './ScrollToTop';
import './App.css';
import {Show} from '@chakra-ui/react';
import Approved from './pages/Approved/Approved';
import {Ticketing} from './pages/Ticketing/Ticketing';
import {CreateLeadAccount} from './pages/lead&account/Createaccount/Createaccount';
import SendAnOffer from './pages/lead&account/sendAnOffer/sendAnOffer';
import HomeOwnersPacket from './pages/lead&account/HomeOwnersPacket/HomeOwnersPacket';
import {InviteTeamMembers} from './pages/InviteTeamMembers/InviteTeamMembers';
import {Terms} from './pages/Terms/Terms';
import {Privacy} from './pages/Privacy/Privacy';
import {Blog} from './pages/Blog/Blog';
import Transforming_business from './pages/Blog/transforming_business';
import Inventory from './pages/Blog/inventory';
import Revenue_recognition from './pages/Blog/revenue_recognition';
import Lead_management from './pages/Blog/lead_management';
import A_letter from './pages/Blog/a_letter';
import Understanding_fraction from './pages/Blog/understanding_fraction';
import Smart_payment from './pages/Blog/smart_payment';
import Fractional_ownership from './pages/Blog/fractional_ownership';
import New_era from './pages/Blog/new_era';
import Veerge_data from './pages/Blog/veerge_data';
import Why_veerge from './pages/Blog/why_veerge';
import {Usersexperience} from './pages/Usersexperience/Usersexperience';
import {VeergePlus} from './pages/VeergePlus/VeergePlus';
import {AgentPortal} from './pages/Agents/Portal/portal';
import {AgentProcess} from './pages/Agents/AgentProcess/AgentProcess';
import {ApplicationGuide} from './pages/ApplicationGuide/ApplicationGuide';
import {VeergeThemes} from './pages/VeergeThemes/VeergeThemes';
import {Protected} from './pages/Protected/Protected';

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
      <Show pb="100px" breakpoint="(min-width: 769px)">
        <Searchbar />
      </Show>
      <ScrollToTop />
      <div className="dark_pages">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/intro_to_veerge" element={<Introtoveerge />} />
          <Route path="/first_time_setup" element={<Fisrttimesetup />} />
          <Route path="/approved_what_next" element={<Approved />} />
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
          <Route path="/how_protected" element={<Protected />} />
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
      <div className="light_pages">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
