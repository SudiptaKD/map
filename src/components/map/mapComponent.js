import Box from "@mui/material/Box";
import dynamic from 'next/dynamic';

function MapComponent() {
  const Map = dynamic(
    () => import('./map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )
  return (
    <>
      <Box sx = {{width:"full", height:"40vw"}} >
       <div className="border-2 w-full h-full border-black  border-solid">
        <Map />
       </div>
      </Box>
    </>
  )
  

}

export default MapComponent