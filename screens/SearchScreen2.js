import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"; 
import { GoSearch } from 'react-icons/go'
import { MdAccountCircle} from 'react-icons/md'

import { SearchResultListItem } from "../components/SearchResultListItem";
import { RegularList } from "../components/RegularList";
import { SplitScreen } from "../components/SplitScreen";
import { Ingredients } from "../components/Ingredients";

const testReturn = [
    {
        "id": 73420,
        "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
        "imageType": "jpg",
        "likes": 0,
        "missedIngredientCount": 3,
        "missedIngredients": [
            {
                "aisle": "Baking",
                "amount": 1.0,
                "id": 18371,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
                "meta": [],
                "name": "baking powder",
                "original": "1 tsp baking powder",
                "originalName": "baking powder",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 1.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "meta": [],
                "name": "cinnamon",
                "original": "1 tsp cinnamon",
                "originalName": "cinnamon",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "id": 1123,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
                "meta": [],
                "name": "egg",
                "original": "1 egg",
                "originalName": "egg",
                "unit": "",
                "unitLong": "",
                "unitShort": ""
            }
        ],
        "title": "Apple Or Peach Strudel",
        "unusedIngredients": [],
        "usedIngredientCount": 1,
        "usedIngredients": [
            {
                "aisle": "Produce",
                "amount": 6.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "meta": [],
                "name": "apples",
                "original": "6 large baking apples",
                "originalName": "baking apples",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            }
        ]
    },
    {
        "id": 632660,
        "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        "imageType": "jpg",
        "likes": 3,
        "missedIngredientCount": 4,
        "missedIngredients": [
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.5,
                "extendedName": "unsalted butter",
                "id": 1001,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
                "meta": [
                    "unsalted",
                    "cold"
                ],
                "name": "butter",
                "original": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
                "originalName": "cold unsalted butter cold unsalted butter<",
                "unit": "sticks",
                "unitLong": "sticks",
                "unitShort": "sticks"
            },
            {
                "aisle": "Produce",
                "amount": 4.0,
                "id": 1079003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
                "meta": [
                    "red",
                    " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
                ],
                "name": "red apples",
                "original": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "originalName": "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "meta": [],
                "name": "cinnamon",
                "original": "2 teaspoons cinnamon",
                "originalName": "cinnamon",
                "unit": "teaspoons",
                "unitLong": "teaspoons",
                "unitShort": "tsp"
            },
            {
                "aisle": "Nut butters, Jams, and Honey",
                "amount": 2.0,
                "id": 19719,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
                "meta": [
                    "melted"
                ],
                "name": "apricot preserves",
                "original": "2 tablespoons apricot preserves, melted and strained",
                "originalName": "apricot preserves, melted and strained",
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp"
            }
        ],
        "title": "Apricot Glazed Apple Tart",
        "unusedIngredients": [
            {
                "aisle": "Produce",
                "amount": 1.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "meta": [],
                "name": "apples",
                "original": "apples",
                "originalName": "apples",
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving"
            }
        ],
        "usedIngredientCount": 0,
        "usedIngredients": []
    }
]

const SearchBarArea = ({
    ingredient,
    setIngredient,
    onSearch }) => {
    
    const navigate = useNavigate();

    // Top part with search and slider, etc here
    return(
        <>
        <div id="searchHeader">
            <div id="searchBar">
                <form onSubmit={onSearch}>
                    <input type="text" 
                        id="searchField" 
                        placeholder="type ingredients seperated by a comma..."
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)} 
                        />
                    <button type="submit" className="searchBtn">
                        <GoSearch id="searchIcon"/>
                    </button>
                </form>
            </div>
            <button id="accountBtn" onClick={() => navigate({pathname: "/account"})}>
                <MdAccountCircle id="accountIcon"/> 
            </button>
        </div>            
        </>
    );
}

const InfoPanel = ({ingredients, setIngredients}) => {
    
    // Left side with ingredients list
    return(
        <>
        <div id="infoDiv">
            <p>Ingredients</p>
            <RegularList
                items={ingredients}
                resourceName="ingredient"
                itemComponent={Ingredients} />
        </div>
        </>
    );
}

const SearchResultList = ({ results }) => {
    return(
        <>
        {results.length > 0 && 
        <div id="accountPageContentArea">
        <span className="betterHeader" id="resultHeader">Results</span>
        <RegularList
            items={results}
            resourceName="recipe"
            itemComponent={SearchResultListItem}/>
        </div>}
        </>
    );
}

const SearchPage = () => {
    const username = localStorage.getItem("username");

    const [ingredients, setIngredients] = useState([]);
    const [required, setRequired] = useState([])
    const [results, setResults] = useState([]);
    const [ingredient, setIngredient] = useState("");

    const onSearch = (event) => {
        event.preventDefault();

        // VALIDATE INGREDIENT (or maybe move this to search bar)

        // IF VALID
        // State variable are asynchronous, so we make a copy to get the updated value
        const newIngredients = [...ingredients, ingredient];
        setIngredients([...newIngredients]);

        // API CALL
        (async () => {
            const response = await axios.post("/homepage/findByIngredients", {
                ingredients: newIngredients
            }).then((response) => {

                // Parse data
                const newResults = [];
                const ids = [];

                response.data.forEach((rec) => {
                    // Add id to ids
                    ids.push(rec.id);

                    // Get ingredients from rec
                    const ingredientList = []
                    rec.missedIngredients.forEach((ing) => {
                        ingredientList.push(ing.name);
                    });
                    rec.usedIngredients.forEach((ing) => {
                        ingredientList.push(ing.name);
                    });

                    // Build recipe object
                    const recipe = {
                        title: rec.title,
                        image: rec.image,
                        id: rec.id,
                        ingredients: ingredientList
                    }

                    newResults.push(recipe);
                    localStorage.setItem(recipe.id, JSON.stringify(recipe)); // TODO: temp
                });

                // (async () => {const response = await axios.post("/homepage/getInstructionsBulk", {
                //         ids: ids.toString()
                //     }).then((response) => {
                        
                        // response.data.forEach((rec, i) => {
                        //     // Add instructions
                        //     newResults[i].instructions = rec.instructions;

                        //     // Add to storage
                        //     localStorage.setItem(newResults[i].id, newResults[i]);
                        // });

                        console.log(newResults);
                        setResults(newResults);
                //     }).catch((error) => {
                //         // What to do when search fails?
                //         console.log("inner error");
                //         // console.log(`${error.response.status}\n${error.response}`);
                //     });
                // })();
            
            }).catch((error) => {
                // What to do when search fails?
                // console.log(`${error.response.status}\n${error.response}`);
                console.log("outer error");
            });
        })();
        

        // FILTER TO ENSURE REQUIRED ON HERE
        // SET RESULTS
    }

    // TODO Redirect to login page after a few seconds
    // TEMPORARILY DISABLED FOR EASE OF TESTING. maybe permenantly remove?
    // Not Logged in
    if (username === null)
    {
        // return (
        // <div className="center">
        //     <p>You need to be logged in!</p>
        // </div>
        // );
    }

    return(
        <>
        <SearchBarArea
            ingredient={ingredient}
            setIngredient={setIngredient}
            onSearch={onSearch} />
        <SplitScreen leftWeight={1} rightWeight={3} >
            <InfoPanel
                ingredients={ingredients}
                setIngredients={ingredients}
                required={required}
                setRequired={setRequired}/>
            <SearchResultList results={results}/>
        </SplitScreen>
        </>
    );
};

export default SearchPage;
