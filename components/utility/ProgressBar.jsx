import { View, } from 'react-native'
import { styles } from '../../styles/components.styles'
import { H5 } from '../text'

export default function ProgressBar({ label = "", color = "#2b87b0", backgroundColor = "#e0e0e0", height = 20, progress = 1 }) {
  return (
    <View style={[styles.row, styles.fullWidth, { alignItems: 'center', paddingHorizontal: 20, marginVertical: 4 }]}>
      {label ? <H5>{label}</H5> : null}
      <View style={[styles.progressBarContainer, { backgroundColor, height }]}>
        <View
          style={[
            styles.progressBar,
            { width: `${progress}%`, backgroundColor: color },
          ]}
        />
      </View>
      <H5>{progress}%</H5>
    </View>
  )
}