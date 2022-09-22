import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';


const UButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '3px 8px',
  color: theme.palette.getContrastText("#ED028C"),
  backgroundColor: "#ED028C",
  '&:hover': {
    backgroundColor: "#ED028C",
  },
}));

export default function CButton() {
  return (
      <UButton variant="contained">Upload all related</UButton>
    
  );
}
