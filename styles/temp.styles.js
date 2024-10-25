import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, PRIMARY_COLOR } from "./constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    cameraContainer: {
        height: SCREEN_WIDTH / 1.5,
        width: SCREEN_WIDTH / 1.5,
        borderRadius: SCREEN_WIDTH / 3,
        borderWidth: 6,
        borderColor: PRIMARY_COLOR,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    camera: {
        height: SCREEN_WIDTH / 1.5,
        width: SCREEN_WIDTH / 1.5,
    },
    capturedImageContainer: {
        height: 240,
        width: 240,
        borderRadius: 120,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    capturedImage: {
        height: "100%",
        width: "100%",
        borderRadius: 120,
        position: "absolute",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 2,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    punchHistory: {
        fontSize: 16,
        color: "#2b87b0",
    },
    mapContainer: {
        height: 300,
        marginVertical: 20,
        borderRadius: 10,
        overflow: "hidden",
    },
    map: {
        width: SCREEN_WIDTH - 20,
        height: SCREEN_WIDTH,
    },
    loadingText: {
        textAlign: "center",
        fontSize: 16,
        color: "#666",
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
