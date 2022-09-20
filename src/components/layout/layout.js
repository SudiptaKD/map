import Box from "@mui/material/Box";
import * as React from "react";
import Header from "../header/header";
import Map from "../map/map";

const Layout = () => {
  return (
    <>
      <Box>
        <Header/>
      </Box>
      <Box sx={{padding:"5vw"}}>
        <Map/>
      </Box>
    </>
  );
};

export default Layout;