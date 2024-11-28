import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/iconButton";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return  <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>;
      },
    });
  }, [navigation]);

  if (!selectedMeal) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        style={styles.details}
      />
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <View style={styles.listContainer}>
        {selectedMeal.ingredients.map((ingredient) => (
          <View key={ingredient} style={styles.ingredientItem}>
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Steps</Text>
      <View style={styles.listContainer}>
        {selectedMeal.steps.map((step) => (
          <Text key={step} style={styles.stepText}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 16,
    backgroundColor: "#121212",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 8,
  },
  details: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 16,
    marginBottom: 8,
  },
  listContainer: {
    marginBottom: 16,
  },
  ingredientItem: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
    backgroundColor: "#1e1e1e",
  },
  ingredientText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  stepText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
});

export default MealDetailScreen;
