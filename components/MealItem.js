import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

function MealItem({ title, imageUrl, affordability, complexity, duration }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{affordability}</Text>
            <Text style={styles.infoText}>{complexity}</Text>
            <Text style={styles.infoText}>{duration}m</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5, // For Android
  },
  innerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});
