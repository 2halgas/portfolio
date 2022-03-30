import React, { FC } from 'react';
import {AboutSection, SkillsSection, PortfolioSection} from 'src/components/organisms'

export const Home: FC = () => (
    <div className='container'>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
    </div>
);
