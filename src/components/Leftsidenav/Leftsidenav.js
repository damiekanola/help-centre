import { Box, Show, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Leftsidenav.css";
export const Leftsidenav = () => {
  const intro = useRef();
  const first = useRef();
  const verified = useRef();
  const store = useRef();
  const client = useRef();
  const listing = useRef();
  const unit = useRef();
  const archive = useRef();
  const agents = useRef();
  const fraction = useRef();
  const inspect = useRef();
  const contact = useRef();
  const delist = useRef();
  const user = useRef();
  const estate = useRef();
  const data = useRef();
  const location = useLocation();
  // const pathName = location.pathname;
  // if (pathName === "/") {
  //   intro.classList.add("active");
  // } else {
  //   intro.classList.remove("active");
  // }
  // if (pathName === "/fisrt_time_setup") {
  //   first.classList.add("active");
  // } else {
  //   first.classList.remove("active");
  // }
  // if (pathName === "/Verified_whats_next") {
  //   verified.classList.add("active");
  // } else {
  //   verified.classList.remove("active");
  // }
  // if (pathName === "/create_online_store") {
  //   store.classList.add("active");
  // } else {
  //   store.classList.remove("active");
  // }
  // if (pathName === "/create_client_account") {
  //   client.classList.add("active");
  // } else {
  //   client.classList.remove("active");
  // }
  // if (pathName === "/create_listing") {
  //   listing.classList.add("active");
  // } else {
  //   listing.classList.remove("active");
  // }
  // if (pathName === "/create_unit") {
  //   unit.classList.add("active");
  // } else {
  //   unit.classList.remove("active");
  // }
  // if (pathName === "/archive_unit") {
  //   archive.classList.add("active");
  // } else {
  //   archive.classList.remove("active");
  // }
  // if (pathName === "/agents_signup") {
  //   agents.classList.add("active");
  // } else {
  //   agents.classList.remove("active");
  // }
  // if (pathName === "/fractionalize_asset") {
  //   fraction.classList.add("active");
  // } else {
  //   fraction.classList.remove("active");
  // }
  // if (pathName === "/inspections") {
  //   inspect.classList.add("active");
  // } else {
  //   inspect.classList.remove("active");
  // }
  // if (pathName === "/change_contact") {
  //   contact.classList.add("active");
  // } else {
  //   contact.classList.remove("active");
  // }
  // if (pathName === "/delist") {
  //   delist.classList.add("active");
  // } else {
  //   delist.classList.remove("active");
  // }
  // if (pathName === "/users_experience") {
  //   user.classList.add("active");
  // } else {
  //   user.classList.remove("active");
  // }
  // if (pathName === "/fractional_real_estate") {
  //   estate.classList.add("active");
  // } else {
  //   estate.classList.remove("active");
  // }
  // if (pathName === "/veerge_and-data") {
  //   data.classList.add("active");
  // } else {
  //   data.classList.remove("active");
  // }
  return (
    //   Side navigation
    <Box overflowY='visible'>
      <Show breakpoint="(max-width: 768px)">
        <div class="leftsidenav">
          <ul>
            <li ref={intro}>
              <Link to="/">Intro to Veerge</Link>
            </li>
            <li ref={first}>
              <Link to="/fisrt_time_setup">First Time Setup</Link>
            </li>
            <li className="list" ref={verified}>
              <Link to="/Verified_whats_next">Verified, What Next?</Link>
            </li>
            <li className="list" ref={store}>
              <Link to="/create_online_store">
                How to create an online store
              </Link>
            </li>
            <li className="list" ref={client}>
              <Link to="/create_client_account">
                How to create a client account
              </Link>
            </li>
            <li className="list" ref={listing}>
              <Link to="/create_listing"> How to create a listing</Link>
            </li>
            <li className="list" ref={unit}>
              <Link to="/create_unit">How to create unit allocations</Link>
            </li>
            <li className="list" ref={archive}>
              <Link to="/archive_unit ">How to archive a unit</Link>
            </li>
            <li className="list" ref={agents}>
              <Link to="/agents_signup"> How do agents sign up</Link>
            </li>
            <li className="list" ref={fraction}>
              <Link to="/fractionalize_asset">
                {" "}
                How to fractionalise a unit
              </Link>
            </li>
            <li className="list" ref={inspect}>
              <Link to="/inspections">How inspections work on veerge</Link>
            </li>
            <li className="list" ref={contact}>
              <Link to="/change_contact">How to change contact person</Link>
            </li>
            <li className="list" ref={delist}>
              <Link to="/delist"> How to delist a listing</Link>
            </li>
            <li className="list" ref={user}>
              <Link to="/users_experience">User’s end-to-end experience</Link>
            </li>
            <li className="list" ref={estate}>
              <Link to="/fractional_real_estate">
                Understanding Fractional Real estate
              </Link>
            </li>
            <li className="list" ref={data}>
              <Link to="/veerge_and_data">Veerge & Data analytics</Link>
            </li>
          </ul>
        </div>
      </Show>
      <Show breakpoint="(min-width: 769px)">
        <div class="leftsidenav">
          <Text className="help_text">Help Center</Text>
          <ul>
            <li ref={intro}>
              <Link to="/">Intro to Veerge</Link>
            </li>
            <li ref={first}>
              <Link to="/fisrt_time_setup">First Time Setup</Link>
            </li>
            <li className="list" ref={verified}>
              <Link to="/Verified_whats_next">Verified, What Next?</Link>
            </li>
            <li className="list" ref={store}>
              <Link to="/create_online_store">
                How to create an online store
              </Link>
            </li>
            <li className="list" ref={client}>
              <Link to="/create_client_account">
                How to create a client account
              </Link>
            </li>
            <li className="list" ref={listing}>
              <Link to="/create_listing"> How to create a listing</Link>
            </li>
            <li className="list" ref={unit}>
              <Link to="/create_unit">How to create unit allocations</Link>
            </li>
            <li className="list" ref={archive}>
              <Link to="/archive_unit ">How to archive a unit</Link>
            </li>
            <li className="list" ref={agents}>
              <Link to="/agents_signup"> How do agents sign up</Link>
            </li>
            <li className="list" ref={fraction}>
              <Link to="/fractionalize_asset">
                {" "}
                How to fractionalise a unit
              </Link>
            </li>
            <li className="list" ref={inspect}>
              <Link to="/inspections">How inspections work on veerge</Link>
            </li>
            <li className="list" ref={contact}>
              <Link to="/change_contact">How to change contact person</Link>
            </li>
            <li className="list" ref={delist}>
              <Link to="/delist"> How to delist a listing</Link>
            </li>
            <li className="list" ref={user}>
              <Link to="/users_experience">User’s end-to-end experience</Link>
            </li>
            <li className="list" ref={estate}>
              <Link to="/fractional_real_estate">
                Understanding Fractional Real estate
              </Link>
            </li>
            <li className="list" ref={data}>
              <Link to="/veerge_and_data">Veerge & Data analytics</Link>
            </li>
          </ul>
        </div>
      </Show>
    </Box>
  );
};
