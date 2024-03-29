import React, {
    FC, useState, useEffect, useRef,
} from 'react';
import { useTheme } from 'next-themes';
import { colors } from 'src/common/dictionaries';
import { NavLink, Anchor, Button } from 'src/components/atoms';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useMediaQuery } from 'src/common/hooks/use-media-query';
import { useOnClickOutside } from 'src/common/hooks/use-on-click-outside';
import { Props } from './props';

const links = [
    {
        title: 'Home',
        path: '#',
    },
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Skills',
        path: '#skills',
    },
    {
        title: 'Portfolio',
        path: '#portfolio',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
];

const Wrapper = styled.header`${({ showHeader, backgroundColor }: Props) => `
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
  top: 10px;
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
      transform: ${({ open }: Props) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }: Props) => (open ? '0' : '1')};
      transform: ${({ open }: Props) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }: Props) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.shades.dark.dark400};
  transform: ${({ open }: Props) => (open ? 'translateX(0)' : 'translateX(-100%)')};
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
`;

const Menu = ({ open, handleBurgerLinkClick }: Props) => {
    return (
        <StyledMenu open={open}>
            <ul className="d-flex flex-column m-0">
                {links.map(({ title, path }) => (
                    <li className="list-unstyled m-3" key={uuid()}>
                        <Anchor href={path} onClick={handleBurgerLinkClick}>
                            {title}
                        </Anchor>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
}

export const Header: FC = () => {
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
        );
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
    if (!mounted) return null;
    return (
        <Wrapper showHeader={showHeader} backgroundColor={theme === 'light' ? colors.shades.light.light100 : colors.shades.dark.dark600}>
            <div className="d-flex align-items-center justify-content-between container">
                <NavLink href="/" color={theme === 'light' ? colors.text.secondary : colors.text.primary}>2halgas</NavLink>
                {isSmallDevice ? (
                    <div ref={node}>
                        <Button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            size="xs"
                            button="link"
                            className="me-5"
                            backgroundColor={theme === 'light' ? colors.shades.light.primary : colors.shades.dark.primary}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            {theme === 'light' ? <img src="/images/svg/moon.svg" alt="moon" /> :<img src="/images/svg/theme.svg" alt="sun" />}
                        </Button>
                        <Burger open={showBurgerMenu} handleBurgerLinkClick={handleBurgerLinkClick} />
                        <Menu handleBurgerLinkClick={handleBurgerLinkClick} open={showBurgerMenu} />
                    </div>
                )
                    : (
                        <div className="d-flex align-items-center">
                            <nav>
                                <ul className="d-flex m-0">
                                    {links.map(({ title, path }) => (
                                        <li className="list-unstyled mx-2" key={uuid()}>
                                            <NavLink href={path} color={theme === 'light' ? colors.text.secondary : colors.text.primary}>
                                                {title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                size="xs"
                                button="link"
                                className="ms-2"
                                backgroundColor={theme === 'light' ? colors.shades.light.primary : colors.shades.dark.primary}
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            >
                                {theme === 'light' ? <img src="/images/svg/moon.svg" alt="moon" />
                                    : <img src="/images/svg/theme.svg" alt="sun" /> }
                            </Button>
                        </div>
                    )}
            </div>
        </Wrapper>
    );
};
