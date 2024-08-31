import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const {recipes} = useSelector((state) => state.recipes)
  console.log(recipes.length)
  const {id} = useParams()
  console.log(id)
//   recipes.length == 0 ? <h3>No details found</h3> : 
//   recipes.filter((hit) => {
//     return hit.recipe.id === id
//  });
 if (recipes.length == 0){
  return <h3>No details found</h3>
 }else {
  const aRecipe = recipes.filter((hit) => {
    return hit.recipe.id === id
 });
  console.log(aRecipe)
  const more = aRecipe[0].recipe
  return (
    
    <div>
      <h2>More details about {more.label}</h2>
      <div>
        
        <img width={200} src={more.image} alt={more.label} />
        <h3>{more.label}</h3>
        <p>{more.mealType}</p> {/* loop thru and insert a key */}
        <p>dishType: {more.dishType}</p>
        <p>dietLabels: {more.dietLabels}</p>
        <p>cuisineType: {more.cuisineType}</p>
        <p>Calories: {more.calories}</p>
        <p>Cautions: {more.cautions}</p> {/* loop thru and insert a key */}
        {/* Style these labels and cautions above like tags for the food */}
        <p>HealthLabels: {more.healthLabels}</p> {/* loop thru and insert a key */}

        <div className="ingredients">
          <h3>Ingredients:</h3> 
          {more.ingredients.map((i, index) => {          
            return (   
              <div className="ingredient">
                <p key={index}><b>{i.food}: </b>{i.text}</p>
                <button>Add to Cart</button>
              </div>           
            
            )
        })}</div>
      </div>
      <p>Source: <a href={more.shareAs} target="blank">{more.source}</a></p>
    </div>
  );

 }
  
};

export default RecipeDetails;
