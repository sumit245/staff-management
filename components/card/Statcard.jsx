import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { INFO_COLOR, LIGHT, SCREEN_WIDTH } from "../../styles/constant";
import H1 from "../text/H2";
import { Span } from "../text";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../../styles/components.styles";
import { useEffect } from "react";

export default function StatCard({ backgroundColor, tasks, status, onPress }) {
  return (
    <TouchableOpacity>
      <Card style={{ ...styles.statCard, backgroundColor }} onPress={onPress}>
        <View style={styles.row}>
          <View>
            <H1 style={styles.titleText}>{tasks}</H1>
            <Span>{status}</Span>
          </View>
          <Icon name="add-circle-outline" color={LIGHT} size={32} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}
