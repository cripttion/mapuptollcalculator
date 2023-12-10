// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a context provider component
export function StateManagement({ children }) {
  const[source,setSource] = useState();
  const[dest,setDest] = useState();
  const[route,setRouteData] = useState([])
  const[apiData,setApiData] = useState();
  const [sourcelongitude, setSourceLongitude] = useState({});
  const [destinationLongitude, setDestinationLongitude] = useState({});
  
  return (
    <UserContext.Provider
      value={{
        source,setSource,dest,setDest,
        apiData,setApiData,
        sourcelongitude,
        setSourceLongitude,
        destinationLongitude,
        setDestinationLongitude,
        route,setRouteData
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for consuming the context
export function useUserContext() {
  return useContext(UserContext);
}
