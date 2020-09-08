import React, { useState, createContext } from "react";

// export default createContext(null);
export const UserContext = createContext();

export const UserCProvider = (props) => {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};
