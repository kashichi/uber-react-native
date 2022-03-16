import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTime } from '../redux/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';

const Map = () => {
    const mapRef = useRef(null);
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, left: 50, right: 50, bottom: 50 }
        });
        const getTravelTime = async () => {
            const { data } = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?
    units=imperial&origins=${origin.description}&destinations=
    ${destination.description}&key=api_key`)

            dispatch(setTravelTime(data.rows[0].elements[0]));
        }
        getTravelTime();


    }, [origin, destination])
    return (

        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination &&
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey="api_key"
                    strokeWidth={2}
                    strokeColor="#4A89F3"
                />
            }


            <Marker
                title='Origin'
                identifier='origin'
                description={origin?.description}
                coordinate={{
                    latitude: origin?.location?.lat,
                    longitude: origin?.location?.lng,

                }}
            />
            {destination && <Marker
                title='Destination'
                identifier='destination'
                description={destination?.description}
                coordinate={{
                    latitude: destination?.location?.lat,
                    longitude: destination?.location?.lng,

                }}
            />}




        </MapView>

    )
}

export default Map

const styles = StyleSheet.create({})