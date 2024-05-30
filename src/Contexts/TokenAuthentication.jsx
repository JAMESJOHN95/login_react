    import React, { createContext, useEffect, useState } from "react";
    export const tokenAuthenticationContext = createContext();

    function TokenAuthentication({children}){

        const [isAuthentication,setIsAuthentication] = useState(false);

        useEffect(()=>{
            const token = sessionStorage.getItem("token")
            if(token){
                setIsAuthentication(true)
            }
            else{
                setIsAuthentication(false)
            }
        },[])
        return (
        <tokenAuthenticationContext.Provider value= {{isAuthentication,setIsAuthentication}}>
            {children}
        </tokenAuthenticationContext.Provider>
    );
    }

    export default TokenAuthentication;