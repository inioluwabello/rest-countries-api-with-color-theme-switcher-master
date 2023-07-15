import {
    filterByRegion, searchByName, useDispatch,
    useSelector, selectSearchValue, selectFilterValue, pageSlice
} from "@/lib/redux"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"

export const TopBar = () => {
    const dispatch = useDispatch();

    const searchValue = useSelector(selectSearchValue)
    const filterValue = useSelector(selectFilterValue)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);

        timeoutRef.current = setTimeout(() => {
            if (searchValue === "") return;

            dispatch(searchByName(searchValue))
        }, 1000);

        return () => clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
    }, [searchValue]);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(pageSlice.actions.setSearchValue(e.target.value));
    }

    const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(pageSlice.actions.setRegion(e.target.value));
        dispatch(filterByRegion(e.target.value))
    }

    return (
        <div className="top-bar">
            <div className="container">
                <div className="content space-between">
                    <div className="search-bar">
                        <input type="text" 
                            className="search-input white-bg w-100" 
                            placeholder="Search for a country..."
                            value={searchValue} 
                            onChange={handleSearchInput} />
                        <div style={{ height: 0, position: "relative", top: "-30px", left: "20px" }}>
                            <FontAwesomeIcon icon={faSearch} width={16} height={16} />
                        </div>
                    </div>

                    <div className=""></div>

                    <div className="filter-bar">
                        <select name="filter" className="white-bg filter-select" id="filter" value={filterValue} onChange={handleSelectRegion}>
                            <option value="">Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}