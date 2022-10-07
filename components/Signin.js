import {useState, React} from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

function HomeScreen() {

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen</Text>
      <Button title= 'Go to details' onPress={()=>navigation.navigate("Details")}/>
    </View>
  );
}

function DetailScreen({route, navigation}) {
  return(
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button title='back' onPress={() =>navigation.navigate('Home')}/>
    <Button title='go back' onPress={() =>navigation.goBack()}/>
   </View>

  )  
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={HomeScreen} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function Signin ({navigation}) {
const [Email , setEmail] =useState('');
const [Password , setPassword] =useState('');

 const nextpage = (()=>{
     navigation.navigate('home')
 })
return(
<View style={styles.container}>
<TextInput placeholder="Enter Email"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Password"style = {styles.input} onChangeText={(task =>setTask(task))}/>
<TouchableOpacity style={styles.btn}

onPress={nextpage}
 >
<Text> Signin </Text>
</TouchableOpacity >
 </View>
);
};

const styles = StyleSheet.create({
  container: {
  },
 input: {
    width: 350,
    height:50,
    backgroundColor: 'light grey',
    padding:12,
    borderRadius:15,
  },
  btn: {
    backgroundColor:'white' ,
    width:100,
    height:40,
    marginLeft:85,
    marginTop:50,
    paddingLeft:12,
    paddingTop:15,
  },
  });

