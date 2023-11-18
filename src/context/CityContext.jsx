import { createContext, useEffect, useState } from "react";


export const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [city, setCity] = useState('');

  return (
    <CityContext.Provider value={[city, setCity]}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
