import React, {
    FC, useState, useEffect, useRef,
} from 'react';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes";
import { Button } from 'src/components/atoms/button';
import { colors } from 'src/common/dictionaries';
import { NavLink } from 'src/components/atoms';
import styled from 'styled-components';
import { Props } from './props';
import { v4 as uuid } from "uuid";
import { useMediaQuery } from 'src/common/hooks/use-media-query';
import { useOnClickOutside } from 'src/common/hooks/use-on-click-outside';

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

const Wrapper = styled.div`${({ showHeader, backgroundColor }: Props) => `
    position: sticky;
    top: ${showHeader ? '-1px' : '-100px'};
    transition: 0.3s linear;
    z-index: 10;
    background: ${backgroundColor};
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`}`;

const StyledBurger = styled.button`
  position: absolute;
  top: 20px;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${colors.shades.dark.dark100};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: Props) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: Props) => open ? '0' : '1'};
      transform: ${({ open }: Props) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: Props) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.shades.light.light400};
  transform: ${({ open }: Props) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: ${colors.text.secondary};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }: Props) => {
    return (
      <StyledMenu open={open}>
        <ul className='d-flex flex-column m-0'>
            {links.map(({title, path}) => (
                <li className='list-unstyled mx-2' key={uuid()}>
                    <NavLink href={path}>
                    {title}
                    </NavLink>
                </li>
            ))}
        </ul>
      </StyledMenu>
    )
  }

export const Header: FC = () => {
    const router = useRouter();
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const node = useRef<HTMLDivElement>(null); 
    useOnClickOutside(node, () => setShowBurgerMenu(false));
  
    const isSmallDevice = useMediaQuery(635);


    const Burger = ({ open, handleBurgerLinkClick }: Props) => {
        return (
          <StyledBurger theme={theme} open={open} onClick={handleBurgerLinkClick}>
            <div />
            <div />
            <div />
          </StyledBurger>
        )
      }

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
    if (!mounted) return null
    return (
        <Wrapper showHeader={showHeader} backgroundColor={theme === 'light' ? colors.shades.light.light100 : colors.shades.dark.dark600 }>
            <div className='d-flex align-items-center justify-content-between container'>
                <NavLink href="/"><img src="/images/logo.png" alt="Logo" width="85px" height="75px"/></NavLink>
                {isSmallDevice ?  (
                        <div ref={node}>
                            <Button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                size='xs'
                                button='link'
                                className='me-5'
                                backgroundColor={theme === "dark" ? colors.shades.dark.primary : colors.shades.light.primary}
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? <img src='/images/svg/theme.svg' alt='sun' /> :
                                <img src='/images/svg/moon.svg' alt='moon' />}
                            </Button>
                            <Burger open={showBurgerMenu} handleBurgerLinkClick={handleBurgerLinkClick} />
                            <Menu open={showBurgerMenu} />
                        </div>
                        ) : 
                (<div className='d-flex align-items-center'>
                    <nav>
                        <ul className='d-flex m-0'>
                            {links.map(({title, path}) => (
                                    <li className='list-unstyled mx-2' key={uuid()}>
                                        <NavLink href={path} color={theme === 'light' ? colors.text.secondary : colors.text.primary }>
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
                    backgroundColor={theme === "dark" ? colors.shades.dark.primary : colors.shades.light.primary}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? <img src='/images/svg/theme.svg' alt='sun' /> :
                        <img src='/images/svg/moon.svg' alt='moon' />}
                    </Button>
                </div>)}
            </div>
        </Wrapper>
    );
};
