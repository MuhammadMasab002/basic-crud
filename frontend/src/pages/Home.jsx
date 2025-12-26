import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Form from "../components/Form";
import Table from "../components/Table";
import { useGetUserQuery } from "../services/api";

function Home() {
  // implement crud api for user endpoints using base query from redux toolkit query
  const {
    data: userData,
    error: isError,
    isLoading: isLoadingUser,
  } = useGetUserQuery();

  isError && console.log("Error fetching users:", isError);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gray-50">
      <Form />
      <Table userData={userData?.data} isLoading={isLoadingUser} />
    </div>
  );
}

export default Home;
