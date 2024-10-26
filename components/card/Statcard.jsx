import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Span, H1 } from "../text";
import { styles, LIGHT, spacing } from "../../styles";

export default function StatCard({ backgroundColor, tasks, status, onPress }) {
  return (
    <TouchableOpacity style={[spacing.mb2, { ...styles.statCard, backgroundColor }]} onPress={onPress}>
      <View style={styles.row}>
        <View>
          <H1 style={styles.titleText}>{tasks}</H1>
          <Span>{status}</Span>
        </View>
        <Icon name="add-circle-outline" color={LIGHT} size={32} />
      </View>
    </TouchableOpacity>
  );
}
