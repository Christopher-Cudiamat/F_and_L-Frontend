'use client';

import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

const GoogleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  console.log('process.env.GOOGLE_MAP_API_KEY', typeof process.env.GOOGLE_MAP_API_KEY);
  return (
    // Important! Always set the container height explicitly
    <div className='h-[700px] lg:h-[500px] w-full xl:w-[1300px] xl:px-4 mx-auto rounded-md'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyARD2gmektqE4cVBX5SPma_iYAIRklnXmY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
              lat={"59.955413"}
              lng={"30.337844"}
              text="My Marker"
            /> */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
