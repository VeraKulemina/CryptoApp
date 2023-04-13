import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from './components/ListItem';

export default App = () => {
    return  (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Hello World</Text>
        {/* <StatusBar style="auto"/> */}
        </View>
        <View style={styles.divider}/>
        <ListItem/>
    </View>

    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    },
    titleWrapper:{
    marginTop: 80,
    paddingHorizontal: 16,
    },
    largeTitle: {
    fornSize: 24,
    fontWeight: "bold",
    },
    divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,

    }
});



