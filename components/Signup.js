import {useState, React} from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput } from 'react-native';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase';

export default function Login ({navigation}) {

   const nextpage = (()=>{
     navigation.navigate('home')
   })

const [firstname , setFirstName] =useState('');
const [lastname , setLastName] =useState('');
const [email , setEmail] =useState('');
const [password , setPassword] =useState('');
const [confirmpassword , setConfirmPassword] =useState('');

return(

<View style={styles.container}>

<TextInput placeholder="Enter First Name"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Last Name"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Email"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Password"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Confirm Password"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TouchableOpacity style={styles.btn}

onPress={nextpage}
 >
<Text>SignUp</Text>

</TouchableOpacity>

 </View>
);
}
const styles = StyleSheet.create({
  container: {
flex:1,
justifyContent:'center',
alignItems:'center',
  },
 input: {
    width: 350,
    height:50,
    backgroundColor: 'grey',
    padding:12,
    borderRadius:25,
    margin:10,
  },
  btn: {
    backgroundColor:'brown' ,
    width:150,
    height:40,
    marginLeft:85,
    marginTop:50,
    paddingLeft:12,
    paddingTop:15,
    borderRadius:20,
  },
  })