import { StyleSheet } from 'react-native';


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

    playerOneButton: {
        justifyContent: 'center', alignItems: 'center', marginTop: 1, marginRight: 5, backgroundColor: '#f0f2f2', position: 'absolute', right: 0, top: 0, height: 60, width: 40
    },

    playerTwoButton: {
        justifyContent: 'center', alignItems: 'center', marginTop: 1, marginLeft: 5, backgroundColor: '#f0f2f2', position: 'absolute', left: 0, top: 0, height: 60, width: 40
    },
    playerText: {
        fontSize: 35
    },

    resetMtgButton: {
        position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#172727', height: 80, width: 80, borderRadius: 50
    },
    resetMtgText: {
        color: '#fff'
    },
    countOneButtonPlus: {
        backgroundColor: '#afeeee', left: '13%', top: '4%', position: 'absolute', borderRadius: 50, height: 62, width: 62, transform: [{ rotate: "180deg" }], justifyContent: 'center', alignItems: 'center'
    },
    countOneButtonLess: {
        backgroundColor: '#afeeee', right: '13%', top: '4%', position: 'absolute', borderRadius: 50, height: 62, width: 62, transform: [{ rotate: "180deg" }], justifyContent: 'center', alignItems: 'center'
    },


    countTwoButtonPlus: {
        backgroundColor: '#98FB98', left: '13%', bottom: '4%', position: 'absolute', borderRadius: 50, height: 62, width: 62, justifyContent: 'center', alignItems: 'center'
    },
    countTwoButtonLess: {
        backgroundColor: '#98FB98', right: '13%', bottom: '4%', position: 'absolute', borderRadius: 50, height: 62, width: 62, justifyContent: 'center', alignItems: 'center'
    },

    countTextPlusAndLess: {
        fontSize: 25,
    },
});

export default styles;