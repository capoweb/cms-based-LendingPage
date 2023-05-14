import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavigationButtons } from '../../components';
import { TrendsPage, SearchPage, RandomPage, SettingsPage } from '..';
import ThemeProvider from '../../context/ThemeProvider';

import { Wrapper } from './style';

export const MainPage = () => {
    return (
        <>
        <ThemeProvider>
            <Router>
                <Wrapper>
                    <NavigationButtons />
                    <Routes >
                        <Route path='/Gifs-search' element={<TrendsPage />} />
                        <Route path='/search' element={<SearchPage />} />
                        <Route path='/random' element={<RandomPage />} />
                        <Route path='/settings' element={<SettingsPage />} />
                    </Routes>
                </Wrapper>
            </Router>
            </ThemeProvider>
        </>
    );
};
