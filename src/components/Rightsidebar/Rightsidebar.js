import {Flex, Image, Text} from '@chakra-ui/react';
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import file from '../../assets/icons/file.png';
import './Rightsidebar.css';
export const Rightsidebar = () => {
  const [style, setStyle] = useState('navigation');
  const handleClick = () => {
    console.log('you just clicked me');
    setStyle('bluenav');
  };

  return (
    // right  Side navigation
    <div class="rightsidenav">
      <Text className="article_text" color={'white !important'} >
        In this article
      </Text>
      <ul className={style}>
        <li onClick={handleClick}>
          <a href="#veerge">What is Veerge</a>
        </li>
        <li>
          <a href="#engagement">System of engagement</a>
        </li>
        <li>
          <a href="#intelligence">System of Intelligence</a>
        </li>
        <li>
          <a href="#trust">System of Trust</a>
        </li>
        <li>
          <a href="#conclusion">Conclusion</a>
        </li>
        <li>
          <a href="#faq"> FAQs</a>
        </li>
      </ul>
      <Text
        className="article_text"
        mt="60px"
        color={'white !important'}
        
      >
        In this article
      </Text>
      <Flex columnGap="20px">
        <Image src={file} />
        <Link to="">First time setup</Link>
      </Flex>

      <Flex columnGap="20px">
        <Image src={file} /> <Link to="">Topic 5</Link>
      </Flex>
      <Flex columnGap="20px">
        <Image src={file} /> <Link to="">Subtopic 2</Link>
      </Flex>
    </div>
  );
};
