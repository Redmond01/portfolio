import React from 'react';
import DesktopHome from './app/desktop/Desktop';
import MobileHome from './app/mobile/mobile';
import TabletHome from './app/tablet/TabletHome';


const Desktop = () => {
    return (
        <div >
            <DesktopHome />
            <MobileHome/>
            <TabletHome/>
        </div>
    )
}

export default Desktop