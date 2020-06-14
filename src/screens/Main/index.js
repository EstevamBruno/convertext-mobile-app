import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Clipboard,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import Result from '../../components/Result';

const Main = () => {
  const [textToConvert, setTextToConvet] = useState('');
  const [textTransform, setTextTransform] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [loading, setLoading] = useState(false);

  async function clipped() {
    setLoading(true);
    const clippedText = await Clipboard.getString();

    setTextToConvet(clippedText);
    setLoading(false);
  }

  function clipper() {
    Clipboard.setString(textTransform);
  }

  function transformToUpperCase() {
    setTextTransform(textToConvert.toUpperCase());
  }

  function transformToLowerCase() {
    setTextTransform(textToConvert.toLowerCase());
  }

  function transformFirstToUpperCase() {
    setTextTransform(
      textToConvert
        .charAt(0)
        .toUpperCase()
        .concat(textToConvert.substring(1).toLowerCase()),
    );
  }

  function transformAlphabeticalOrder() {
    setTextTransform(
      textToConvert
        .split(' ')
        .sort()
        .join(' '),
    );
  }

  function transformReverse() {
    setTextTransform(
      textToConvert
        .split('')
        .reverse()
        .join(''),
    );
  }

  function reset() {
    setTextToConvet('');
    setTextTransform('');
  }

  useEffect(() => {
    setTextLength(textToConvert.length);
  }, [textToConvert.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Convertext</Text>
        <Text style={styles.headerText}>
          Transforme seu texto com apenas um toque.
        </Text>
      </View>

      <View style={styles.clipTextArea}>
        <TouchableOpacity
          style={styles.clipTextButton}
          onPress={() => clipped()}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.clipTextButtonText}>Colar Texto</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={textToConvert}
          onChangeText={text => setTextToConvet(text)}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite ou cole o texto aqui."
          placeholderTextColor="#737380"
        />
      </View>

      <View style={styles.form}>
        <Result textTransform={textTransform} />
        <Text>Caracteres: {textLength}</Text>
      </View>

      <View style={styles.buttonArea}>
        <View style={styles.buttonAreaLeft}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => transformToUpperCase()}>
            <Text style={styles.buttonText}>Texto Maiúsculo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => transformToLowerCase()}>
            <Text style={styles.buttonText}>Texto Minúsculo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => transformFirstToUpperCase()}>
            <Text style={styles.buttonText}>1º Letra Maiúscula</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonAreaRight}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => transformAlphabeticalOrder()}>
            <Text style={styles.buttonText}>Ordem Alfabética</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => transformReverse()}>
            <Text style={styles.buttonText}>Inverter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.clipperButton}
            onPress={() => clipper()}>
            <Text style={styles.buttonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.clearButton} onPress={() => reset()}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
