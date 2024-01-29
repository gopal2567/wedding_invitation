import React, { Fragment } from 'react';

function FooterSection() {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                &copy; Creator {' '}
                  <a href="" target="_blank" rel="noreferrer">
                    Gopal & Kaveri
                  </a>
                </small>
                <small className="block">
                  Code, Theme and Ideas {' '}
                  <a href="https://github.com/anantatapase" target="_blank" rel="noreferrer">
                  @anantatapase, freehtml5.co and Github
                  </a>
                </small>
                <small className="block">
                  Images, Text, Music and Icons {' '}
                  <a href="https://www.google.com/search?q=chatgpt+youtube" target="_blank" rel="noreferrer">
                    Google, ChatGPT and Youtube
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
};

export default React.memo(FooterSection);
