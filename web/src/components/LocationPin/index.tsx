import { FC } from "react";
import { HiLocationMarker } from "react-icons/hi";

const LocationPin: FC<{
  text: string;
}> = ({ text }) => (
  <div className="pin">
    <HiLocationMarker />
    <p className="pin-text">{text}</p>
  </div>
);


export default LocationPin;