import { StyleSheet, Text, TouchableOpacity, View, Image, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';

const SettingsScreen = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    // Update the app's theme based on the switch state
    const updateTheme = () => {
      const theme = isDarkMode ? 'dark' : 'light';
      // Logic to update the app's theme, e.g., using a context or state management
      // Example: updateTheme(theme);
    };
    updateTheme();
  }, [isDarkMode]);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.container}>
      <View style={styles.header}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Settings</Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.settingsTab}>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Language</Text>   
            <Image source={require("./assets/angle-small-right.png")} style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>My Profile</Text>   
          <Image source={require("./assets/angle-small-right.png")} style={styles.arrow} />       
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Contact Us</Text>   
          <Image source={require("./assets/angle-small-right.png")} style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Change Password</Text>   
          <Image source={require("./assets/angle-small-right.png")} style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <Text style={isDarkMode ? styles.darkOptionText : styles.optionText}>Privacy Policy</Text>   
          <Image source={require("./assets/angle-small-right.png")} style={styles.arrow} />
        </TouchableOpacity>

        <View style={styles.Toggle}>
          <Text style={isDarkMode ? styles.darkOptionTogText : styles.optionTogText}>Theme</Text>
          <Switch
            trackColor={{ false: "blue", true: "#1CE830" }}
            thumbColor={isDarkMode ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#161622',
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  darkText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
  },
  settingsContainer: {
    marginTop: 30,
  },
  settingsTab: {
    flexDirection: 'column',
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 2,
    marginLeft: 30,
    marginRight: 30,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  Toggle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
    paddingBottom: 15,
    paddingHorizontal: 2,
    marginLeft: 30,
    marginRight: 30,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  darkOptionText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  optionTogText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
  },
  darkOptionTogText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
  },
  arrow: {
    width: 25,
    height: 20,
  },
});
