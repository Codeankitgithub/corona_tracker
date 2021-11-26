import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import {fetchCountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI = async()=>{
           setFetchedCountries(await fetchCountries()) ;
        }
        fetchAPI();
    },[setFetchedCountries]);
   
    return (
        <div className="row ">
          <div className="col-12 main2">
            <FormControl >
             <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
             </NativeSelect>
           </FormControl>
           </div>
        </div>
    )
}

export default CountryPicker;
