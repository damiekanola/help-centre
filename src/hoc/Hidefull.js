import React from 'react';
import Blocker from '../components/blocker';

function Hide(Component) {
  const HideComp = () => {
    const toView = false;

    return (
      <div>
        {toView ? (
          <Component />
        ) : (
          <Blocker />
        )}
      </div>
    )
  }
  return HideComp
};


export default Hide
