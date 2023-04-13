import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ListItem=() =>{
    return (
    <TouchableOpacity>
         <View style={styles.itemWrapper}>
            {/* left side */}
            <View style={styles.leftWrapper}>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"}}/>
            </View>
            {/* right side */}
            <View style={styles.rigthWrapper}></View>
        </View>
    </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({

})