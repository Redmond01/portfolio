import React from 'react';
import MobileAbout from './app/mobile/mobileAbout';
import DesktopAbout from './app/desktop/DesktopAbout';
import TabletAbout from './app/tablet/TabletAbout';

const About = () => {
  return (
    <div>
        <MobileAbout/>
        <DesktopAbout/>
        <TabletAbout/>
    </div>
  )
}

export default About