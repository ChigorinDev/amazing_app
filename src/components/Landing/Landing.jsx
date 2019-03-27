import React from 'react';
import './Landing.scss';
import SideBar from '../SideBar/SideBar';

class Landing extends React.Component { 
    render() { 
        return (
            <div fluid className="landing-wrapper">
                <SideBar />
            </div>
        );
    }
}

export default Landing;