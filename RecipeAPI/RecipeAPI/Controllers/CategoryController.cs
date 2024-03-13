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
    RouteToIcon = "/icons/main_dishes.png"},
            new Category{Id = 2,
                Name = "Desserts",
    RouteToIcon = "/icons/desserts.png" },
             new Category{Id = 3,
                Name = "Baking",
    RouteToIcon = "/icons/baking.png" }
        };

        [HttpGet]
        [Route("AllCategories")]
        public IEnumerable<Category> GetAll()
        {
            return categoryList;
        }
    }
}
