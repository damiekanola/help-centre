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
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {SlArrowRight} from 'react-icons/sl';
import {MdSubdirectoryArrowLeft} from 'react-icons/md';
import {CiSearch} from 'react-icons/ci';
import {helpSearchData, blogSearchData} from './data';
import './Search.css';
import home_dark from '../../assets/icons/home_dark.svg';
import home_light from '../../assets/icons/home_light.svg';
import chevleft from '../../assets/icons/chevyleft.svg';

export const Searchbar = () => {
  const location = useLocation();
  const scrollBehavior = 'inside';
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [query, setQuery] = useState('');
  const [searchFilteredData, setSearchFilteredData] = useState([...helpSearchData]);

  const currLocation = location.pathname;
  const hideSearchbar = location.pathname === '/';
  const isHomePage = currLocation === '/blog' || currLocation === '/' || currLocation === '';

  useEffect(() => {
    let dataTouse;
    if (currLocation === '/blog') {
      dataTouse = [...blogSearchData];
    } else if (currLocation === '/' || currLocation === '/') {
      dataTouse = [...helpSearchData];
    } else {
      dataTouse = [...helpSearchData, ...blogSearchData].filter(data => data.link === currLocation);
    }
    setSearchFilteredData(dataTouse);
  }, [currLocation]);

  // const isWhite = currLocation.startsWith('/blog') ? false : true;
  const isWhite = false;

  const handleCurrentRoute = () => {
    switch (currLocation) {
      case '':
      case '/':
        return 'Help Centre';
      case '/overview':
        return 'Overview';
      case '/approved_what_next':
        return 'Approved — What Next?';
      case '/where_to_start':
        return 'My Manager Told Me About This — Where Do I Start?';
      case '/getting_started':
        return 'Getting Started';
      case '/partner_program':
        return 'Myxellia’s Partners Program';
      case '/setting_up':
        return 'Setting Up Your Account';
      case '/store_setup':
        return 'How to set up your Store template';
      case '/how_protected':
        return 'How you’re protected';
      case '/listings':
        return 'Listings';
      case '/fractionalise':
        return 'Fractionalising an Asset';
      case '/listings/archive_unit':
        return 'Archiving a Unit';
      case '/clients/client_account':
        return 'Why Client Accounts Matter';
      case '/clients/update_documents':
        return 'How to update documents';
      case '/clients/manage_clients':
        return 'Managing Other Client Interactions & Property Transfers';
      case '/clients/client_payment':
        return 'Managing Client Payments: A Guide to Logging Transaction';
      case '/clients/manage_ownership':
        return 'How to Update or Change Ownership of Properties';
      case '/clients/manage_occupants':
        return 'Managing Occupants – Keep track of tenants in your Property';
      case '/clients/realtors':
        return 'Managing Realtors: How to Add Agents and Set Commissions';
      case '/clients/schedule':
        return 'Manage Property Inspections';
      case '/listings/create_listing':
        return 'How to create a Listing';
      case '/listings/change_listing':
        return 'Changing Listing Information';
      case '/listings/create_allocations':
        return 'How to create Allocations';
      case '/listings/clientmanagement':
        return 'Managing Clients: Your Cornerstone for Leads & Sales';
      default:
        // fallback: prettify the URL path
        return (
          currLocation
            .replace(/[\/_-]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
            .trim() || 'Help Centre'
        );
    }
  };

  useEffect(() => {
    document.title = handleCurrentRoute();
  }, [currLocation]);

  return (
    <>
      <Show breakpoint="(min-width: 769px)">
        <Flex
          w="100%"
          px={{base: '24px', md: '78px'}}
          height="67px"
          direction="row"
          justify="space-between"
          align="center"
          position="fixed"
          top="82px"
          zIndex="2"
          bg={isWhite ? '#0D0D0D' : '#ffffff'}
          borderBottom={isWhite && '1px solid rgba(255, 255, 255, 0.20)'}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
        >
          <Flex
            maxW="fit-content"
            direction="row"
            columnGap="8px"
            align="center"
            alignItems={'center'}
          >
            <>
              <Link to="/">{<Image src={isWhite ? home_light : home_dark} />}</Link>{' '}
              <Image src={chevleft} w={'24px'} h={'24px'} alt="right" />
            </>

            <Text
              onClick={window.scrollTo(0, 0)}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                href: 'first_time_setup',
                color: isWhite ? '#fff' : '#5D5FEF',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '18px',
                textTransform: 'capitalize',
              }}
            >
              Blog
            </Text>
            {currLocation !== '/' && (
              <>
                <Image src={chevleft} w="24px" h="24px" alt="back" />
                <Text
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: isWhite ? '#fff' : '#5D5FEF',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                    textTransform: 'capitalize',
                  }}
                >
                  {handleCurrentRoute()}
                </Text>
              </>
            )}
          </Flex>
          {!hideSearchbar && (
            <form>
              <Flex
                direction="row"
                align="center"
                maxW="300px"
                h="43px"
                borderRadius=" 12px"
                px="8px"
                // onClick={onOpen}
                cursor={'pointer'}
                bg={'transparent'}
                border={!isWhite ? '1px solid #E4E4E4' : '1px solid rgba(255, 255, 255, 0.20)'}
              >
                <Input
                  placeholder="Search for a part"
                  type="text"
                  value={query}
                  border="none"
                  FontWeight="400"
                  fontSize="12px"
                  lineHeight="15px"
                  color="#606060"
                  // onClick={onOpen}
                  _focusVisible={{
                    border: 'none',
                  }}
                  onChange={event => setQuery(event.target.value)}
                />
                <CiSearch
                  color={isWhite ? 'white' : 'black'}
                  style={{width: '24px', height: '24px'}}
                />
              </Flex>
            </form>
          )}
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay bg="rgba(0,0,0,0.2)" />
            <ModalContent minW={'450px'}>
              <ModalBody>
                {searchFilteredData
                  .filter(data => {
                    if (query === '') {
                      return null;
                    } else if (data?.title?.toLowerCase()?.includes(query?.toLowerCase())) {
                      return data;
                    }
                  })
                  .map(data => {
                    const {id, page, link, title, pageTitle} = data;
                    return (
                      <Flex
                        direction="column"
                        rowGap="4px"
                        justify="center"
                        align="center"
                        mt="20px"
                        width="400px"
                      >
                        <Link to={`${link}`} className="a__">
                          <Flex
                            direction="row"
                            justify="space-between"
                            className="link__"
                            px="15px"
                            align="center"
                            onClick={onClose}
                          >
                            <Text fontSize={'14px'} textAlign={'left'}>
                              {isHomePage && `${pageTitle}:`}
                              <Text fontSize={'17px'} as="span">
                                {' '}
                                {title}
                              </Text>
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
        <Flex
          px={{base: '24px', md: '78px'}}
          height="67px"
          direction="row"
          justify="space-between"
          align="center"
          position="fixed"
          gap="30px"
          top="82px"
          w={'100%'}
          zIndex="2"
          bg={isWhite ? '#0D0D0D' : '#ffffff'}
          borderBottom={isWhite && '1px solid rgba(255, 255, 255, 0.20)'}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
        >
          <Flex maxW="319px" direction="row" columnGap="8px" align="center" alignItems={'center'}>
            <Link to="/">{<Image src={isWhite ? home_light : home_dark} />}</Link>{' '}
            {currLocation === '/' && (
              <>
                <Image src={chevleft} w={'24px'} h={'24px'} alt="right" />
                <Text
                  onClick={window.scrollTo(0, 0)}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    href: 'first_time_setup',
                    color: isWhite ? '#fff' : '#5D5FEF',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                    textTransform: 'capitalize',
                  }}
                >
                  Blog
                </Text>
              </>
            )}
            {currLocation !== '/' && (
              <>
                <Image src={chevleft} w="24px" h="24px" alt="back" />
                <Text
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: isWhite ? '#fff' : '#5D5FEF',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '10px',
                    lineHeight: '1',
                    textTransform: 'capitalize',
                  }}
                >
                  {handleCurrentRoute()}
                </Text>
              </>
            )}
          </Flex>
          {!hideSearchbar && (
            <form>
              <Flex
                direction="row"
                align="center"
                w={'fit-content'}
                h="43px"
                borderRadius=" 12px"
                px="12px"
                cursor={'pointer'}
                bg={'transparent'}
                border={!isWhite ? '1px solid #E4E4E4' : '1px solid rgba(255, 255, 255, 0.20)'}
                // gap='20px'
              >
                <Input
                  placeholder="Search"
                  type="text"
                  value={query}
                  border="none"
                  FontWeight="400"
                  fontSize="14px"
                  lineHeight="15px"
                  px="0px"
                  color="#606060"
                  _focusVisible={{
                    border: 'none',
                  }}
                  onChange={event => setQuery(event.target.value)}
                />
                <CiSearch
                  color={isWhite ? 'white' : 'black'}
                  style={{width: '24px', height: '24px'}}
                />
              </Flex>
            </form>
          )}
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay bg="rgba(0,0,0,0.2)" />
            <ModalContent minW={'450px'}>
              <ModalBody>
                {searchFilteredData
                  .filter(data => {
                    if (query === '') {
                      return null;
                    } else if (data?.title?.toLowerCase()?.includes(query?.toLowerCase())) {
                      return data;
                    }
                  })
                  .map(data => {
                    const {id, page, link, title, pageTitle} = data;
                    return (
                      <Flex
                        direction="column"
                        rowGap="4px"
                        justify="center"
                        align="center"
                        mt="20px"
                        width="400px"
                      >
                        <Link to={`${link}`} className="a__">
                          <Flex
                            direction="row"
                            justify="space-between"
                            className="link__"
                            px="15px"
                            align="center"
                            onClick={onClose}
                          >
                            <Text fontSize={'14px'} textAlign={'left'}>
                              {isHomePage && `${pageTitle}:`}
                              <Text fontSize={'17px'} as="span">
                                {' '}
                                {title}
                              </Text>
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
    </>
  );
};
