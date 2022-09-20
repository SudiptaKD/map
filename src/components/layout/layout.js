import Box from "@mui/material/Box";
import * as React from "react";
import Header from "../header/header";
import MapComponent from "../map/map";

const Layout = () => {
  return (
    <>
      <Box>
        <Header/>
      </Box>
      <Box sx={{padding:"5vw"}}>
        <MapComponent/>
      </Box>
    </>
  );
};

export default Layout;