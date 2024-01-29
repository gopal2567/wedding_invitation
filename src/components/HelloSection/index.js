import React from 'react';

import Bride from '@assets/images/kaveri1.jpeg';
import Groom from '@assets/images/gopal-1.jpeg';

import { styWrapper } from './styles';

function HelloSection() {
  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="mb-4 text-center fh5co-heading">
            <h2 className="main-font">Hello!</h2>
            <p className="invite-title">
              Introducing the bride and groom<br/><br/>
            </p>
          </div>
        </div>
        <div className="couple-wrap">
          <div className="couple-half">
            <div className="groom">
              <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-groom">
              <h3 className="main-font">Gopal</h3>
              <p className="parent-name">
                Son of Niraj &<br />Yashoda Nandan Gupta
              </p>
            </div>
          </div>
          <div className="heart-1">
            <p className="pulse text-center">
              <i className="icon-heart2"></i>
            </p>
          </div>
          <div className="heart-2">
            <i className="icon-heart2"></i>
          </div>
          <div className="couple-half">
            <div className="bride">
              <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-bride">
              <h3 className="main-font">Kaveri</h3>
              <p className="parent-name parent-name__top">
                Daughter of Usha &<br />Arun Kumar Gupta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloSection;
