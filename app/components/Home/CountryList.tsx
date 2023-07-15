import { ICountry, pageSlice, useDispatch } from "@/lib/redux";

const CountryList = ({ countries }: any) => {
    const dispatch = useDispatch();
    const numberOfRows = Math.ceil(countries.length / 4);

    const selectCountry = (country: ICountry) => {
        dispatch(pageSlice.actions.selectCountry(country as ICountry))
    }

    const renderRows = () => {
        const rows = [];

        for (let i = 0; i < numberOfRows; i++) {
            const startIndex = i * 4;
            const endIndex = startIndex + 4;
            const rowItems = countries.slice(startIndex, endIndex);
            const isLastRow = i === numberOfRows - 1;

            rows.push(
                <div key={`row-${i}`} className={`row ${isLastRow ? 'flex last-row' : 'space-between'}`}>
                    {rowItems.map((country: any, index: number) => (
                        <div key={index} className="country-item column"
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
                    ))}
                </div>
            );
        }

        return rows;
    };

    return (
        <div className="countries">
            {renderRows()}
        </div>
    );
};

export default CountryList;




