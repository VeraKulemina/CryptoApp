import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
  
    fetchData(); // call it once when component mounts
  
    const interval = setInterval(() => {
      fetchData(); // call it every second
    }, 2000);
  
    return () => clearInterval(interval); // cleanup function
  }, []);
  

  return (

    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>accets</Text>
          <FlatList
          data={data.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
          <Text style={styles.item} >
          {item.symbol}, {item.priceUsd}
          </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> parent of e8b67de (123)
