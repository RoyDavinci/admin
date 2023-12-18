import React, { useContext, useEffect, useState } from "react";
import { UsersDataContext } from "../Contexts/UsersContext";
import axios from "axios";

const SideBarWidget = () => {
	// const { state } = useContext(UsersDataContext);
	// console.log(state);
	const [distressedUsers, setDistressedUsers] = useState([]);
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		try {
			const { data } = await axios.get(
				"https://us-central1-snapp-api-6df70.cloudfunctions.net/snapp-api/admin/users"
			);
			setUsers(data.data);
			const distressedUser = users.filter(
				(user) => user.safetyStatus.toLowerCase() !== "safe"
			);
			setDistressedUsers(distressedUser);
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(users);

	useEffect(() => {
		getUsers();
	}, [users]);

	return (
		<>
			{distressedUsers.map((user) => (
				<div className='users-outer flex gap-x-3 items-center' key={user._id}>
					<img
						className='users-image h-12 w-12 rounded-lg bg-black flex justify-center items-center'
						src={user.profilePhoto}
					/>
					<div className='users-info space-y-1'>
						<h4 className='text-sm font-medium text-[#11142D]'>
							{user.firstName} {user.lastName}
						</h4>
						<p className='text-xs text-[#808191] font-normal'>
							{user.safetyStatus}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default SideBarWidget;
