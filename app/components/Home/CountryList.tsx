import { ICountry, pageSlice, useDispatch } from "@/lib/redux";

const CountryList = ({ countries }: any) => {
    const dispatch = useDispatch();
    const selectCountry = (country: ICountry) => {
        dispatch(pageSlice.actions.selectCountry(country as ICountry))
    }

    const renderRows = () => {
        return countries.map((country: ICountry, i:number) => {
            return (
                <div key={i} className="country-item column"
                    onClick={() => selectCountry(country)}>
                    <div className='country-image'>
                        <img src={country.flags.svg} alt={country.name.common} />
                    </div>
                    <div className="details">
                        <div className="name text-md bold-text mb-1">{country.name.common}</div>

                        <div className="population text-sm">
                            <span className="medium-text">Population:</span>{" "}
                            {country.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                        <div className="region text-sm">
                            <span className="medium-text">Region:</span>{" "}
                            {country.region}
                        </div>
                        <div className="capital text-sm mb-2">
                            <span className="medium-text">Capital:</span>{" "}
                            {country.capital}
                        </div>
                    </div>
                </div>
            )
        })
    };

    return (
        <div className="countries">
            <div className={`country-grid`}>
                {renderRows()}
            </div>
        </div>
    );
};

export default CountryList;




