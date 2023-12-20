import React, { useContext, useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { BsThreeDotsVertical, BsFillArrowUpCircleFill } from "react-icons/bs";
//import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from "../../partials/dashboard/DashboardAvatars";
import FilterButton from "../../components/DropdownFilter";
import Datepicker from "../../components/Datepicker";
import DashboardCard01 from "../../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../../partials/dashboard/DashboardCard13";
import Banner from "../../partials/Banner";
import DoughnutChart from "../../charts/DoughnutChart";
import UsersInfo from "../../partials/UserDB/UsersInfo";
import { tailwindConfig } from "../../utils/Utils";
import UsersData from "../../partials/UserDB/UsersData";
import UsersCounter from "../../partials/UserDB/UsersCounter";
import SideBarWidget from "../../components/SideBarWidget";
import { ApiDataContext } from "../../Contexts/DataContext";
import { UsersCountContext } from "../../Contexts/UsersCountContext";
import ReportData from "./ReportData";
import PieChart from "../../charts/PieChart";
import ReportCharts from "../../partials/reports/ReportCharts";

function Dashboard({ sidebarOpen, setSidebarOpen }) {
	const [level, setLevel] = useState("Safe");

	const { count } = useContext(ApiDataContext);
	const { safeCount, panicCount, dangerCount } = count;
	const { catCount } = useContext(ApiDataContext);
	const {
		crashCount,
		hazardCount,
		kidnappingCount,
		floodCount,
		riotCount,
		fireCount,
		closedRoadCrash,
		lawEnforcementCount,
		trafficCount,
		protestCount,
		robberyCount,
	} = catCount;

	// const datasets= [
	//   {
	//     label: 'Direct',
	//     data: [
	//       800, 1600, 900, 1300, 1950, 1700,
	//     ],
	//     backgroundColor:'#51D323',
	//     barPercentage: 0.66,
	//     categoryPercentage: 0.66,
	//   },
	//   {
	//     label: 'Indirect',
	//     data: [
	//       4900, 2600, 5350, 4800, 5200, 4800,
	//     ],
	//     backgroundColor: '#51D323',
	//     barPercentage: 0.66,
	//     categoryPercentage: 0.66,
	//   },
	// ]

	const CHART_COLORS = {
		danger: "rgb(255, 99, 132)",
		panic: "rgb(255, 159, 64)",
		safe: "rgb(10, 178, 44)",
		yellow: "rgb(255, 205, 86)",
		blue: "rgb(54, 162, 235)",
		purple: "rgb(153, 102, 255)",
		grey: "rgb(201, 203, 207)",
	};
	const PIE_COLORS = {
		hazardCount: "rgb(255, 99, 132)",
		crashCount: "rgb(255, 0, 55)",
		kidnappingCount: "rgb(31, 30, 28)",
		floodCount: "rgb(54, 162, 235)",
		riotCount: "rgb(255, 205, 86)",
		fireCount: "rgb(188, 75, 41)",
		closedRoadCrash: "rgb(153, 102, 255)",
		lawEnforcementCount: "rgb(117, 118, 120)",
		trafficCount: "rgb(3, 145, 12)",
		protestCount: "rgb(0, 6, 190)",
		robberyCount: "rgb(144, 2, 82)",
	};

	const data = {
		labels: ["Danger", "Panic", "Safe"],
		datasets: [
			{
				label: "Safety Status",
				data: [dangerCount, panicCount, safeCount],
				backgroundColor: Object.values(CHART_COLORS),
			},
		],
	};

	const categoryCount = {
		labels: [
			"crashCount",
			"hazardCount",
			"kidnappingCount",
			"floodCount",
			"riotCount",
			"fireCount",
			"closedRoadCrash",
			"lawEnforcementCount",
			"trafficCount",
			"protestCount",
			"robberyCount",
		],
		datasets: [
			{
				label: "Report Count By Category",
				data: [
					crashCount,
					hazardCount,
					kidnappingCount,
					floodCount,
					riotCount,
					fireCount,
					closedRoadCrash,
					lawEnforcementCount,
					trafficCount,
					protestCount,
					robberyCount,
				],
				backgroundColor: Object.values(PIE_COLORS),
			},
		],
	};
	const listStyle = {
		maxHeight: "300px",
		height: "auto", // Set your desired height
		overflowY: "auto", // Enable vertical overflow with a scrollbar
	};

	return (
		<div className='flex h-screen overflow-hidden '>
			{/* Sidebar */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			<div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
				{/*  Site header */}
				<Header
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
					page={"Dashboard"}
				/>

				<main>
					<div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto space-y-10 bg-white'>
						<UsersCounter />

						<div className='db-status flex items-start justify-between py-7'>
							<div className='status-bar-info space-y-3 w-[73%] gap-x-7'>
								<div className='status-bar-header flex justify-between items-center'>
									<h3 className='text-lg text-black font-semibold'>
										Status Chart
									</h3>
								</div>

								<div className='bar-chart py-7'>
									<DoughnutChart data={data} />
								</div>
							</div>

							<div className=' px-10 space-y-7 w-[27%]'>
								<div className='signUp-top flex w-full justify-between items-center'>
									<h3 className='text-lg text-black font-semibold'>
										Users in Distress{" "}
									</h3>
									<BsThreeDotsVertical />
								</div>

								<div
									style={listStyle}
									className=' space-y-5  overflow-y-auto no-scrollbar'
								>
									<SideBarWidget />
								</div>
							</div>
						</div>

						<ReportData Info={"Reports"} />
					</div>
				</main>

				<Banner />
			</div>
		</div>
	);
}

export default Dashboard;
