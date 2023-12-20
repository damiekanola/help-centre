import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';

function HideUnsubscribed(Component) {
  const HideComp = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const toView = true
    // searchParams.get('isrestricted') === 'true';
    const navigate = useNavigate()

    useEffect(() => {
      if (!toView) {
        navigate('/listings/create_listing')
      }
    }, [toView])

    return (
      <div>
        {toView ? (
          <Component />
        ) : (
          <Center w='full' h='full'>
            <Spinner />
          </Center>
        )}
      </div>
    )
  }
  return HideComp
};


export default HideUnsubscribed
