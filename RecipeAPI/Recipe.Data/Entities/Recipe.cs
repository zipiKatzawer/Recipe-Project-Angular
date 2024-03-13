using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.Data.Entities
{
    [Table("Recipe")]
    public class Recipes
    {
        [Key]
        [Required]
        public int RecipeId { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int Time { get; set; }
        public int Level { get; set; }
        public DateTime AddRecipe { get; set; }
        public string [] Ingredients { get; set; }
        public string [] Preparation { get; set; }
        public int UserId { get; set; }
        public string ImageRoute { get; set; }
    }
}
