import { Image, TouchableOpacity } from 'react-native'
import styles from './screenheader.style'

export default function ScreenHeaderBtn({iconUrl, dimension}) {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}