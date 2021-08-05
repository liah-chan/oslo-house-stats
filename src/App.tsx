import React, { FC, useEffect, useState } from "react";
import { Area, getAreas, getZipcodes, Zipcode } from "./finn-api";
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 16,
};

interface Center {
  lng: number;
  lat: number;
}

const App: FC = () => {
  const [zipcodes, setZipcodes] = useState<Zipcode[]>([]);
  const [center, setCenter] = useState<Center>();

  useEffect(() => {
    getZipcodes().then((zipcodes) => {
      console.log(zipcodes);
      setZipcodes(zipcodes);
    });
  }, []);

  return (
    <article>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={center}
        ></GoogleMapReact>
      </div>
      <h1>zipcodes</h1>
      {zipcodes.map((zipcode) => {
        return (
          <p
            key={zipcode.zipcode}
            // onClick={() => {
            //   setCenter({ lat: zipcode.links., lng: area.lon });
            // }}
          >
            {zipcode.zipcode}
          </p>
        );
      })}
    </article>
  );
};

export default App;
