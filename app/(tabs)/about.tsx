import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Counter App</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.paragraph}>
            This simple counter app demonstrates basic state management and user interaction in React Native. It includes:
          </Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>• Increment and decrement buttons</Text>
            <Text style={styles.bulletPoint}>• Reset functionality</Text>
            <Text style={styles.bulletPoint}>• Smooth animations</Text>
            <Text style={styles.bulletPoint}>• Clean, minimal UI design</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use</Text>
          <Text style={styles.paragraph}>
            Use the + button to increase the counter, the - button to decrease it (it won't go below zero), and the reset button to return to zero.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologies</Text>
          <Text style={styles.paragraph}>
            Built with React Native and Expo, using functional components and React hooks for state management.
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
          <Text style={styles.copyright}>© 2025 Counter App</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3A3A3C',
    marginBottom: 8,
  },
  bulletPoints: {
    marginLeft: 8,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3A3A3C',
    marginBottom: 4,
  },
  footer: {
    marginTop: 48,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#D1D1D6',
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  copyright: {
    fontSize: 14,
    color: '#8E8E93',
  },
});