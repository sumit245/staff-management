import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
    Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { launchCamera } from "react-native-image-picker";

const AttendancePunch = () => {
    const [location, setLocation] = useState(null);
    const [photoUri, setPhotoUri] = useState(null);

    const requestLocationPermission = async () => {
        try {
            if (Platform.OS === "android") {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "This app needs access to your location for attendance.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK",
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("Location permission granted");
                    getLocation();
                } else {
                    Alert.alert("Permission Denied", "Location permission is required.");
                }
            } else {
                getLocation();
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message: "This app needs access to your camera.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission granted");
            } else {
                Alert.alert("Permission Denied", "Camera permission is required.");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (error) => {
                Alert.alert("Error", "Unable to fetch location.");
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const openCamera = async () => {
        const options = {
            mediaType: "photo",
            cameraType: "front",
            quality: 1,
            includeBase64: true,
        };
        console.log(launchCamera)
        await launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorCode) {
                console.log("ImagePicker Error: ", response.errorCode);
            } else if (response.assets) {
                setPhotoUri(response.assets[0].uri);
            }
        });
    };

    useEffect(() => {
        requestLocationPermission();
        requestCameraPermission();
    }, []);

    const handlePunchIn = () => {
        if (!location || !photoUri) {
            Alert.alert(
                "Missing Information",
                "Please capture your face and allow location access before punching in."
            );
            return;
        }

        console.log("Punching in with location:", location);
        console.log("Photo URI:", photoUri);
        Alert.alert("Punch In Successful", "Your punch-in has been recorded.");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Attendance Punch</Text>
                <TouchableOpacity>
                    <Text style={styles.punchHistory}>Punch History</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mapContainer}>
                {location ? (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={location} title="Your Location" />
                    </MapView>
                ) : (
                    <Text style={styles.loadingText}>Fetching location...</Text>
                )}
            </View>

            {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.capturedImage} />
            ) : (
                <Text style={styles.noPhotoText}>No photo taken yet</Text>
            )}

            <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
                <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.punchInButton} onPress={handlePunchIn}>
                    <Text style={styles.buttonText}>PUNCH IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.punchOutButton}>
                    <Text style={styles.buttonText}>PUNCH OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    punchHistory: {
        color: "#007bff",
        fontSize: 16,
    },
    mapContainer: {
        height: 200,
        marginVertical: 20,
        borderRadius: 10,
        overflow: "hidden",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    loadingText: {
        textAlign: "center",
        fontSize: 16,
        color: "#666",
    },
    capturedImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
    },
    noPhotoText: {
        textAlign: "center",
        fontSize: 16,
        color: "#666",
    },
    cameraButton: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    punchInButton: {
        flex: 1,
        backgroundColor: "#28a745",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginRight: 10,
    },
    punchOutButton: {
        flex: 1,
        backgroundColor: "#ffc107",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginLeft: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AttendancePunch;
