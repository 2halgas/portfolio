import React, { FC } from 'react';
import {AboutSetion, SkillsSetion} from 'src/components/organisms'

export const Home: FC = () => (
    <div className='container'>
        <AboutSetion />
        <SkillsSetion />
    </div>
);
