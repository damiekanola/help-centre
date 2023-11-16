import {
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { GrHome, GrHomeOption, GrHomeRounded } from "react-icons/gr";
import { MdHome, MdSubdirectoryArrowLeft } from "react-icons/md";
import { CiHome, CiSearch } from "react-icons/ci";
import { searchData } from "./data";
import "./Search.css";
import home_svg from '../../assets/icons/home.svg'

export const Searchbar = () => {
  const location = useLocation()
  const scrollBehavior = "inside";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");

  const isWHite = location.pathname === '/users_experience'

  const handleCurrentRoute = () => {
    switch (location.pathname) {
      case '/terms':
        return 'Terms of Service';
      case '/privacy':
        return 'Privacy Policy';
      case '/first_time_setup':
        return 'First time setup';
      case '/approved_what_next':
        return 'Approved, what next?';
      case '/ticketing':
        return 'Ticketing';
      case '/listings/create_listing':
        return 'Create listing';
      case '/listings/overview':
        return 'Listings';
      case '/listings/create_unit':
        return 'Create unit';
      case '/listings/archive_unit':
        return 'Archive unit'
      case '/listings/fractionalize_asset':
        return 'Fractionalize unit'
      case '/listings/change_listing':
        return 'Change listing'
      case '/listings/delist':
        return 'Delist listing'
      case '/lead/create_account':
        return 'Create lead account'
      case '/lead/send_an_offer':
        return 'Send an offer'
      case '/lead/home_owners_pack':
        return 'Home owners\'s packet'
      case '/invite_team_members':
        return 'Invite team members'
      case '/users_experience':
        return 'End-to-end experience'
      case '/veerge_plus':
        return 'Veerge plus'
      case '/application_guide':
        return 'What is the difference between Basic & Custom app ?'
      case '/agent/portal':
        return 'Veerge Premier Agent Portal'
      case '/agent/process':
        return 'Veerge Premier Agent Portal'
      case "/blog":
      case "/blog/transforming_business":
      case "/blog/inventory":
      case "/blog/revenue_recognition":
      case "/blog/lead_management":
      case "/blog/a_letter":
      case "/blog/understanding_fraction":
      case "/blog/smart_payment":
      case "/blog/fractional_ownership":
      case "/blog/new_era":
      case "/blog/veerge_data":
      case "/blog/why_veerge":
        return 'Blog'

      default:
        return 'Help Centre';
    }
  }

  const checkBlogPage = () => {
    switch (location.pathname) {
      case "/blog":
      case "/blog/transforming_business":
      case "/blog/inventory":
      case "/blog/revenue_recognition":
      case "/blog/lead_management":
      case "/blog/a_letter":
      case "/blog/understanding_fraction":
      case "/blog/smart_payment":
      case "/blog/fractional_ownership":
      case "/blog/new_era":
      case "/blog/veerge_data":
      case "/blog/why_veerge":
        return true
      default:
        return false;
    }
  }

  return (
    <>
      <Show breakpoint="(min-width: 769px)">
        <Flex
          w="100%"
          px="78px"
          height="67px"
          direction="row"
          justify="space-between"
          align="center"
          position="fixed"
          top="82px"
          zIndex="1"
          bg={isWHite ? "#0D0D0D" : "#ffffff"}
          borderBottom={isWHite && '1px solid rgba(255, 255, 255, 0.20)'}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
        >
          <Flex maxW="319px" direction="row" columnGap="18px" align="center">
            {location.pathname === '/' || location.pathname === '/blog' ? null : (
              <>
                <Link to={checkBlogPage() ? '/blog' : "/"}>
                  {isWHite ? <Image src={home_svg} /> : <GrHomeRounded />}
                </Link>{" "}
                <SlArrowRight color={isWHite ? "#fff" : "#0D0D0D"} />
              </>
            )}
            <Text
              onClick={window.scrollTo(0, 0)}
              style={{
                cursor: 'pointer',
                textDecoration: "none",
                href: "first_time_setup",
                color: isWHite ? "#fff" : "#5D5FEF",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
              }}
            >
              {handleCurrentRoute()}
            </Text>
          </Flex>
          <form>
            <Flex
              direction="row"
              align="center"
              maxW="300px"
              h="43px"
              bg="transparent"
              border=" 1px solid #C3C4FC"
              borderRadius=" 12px"
              px="10px"
              onClick={onOpen} cursor={'pointer'}
            >
              {/* <Input
                placeholder="Search for a topic"
                type="text"
                border="none"
                FontWeight="400"
                fontSize="12px"
                lineHeight="15px"
                color="#606060"
                onClick={onOpen}
                _focusVisible={{
                  border: "none",
                }}
              /> */}
              <CiSearch color={isWHite ? "#fff" : "#0D0D0D"} style={{ width: "25px", height: "25px" }} />
            </Flex>
          </form>
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay bg="rgba(0,0,0,0.2)" />
            <ModalContent minW={'450px'}>
              <ModalBody>
                <Flex direction="row" align="center">
                  <CiSearch style={{ width: "25px", height: "25px" }} />
                  <Input
                    placeholder="Search the docs"
                    type="text"
                    value={query}
                    border="none"
                    FontWeight="400"
                    fontSize="12px"
                    lineHeight="15px"
                    color="#606060"
                    onClick={onOpen}
                    _focusVisible={{
                      border: "none",
                    }}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </Flex>

                {searchData
                  .filter((data) => {
                    if (query === "") {
                      return null;
                    } else if (
                      data?.title?.toLowerCase()?.includes(query?.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .map((data) => {
                    const { id, page, link, title, pageTitle } = data;
                    return (
                      <Flex
                        direction="column"
                        rowGap="4px"
                        justify="center"
                        align="center"
                        mt="20px"
                        width="400px"
                      >
                        <Link to={`${link}#${id}`} className="a__">
                          <Flex
                            direction="row"
                            justify="space-between"
                            className="link__"
                            px="15px"
                            align="center"
                            onClick={onClose}
                          >
                            <Text fontFamily={'euclid'} fontSize={'14px'} textAlign={'left'}>
                              {pageTitle}:
                              <Text fontFamily={'euclid-medium'} fontSize={'17px'} as='span'> {title}</Text>
                            </Text>

                            <MdSubdirectoryArrowLeft />
                          </Flex>
                        </Link>
                      </Flex>
                    );
                  })}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Show>
      <Show breakpoint="(max-width: 768px)">
        <form>
          <Flex
            direction="row"
            align="center"
            maxW="320px"
            h="43px"
            bg="#F5F5F5"
            border=" 1px solid #C3C4FC"
            borderRadius=" 12px"
            px="10px"
            mt="20px"
            onClick={onOpen} cursor={'pointer'}
          >
            {/* <Input
              placeholder="Search for a topic"
              type="text"
              border="none"
              FontWeight="400"
              fontSize="12px"
              lineHeight="15px"
              color="#606060"
              onClick={onOpen}
              _focusVisible={{
                border: "none",
              }}
            /> */}
            <CiSearch style={{ width: "25px", height: "25px" }} />
          </Flex>
        </form>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay bg="rgba(0,0,0,0.2)" />
          <ModalContent w={{ base: "370px", md: "500px" }}>
            <ModalBody>
              <Flex direction="row" align="center">
                <CiSearch style={{ width: "25px", height: "25px" }} />
                <Input
                  placeholder="Search the docs"
                  type="text"
                  value={query}
                  border="none"
                  FontWeight="400"
                  fontSize="12px"
                  lineHeight="15px"
                  color="#606060"
                  onClick={onOpen}
                  _focusVisible={{
                    border: "none",
                  }}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </Flex>

              {searchData
                .filter((data) => {
                  if (query === "") {
                    return null;
                  } else if (
                    data?.title?.toLowerCase()?.includes(query?.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((data) => {
                  const { id, page, link, title, pageTitle } = data;
                  return (
                    <Flex
                      direction="column"
                      rowGap="4px"
                      justify="center"
                      align="center"
                      mt="20px"
                      width="320px"
                    >
                      <Link to={`${link}#${id}`} className="a__">
                        <Flex
                          direction="row"
                          justify="space-between"
                          className="link__"
                          px="15px"
                          align="center"
                          onClick={onClose}
                        >
                          <Text fontFamily={'euclid'} fontSize={'14px'} textAlign={'left'}>
                            {pageTitle}:
                            <Text fontFamily={'euclid-medium'} fontSize={'17px'} as='span'> {title}</Text>
                          </Text>

                          <MdSubdirectoryArrowLeft />
                        </Flex>
                      </Link>
                    </Flex>
                  );
                })}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Show>
    </>
  );
};
