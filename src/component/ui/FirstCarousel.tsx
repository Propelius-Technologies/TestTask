import React from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

interface FirstCarouselProps {
  images: string[];
  setSelectedImage: (image: string) => void;
  flatListRef: React.RefObject<FlatList<string> | null>;
}

const FirstCarousel: React.FC<FirstCarouselProps> = ({
  images,
  setSelectedImage,
  flatListRef,
}) => {
  const renderItem = ({item, index}: {item: string; index: number}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedImage(item);
        if (index === 3) {
          flatListRef?.current?.scrollToEnd({animated: true});
        } else if (index === 1) {
          flatListRef?.current?.scrollToOffset({offset: 0});
        }
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item}} resizeMode="cover" style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={images}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 5,
  },
});

export default FirstCarousel;
