import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ListItem from './components/ListItem'; 
import  {SAMPLE_DATA} from './assets/data/sampleData'

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View >
    <View style={styles.divider}/>
  </>
)

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  return (
  <SafeAreaView style={styles.container}>
    
    <FlatList 
    data={SAMPLE_DATA}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <ListItem 
    name={item.name}
    currentPrice={item.current_price}
    logo={item.image}
    priceChange7d={item.price_change_percentage_7d_in_currency}
    symbol={item.symbol}
    />
    )}
    ListHeaderComponent={<ListHeader />}
    />
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper:{
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle:{
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hailineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  }
})

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d