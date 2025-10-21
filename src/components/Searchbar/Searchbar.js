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

export const Searchbar = () => {
  const location = useLocation();
  const scrollBehavior = 'inside';
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [query, setQuery] = useState('');
  const [searchFilteredData, setSearchFilteredData] = useState([...helpSearchData]);

  const currLocation = location.pathname;
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
        return 'Archive unit';
      case '/listings/fractionalize_asset':
        return 'Fractionalize unit';
      case '/listings/change_listing':
        return 'Change listing';
      case '/listings/delist':
        return 'Delist listing';
      case '/lead/create_account':
        return 'Create lead account';
      case '/lead/send_an_offer':
        return 'Send an offer';
      case '/lead/home_owners_pack':
        return "Home owners's packet";
      case '/invite_team_members':
        return 'Invite team members';
      case '/users_experience':
        return 'End-to-end experience';
      case '/veerge_plus':
        return 'Veerge plus';
      case '/application_guide':
        return 'What is the difference between Basic & Custom app ?';
      case '/realtor/portal':
        return 'Veerge Premier Realtor Portal';
      case '/realtor/process':
        return 'Veerge Premier Realtor Portal';
      case '/blog':
        return 'Blog';
      case '/blog/transforming_business':
        return 'Ticketing system';
      case '/blog/inventory':
        return 'Inventory Management system';
      case '/blog/revenue_recognition':
        return 'Revenue recognition solution';
      case '/blog/lead_management':
        return 'Leads management system';
      case '/blog/a_letter':
        return 'A Letter from our CEO';
      case '/blog/understanding_fraction':
        return 'Understanding Fractional Real Estate';
      case '/blog/smart_payment':
        return 'Smart Payment Plan';
      case '/blog/fractional_ownership':
        return 'Fractional Ownership';
      case '/blog/new_era':
        return 'The New Era of Real Estate';
      case '/blog/veerge_data':
        return 'Veerge & Data Analytics';
      case '/blog/why_veerge':
        return ' Why Veerge instead of Building';

      default:
        return (
          currLocation.split('/').join(' ').split('_').join(' ').split('-').join(' ') ||
          'Help Centre'
        );
    }
  };

  const checkBlogPage = () => {
    switch (currLocation) {
      case '/blog':
      case '/blog/transforming_business':
      case '/blog/inventory':
      case '/blog/revenue_recognition':
      case '/blog/lead_management':
      case '/blog/a_letter':
      case '/blog/understanding_fraction':
      case '/blog/smart_payment':
      case '/blog/fractional_ownership':
      case '/blog/new_era':
      case '/blog/veerge_data':
      case '/blog/why_veerge':
        return true;
      default:
        return false;
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
          <Flex maxW="319px" direction="row" columnGap="18px" align="center">
            {currLocation === '/' || currLocation === '/blog' ? null : (
              <>
                <Link to={checkBlogPage() ? '/blog' : '/'}>
                  {<Image src={isWhite ? home_light : home_dark} />}
                </Link>{' '}
                <SlArrowRight color={isWhite ? '#fff' : '#0D0D0D'} />
              </>
            )}
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
          </Flex>
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
          <Flex maxW="319px" direction="row" columnGap="8px" align="center">
            {currLocation === '/' || currLocation === '/blog' ? null : (
              <>
                <Link to={checkBlogPage() ? '/blog' : '/'}>
                  {<Image src={isWhite ? home_light : home_dark} />}
                </Link>{' '}
                <SlArrowRight color={isWhite ? '#fff' : '#0D0D0D'} />
              </>
            )}
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
          </Flex>
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
                placeholder="Search for a part"
                type="text"
                value={query}
                border="none"
                FontWeight="400"
                fontSize="12px"
                lineHeight="15px"
                px='0px'
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
