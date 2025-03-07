import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface Option {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface MenuOptionsListProps {
  options: Option[];
  selectedId: number | null;
  setSelectedId: (id: number) => void;
}

const MenuOptionsList: React.FC<MenuOptionsListProps> = ({
  options,
  selectedId,
  setSelectedId,
}) => {
  const menuOptionRenderItem = ({
    item,
    index,
  }: {
    item: {id: number; name: string; icon: React.ReactNode};
    index: number;
  }) => {
    const isSelected = selectedId === item.id;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected ? 'black' : 'transparent', // Change background when selected
            borderRadius: 10,
            padding: 10,
            margin: 5,
          }}>
          <View style={{padding: 5}}>{item.icon}</View>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 15}}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      data={options}
      horizontal
      style={styles.container}
      renderItem={menuOptionRenderItem}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  optionContainer: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: 'black',
  },
  optionText: {
    color: 'black',
  },
});

export default MenuOptionsList;
