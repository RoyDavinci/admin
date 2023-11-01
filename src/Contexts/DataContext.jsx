import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'

export const ApiDataContext = createContext(null);



const DataContext = ({children}) => {
    const [count, setCount] = useState([{
        success: "Status counts retrieved",
        data: {
            panicCount: 6,
            dangerCount: 6,
            safeCount: 91
        }
    }]);

    useLayoutEffect(()=>{
        fetch('https://us-central1-snapp-api-6df70.cloudfunctions.net/api/admin/status-counts')
        .then(response=> response.json())
        .then(data => setCount(data))
        .catch(err => console.log(err))
        
    }, [])
  return (
    <ApiDataContext.Provider value={{count}}>
        {children}
    </ApiDataContext.Provider>
  )
}

export default DataContext