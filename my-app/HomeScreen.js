import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
    <ScrollView>
    <View style={styles.header}>
        <View>
        <Image source={require("./assets/profile.png")} style={styles.icon} />
        </View>
          <Text style={styles.title}>Welcome back,</Text>
          <Text style={styles.email}>Eric Atsu</Text>
          </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    
})