import { StyleSheet, TextInput, View, Button, Pressable, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors, spacing } from '../components/theme'

export default function Information() {
  return (
    <View style={styles.container}>
        <Text preset="h3">Employee information</Text>

        <View style={[styles.card, styles.shadowProp]}>
            <Text preset="paragraph">Leave type</Text>
            <TextInput style={styles.InputBox} placeholder="Type your location"></TextInput>

            <View style={{flexDirection: "row"}}>
                <View style={{width: "45%"}}>
                    <Text preset="paragraph">From Date</Text>
                    <TextInput style={styles.InputBox} placeholder="Type From Date"></TextInput>
                </View>
                <View style={{width: "45%", marginLeft: "10%"}}>
                    <Text preset="paragraph">To Date</Text>
                    <TextInput style={styles.InputBox} placeholder="Type To Date"></TextInput>
                </View>
            </View>
            <Text preset="paragraph">Location</Text>
            <TextInput style={styles.InputBox} placeholder="Type your location"></TextInput>

            <Text preset="paragraph">Reason</Text>
            <TextInput style={styles.InputBox} placeholder="Type your Reason"></TextInput>
            
            <Pressable style={{flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../image/upload.png')}/>
              <Text preset="paragraph" style={{marginLeft: 10}}>File Upload</Text>
            </Pressable>
        </View>
        <Button title="Apply" color="#299647"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: spacing[6]
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: spacing[7],
    paddingHorizontal: spacing[7],
    width: '100%',
    marginVertical: spacing[5],
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  InputBox: {
    color: colors.black,
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 1,
    marginTop: -10,
    marginBottom: spacing[5]
  }
})