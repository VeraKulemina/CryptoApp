import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default ListItem=({name, symbol, currentPrice, price7d, logo}) =>{
    return (
    <TouchableOpacity>
         <View style={styles.itemWrapper}>
            {/* left side */}
            <View style={styles.leftWrapper}>
                <Image source={{ uri: logo}} style={styles.image}/>
                <View style={styles.titlesWrapper}></View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
            {/* right side */}
            <View style={styles.rigthWrapper}>
                <Text style={styles.title}>{currentPrice}</Text>
                <Text style={[styles.subtitle, {color: "red"}]}>{price7d}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    itemWrapper: {
      paddingHorizontal: 16,
      marginTop: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
    },
    leftWrapper: {
      flexDirection: "row",
      alignItems: 'center',
    },
    image: {
      height: 48,
      width: 48,
    },
    titlesWrapper: {
      marginLeft: 8,
    },
    title: {
      fontSize: 18,
    },
    subtitle: {
      marginTop: 4,
      fontSize: 14,
      color: "#A9ABB1",
    },
    rightWrapper: {
      alignItems: 'flex-end',
    },
  })