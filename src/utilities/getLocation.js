function getLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          reject(new Error("Cannot get user's current location"));
        },
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

export default async function fetchLocation() {
  try {
    return await getLocation();
  } catch (error) {
    console.error(error);
  }
}
