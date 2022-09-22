import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchDropDown from "./searchDropDown";

const CustomButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '3px 4px',
    borderRadius :0,
    BorderColor: "black"
}));

const CustomTextField = styled(TextField)({
    '.MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: 0
        }
    }
});

const SearchBox = () => {
  return (
    <>
      <Grid container spacing={1}  >
          <Grid item xs={3} sx={{mt:1}}  >
            <SearchDropDown/>
          </Grid>
          <Grid item xs={7} sx={{mt:1}}  >
          <CustomTextField size="small" fullWidth id="outlined-basic" label="Search love questions and answers" variant="outlined" />
          </Grid>
          <Grid item xs={2} sx={{mt:1}}  >
          <CustomButton size="large" variant="outlined" startIcon={<SearchOutlinedIcon fontSize='inherit' />}>
      </CustomButton>
          </Grid>
       </Grid>   
    </>
  );
};

export default SearchBox;