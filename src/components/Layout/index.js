import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/gk-logo-2.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQclBKVZ8oWqxcegJ_mA33y1oIA-Y-ebmgZcFKgCeMl0IpbCkh7Zi7yPLjPH_QD6_6Wwjsj6F0yyPqqxAV1Z64OcczG8A`;
const META_DESCRIPTION = `You're invited to witness Gopal and Kaveri's Wedding. Join Us in Celebrations! 🎉`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        {/* <!-- Image to display fb or WhatsApp--> */}
        <meta property="og:image:secure_url" itemprop="image" content={IMAGE_URL} />
        <meta property="og:image" itemprop="image" content={IMAGE_URL} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="description" />

        {/* font and SEO tags */}
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Kaveri ❤️ Gopal Wedding" />
        <meta property="og:title" content="The Wedding of Kaveri & Gopal" />
        <meta property="og:description" content={META_DESCRIPTION} />

        {/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
        <meta property="og:url" content="https://kaveri-gopal.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1679551738" />

        <meta name="twitter:title" content="The Wedding of Kaveri & Gopal" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://kaveri-gopal.netlify.app" />
        <meta name="twitter:card" content="summary" />

        <title>Kaveri ❤️ Gopal Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
