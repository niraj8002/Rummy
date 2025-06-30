import React, { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const partname = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    scrollToTop();
  }, [partname]);

  return (
    <ContextData.Provider value={{ scrollToTop }}>
      {children}
    </ContextData.Provider>
  );
};
