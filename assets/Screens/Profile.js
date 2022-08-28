import {  StyleSheet, View, Image, Button } from 'react-native'
import React from 'react';
import { spacing } from '../components/theme/spacing';
import Text from '../components/text/text';
import { colors } from '../components/theme';

export default function Profile() {
  return (
      <View style={styles.container}>
            <View>
                  <View style={[styles.section, {alignItems: 'center', paddingTop: spacing[0]}]}>
                        <Image source={require('../image/women.png')} style={{height: 100, width:100,  borderRadius: 150}}/>
                        <View style={styles.text}>
                              <Text preset="h3">Dar Robertson</Text>
                              <Text preset="h6">Senior UX Designer</Text>
                              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <Text preset="h6">ID43178</Text>
                                    <Button title="Active" color="#299647"/>
                              </View>
                        </View>
                  </View>
                  <View style={styles.section}>
                        <View style={styles.image}>
                              <Image source={require('../image/resource.png')}/>
                        </View>
                        <View style={styles.text}>
                              <Text preset="h4">Human Resource</Text>
                              <Text preset="h6">Department</Text>
                        </View>
                  </View>
                  <View style={styles.section}>
                        <View style={styles.image}>
                              <Image source={require('../image/locationBag.png')}/>
                        </View>
                        <View style={styles.text}>
                              <Text preset="h4">28 September, 1990</Text>
                              <Text preset="h6">Date of Birth</Text>
                        </View>
                  </View>
                  <View style={[styles.section, {borderBottomWidth: 0}]}>
                        <View style={styles.image}>
                              <Image source={require('../image/man.png')}/>
                        </View>
                        <View style={[styles.text, {paddingRight: spacing[5], borderRightWidth: 1, borderRightColor: 'grey'}]}>
                              <Text preset="h4">Female</Text>
                              <Text preset="h6">Gender</Text>
                        </View>
                        <View style={styles.text}>
                              <Text preset="h4">Islam</Text>
                              <Text preset="h6">Religion</Text>
                        </View>
                  </View>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
      },
      section: {
            flexDirection: 'row',
            paddingBottom: spacing[7],
            paddingTop: spacing[7],
            borderBottomWidth: 1,
            borderBottomColor: colors.lightgrey
      },
      text: {
            marginLeft: 20,
      },
      image: {
            marginTop: 10
      }
})