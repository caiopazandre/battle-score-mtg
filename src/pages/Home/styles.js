import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f2dfd3' 
    },
    containerButton: {
        borderTopRightRadius: 50,
        backgroundColor: 'orange',
        height: '18%',
        //width: '100%',
        marginVertical: '1.5%',
        alignItems: 'flex-start' 
    },
    button: {
        height: '100%', width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '900'
    },
    containerHeader: {
        alignItems: 'center', justifyContent: 'flex-end', height: '30%', width: '100%', backgroundColor: '#000', borderBottomLeftRadius: 50, borderBottomEndRadius: 50 
    },
    imageHeader: {
        width: '85%', height: '100%', marginLeft: '13%'
    },
    containerMenu: {
        paddingTop: '9%', flex: 1, justifyContent: 'center', backgroundColor: '#f2dfd3' 
    },
    containerFooter: {
        justifyContent: 'center', alignItems: 'center', width: '100%', height: '20%', backgroundColor: '#000' 
    },
    footerText: {
        marginTop: '10%', fontWeight: 'bold', fontSize: 28, fontFamily: 'serif', color: '#f2dfd3' 
    },
    footerBorderEffect: {
        position: 'absolute', bottom: '11%', width: '100%', height: '10%', backgroundColor: '#f2dfd3', borderBottomLeftRadius: 100, borderBottomEndRadius: 100 
    }
});

export default styles;