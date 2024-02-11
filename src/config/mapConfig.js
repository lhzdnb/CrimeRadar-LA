export const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const mapStyles = [
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  styles: mapStyles,
};
