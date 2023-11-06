import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'

export const ApiDataContext = createContext(null);



const DataContext = ({children}) => {
    const [count, setCount] = useState([]);
    const [report, setReport] = useState([]);

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://us-central1-snapp-api-6df70.cloudfunctions.net/api/admin/status-counts')
            .then(response=> response.json())
            .then(data => setCount(data))
            .catch(err => console.log(err))

            fetch('https://us-central1-snapp-api-6df70.cloudfunctions.net/api/admin/reports')
            .then(response=> response.json())
            .then(data => setReport(data))
            .catch(err => console.log(err))
        },500)
        
    }, [])

    // useEffect(()=>{
    //     setTimeout(() => {
    //         fetch('https://us-central1-snapp-api-6df70.cloudfunctions.net/api/admin/reports')
    //         .then(response=> response.json())
    //         .then(data => setReport(data))
    //         .catch(err => console.log(err))
    //     },500)
        
    // }, [])

  return (
    <ApiDataContext.Provider value={{count, report}}>
        {children}
    </ApiDataContext.Provider>
  )
}

export default DataContext