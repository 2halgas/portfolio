import React, { FC } from 'react';
import { AboutSection, SkillsSection, PortfolioSection, ContactSection } from 'src/components/organisms'
import { useEffect, useState } from 'react';

export const Home: FC = () => {
const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null;
    return (
    <div className='container'>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
    </div>
)};
