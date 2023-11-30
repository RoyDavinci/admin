import React, { useContext, useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import UsersContext, { UsersDataContext } from "../../Contexts/UsersContext";
import FadeLoader from "react-spinners/FadeLoader";
// import Avatar from "@mui/material/Avatar";
import { GetAllUsers } from "../../api/users";
import { ACTION_TYPES } from "../../reducers/actionTypes";
import { Graph } from "../../components/Chart";

const options = {
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false,
};

const UsersData = ({ Info }) => {
	// const [check, setCheck] = useState(false)
	const [graphDetails, setGraphDetails] = useState({
		itemWithout: 0,
		android: 0,
		iOS: 0,
	});
	const { state, dispatch } = useContext(UsersDataContext);
	const [user, setUsers] = useState([]);
	const [lastLogin, setLastLogin] = useState([]);
	// const [loading, setLoading] = useState(true);
	const { users, loading } = state;
	console.log("user data: ", users);
	const override = {
		display: "block",
		margin: "0 auto",
	};
	const listStyle = {
		maxHeight: "300px",
		height: "auto", // Set your desired height
		overflowY: "auto", // Enable vertical overflow with a scrollbar
	};

	const columns = [
		{
			field: "profilePhoto",
			headerName: "Profile Pic",
			width: 70,
			height: 70,
			renderCell: (params) => {
				return (
					<>
						<img
							src={params.value}
							alt='image'
							style={{
								width: 50,
								height: 50,
								padding: 10,
								borderRadius: "50%",
							}}
						/>
					</>
				);
			},
		},
		{
			field: "firstName",
			headerName: "First name",
			width: 90,
			editable: true,
		},
		{
			field: "lastName",
			headerName: "Last name",
			width: 90,
			editable: true,
		},
		{
			field: "phoneNumber",
			headerName: "Phone Number",
			// type: 'number',
			width: 150,
			editable: true,
		},
		{
			field: "email",
			headerName: "Email",
			// type: 'number',
			width: 150,
			editable: true,
		},
		{
			field: "fullName",
			headerName: "Full name",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) =>
				`${params.row.firstName || ""} ${params.row.lastName || ""}`,
		},
		{
			field: "gender",
			headerName: "Gender",
			sortable: false,
			width: 90,
		},
		{
			field: "safetyStatus",
			headerName: "Safety Status",
			// description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 120,
		},
		{
			field: "suspended",
			headerName: "Suspended",
			sortable: false,
			width: 90,
		},
	];

	// Count of items without the deviceOs property

	const getAllUsers = useCallback(async () => {
		dispatch({ type: ACTION_TYPES.FETCH_LOADING });

		try {
			const response = await GetAllUsers();
			const data = await response.data.data;
			await dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
			if (users.length > 0) {
				const itemsWithoutDeviceOs = users.filter(
					(item) => !item.deviceName
				).length;

				// Count of items with 'android' in the deviceName property
				const androidCount = users.filter(
					(item) =>
						item.deviceName && item.deviceName.toLowerCase() === "android"
				).length;

				// Count of items with 'ios' in the deviceName property
				const iosCount = users.filter(
					(item) => item.deviceName && item.deviceName.toLowerCase() === "ios"
				).length;
				const usersWithLastLogin = users.filter((user) => user.lastLogin);
				setLastLogin(usersWithLastLogin);
				setGraphDetails({
					iOS: iosCount,
					android: androidCount,
					itemWithout: itemsWithoutDeviceOs,
				});
			}
			//  setUsersData(data)
			//  console.log("Users: ", data)
		} catch (error) {
			dispatch({ type: ACTION_TYPES.FETCH_ERROR });
			console.log("Fetch error: ", error);
		}
	}, [users]);

	useEffect(() => {
		getAllUsers();
		setUsers(users);
	}, [user]);

	// console.log(graphDetails);

	return (
		<div className='users-info-outer  pb-14'>
			{user.length <= 0 ? (
				<div className='flex justify-center items-center flex-col h-screen'>
					<FadeLoader
						loading={loading}
						cssOverride={override}
						size={300}
						aria-label='Loading Spinner'
						data-testid='loader'
					/>
				</div>
			) : (
				<>
					{" "}
					<div className='flex justify-between items-center '>
						<Graph
							unknown={graphDetails.itemWithout}
							android={graphDetails.android}
							ios={graphDetails.iOS}
						/>
						<div style={listStyle} className='shadow-2xl rounded-md p-2'>
							<h2 className='text-center font-bold'>Active Users</h2>
							<ul>
								{lastLogin.map((user) => (
									<li key={user._id} className='font-bold py-4'>
										{user.firstName} {user.lastName} -{" "}
										{new Date(user.lastLogin).toLocaleString("en-US", options)}
									</li>
								))}
							</ul>
						</div>
					</div>
					<Box sx={{ height: 500, width: "100%" }}>
						<h2 style={{ margin: 10 }}>Users Information</h2>
						<DataGrid
							rows={users}
							columns={columns}
							getRowId={(row) => row._id}
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
				</>
			)}
		</div>
	);
};

export default UsersData;
