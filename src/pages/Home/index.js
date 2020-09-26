import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, BackHandler} from 'react-native';
import { deactivateKeepAwake } from 'expo-keep-awake';

import styles from './styles';

export default function Home({ navigation }) {
    deactivateKeepAwake();
    const [screen, setScreen] = useState('Home');
    const _exit = () =>
        Alert.alert("Exit", "Are you sure you want to leave?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.containerHeader}>
                <ImageBackground
                    style={styles.imageHeader}
                    source={require('../../assets/menu.jpg')}
                >
                </ImageBackground>
            </View>

            {/* containerButton Options */}
            <View style={styles.containerMenu}>

                <View style={[styles.containerButton, { width: '70%'}]}>
                    <TouchableOpacity onPress={() => setScreen('Battle Score', navigation.push('BattleScore'))} style={styles.button}>
                        <Text style={styles.buttonText}>Battle Score</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containerButton, { width: '80%' }]}>
                    <TouchableOpacity onPress={() => setScreen('Cards', navigation.push('Cards'))} style={styles.button}>
                        <Text style={styles.buttonText}>Cards</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containerButton, { width: '90%'}]}>
                    <TouchableOpacity onPress={() => setScreen('Settings', navigation.push('Settings'))} style={styles.button}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containerButton, { width: '98%'}]}>
                    <TouchableOpacity onPress={() => setScreen('Exit', _exit())} style={styles.button}>
                        <Text style={styles.buttonText}>Exit</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Footer */}
            <View style={styles.containerFooter}>
                <Text style={styles.footerText}>{screen}</Text>
            </View>
            <View style={styles.footerBorderEffect}>
            </View>
        </View>
    );
}

