import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import Button from '../BouncingButton';
import { styWrapper } from './styles';
import { GOOGLE_CALENDAR_LINK } from '@/constants'

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" className="text-center" css={styWrapper}>
        <div className='container'>
        <div className="fh5co-heading">
          <h2 className="main-font">Save the Date</h2>
          <p style={{ color: '#f4efeffc'}}>
            Mark your calendar for a day of love, laughter & wedding day magic!
            <br />We've got the '<b>I do</b>', you bring the '<b>We're ready to party!</b>'<br /><br />
          </p>
        </div>
        <div className="event">
          <WeddingInfoBox
            title="Wedding"
            time="7pm Onwards"
            date="Saturday, 24 Feb 2024"
            location="Hindustan Marriage Lawn, Shahjahanpur"
            description=""
          />
        </div>
        <div className="button" >
          <div>
            <Button
              link={GOOGLE_CALENDAR_LINK}
              title="Add to calender" />
          </div>
        </div>
      </div>
        </div>
        
    </Fragment>
  );
}

WeddingSection.propTypes = {
};

export default React.memo(WeddingSection);
