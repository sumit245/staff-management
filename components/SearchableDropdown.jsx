import React, { Component, Fragment } from "react";
import { View, Alert } from "react-native";
import SearchableDropdownNative from "react-native-searchable-dropdown";
import ContainerComponent from "./ContainerComponent";
import { originalItems } from "../utils/faker";
import { styles } from "../styles/components.styles";

class SearchableDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      filteredItems: originalItems, 
    };
  }

  handleTextChange = (text) => {
    if (text === "") {
      this.setState({ filteredItems: originalItems });
    } else {
      const filteredItems = originalItems.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );

      if (filteredItems.length === 0) {
        Alert.alert("Item not found");
      }

      this.setState({ filteredItems });
    }
  };

  render() {
    const { style, containerStyle, itemStyle, itemTextStyle, textInputStyle } = this.props; // Destructure passed style props

    return (
      <ContainerComponent>
        <Fragment>
          <View style={[styles.container, style]}>
            <SearchableDropdownNative
              multi={true}
              selectedItems={this.state.selectedItems}
              onItemSelect={(item) => {
                if (
                  !this.state.selectedItems.some(
                    (selected) => selected.id === item.id
                  )
                ) {
                  const items = [...this.state.selectedItems, item];
                  this.setState({ selectedItems: items });
                }
              }}
              containerStyle={[styles.dropdownContainer, containerStyle]} // Merge passed containerStyle
              onRemoveItem={(item) => {
                const items = this.state.selectedItems.filter(
                  (sitem) => sitem.id !== item.id
                );
                this.setState({ selectedItems: items });
              }}
              itemStyle={[styles.itemStyle, itemStyle]} // Merge passed itemStyle
              itemTextStyle={[styles.itemTextStyle, itemTextStyle]} // Merge passed itemTextStyle
              itemsContainerStyle={styles.itemsContainerStyle}
              items={this.state.filteredItems} // Use filteredItems for dropdown
              chip={true}
              resetValue={false}
              textInputProps={{
                placeholder: "Search Items",
                underlineColorAndroid: "transparent",
                style: [styles.textInput, textInputStyle], // Merge passed textInputStyle
                onTextChange: this.handleTextChange, // Update onTextChange
              }}
              listProps={{ nestedScrollEnabled: true }}
            />
          </View>
        </Fragment>
      </ContainerComponent>
    );
  }
}

export default SearchableDropdown;
