import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Plus, Minus, RotateCcw } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const animatedValue = useRef(new Animated.Value(1)).current;

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    animateCounter();
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    animateCounter();
  };

  const reset = () => {
    setCount(0);
    animateCounter();
  };

  const animateCounter = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.counterContainer}>
        <Text style={styles.label}>Current Count</Text>
        <Animated.Text 
          style={[
            styles.counter, 
            { transform: [{ scale: animatedValue }] }
          ]}
        >
          {count}
        </Animated.Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.circleButton} 
          onPress={decrement}
          activeOpacity={0.7}
        >
          <Minus color="#FFF" size={24} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.circleButton, styles.primaryButton]} 
          onPress={increment}
          activeOpacity={0.7}
        >
          <Plus color="#FFF" size={24} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.resetButton} 
        onPress={reset}
        activeOpacity={0.7}
      >
        <RotateCcw color="#8E8E93" size={16} />
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  label: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 8,
  },
  counter: {
    fontSize: 96,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8E8E93',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#E5E5EA',
  },
  resetText: {
    color: '#8E8E93',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
});