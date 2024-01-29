import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import Button from '../BouncingButton';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-event" className="text-center" css={styWrapper}>
        <div className="container">
          <div className="fh5co-heading animate-box">
            <h2 className="main-font">Location</h2>
            <p style={{ color: '#f4efeffc' }}>
              <strong>Hindustan Marriage Lawn</strong>
              <br />
              Kaench, Shahjahanpur, Uttar Pradesh, 242001
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.221749917219!2d79.89972179329338!3d27.86445775690973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbcc424030869%3A0xaabba90a448afb9c!2sHINDUSTAN%20MARRIAGE%20LAWN!5e0!3m2!1sen!2sin!4v1705689055806!5m2!1sen!2sin"
            width="95%"
            height="300"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps - Gopal & Kaveri Wedding"
          ></iframe>
          <div className='button'>
            <Button link={GOOGLE_MAPS_LINK} title="Get the direction" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
