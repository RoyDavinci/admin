import { create } from "apisauce";


const api = create({
    baseURL: "https://us-central1-snapp-api-6df70.cloudfunctions.net/api",
    //   headers: { Accept: 'application/json' },
  });



  /* Admin Dashboard User Routes */

  //Get all users and their details
  export const GetAllUsers = async () => {
    try {
      const result = await api.get("/admin/users");
      return result;
    } catch (error) {
      return error;
    }
  };


  //Get number of users accounts
  export const GetUsersCount = async () => {
    try {
      const result = await api.get("/admin/user/user-count");
      return result;
    } catch (error) {
      return error;
    }
  };


  //Get All Users Location
  export const GetAllUsersLoc = async () => {
    try {
      const result = await api.get("/admin/location/users");
      return result;
    } catch (error) {
      return error;
    }
  };


   //Suspend User Account
   export const SuspendUser = async (userId) => {
    try {
      const result = await api.delete(`/admin/user/suspend/${userId}`);
      return result;
    } catch (error) {
      return error;
    }
  };
