import React from "react";
import "./BurgerIngredient.css";
import propTypes from 'prop-types';

class BurgerIngredient extends React.Component{

    render(){
        let ingredient = null;
        console.log("🚀 ~ file: BurgerIngredient.js ~ line 10 ~ BurgerIngredient ~ render ~ this.props.type", this.props.type)
        switch (this.props.type) {
          case "bread-bottom":
            ingredient = <div className="BreadBottom"></div>;
            break;
      
          case "bread-top":
            ingredient = (
              <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
              </div>
            );
            break;
      
          case "meat":
            ingredient = <div className="Meat"></div>;
            break;
      
          case "chese":
            ingredient = <div className="Cheese"></div>;
            break;
      
          case "salad":
            ingredient = <div className="Salad"></div>;
            break;
      
          case "bacon":
            ingredient = <div className="Bacon"></div>;
            break;
      
          default:
            ingredient = null;
        }
      
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default BurgerIngredient;
