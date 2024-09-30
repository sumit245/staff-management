import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles/components.styles";

const Pagination = ({
  totalItems, // Total number of items
  itemsPerPage, // Number of items per page
  currentPage, // Current page number
  onPageChange, // Function to call when page changes
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total number of pages

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Previous Button */}
      <TouchableOpacity
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={[
          styles.button,
          currentPage === 1 && styles.disabledButton, // Disable button if on the first page
        ]}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>

      {/* Page Info */}
      <Text style={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </Text>

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={[
          styles.button,
          currentPage === totalPages && styles.disabledButton, // Disable button if on the last page
        ]}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 10,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderColor: "#ccc",
//   },
//   button: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: "#6200ee",
//     borderRadius: 4,
//   },
//   disabledButton: {
//     backgroundColor: "#aaa",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   pageInfo: {
//     marginHorizontal: 20,
//     fontSize: 16,
//   },
// });

export default Pagination;
