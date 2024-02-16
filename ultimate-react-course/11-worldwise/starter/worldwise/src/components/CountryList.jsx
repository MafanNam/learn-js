import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.jsx";

// eslint-disable-next-line react/prop-types
export default function CountryList({isLoading, cities}) {
  if (isLoading) return <Spinner/>;

  // eslint-disable-next-line react/prop-types
  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map."/>;

  // eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, {country: city.country, emoji: city.emoji}];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {/* eslint-disable-next-line react/prop-types */}
      {countries.map((country) => <CountryItem country={country} key={country.country} />)}
    </ul>
  );
}