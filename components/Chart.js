import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
// import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';

// import { beginEvent } from 'react-native/Libraries/Performance/Systrace'

const Chart = ({name, symbol, currentPrice, priceChange7d, logo, sparkline}) => {

  const priceChangeColor = priceChange7d > 0 ? "#34C759" : "#FF3B30";

  return (
    <ChartPathProvider>
    <View style={styles.chartWrapper}>
      {/* titles */}
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source= {{uri: logo}} style={styles.image}/>
            <Text style={styles.subTitle}>{name} ({symbol.toUpperCase()})</Text>
          </View>
          <Text style={styles.subTitle}>7days</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
          <Text style={[styles.title, {color: priceChangeColor}]}>{priceChange7d.toFixed(2)}%</Text>
        </View>
      </View> 
    </View>
    </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16
  
  },
  titlesWrapper: {

  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24, 
    margin: 4,
  },
  subTitle: {
    fontSize: 14,
    color: "#A9ABB1",
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
  }
})

export default Chart;