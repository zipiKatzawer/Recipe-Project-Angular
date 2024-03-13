using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Data.Entities;
using System.Diagnostics.Metrics;
using System.Xml.Linq;
using static System.Net.WebRequestMethods;

namespace RecipeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public static List<Recipes> recipeList = new List<Recipes>{
//        new Recipes
//{
//    RecipeId = 2,
//    Name = "Chocolate and Coffee Cake",
//    CategoryId = 3,
//    Time = 45,
//    Level = 2,
//    AddRecipe = DateTime.Now.AddDays(-1),
//    Ingredients = new string[] { "3 cups flour", "2 cups sugar", "1 1/2 cups cocoa powder", "2 tablespoons brown sugar", "2 tablespoons baking powder", "1 teaspoon cinnamon", "1 teaspoon cayenne pepper", "2 cups sunflower oil", "1 cup warm water", "1 cup milk", "2 eggs", "1 tablespoon vanilla extract", "1/2 teaspoon salt" },
//    Preparation = new string[] { "Grease a 24 cm diameter baking pan with oil", "Dust the pan with flour and sprinkle it evenly", "Whisk the eggs with the sugar in a mixer for five minutes until a light foam is obtained", "Add the remaining ingredients and continue to whisk for another five minutes", "Pour the batter into the pan", "Bake in a preheated oven for 45 minutes at 180 degrees Celsius" },
//    UserId = 2,
//    ImageRoute = "https://www.regamatok-elite.co.il/wp-content/uploads/2021/05/%D7%A9%D7%9C%D7%91%D7%99%D7%9D-2.jpg"
//},
//        new Recipes
//    {
//        RecipeId = 3,
//        Name = "Classic Cheesecake",
//        CategoryId = 3,
//        Time = 90,
//        Level = 3,
//        AddRecipe = DateTime.Now.AddDays(-3),
//        Ingredients = new string[] { "500 grams cream cheese", "200 grams sugar", "3 eggs", "1/2 cup milk", "1/4 cup flour", "1 tablespoon lemon zest", "1 teaspoon vanilla extract", "200 grams graham cracker crumbs" },
//        Preparation = new string[] { "Mix the cream cheese with the sugar in a food processor", "Add the eggs and milk and continue to blend in the food processor", "Add the flour, lemon zest, and vanilla extract and continue to blend until smooth", "Pour the mixture into a lined baking dish", "Bake in a preheated oven at 180 degrees Celsius for twenty minutes", "Remove the cake from the oven and let it cool to room temperature", "Sprinkle the crumbs on top of the cake", "Return to the oven for twenty more minutes", "Chill for at least eight hours in the refrigerator", "Serve and enjoy" },
//        UserId = 3,
//        ImageRoute = "https://hips.hearstapps.com/hmg-prod/images/211014-delish-seo-cheesecake-factory-cheesecake-horizontal-050-eb-1635810498.jpg?crop=0.8889702293801854xw:1xh;center,top&resize=1200:*"
//    },
        new Recipes
        {
            RecipeId= 1,
            Name= "Chocolate Cake",
            CategoryId=3,
            Time= 50,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"5 eggs" ,"1.5 cups sugar","5 spoon floar"},
            Preparation=new string[]{ "mix all the ingredients together", "bake on medium heat", "cut immediately after baking" },
            UserId= 1,
        ImageRoute="https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/12/10133117/%D7%A2%D7%95%D7%92%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93.jpg"},
        new Recipes
        {
            RecipeId= 2,
            Name= "French crepe",
            CategoryId=2,
            Time= 50,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"2 cups floar" ,"4 cups milk","1/2 cup sugar","50 gram bama"},
            Preparation=new string[]{ "melt the butter over low heat", "let it cool", "mix the rest of the ingredients together", "and enjoy!" },
            UserId= 1,
            ImageRoute="https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/images/fd2fcab061b4326d9c0cb1f43b01717e.jpg"
        },
            new Recipes
        {
            RecipeId= 3,
            Name= "Cheese",
            CategoryId=3,
            Time= 120,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"2 bouquets of dill",
    "200 grams of biscuits",
    "125 grams of Bamba",
    "750 grams of white cheese",
    "1 goblet of sour cream",
    "3 tablespoons of cornflour",
    "1 cup of sugar",
    "3 eggs",
    "250 milliliters of sweet cream",
    " Milk jam, dark chocolate, or milk chocolate"},
            Preparation=new string[]{"grind the biscuits",
             "add butter",
             "carpet in a large round mold",
             "Put in the freezer.",
             "in a separate bowl",
             "Whipping the Rich",
             "Add the cheese, egg cream, sugar, cornflour",
             "mix slowly",
             "put on the base of the cake",
             "Put into the oven heated to 200",
             "Bake for 10 minutes at 200",
             "Reduce the degrees to 150",
             "Bake until the cake has swelled, got a vibrating and stable color",
             "Melt the milk jam or the chocolate together with a drop of milk jam",
             "When the cake has cooled, pour slowly over the cake",
             "With an appetite!"},
            UserId= 1,
            ImageRoute="https://happykitchen.co.il/wp-content/uploads/2020/05/עוגת-גבינה-פרורים-פרוסה.jpg",
        },
                  new Recipes
        {
            RecipeId= 4,
            Name= "Watermelon sorbet",
            CategoryId=2,
            Time= 10,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] { "Half a medium-large watermelon cut into cubes",
    "1/4 glass of orange juice",
    "1-2 tablespoons of powdered sugar - optional depending on the sweetness of the watermelon",},
            Preparation=new string[]{ "Put the watermelon cubes in a sealed bag and freeze.",
             "Place the frozen watermelon cubes and orange juice in a food processor and grind until a soft sorbet texture (between hail and ice cream).",
             "Taste. If sweetness is lacking, add powdered sugar to taste and mix well." },
            UserId= 1,
            ImageRoute="https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2023/08/03112310/shutterstock_108717344-Large.jpg",
        },
                        new Recipes
        {
            RecipeId= 5,
            Name= "Skewers in the oven with a homely taste",
            CategoryId=1,
            Time= 60,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"1/2 kilo of meat",
    "1 handful of cilantro",
    "1/2 teaspoon of white pepper",
    "1/2 Spoon of Meat Grill",
    "1/2 teaspoon of salt",
    "1 Egg",
    "1/2 Onion",
    "1/3 cup of teriyaki sauce"},
            Preparation=new string[]{ "Wash the meat well from above",
             "finely chop the cilantro and the onion",
             "Mix all the ingredients together",
             "to dribble into a big patty",
             "carpet in the middle of the skewer",
             "Place in a mold, cover with aluminum foil",
             "Bake in a heated oven at 180 for 20 minutes on turbo",
             "With an appetite!" },
            UserId= 1,
            ImageRoute="https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2021/09/22192230/WhatsApp-Image-2021-09-19-at-15.33.02.jpeg",
        },
                              new Recipes
        {
            RecipeId= 6,
            Name= "Numbers Cake",
            CategoryId=3,
            Time= 90,
            Level = 3,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"For the dough: 90 grams of flour and 90 grams of almond powder",
    "50 grams of powdered sugar",
    "100 grams of butter",
    "1 Egg",
    "Zest of 1 medium lemon",
    "1 Pinch of Salt",
    "250 milliliters of Ritzi lakram",
    "2 Spoons of Pudding",
    "2 Spoons of Cream Pâtissier/Cream Vanilla"},
            Preparation=new string[]{ "Mix all the dough ingredients together",
             "roll on baking paper",
             "make a template of a drawing/letter/number",
             "cut the dough accordingly",
             "take out the leftovers",
             "Bake at 180 until the dough is golden",
             "Don't touch the dough until it cools down",
             "put it in the freezer",
             "Now to make the cream:",
             "Whipping the Rich",
             "Slowly add the rest of the ingredients",
             "sprinkle like in the picture",
             "Decorate to the best of your imagination",
             "With an appetite!"},
            UserId= 1,
            ImageRoute="https://www.getcake.co.il/images/uploads/thumbnails/4077_1669225246_569298_620_100.jpg",
        },
                                    new Recipes
        {
            RecipeId= 7,
            Name= "Hamburger",
            CategoryId=1,
            Time= 50,
            Level = 1,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] { "5 Eggs",
    "1.5 cups of sugar",
    "5 tablespoons of flour"},
            Preparation=new string[]{" mix all the ingredients together", "bake on medium heat", "cut immediately after baking" },
            UserId= 1,
            ImageRoute="https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_7109004_1698936155508.jpg?v=1",
        },
                                          new Recipes
        {
            RecipeId= 8,
            Name= "Pancake",
            CategoryId=2,
            Time= 30,
            Level = 2,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"2 cups floar" ,"4 cups milk","1/2 cup sugar","50 gram bama"},
            Preparation=new string[]{ "melt the butter over low heat", "let it cool", "mix the rest of the ingredients together", "and enjoy!" },
                                              UserId= 1,
            ImageRoute="https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2020/02/11163158/33.jpg"
                },
                                           new Recipes
        {
            RecipeId=9,
            Name= "Cheese and lotus dessert",
            CategoryId=2,
            Time= 120,
            Level = 3,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"200 grams of biscuits",
    "125 grams of Bamba",
    "750 grams of White cheese",
    "1 goblet of sour cream",
    "3 tablespoons of Cornflour",
    "1 cup of Sugar",
    "3 Eggs",
    "250 Ml' of Sweet Cream-Rich",
    "100 grams of Milk jam/ dark chocolate/ milk chocolate"},
            Preparation=new string[]{"grind the biscuits",
             "add butter",
             "carpet in a large round mold",
             "Put in the freezer.",
             "in a separate bowl",
             "Whipping the Rich",
             "Add the cheese, egg cream, sugar, cornflour",
             "mix slowly",
             "put on the base of the cake",
             "Put into the oven heated to 200",
             "Bake for 10 minutes at 200",
             "Reduce the degrees to 150",
             "Bake until the cake has puffed up and got a coloret and stable",
             "Melt the milk jam or the chocolate together with a drop of milk jam",
             "When the cake has cooled, pour slowly over the cake",
             "With an appetite!"},
            UserId= 1,
            ImageRoute="https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2022/01/25111555/%D7%AA%D7%95%D7%AA%D7%99%D7%9D-%D7%A8%D7%90%D7%A9%D7%99.jpg",
        }, new Recipes
        {
            RecipeId= 10,
            Name= "personal chocolate leaf pastry",
            CategoryId=3,
            Time= 30,
            Level = 2,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] {"Half a medium-large watermelon cut into cubes",
    "1/4 glass of orange juice",
    "1-2 tablespoons of powdered sugar (optional depending on the sweetness of the watermelon)"},
            Preparation=new string[]{ "Put the watermelon cubes in a sealed bag and freeze.",
             "Place the frozen watermelon cubes and orange juice in a food processor and grind until a soft sorbet texture (between hail and ice cream).",
             "Taste. If sweetness is lacking, add powdered sugar to taste and mix well."},
            UserId= 1,
            ImageRoute="https://eytans.co/wp-content/uploads/2021/02/25409.jpg",
        },
                                            new Recipes
        {
            RecipeId= 11,
            Name= "Asado in the oven",
            CategoryId=1,
            Time= 60,
            Level = 4,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] { "1/2 kilo of meat",
    "1 handful of cilantro",
    "1/2 teaspoon of white pepper",
    "1/2 Spoon of Meat Grill",
    "1/2 teaspoon of salt",
    "1 Egg",
    "1/2 Onion",
    "1/3 cup of teriyaki sauce",
    "1/2 teaspoon of cumin"},
            Preparation=new string[]{ "Wash the meat well from above",
             "finely chop the cilantro and the onion",
             "Mix all the ingredients together",
             "to dribble into a big patty",
             "carpet in the middle of the skewer",
             "Place in a mold, cover with aluminum foil",
             "Bake in a heated oven at 180 for 20 minutes on turbo",
             "With an appetite!" },
            UserId= 1,
            ImageRoute="https://cdn.baligam.co.il/_media/media/31053/281207.jpg",
        }, new Recipes
        {
            RecipeId= 12,
            Name= "Apple tiramisu",
            CategoryId=3,
            Time= 90,
            Level = 3,
            AddRecipe = DateTime.Now.AddDays(-3),
            Ingredients=new string[] { "90 grams of flour and almond powder",
    "50 grams of powdered sugar",
    "100 grams of butter",
    "1 Egg",
    "1 Medium lemon zest",
    "1 Pinch of Salt",
    "250 ml of Lakram: Ritzi",
    "2 Spoons of Pudding",
    "2 Spoons of Cream Pâtissier/Cream Vanilla"},
            Preparation=new string[]{ "Mix all the dough ingredients together",
             "roll on baking paper",
             "make a template of a drawing/letter/number",
             "cut the dough accordingly",
             "take out the leftovers",
             "Bake at 180 until the dough is golden",
             "Don't touch the dough until it cools down",
             "put it in the freezer",
             "Now to make the cream:",
             "Whipping the Rich",
             "Slowly add the rest of the ingredients",
             "sprinkle like in the picture",
             "Decorate to the best of your imagination",
             "With an appetite!"},
            UserId= 1,
            ImageRoute="https://www.yehudit-aviv.co.il/wp-content/uploads/DSC_0011-%D7%A2%D7%A8%D7%95%D7%9A-42.jpg"
        },


};
        [HttpGet]
        [Route("AllRecipes")]
        public IEnumerable<Recipes> GetAll()
        {
            return recipeList;

        }
        [HttpGet("{id}")]
        public Recipes Get(int id)
        {
            var recipe = recipeList.FirstOrDefault(r => r.RecipeId == id);
            return recipe;
        }
        [HttpPost]
        [Route("AddRecipe")]
        public void Add(Recipes recipe)
        {
            recipeList.Add(recipe);
        }
        [HttpPut("{id}")]
        public ActionResult Update(int id, [FromBody] Recipes updatedRecipe)
        {
            var recipeToUpdate = recipeList.FirstOrDefault(r => r.RecipeId == id);

            // אם המתכון לא נמצא, מחזירים 404 Not Found
            if (recipeToUpdate == null)
            {
                return NotFound();
            }

            // מעדכנים את הפרטים של המתכון
            recipeToUpdate.Name = updatedRecipe.Name;
            recipeToUpdate.CategoryId = updatedRecipe.CategoryId;
            recipeToUpdate.Time = updatedRecipe.Time;
            recipeToUpdate.Level = updatedRecipe.Level;
            recipeToUpdate.Ingredients = updatedRecipe.Ingredients;
            recipeToUpdate.Preparation = updatedRecipe.Preparation;
            recipeToUpdate.ImageRoute = updatedRecipe.ImageRoute;

            // מחזירים תשובת חיוב שהמתכון עודכן בהצלחה
            return Ok();
        }


        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var recipeToRemove = recipeList.FirstOrDefault(r => r.RecipeId == id);

            // אם המתכון לא נמצא, מחזירים 404 Not Found
            if (recipeToRemove == null)
            {
                return NotFound();
            }

            // מסירים את המתכון מרשימת המתכונים
            recipeList.Remove(recipeToRemove);

            // מחזירים תשובת חיוב שהמתכון נמחק בהצלחה
            return Ok();
        }
    }
}
