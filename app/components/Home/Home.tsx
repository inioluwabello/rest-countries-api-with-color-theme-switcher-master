"use client";

import { selectPageConfig, selectCountries, useSelector } from '@/lib/redux'
import { Nav } from '../Nav'
import { TopBar } from '../TopBar'
import CountryList from './CountryList';

export const Home = () => {
    const pageConfig = useSelector(selectPageConfig)
    const countries = useSelector(selectCountries)

    return (
        <div className={`main-bg ${pageConfig.theme.toLocaleLowerCase()}-theme`}>
            <header className={`header`}>
                <Nav theme={pageConfig.theme} />
                <TopBar />
            </header>
            <main className={`container`}>
                <CountryList countries={countries} />
            </main>
        </div>
    )
}