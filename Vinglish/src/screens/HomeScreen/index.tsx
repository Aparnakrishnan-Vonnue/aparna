import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import {styles} from './styles';
import BottomSheet from '../../components/BottomSheet';
import {useState} from 'react';
import {dictionary} from '../../data';
import Spacer from '../../components/Spacer';
import Drawer from '../../components/Drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';

interface Dictionary {
  word: string;
  meaning: string;
  synonyms: string;
  usage: string;
  partsOfSpeech: string;
}

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentWordObj, setCurrentWordObj] = useState<Dictionary>({
    word: '',
    meaning: '',
    synonyms: '',
    usage: '',
    partsOfSpeech: '',
  });

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex];
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setCurrentWordObj(getRandomWord());
  };

  return (
    <ScreenWrapper style={styles.screenWrapper}>
      <TouchableOpacity onPress={() => setIsDrawerOpen(!isDrawerOpen)}>
        {!isDrawerOpen ? (
          <Icon
            name="navicon"
            size={FONTSIZES.md}
            color={COLORS.action.tertiary}
          />
        ) : (
          <Icon
            name="close"
            size={FONTSIZES.md}
            color={COLORS.action.tertiary}
          />
        )}
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/books.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Generate Word" variant="PRIMARY" onClick={handleClick} />
      </View>
      <BottomSheet isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {currentWordObj && (
          <View>
            <Text style={styles.wordText}>{currentWordObj?.word}</Text>
            <Spacer space={18} />
            <Text style={styles.partsOfSpeech}>
              {currentWordObj?.partsOfSpeech}
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>meaning: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.meaning}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>synonyms: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.synonyms}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.titleText}>usage: </Text>
              <Text style={[styles.titleText, styles.descriptionText]}>
                {currentWordObj?.usage}
              </Text>
            </Text>
          </View>
        )}
        <Spacer space={22} />
        <Button
          variant="SECONDARY"
          label="Got it !"
          onClick={() => setIsModalOpen(false)}
        />
      </BottomSheet>
      <Drawer isOpen={isDrawerOpen} />
    </ScreenWrapper>
  );
};

export default HomeScreen;
