import { useState } from 'react';
import { Animated } from 'react-animated-css';

import Brand from './Brand';
import Footer from './Footer';
import MenuButton from './MenuButton';

import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={layoutStyles.layout}>
                <Brand />
                <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />

                <Animated animationIn='slideInDown' animationOut='slideOutUp' animationInDuration={400} animationOutDuration={400} isVisible={isOpen} className={layoutStyles.menu}>
                    <div className={layoutStyles.menu}>
                        <div className={layoutStyles.menuContent}>
                            <h1><a href='/about'>About Me</a></h1>
                            <h1><a href='https://gabminamedez.medium.com' target='_blank'>Blog</a></h1>
                            <h1><a href='/portfolio'>Portfolio</a></h1>
                            <h1><a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank'>Resumé</a></h1>
                        </div>
                    </div>
                </Animated>
                
                <div className={layoutStyles.children}>
                    <br />
                    <br />
                    
                    {children}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Layout;