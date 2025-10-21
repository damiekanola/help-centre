import React, {useEffect, useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {Homepage} from './pages/Homepage/Homepage';
import Createlisting from './pages/listings/Createlisting/Createlisting';
import {Searchbar} from './components/Searchbar/Searchbar';
import {Header} from './components/Header/Header';
import ScrollToTop from './ScrollToTop';
import './App.css';
import './pages/Introtoveerge/Introtoveerge.css';
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
import { CreateAllocations } from './pages/listings/Allocations/Allocations';
import { Setup } from './pages/listings/Setup/Setup';

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
      {/* <ScrollToTop /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<OverviewofMyxellia />} />
          <Route path="/approved_what_next" element={<AccountApproved />} />
          <Route path="/where_to_start" element={<WhereToStart />} />
          <Route path="/getting_started" element={<GettingStarted />} />
          <Route path="/partner_program" element={<PartnerProgram />} />
          <Route path="/setting_up" element={<SettingUp />} />
          <Route path="/store_setup" element={<Setup />} />
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
          <Route path="/listings/create_allocations" element={<CreateAllocations />} />
        </Routes>
      </div>
      <div className="light_pages">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
