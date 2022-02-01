import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './scrollButton.css';

function ScrollButtonContainer({ children }) {
    const [isVisible, setIsVisible] = useState(false);
      //scroll to top
      const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <>
        <div>
        {children}
        </div>
        <div className='scroll-to-top'>
            {isVisible && 
                <div onClick={scrollToTop} className='scroll-chevron'>
                    <FaIcons.FaChevronUp />
                </div>
            }
        </div>
        </>
    )
}

export default ScrollButtonContainer;