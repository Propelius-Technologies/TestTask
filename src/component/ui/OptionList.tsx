import React from 'react';
import {FlatList, Image, View, StyleSheet} from 'react-native';

interface Option {
  id: number;
  url: string;
}

interface OptionListProps {
  data: Option[];
}

const OptionList: React.FC<OptionListProps> = ({data}) => {
  const optionRenderItem = ({item}: {item: Option}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item.url}} resizeMode="cover" style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={data}
      horizontal
      style={styles.container}
      renderItem={optionRenderItem}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 170,
    margin: 5,
    borderRadius: 5,
  },
});

export default OptionList;
