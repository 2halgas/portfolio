import React, {
    FC, useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';

export const Header: FC = () => {
    const router = useRouter();
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleBurgerLinkClick = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };

    const closeBurgerMenu = () => {
        setShowBurgerMenu(false);
    };

    const handleCabinetButtonClick = () => {
        router.push('/cabinet?tab=details');
        handleBurgerLinkClick();
    };

    const handleLoginClick = () => {
        router.push('/sign-in');
        handleBurgerLinkClick();
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false);
                closeBurgerMenu();
            } else {
                setShowHeader(true);
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
        }
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className='container'>
            Header
        </div>
    );
};
