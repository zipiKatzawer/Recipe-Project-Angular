using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Data.Entities;

namespace RecipeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public static List<Category> categoryList = new List<Category>
        {
            new Category{Id = 1,
    Name = "Main Dishes",
    RouteToIcon = "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"},
            new Category{Id = 2,
                Name = "Desserts",
    RouteToIcon = "https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1566594076571-B3IA9HAM4BAIQ89N3MT5/DSC_9850-Edit.jpg?format=1500w" },
             new Category{Id = 3,
                Name = "Baking",
    RouteToIcon = "https://images.squarespace-cdn.com/content/v1/51b0ea5de4b04c08cbce5c19/1626181119172-NHVQXCR6C5MXWY726OM4/DSC_6030-Edit-2.jpg?format=1500w" }
        };

        [HttpGet]
        [Route("AllCategories")]
        public IEnumerable<Category> GetAll()
        {
            return categoryList;
        }
    }
}
