export type PizzaItem = {
  name: string;
  description: string;
  price: number;
  img: string;
};

export type ToppingItem = {
  name: string;
  description: string;
  crustType: Array<string>;
  price: number;
};

export type PizzaCrustsType = {
  name: string;
  description: string;
  img: string;
  price: number | 0;
}[];

export const pizzaCrusts: PizzaCrustsType = [
  {
    name: "Thin Crust",
    description:
      "Pizza with a thin, crunchy crust is known as thin crust pizza. The usual ingredients for making this kind of pizza are flour, yeast, olive oil, salt, and warm water. Before being baked in an oven for just about 7 to 10 minutes, or less if you use a pizza oven, the dough is stretched out to produce an extremely thin layer. The dough for a thin crust pizza foundation should be rolled out to a thickness of around 1/2 cm. This type of pizza is made in many different ways all around the world, but they all have a crisp, light feel. Thin crust pizzas are the ideal lighter option when you don't want to fill up on the thicker deep-pan variety.",
    img: "/thin_crust.jpg",
    price: 3,
  },
  {
    name: "Deep Dish/Pan",
    description:
      "Chicago-style pizza, commonly referred to as deep dish pizza, has a very thick crust. Deep dish pizza is normally made by pressing the dough into a deep circular pan and then topping it with cheese and other ingredients. The best way to eat it is with utensils! The thick pizza foundation requires more cooking time than pizzas with a thinner crust.",
    img: "/deep_pen.jpeg",
    price: 3.5,
  },
  {
    name: "Stuffed Crust",
    description:
      "A deep dish pizza with a loaded crust has additional cheese and occasionally meat added to the dough before baking. The toppings and cheese are then pushed into the crust's outer border to create a richer and thicker filling.",
    img: "/stuffed_curst.jpeg",
    price: 4,
  },
  {
    name: "Sourdough Pizza Dough",
    description:
      "A sourdough starter and bread flour may be used to make sourdough pizza at home, a variant of the traditional pizza dough. If you haven't already, you must try this kind of pizza since it is very good! This could become your new go-to pizza recipe if you enjoy acidic, chewy bread. It has a crisp outside and a soft inside and tastes like a combination between rustic bread and pizza dough.",
    img: "/sourdough.jpeg",
    price: 3.5,
  },
  {
    name: "Cauliflower Pizza Base",
    description:
      "The key to a reduced carb crust is the cauliflower pizza foundation. For an added flavor boost, you may also include your preferred vegetables, herbs, or spices. It is also gluten-free. Cauliflower, an egg, and some spice are all you need.",
    img: "/cauliflower.jpeg",
    price: 4.5,
  },
  {
    name: "Gluten-Free Pizza Dough",
    description:
      "The good news is that there are numerous alternatives available if you're seeking for a gluten-free substitute for traditional pizza dough. Use gluten-free flour if you'd like, or make a pizza foundation out of butternut squash or cauliflower instead of regular flour.",
    img: "/gluten_free.jpeg",
    price: 4.5,
  },
  {
    name: "Neapolitan",
    description:
      'The thin-crust pizza known as "Neapolitan pizza," which originated in Naples, Italy, is listed as an Intangible Cultural Heritage by UNESCO. A particular variety of tomato and mozzarella cheese must be used to make a pizza to be considered authentically Neapolitan. Italian immigrants used the Neapolitan pizza as a model to create the now-famous New York Style pizza. A Neapolitan pizza\'s base is so thin that you frequently need to eat it with a knife and fork; if you attempt to pick it up like an ordinary pizza, it would probably crumble in your hands.',
    img: "/neapolitan.jpeg",
    price: 3.5,
  },
  {
    name: "2 Ingredient Pizza Dough",
    description:
      "As the name implies, the only two components in 2 Ingredient pizza dough are self-rising flour and natural yoghurt. It only takes combining the two ingredients and giving it a quick knead before spreading it out to finish cooking your pizza.",
    img: "/2Ingredient.jpeg",
    price: 2.5,
  },
  {
    name: "No Yeast Pizza Dough",
    description:
      "If you don’t have any yeast, or you’d instead make your pizza without it, making a no yeast pizza dough is possible. You need similar ingredients as a classic pizza dough; flour (strong bread flour is best), oil, water, salt and some baking powder (instead of yeast).",
    img: "/noYeast.jpeg",
    price: 2,
  },
  {
    name: "Sicilian Pizza",
    description:
      "As the name suggests, Sicilian pizza originated in Sicily, Italy. The traditional shape of a Sicilian pizza is rectangular and quite thick, but it varies according to where it is made. A Sicilian pizza is topped with a pizza sauce made with tomatoes, oregano, anchovies and onions. The sauce is covered with grated cheese and breadcrumbs before it is cooked in a square pan in the oven.",
    img: "/sicilian.jpeg",
    price: 3.5,
  },
  {
    name: "Calzone",
    description:
      "A calzone is a pizza folded over and sealed on the edges. It can be filled with many ingredients but typically includes cheese, sauce, and either meat or vegetables. This quick meal is perfect for weekday dinners because it’s so easy to make! The key to making a fantastic calzone is selecting great dough. You want one that has a light texture – not too chewy – and doesn’t have too much oil in it so that you don’t overload your calzone with grease.",
    img: "/calzone.jpeg",
    price: 4.5,
  },
];

export type PizzaToppingsType = {
  name: string;
  description: string;
  crustType: Array<string>;
  price: number | 0;
}[];

