import React from 'react';
import DesktopProject from './app/desktop/DesktopProject';
import TabletProject from './app/tablet/TabletProject';
import MobileProjects from './app/mobile/mobileProjects';

const project = () => {
  return (
    <div>
      <DesktopProject />
      <TabletProject />
      <MobileProjects />
    </div>
  )
}

export default project