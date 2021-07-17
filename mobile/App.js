import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState({});

  const getData = () => {
    axios.get("https://stockily-backend.herokuapp.com/api/symbol/AAPL").then(data => {
      setData(data.data);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
