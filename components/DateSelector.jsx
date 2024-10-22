import { ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/components.styles";
import { H1, H4, H5, H6 } from "./text";

const DateSelector = ({ dates, activeDate, onSelectDate }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.dateSelector}
  >
    {dates.map((date, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.dateItem, date === activeDate && styles.activeDate]}
        onPress={() => onSelectDate(date)}
      >
        <H6 style={styles.dateNumber}>{date}</H6>
        <H5 style={styles.dateText}>Fri</H5>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default DateSelector;
