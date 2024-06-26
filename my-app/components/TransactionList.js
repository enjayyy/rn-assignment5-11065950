import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const TransactionList = ({company, industry, fee,  icon, customFeeStyle }) => {
  return (
    <View style={[styles.card]}>
      <View style={styles.iconContainer}>
      <Image source={icon} style={{width:22, height:22,resizeMode:'contain'}} />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.topRow}>
          <Text style={styles.company}>{company}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.industry}>{industry}</Text>
        </View>

      </View>
      <Text style={[styles.fee, customFeeStyle]}>{fee}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      margin: 8,
      backgroundColor: 'white',
      borderRadius: 8,
    
      height:60, 
    },
  

  iconContainer: {
    backgroundColor:'#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width:48,
    height:48,
    marginLeft:12,
    borderRadius: 30,
  },
    
    detailsContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 25,
      marginTop: 19,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 25,
      marginTop: 2,

      marginBottom:13,
    },
    company: {
      fontSize: 19,
      fontWeight: '500',
    },
    industry: {
      fontSize: 14,
      color: 'gray',
      fontWeight: '200',
  
  
    },
    location: {
      fontSize: 16,
      color: 'darkgray',
      fontWeight: '200',
  
  
    },
    fee: {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default TransactionList;
  