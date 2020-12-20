import React from "react";
import Auxilary from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/buildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  chese: 1.3,
  meat: 1.8,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        chese: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
  }

  addIngredientHandler = (type) => {
    console.log(
      "🚀 ~ file: BurgerBuilder.js ~ line 28 ~ BurgerBuilder ~ type",
      type
    );
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredient = {
      ...this.state.ingredients,
    };
    updateIngredient[type] = updatedCount;
    const price = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const finalPrice = price + oldPrice;
    this.setState(
      (this.state.ingredients = {
        totalPrice: finalPrice,
        ingredients: updateIngredient,
      })
    );
  };

  lessIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updateIngredient = {
        ...this.state.ingredients,
      };
      updateIngredient[type] = updatedCount;
      const price = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const finalPrice = oldPrice - price;
      this.setState(
        (this.state.ingredients = {
          totalPrice: finalPrice,
          ingredients: updateIngredient,
        })
      );
    }
  };

  render() {
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientLess={this.lessIngredientHandler}
        />
      </Auxilary>
    );
  }
}

export default BurgerBuilder;
