import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import TransactionList from './components/TransactionList';
import { FlatList } from 'react-native';
import { ThemeContext } from './ThemeContext';
import React, { useContext } from 'react';

const transaction=[
  {
    company: 'Apple Store',
    industry: 'Entertainment',
    fee:'-$5.33',
    icon: require('./assets/apple.png'),
    

  },
  {
    company: 'Spotify',
    industry: 'Music',
    fee:'-$5.33',
    icon: require('./assets/spotify.png'),

  },
  {
    company: 'Money Transfer',
    industry: 'Transaction',
    fee:'$300' ,
    icon: require('./assets/moneyTransfer.png'),
    customFeeStyle: {color:'#0066FF'},
  },

  {
    company: 'Grocery',
    industry: 'Household',
    fee:'-$88' ,
    icon: require('./assets/grocery.png'),
  },

]


const HomeScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
    <ScrollView>
    <View style={styles.header}>
        <View>
        <Image source={require("./assets/profile.png")} style={styles.profilPic} />
        </View>
        <View style={styles.profilehead}>
          <Text style={styles.profileheader1}>Welcome back,</Text>
          <Text style={styles.profileHeader2}>Eric Atsu</Text>
          </View>

          <TouchableOpacity style={styles.search}  >
          <Image source={require("./assets/search.png")}  />
        </TouchableOpacity>  
          </View>

          <View style={styles.card}>
            <Image source={require("./assets/Card.png")} />
          </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.transactionIcon} >
        <Image source={require("./assets/send.png")}  />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.transactionIcon} >
        <Image source={require("./assets/recieve.png")}  />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.transactionIcon} >          
        <Image source={require("./assets/loan.png")}  />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.transactionIcon} >
        <Image source={require("./assets/topUp.png")}  />
          </TouchableOpacity>
      </View>

    <View style={styles.container3}>
      <View >
       <Text style={{
        marginLeft:30, 
        fontSize:14, 
        fontWeight:'300'}}>  Sent</Text>
        </View>

        <View>
        <Text style={{
          fontSize:14,
          marginLeft:56, 
          fontWeight:'300'}}>Receive</Text>
        </View>

        <View >
        <Text style={{
          fontSize:14,
          marginLeft:56, 
          fontWeight:'300'}}>Loan</Text>
        </View>

        <View >
        <Text style={{
          fontSize:14,
          marginLeft:72, 
          fontWeight:'300'}}>Topup</Text>
        </View>
        </View>


          <View  style={styles.headerT}>
        <Text style={styles.title1}>Transactions</Text>
        <Text style={{marginRight:40, color:'#0066FF' }}>See All</Text>
        </View>

      <View>
      <FlatList
        data={transaction}
        renderItem={({ item }) => (
          <TransactionList
            company={item.company}
            industry={item.industry}
            fee={item.fee}           
            icon={item.icon} 
            customFeeStyle={item.customFeeStyle}          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </ScrollView>
  
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10,
        backgroundColor:'white',
    },
    darkContainerr: {
      flexDirection: 'row', 
      alignItems: 'center', 
      padding: 10,
      backgroundColor:'black',
  },
    container2: {
      flexDirection: 'row', 
      alignItems: 'center', 
      padding: 1,
      
      justifyContent: 'space-evenly',
      marginTop: 7,
      
  },

  headerT:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  container3: {
    flexDirection: 'row', 
    marginLeft:1,
    
},


    header:{
    marginTop: 30,
    marginLeft:40,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:'center',
 
  },
 
profilehead:{
    marginLeft:15,

},

  profilePic:{
  width: 55,
  height: 55,
  borderRadius: 25,
  overflow: 'hidden',
  marginLeft: 40,
},


profileHeader1:{
  fontFamily: 'Poppins',
  fontSize: 24,
  marginBottom:2,
  color: '#E6E6E6',
 
  
},


profileHeader2:{
  fontSize: 19,
  fontWeight: '500',

  marginTop:5,

},

search:{
backgroundColor: '#E6E6E6',
marginLeft:115,
padding:15,
borderRadius:30,
},

transactionIcon:{
backgroundColor: '#E6E6E6',
margin:15,
padding:17,
borderRadius:30,
},

card:{
marginTop:30,
justifyContent:'center',
alignItems:'center',
},

title:{
fontSize:18,
fontWeight:'300'
},

title1:{
  fontSize:20,
  marginLeft: 30,
  marginTop:20,
  fontWeight:'400',
}

});