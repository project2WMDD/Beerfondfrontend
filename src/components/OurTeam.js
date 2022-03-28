import React from 'react';
import vipul from '../images/Vipul.jpeg';
import saurabh from '../images/saurab.jpeg';
import tej from '../images/tej.jpeg';
import gurunkit from '../images/gur.jpeg';
import gustavo from '../images/gustav.jpeg';
import harinder from '../images/harinder.jpeg';
import paula from '../images/paula.jpeg';
import './OurTeam.css';

function OurTeam() {
  return (
    <div className='team-5'>
      <div className='team-name'>
        <h3 className='our-team'> Our Team</h3>
      </div>

      <div className='des-dev'>
        <div className='de-cover'>
          <h3 className='de-cover-heading'>Designers</h3>
          <div className='desAndDev'>
            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={paula} alt='paula' />
              </div>
              <div className='de-intro'>
                <p>Paula Valero</p>
                <p>UX/UI Designer</p>
              </div>
            </div>
            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={harinder} alt='harinder' />
              </div>
              <div className='de-intro'>
                <p>Harinder Kaur</p>
                <p>UX/UI Designer</p>
              </div>
            </div>
            <div className='de-img-intro' id='gurankit'>
              <div className='de-img'>
                <img src={gurunkit} alt='gurunkit' />
              </div>
              <div className='de-intro'>
                <p>Gurankit Singh</p>
                <p>UX/UI Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='de-cover'>
          <h3 className='de-cover-heading'>Developers</h3>
          <div className='desAndDev'>
            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={gustavo} alt='gustavo' />
              </div>

              <div className='de-intro'>
                <p>Gustavo Monte</p>
                <p>Front End developer</p>
              </div>
            </div>

            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={vipul} alt='Vipul' />
              </div>
              <div className='de-intro'>
                <p>Vipul Gupta</p>
                <p>Developer Lead</p>
              </div>
            </div>

            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={tej} alt='tejaswini' />
              </div>

              <div className='de-intro'>
                <p>Tejaswini MK</p>
                <p>Front End Developer</p>
              </div>
            </div>

            <div className='de-img-intro'>
              <div className='de-img'>
                <img src={saurabh} alt='saurabh' />
              </div>

              <div className='de-intro'>
                <p>Saurabh Sindhu</p>
                <p>Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
