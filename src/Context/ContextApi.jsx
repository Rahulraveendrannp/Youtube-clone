import React,{createContext,useState,useEffect} from "react";
import {fetchDataFromApi} from '../Utils/api';


export const Context=createContext();
export const AppContext=(props)=>{
    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState(false);
    const [selectCategories,setSelectCategories]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);
    const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            setSearchResults(contents);
            setLoading(false);
           
        })

    }
    return(
        <Context.Provider value={{
            loading,
            searchResults,
            selectCategories,
            mobileMenu,
            setLoading,
            setMobileMenu,
            setSearchResults,
            setSelectCategories
        }}>
            {props.children}
        </Context.Provider>
    )
}