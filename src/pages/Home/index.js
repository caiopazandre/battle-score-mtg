import React, { useState } from 'react';
import { TouchableOpacity, StatusBar, Text, View } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from './styles';

export default function Home() {
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

        <View style={styles.playerOneButton}>
          <Text style={styles.playerText}>{playerOne}</Text>
        </View>

        <Text style={styles.countOneText}>{countOne}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setcountTwo(countTwo - 1, verification())} style={styles.countTwoButton}>

        <View style={styles.playerTwoButton}>
          <Text style={styles.playerText}>{playerTwo}</Text>
        </View>

        <Text style={styles.countTwoText}>{countTwo}</Text>
      </TouchableOpacity>


      {/* botão de reset */}
      <TouchableOpacity onPress={() => { setcountOne(20), setcountTwo(20) }} style={styles.resetMtgButton}>
        <Text style={styles.resetMtgText}>MTG</Text>
      </TouchableOpacity>

      {/* -1 or +1 player One */}
      <TouchableOpacity onPress={() => setcountOne(countOne + 1, verification())} style={styles.countOneButtonPlus}>
        <Text style={styles.countTextPlusAndLess}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setcountOne(countOne - 1, verification())} style={styles.countOneButtonLess}>
        <Text style={styles.countTextPlusAndLess}>-1</Text>
      </TouchableOpacity>

      {/* -1 or +1 player Two */}
      <TouchableOpacity onPress={() => setcountTwo(countTwo + 1, verification())} style={styles.countTwoButtonPlus}>
        <Text style={styles.countTextPlusAndLess}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setcountTwo(countTwo - 1, verification())} style={styles.countTwoButtonLess}>
        <Text style={styles.countTextPlusAndLess}>-1</Text>
      </TouchableOpacity>
    </View >
  );
}