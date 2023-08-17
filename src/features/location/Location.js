import { useEffect, useState } from "react"

export function Location(){
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        position => {
            const locationObject = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
            };
            setLocation(locationObject);
        },
        err => setError(err)
        );
    }, []);

    return { location, error };
}
