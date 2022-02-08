export default class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexibility,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isLactoseFree, 
        isVegetarian,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexibility = complexibility;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isLactoseFree = isLactoseFree;
        this.isVegetarian = isVegetarian;
    }
}
