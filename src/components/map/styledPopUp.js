import { Popup } from 'react-leaflet';
import styled from "styled-components";

export const StyledPop = styled(Popup)`
  border-radius: 0;
  .leaflet-popup-content-wrapper {
    border-radius: 0;
    padding:0;
  }
  .leaflet-popup-content {
    margin: 0;
  }
`;