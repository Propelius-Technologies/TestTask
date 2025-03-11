import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MainStackScreenProps} from '../types/navigation.types.ts';
import {images, menuOptions, optionImages} from '../constant/data.tsx';
import Header from '../component/ui/Header.tsx';
import FirstCarousel from '../component/ui/FirstCarousel.tsx';
import OptionList from '../component/ui/OptionList.tsx';
import MenuOptionsList from '../component/ui/MenuOptionList.tsx';
import {deployRoomRedesign} from '../api/api.tsx';

interface SplashScreenProps extends MainStackScreenProps<'Home'> {}

const HomeScreen: React.FC<SplashScreenProps> = ({}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const flatListRef = useRef<FlatList<string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const callAPI = async () => {
      setLoading(true);
      const response = await deployRoomRedesign();
      setResult(response.job.files);
      setSelectedImage(response.job.files[0]);
      setLoading(false);
    };

    callAPI().then();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {loading && selectedImage === '' ? (
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          <FirstCarousel
            images={result}
            setSelectedImage={setSelectedImage}
            flatListRef={flatListRef}
          />
          <View>
            <Image source={{uri: selectedImage}} style={styles.selectedImage} />
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <Image
                  source={require('../../assets/images/download.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </View>

              <View style={styles.iconWrapper}>
                <Image
                  source={require('../../assets/images/heart.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </View>

              <View style={styles.iconWrapper}>
                <Image
                  source={require('../../assets/images/message.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </View>
            </View>
          </View>
          <View style={styles.editWithTextView}>
            <Text style={styles.editText}>Edit with Text</Text>
          </View>
          <OptionList data={optionImages} />

          <MenuOptionsList
            options={menuOptions}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    marginTop: 20,
  },
  indicator: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImage: {
    width: '100%',
    height: 300,
    borderRadius: 5,
    marginTop: 10,
  },
  editWithTextView: {
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
  },
  editText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 700,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    left: 10,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    backgroundColor: '#b8ac9c',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});

export default HomeScreen;
