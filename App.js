import React from 'react';
import { StyleSheet, TextInput, View ,Button, Text} from 'react-native';

export default class App extends React.Component {
  
  state={
    
    placename:'',
    place:['hey']
  }

  placeHandler=(val)=>{

      this.setState({

        placename:val

      })    
  }

  clickHandler=()=>{

      // alert(this.state.place)

    this.setState(prevState=> {

      return{

        place:prevState.place.push(prevState.placename)
      }
    })
    
  }
  
  render() {


    // var listt = this.state.place.map((each,i)=> <Text key={i}> {each} </Text>)

    return (

      <View style={styles.container}>

      <View style={styles.children}>

       <TextInput 
        
        placeholder="What sayy???"

        style={{width:250}}
        
        // value = {this.state.place}

        onChangeText={this.placeHandler}

        />

       <Button title="Add" onPress={this.clickHandler}/>

      </View>

      {this.state.place[0]}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,   
    padding:20, 
    
  },

  children:{
    
    flexDirection:'row',
    justifyContent: 'space-between',
    
  }
});
