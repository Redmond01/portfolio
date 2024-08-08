import React from 'react';
import MobileAbout from './app/mobile/mobileAbout';
import DesktopAbout from './app/desktop/DesktopAbout';
import TabletProject from './app/tablet/TabletProject';

const About = () => {
  return (
    <div>
        <MobileAbout/>
        <DesktopAbout/>
        <TabletProject/>
    </div>
  )
}

export default About