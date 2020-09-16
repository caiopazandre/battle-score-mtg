import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Text, View } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

export default function App() {
  useKeepAwake();
  const [countOne, setcountOne] = useState(20);
  const [countTwo, setcountTwo] = useState(20);

  const [playerOne, setplayerOne] = useState(0);
  const [playerTwo, setplayerTwo] = useState(0);

  function verification(){
    if(countOne ==1){
      setplayerTwo(playerTwo + 1)
    }
    if(countTwo ==1){
      setplayerOne(playerOne + 1)
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* primary buttons */}
      <TouchableOpacity onPress={() => setcountOne(countOne - 1, verification())} style={styles.countOneButton}>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 1, marginRight: 5, backgroundColor: '#f0f2f2', position: 'absolute', right: 0, top: 0, height: 60, width: 40 }}>
          <Text style={{ fontSize: 35 }}>{playerOne}</Text>
        </View>

        <Text style={styles.countOneText}>{countOne}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setcountTwo(countTwo - 1, verification())} style={styles.countTwoButton}>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 1, marginLeft: 5, backgroundColor: '#f0f2f2', position: 'absolute', left: 0, top: 0, height: 60, width: 40 }}>
          <Text style={{ fontSize: 35 }}>{playerTwo}</Text>
        </View>

        <Text style={styles.countTwoText}>{countTwo}</Text>
      </TouchableOpacity>


      {/* botão de reset */}
      <TouchableOpacity onPress={() => { setcountOne(20), setcountTwo(20) }} style={styles.resetMtgButton}>
        <Text style={styles.resetMtgText}>MTG</Text>
      </TouchableOpacity>

      {/* -1 or +1 player One */}
      <TouchableOpacity onPress={() => setcountOne(countOne + 1)} style={{ backgroundColor: '#afeeee', left: '15%', top: '4%', position: 'absolute', borderRadius: 50, height: 50, width: 50, transform: [{ rotate: "180deg" }], justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setcountOne(countOne - 1)} style={{ backgroundColor: '#afeeee', right: '15%', top: '4%', position: 'absolute', borderRadius: 50, height: 50, width: 50, transform: [{ rotate: "180deg" }], justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>-1</Text>
      </TouchableOpacity>

      {/* -1 or +1 player Two */}
      <TouchableOpacity onPress={() => setcountTwo(countTwo + 1)} style={{ backgroundColor: '#98FB98', left: '15%', bottom: '4%', position: 'absolute', borderRadius: 50, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setcountTwo(countTwo - 1)} style={{ backgroundColor: '#98FB98', right: '15%', bottom: '4%', position: 'absolute', borderRadius: 50, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>-1</Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countOneButton: {
    backgroundColor: '#3b5998', height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: "180deg" }]
  },
  countOneText: {
    fontSize: 70,
  },
  countTwoButton: {
    backgroundColor: 'green', height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center'
  },
  countTwoText: {
    fontSize: 70
  },
  resetMtgButton: {
    position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#172727', height: 80, width: 80, borderRadius: 50
  },
  resetMtgText: {
    color: '#fff'
  }

});
