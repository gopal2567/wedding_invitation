import React from 'react';

import { styWrapper } from './styles';
import imageUs from '@assets/images/gk.png'
import Button from '../BouncingButton';

function ThankYouSection() {
  return (
    <div id="fh5co-started" css={styWrapper}>
      <div className="container text-center">
        <div className="fh5co-heading">
          <h2 className="main-font">Awaiting!</h2>
          <p style={{ color: '#f4efeffc' }}>
            Your gracious presence
          </p>
        </div>
        <div>
          <img className="photo-us" src={imageUs} alt="us" />
        </div>
        <span>
          With gratitude to God, and hearts full of thanks, we invite you to join us in celebration, surrounded by the love of our families.
        </span> 
        <div className="button" >
          <div>
            <Button
              link={"https://drive.google.com/file/d/1NXiXTWGXUdpDyH6z5A9aEYaZ2Fyssjej/view"}
              title="Video Invitation" />
          </div>
        </div>
      </div>
    </div>
  );
}

ThankYouSection.propTypes = {
};

export default React.memo(ThankYouSection);
