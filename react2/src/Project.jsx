import React from 'react';
import DesktopProject from './app/desktop/DesktopProject';
import TabletProject from './app/tablet/TabletProject';

const project = () => {
  return (
    <div>
      <DesktopProject/>
      <TabletProject/>
    </div>
  )
}

export default project