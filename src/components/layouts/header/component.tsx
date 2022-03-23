import React, {
    FC, useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes";
import { Button } from 'src/components/atoms/button';
import { colors } from 'src/common/dictionaries';
import Link from 'next/link';
import { NavLink } from 'src/components/atoms';
import styled from 'styled-components';
import { Props } from './props';

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/'
    },
    {
        title: 'Skills',
        path: '/'
    },
    {
        title: 'Works',
        path: '/'
    },
    {
        title: 'Contacts',
        path: '/'
    }
];


const Wrapper = styled.div`${({ showHeader }: Props) => `
    position: sticky;
    top: ${showHeader ? '-1px' : '-100px'};
    transition: 0.3s linear;
    z-index: 10;
`}`;

export const Header: FC = () => {
    const router = useRouter();
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    console.log(router.asPath);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);

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
        <Wrapper className='container' showHeader={showHeader}>
            <div className='d-flex align-items-center justify-content-between'>
                <NavLink href="/"><img src="/images/logo.png" alt="Logo" width="100px" height="75px"/></NavLink>
                <div className='d-flex align-items-center'>
                    <nav>
                        <ul className='d-flex m-0'>
                            {links.map(({title, path}) => (
                                    <li className='list-unstyled mx-2'>
                                        <NavLink href={path}>
                                        {title}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <Button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    size='xs'
                    button='link'
                    className='ms-2'
                    backgroundColor={theme === "dark" ? colors.shades.dark.primary : ''}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4.36364C5.99273 4.36364 4.36364 5.99273 4.36364 8C4.36364 10.0073 5.99273 11.6364 8 11.6364C10.0073 11.6364 11.6364 10.0073 11.6364 8C11.6364 5.99273 10.0073 4.36364 8 4.36364ZM0.727273 8.72727H2.18182C2.58182 8.72727 2.90909 8.4 2.90909 8C2.90909 7.6 2.58182 7.27273 2.18182 7.27273H0.727273C0.327273 7.27273 0 7.6 0 8C0 8.4 0.327273 8.72727 0.727273 8.72727ZM13.8182 8.72727H15.2727C15.6727 8.72727 16 8.4 16 8C16 7.6 15.6727 7.27273 15.2727 7.27273H13.8182C13.4182 7.27273 13.0909 7.6 13.0909 8C13.0909 8.4 13.4182 8.72727 13.8182 8.72727ZM7.27273 0.727273V2.18182C7.27273 2.58182 7.6 2.90909 8 2.90909C8.4 2.90909 8.72727 2.58182 8.72727 2.18182V0.727273C8.72727 0.327273 8.4 0 8 0C7.6 0 7.27273 0.327273 7.27273 0.727273ZM7.27273 13.8182V15.2727C7.27273 15.6727 7.6 16 8 16C8.4 16 8.72727 15.6727 8.72727 15.2727V13.8182C8.72727 13.4182 8.4 13.0909 8 13.0909C7.6 13.0909 7.27273 13.4182 7.27273 13.8182ZM3.62909 2.60364C3.34545 2.32 2.88 2.32 2.60364 2.60364C2.32 2.88727 2.32 3.35273 2.60364 3.62909L3.37455 4.4C3.65818 4.68364 4.12364 4.68364 4.4 4.4C4.67636 4.11636 4.68364 3.65091 4.4 3.37455L3.62909 2.60364ZM12.6255 11.6C12.3418 11.3164 11.8764 11.3164 11.6 11.6C11.3164 11.8836 11.3164 12.3491 11.6 12.6255L12.3709 13.3964C12.6545 13.68 13.12 13.68 13.3964 13.3964C13.68 13.1127 13.68 12.6473 13.3964 12.3709L12.6255 11.6ZM13.3964 3.62909C13.68 3.34545 13.68 2.88 13.3964 2.60364C13.1127 2.32 12.6473 2.32 12.3709 2.60364L11.6 3.37455C11.3164 3.65818 11.3164 4.12364 11.6 4.4C11.8836 4.67636 12.3491 4.68364 12.6255 4.4L13.3964 3.62909ZM4.4 12.6255C4.68364 12.3418 4.68364 11.8764 4.4 11.6C4.11636 11.3164 3.65091 11.3164 3.37455 11.6L2.60364 12.3709C2.32 12.6545 2.32 13.12 2.60364 13.3964C2.88727 13.6727 3.35273 13.68 3.62909 13.3964L4.4 12.6255Z" fill="#D7DAE3"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
};
