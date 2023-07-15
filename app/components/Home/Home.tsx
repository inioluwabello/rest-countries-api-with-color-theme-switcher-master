"use client";

import { selectPageConfig, selectCountries, 
    selectedCountry, useSelector, getAllCountries, useDispatch, pageSlice } from '@/lib/redux'
import { Nav } from '../Nav'
import { TopBar } from '../TopBar'
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import { useEffect } from 'react';

export const Home = () => {
    const pageConfig = useSelector(selectPageConfig)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        dispatch(pageSlice.actions.setPageTheme(savedTheme ?? pageConfig.theme))
    })


    const countries = useSelector(selectCountries)
    const countrySelected = useSelector(selectedCountry)
    
    const dispatch = useDispatch();
    if (countries.length === 0)
        dispatch(getAllCountries())

    return (
        <div className={`main-bg ${pageConfig.theme.toLocaleLowerCase()}-theme`}>
            <header className={`header`}>
                <Nav theme={pageConfig.theme} />
            </header>
            <main className={`container`}>
                {!countrySelected &&
                    <>
                        <TopBar />
                        <CountryList countries={countries} />
                    </>
                }
                {countrySelected && <CountryDetails country={countrySelected} />}
            </main>
        </div>
    )
}