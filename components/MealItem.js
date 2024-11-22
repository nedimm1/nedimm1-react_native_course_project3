import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

//already finnished

function MealItem({ title, imageUrl, affordability, complexity, duration }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
      <View>
        <Text>{affordability}</Text>
        <Text>{complexity}</Text>
        <Text>{duration}m</Text>
      </View>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
});

