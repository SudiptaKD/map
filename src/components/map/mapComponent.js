import Box from "@mui/material/Box";
import dynamic from 'next/dynamic';

function MapComponent() {
  const Map = dynamic(
    () => import('./map'), 
    { 
      loading: () => <p>Map is loading</p>,
      ssr: false //
    }
  )
  return (
    <>
      <Box sx = {{width:"full", height:"70vh",  border: '1px solid black'}} >
        <Map />
      </Box>
    </>
  )
  

}

export default MapComponent