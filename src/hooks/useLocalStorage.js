import React, { useState } from "react";

//retrieves an item from localStorage, calls localStorage.getItem('itemName')
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //Gets key from Local Storage
    const item = window.localStorage.getItem(key);
    // // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  //return storedValue from this hook in an array:
  return [storedValue, setStoredValue];

  const setValue = value => {
    //Saves the state
    setStoredValue(value);
    // Saves to local storage, sets the key from localStorage, and turns value into a string
    window.localStorage.setItem(key, JSON.stringify(value));
  };
};

export default useLocalStorage;
