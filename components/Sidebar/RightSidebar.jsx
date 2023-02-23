import React, { useEffect } from "react";
import useData from "../../hooks/useData";
import Account from "../Account/Account";
import Trending from "../Trending/Trending";
import Users from "../Users/Users";

export default function RightSidebar() {
  return (
    <div className="mr-12 pt-8">
      <div className="mb-6">
        <Account />
      </div>
      <div>{/* <Search /> */}</div>
      <div>
        <Users />
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
}
