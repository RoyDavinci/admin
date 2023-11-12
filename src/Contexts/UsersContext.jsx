import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'
import { GetAllUsers } from '../api/users';

export const UsersDataContext = createContext(null);



const UsersContext = ({children}) => {

    const [usersData, setUsersData] = useState(null);
    const [usersCount, setUsersCount] = useState({});
    const [usersLocation, setUsersLocation] = useState([]);
    



    useEffect(()=> {
        
           const getAllUsers = async() => {
              const result = await GetAllUsers()
                const data = await result.data;
               setUsersData(data)
           }
        getAllUsers();
       
    }, [GetAllUsers])





    return (

        <UsersDataContext.Provider value={{usersData}}>
        {children}
    </UsersDataContext.Provider>

    )



}

export default UsersContext;