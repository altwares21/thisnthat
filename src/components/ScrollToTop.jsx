import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's default scroll restoration behavior
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to the top of the page whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Scroll to the top on initial render (page refresh)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return null; // This component doesn't render anything
};

export default ScrollToTop;