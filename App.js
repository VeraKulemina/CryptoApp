import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (

  <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>accets</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
          data={data.data}
          keyExtractor={({data}) => data.id}
          renderItem={({item}) => (
            <Text style={{ fontSize: 14, color: 'black', paddingBottom: 20}}>
              {item.symbol}, {item.priceUsd}
            </Text>
            )}
          />
        </View>
      )}
    </View>
  );
}