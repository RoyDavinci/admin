import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import UsersContext, { UsersDataContext } from '../../Contexts/UsersContext';
// import Avatar from "@mui/material/Avatar";
import { GetAllUsers } from '../../api/users';
import { ACTION_TYPES } from '../../reducers/actionTypes';

const UsersData = ({Info}) => {
    // const [check, setCheck] = useState(false)
    const {state, dispatch } = useContext(UsersDataContext)
    const usersData = state.users
    console.log("user data: ", usersData)

    const columns = [
  { field: 'profilePhoto', headerName: 'Profile Pic',  width: 70, height: 70,renderCell: (params) => {
    return (
      <>
        <img src={params.value}  alt="image" style={{width: 50, height: 50,padding: 10, borderRadius:"50%"}}/>
        
      </>
    );
  } },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 90,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 90,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    // type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    // type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    sortable: false,
    width: 90,
  },
  {
    field: 'safetyStatus',
    headerName: 'Safety Status',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120,
  },
  {
    field: 'suspended',
    headerName: 'Suspended',
    sortable: false,
    width: 90,
  },
];




const getAllUsers = async() => {
  dispatch({ type: ACTION_TYPES.FETCH_LOADING });  
  
try {
  const response = await GetAllUsers()
  const data = await response.data.data;
  dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
  //  setUsersData(data)
  //  console.log("Users: ", data)
} catch (error) {
  dispatch({ type: ACTION_TYPES.FETCH_ERROR });
  console.log("Fetch error: ", error)  
}
 
}


useEffect(()=> {
  
  getAllUsers();

 
}, [])

  return (
    <div className='users-info-outer pb-14'>
      <Box sx={{ height: 500, width: '100%' }}>
        <h2 style={{margin: 10}}>Users Information</h2>
      <DataGrid
        rows={usersData}
        columns={columns}
        getRowId={(row)=> row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </Box>

    </div>
  )
}

export default UsersData