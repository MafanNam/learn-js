import {createContext, useContext, useEffect, useReducer, useState} from "react";


const BASE_URL = 'http://localhost:9000';


const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {...state, isLoading: true};
    case 'cities/loaded':
      return {...state, isLoading: false, cities: action.payload};
    case 'city/loaded':
      return {...state, isLoading: false, currentCity: action.payload};
    case 'city/created':
      return {
        ...state, isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'city/deleted':
      return {
        ...state, isLoading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };
    case 'rejected':
      return {...state, isLoading: false, error: action.payload};
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// eslint-disable-next-line react/prop-types
function CitiesProvider({children}) {
  const [{cities, isLoading, currentCity, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchCities() {
      dispatch({type: 'loading'});
      try {

        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({type: 'cities/loaded', payload: data});
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was a problem retrieving cities. Please try again.'
        });
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    if (+id === currentCity.id) return;

    dispatch({type: 'loading'});

    try {

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({type: 'city/loaded', payload: data});
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was a problem retrieving city. Please try again.'
      });
    }
  }

  async function createCity(newCity) {
    dispatch({type: 'loading'});
    try {

      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {'Content-Type': 'application/json'},
      });
      const data = await res.json();

      dispatch({type: 'city/created', payload: data});
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was a problem creating the city. Please try again.'
      });
    }
  }

  async function deleteCity(id) {
    dispatch({type: 'loading'});
    try {

      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      dispatch({type: 'city/deleted', payload: id});
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was a problem deleting the city. Please try again.'
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('useCities must be used within a CitiesProvider');
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {useCities, CitiesProvider};