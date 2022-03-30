import React, { FC } from 'react';
import { AboutSection, SkillsSection, PortfolioSection, ContactSection } from 'src/components/organisms'

export const Home: FC = () => (
    <div className='container'>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
    </div>
);
