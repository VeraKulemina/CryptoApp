import React, { useMemo, useRef, useState } from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem'; 
import  {SAMPLE_DATA} from './assets/data/sampleData';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Chart from './components/Chart'; 




const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View >
    <View style={styles.divider}/>
  </>
)

export default App = () => {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);
  
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();}


  return (
  <BottomSheetModalProvider>
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
    onPress={() => openModal(item)}
    />
    )}
    ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
    <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
    >
      { selectedCoinData ? (
      <Chart
      currentPrice={selectedCoinData.current_price}
      logo={selectedCoinData.image}
      name={selectedCoinData.name}
      symbol={selectedCoinData.symbol}
      priceChange7d={selectedCoinData.price_change_percentage_7d_in_currency}
      sparkline={selectedCoinData.sparkline_in_7d.price}
      />
      ) : null}
    </BottomSheetModal>
  </BottomSheetModalProvider>
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
  largeTitle:{
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d