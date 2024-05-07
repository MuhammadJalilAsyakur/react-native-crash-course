import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setUser(res);
                    setisLoggedIn(true);
                } else {
                    setisLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.error('Failed to get user:', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setisLoggedIn,
                user,
                setUser,
                isLoading
            }}>
            {children}
        </GlobalContext.Provider>
    );
}


export default GlobalProvider;