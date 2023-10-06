import { Image } from '@chakra-ui/react';
import bulb from '../assets/svgs/blog-bulb.svg';
import culture from '../assets/svgs/blog-culture.svg';
import peak from '../assets/svgs/blog-peak.svg';
import star from '../assets/svgs/blog-star.svg';

export const handleIconType = (type) => {

  switch (type) {
    case 'Industry Insight':
      return (
        <Image w='12px' h='12px' src={bulb} />
      );
    case 'Culture':
      return (
        <Image w='12px' h='12px' src={culture} />
      );
    case 'Features':
      return (
        <Image w='12px' h='12px' src={star} />
      );
    case 'Peaks':
      return (
        <Image w='12px' h='12px' src={peak} />
      );

    default:
      break;
  }
};
