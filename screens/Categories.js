import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Categories = () => {
  const categories = ['Work', 'Personal', 'Home', 'Others'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryItem: {
    padding: 15,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Categories;
