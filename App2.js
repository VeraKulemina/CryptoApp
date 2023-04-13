import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.coincap.io/v2/assets')
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

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "blue",
    color: "white",
    padding: 2,
    margin: 2,
  },
});