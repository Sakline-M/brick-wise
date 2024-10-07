import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      style={{ height: "10rem", width: "100%", zIndex: 0 }}
    ></MapContainer>
  );
};

export default Map;