export const pizzaToppings: PizzaToppingsType = [
  {
    name: "Classic",
    description:
      "Tomato sauce, mozzarella cheese, pepperoni, mushrooms, onions, green peppers",
    crustType: [
      "Thin Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 6,
  },
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella cheese, fresh basil",
    crustType: [
      "Thin Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 4.5,
  },
  {
    name: "White Pizza",
    description:
      "Garlic sauce, mozzarella cheese, ricotta cheese, spinach, chicken",
    crustType: [
      "Thin Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 7,
  },
  {
    name: "BBQ Chicken",
    description:
      "BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro",
    crustType: [
      "Thin Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Sausage and Pepperoni",
    description: "Sausage, pepperoni, mozzarella cheese, tomato sauce",
    crustType: [
      "Deep Dish/Pan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 5,
  },
  {
    name: "Supreme",
    description:
      "Sausage, pepperoni, mushrooms, onions, green peppers, black olives",
    crustType: [
      "Deep Dish/Pan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 6,
  },
  {
    name: "Meat Lover's",
    description:
      "Sausage, pepperoni, bacon, ground beef, mozzarella cheese, tomato sauce",
    crustType: [
      "Deep Dish/Pan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 7.5,
  },
  {
    name: "Vegetarian",
    description:
      "Mushrooms, onions, green peppers, black olives, mozzarella cheese, tomato sauce",
    crustType: [
      "Deep Dish/Pan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 6.5,
  },
  {
    name: "Cheesy Garlic",
    description: "Mozzarella cheese, garlic butter, Parmesan cheese",
    crustType: [
      "Stuffed Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Bacon Cheeseburger",
    description:
      "Ground beef, bacon, mozzarella cheese, cheddar cheese, pickles, onions",
    crustType: [
      "Stuffed Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 7.5,
  },
  {
    name: "BBQ Chicken",
    description:
      "BBQ sauce, grilled chicken, mozzarella cheese, cheddar cheese, red onions",
    crustType: [
      "Stuffed Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Supreme",
    description:
      "Sausage, pepperoni, mushrooms, onions, green peppers, black olives, mozzarella cheese, cheddar cheese",
    crustType: [
      "Stuffed Crust",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 6,
  },
  {
    name: "Arugula and Goat Cheese",
    description:
      "Arugula, goat cheese, prosciutto, balsamic vinegar, olive oil",
    crustType: [
      "Sourdough Pizza Dough",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 9,
  },
  {
    name: "Pesto and Chicken",
    description: "Pesto, grilled chicken, mozzarella cheese, Parmesan cheese",
    crustType: [
      "Sourdough Pizza Dough",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 9,
  },
  {
    name: "Roasted Vegetable",
    description:
      "Roasted vegetables (such as zucchini, eggplant, and peppers), mozzarella cheese, Parmesan cheese",
    crustType: [
      "Sourdough Pizza Dough",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8.5,
  },
  {
    name: "Fig and Prosciutto",
    description: "Figs, prosciutto, mozzarella cheese, goat cheese",
    crustType: [
      "Sourdough Pizza Dough",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Alfredo Chicken",
    description:
      "Alfredo sauce, grilled chicken, mozzarella cheese, Parmesan cheese",
    crustType: [
      "Cauliflower Pizza Base",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 7,
  },
  {
    name: "Buffalo Chicken",
    description:
      "Buffalo sauce, grilled chicken, blue cheese, mozzarella cheese",
    crustType: [
      "Cauliflower Pizza Base",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 7,
  },
  {
    name: "BBQ Chicken",
    description:
      "BBQ sauce, grilled chicken, mozzarella cheese, red onions, cilantro",
    crustType: [
      "Cauliflower Pizza Base",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
      "Gluten-Free Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Traditional Neapolitan",
    description: "San Marzano tomatoes, mozzarella di bufala, fresh basil",
    crustType: [
      "Neapolitan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
    ],
    price: 8.5,
  },
  {
    name: "Diavola",
    description:
      "San Marzano tomatoes, mozzarella di bufala, spicy salami, fresh basil",
    crustType: [
      "Neapolitan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Margherita",
    description: "San Marzano tomatoes, mozzarella di bufala, fresh basil",
    crustType: [
      "Neapolitan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
    ],
    price: 8,
  },
  {
    name: "Bianca",
    description: "Mozzarella di bufala, Parmesan cheese, fresh basil",
    crustType: [
      "Neapolitan",
      "2 Ingredient Pizza Dough",
      "No Yeast Pizza Dough",
    ],
    price: 9,
  },
  {
    name: "Traditional Sicilian",
    description: "Tomato sauce, mozzarella cheese, anchovies, onions, oregano",
    crustType: ["Sicilian Pizza"],
    price: 10,
  },
  {
    name: "Sicilian Square",
    description:
      "Tomato sauce, mozzarella cheese, pepperoni, sausage, mushrooms, onions, green peppers, black olives",
    crustType: ["Sicilian Pizza"],
    price: 11,
  },
  {
    name: "Sicilian Margherita",
    description: "Tomato sauce, mozzarella cheese, fresh basil",
    crustType: ["Sicilian Pizza"],
    price: 9,
  },
  {
    name: "Ricotta and Spinach",
    description: "Ricotta cheese, spinach, mozzarella cheese, Parmesan cheese",
    crustType: ["Calzone"],
    price: 8,
  },
  {
    name: "Pizza Calzone",
    description:
      "Tomato sauce, mozzarella cheese, pepperoni, mushrooms, onions, green peppers",
    crustType: ["Calzone"],
    price: 7,
  },
  {
    name: "Meat Lover's Calzone",
    description:
      "Sausage, pepperoni, bacon, ground beef, mozzarella cheese, Parmesan cheese",
    crustType: ["Calzone"],
    price: 7,
  },
];
