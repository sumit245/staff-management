import { View, TouchableOpacity } from "react-native";
import { H5 } from "../components/text";
import { styles } from "../styles/components.styles";

const TabNavigation = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <View style={[styles.row, { marginVertical: 8 }]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.chipButton, currentTab === tab && styles.bgPrimary]}
          onPress={() => setCurrentTab(tab)}
        >
          <H5 style={[currentTab === tab ? styles.textLight : styles.textDark]}>
            {tab}
          </H5>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNavigation;
