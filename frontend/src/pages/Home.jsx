import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Form from "../components/Form";
import Table from "../components/Table";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gray-50">
      <Form />
      <Table />
    </div>
  );
}

export default Home;
