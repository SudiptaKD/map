import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Grid } from '@mui/material';
import Box from "@mui/material/Box";
import Image from 'next/image';
import * as React from "react";
import CButton from './button';
import SearchBox from './searchbox/searchbox';

const Header = () => {
  const logo ="/assets/images/title.jpg"
  return (
    <>
      <Box sx={{ minHeight:"10vh", backgroundColor:"#FFFFFF", paddingX:"30px", paddingY:"5px" }}>
        <Grid container spacing={2}  >
          <Grid item xs={3} sx={{mt:1}}>
            <Image src={logo} alt="logo" width="80px" height="50px" />
          </Grid>
          <Grid item xs={6} >
            <SearchBox/>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={4} sx={{paddingY:"12px"}} >
              <Grid item xs={1}>
                <ClassOutlinedIcon/>
              </Grid>
              <Grid item xs={1} >
                <NotificationsNoneOutlinedIcon/>
              </Grid>
              <Grid item xs={1}>
                <MarkEmailUnreadOutlinedIcon/>
              </Grid>
              <Grid item xs={1} >
                < PermIdentityOutlinedIcon/>
              </Grid>
              <Grid item xs={6}>
                <CButton/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;