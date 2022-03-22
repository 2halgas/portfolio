import React, { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { Props } from './props';

export const AppContainer: FC<Props> = ({ children }: Props) => (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="d-flex flex-column flex-grow-1">{children}</div>
        <Footer />
    </div>
);
