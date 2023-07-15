import { ICountry, pageSlice, useDispatch } from "@/lib/redux";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CountryDetailsProps {
    country: ICountry;
}
const CountryDetails = ({ country }: CountryDetailsProps) => {

    const getCurrencies = (currencies: any) => {
        try {
            let crr = "";
            for (const [key, value] of Object.entries<any>(currencies)) {
                crr += value.name + ", ";
            }
            return crr.slice(0, -2);
        } catch (e) {
            // console.log(e)
        }
    }

    const getLanguages = (languages: any) => {
        try {
            let lng = "";
            for (const [key, value] of Object.entries<any>(languages)) {
                lng += value + ", ";
            }
            return lng.slice(0, -2);

        } catch (e) {
            // console.log(e)
        }
    }

    const dispatch = useDispatch();
    return (
        <div className="details-page">
            <div className="action-tab">
                <button className="back" onClick={() => dispatch(pageSlice.actions.unselectCountry())}>
                    <FontAwesomeIcon icon={faArrowLeftLong} width={16} />{" "}
                    Back
                </button>
            </div>

            <div className="content-details space-between">
                <div className="half-width">
                    <img src={country.flags.svg} alt="" />
                </div>
                <div className="half-width align-center">
                    
                    <div className="name text-md bold-text mb-1">{country.name.common}</div>

                    <div className="detail-split space-between text-sm">
                        <div className="half-width">
                            <div className="details">
                                <div className="continent text-sm">
                                    <span className="medium-text">Continent:</span>{" "}
                                    {country.continents[0]}
                                </div>
                                <div className="population text-sm">
                                    <span className="medium-text">Population:</span>{" "}
                                    {country.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                </div>
                                <div className="region text-sm">
                                    <span className="medium-text">Region:</span>{" "}
                                    {country.region}
                                </div>
                                <div className="sub-region text-sm">
                                    <span className="medium-text">Sub Region:</span>{" "}
                                    {country.subregion}
                                </div>
                                <div className="capital text-sm mb-2">
                                    <span className="medium-text">Capital:</span>{" "}
                                    {country.capital}
                                </div>
                            </div>
                        </div>
                        <div className="half-width">
                            <div className="details">
                                <div className="domain text-sm">
                                    <span className="medium-text">Top Level Domain:</span>{" "}
                                    {country.tld[0]}
                                </div>
                                <div className="currencies text-sm">
                                    <span className="medium-text">Currencies:</span>{" "}
                                    {getCurrencies(country.currencies)}
                                </div>
                                <div className="region text-sm">
                                    <span className="medium-text">Languages:</span>{" "}
                                    {getLanguages(country.languages)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails