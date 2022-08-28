import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { spacing } from '../components/theme'

export default function Employee() {
  return (
    <View style={styles.container}>
      <Text preset="h3">Employee Application</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: spacing[8], marginBottom: spacing[8]}}>
            <View>
                  <Image source={require('../image/leave.png')} style={{width: 70, height: 70, margin: 'auto'}}/>
                  <Text preset="h5" centered>A</Text>
            </View>
            <View>
                  <Image source={require('../image/car.png')} style={{width: 70, height: 70}}/>
                  <Text preset="h5" centered>B</Text>
            </View>
            <View>
                  <Image source={require('../image/location.png')} style={{width: 70, height: 70}}/>
                  <Text preset="h5" centered>C</Text>
            </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View>
                  <Image source={require('../image/doller.png')} style={{width: 70, height: 70}}/>
                  <Text preset="h5" centered>D</Text>
            </View>
            <View>
                  <Image source={require('../image/loan.png')} style={{width: 70, height: 70}}/>
                  <Text preset="h5" centered>E</Text>
            </View>
            <View>
                  <Image source={require('../image/overTime.png')} style={{width: 70, height: 70}}/>
                  <Text preset="h5" centered>F</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: spacing[6]
      },
})