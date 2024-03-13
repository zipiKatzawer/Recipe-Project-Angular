using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Data.Entities;

namespace RecipeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> userList = new List<User>{
            new User{  Id = 1, Name = "Tzippy", Address="Bnei Brak",Email="z@gmail.com",Password="12345678" },
            new User{  Id = 2, Name = "Mimi", Address="Jerusalem",Email="m@gmail.com",Password="87654321" },
            new User{  Id = 3, Name = "Ayala", Address="Elad",Email="a@gmail.com",Password="11111111" },};
        [HttpGet]
        [Route("AllUsers")]
        public IEnumerable<User>GetAll()
        {
            return userList;
        }
        [HttpGet("{id}")]
        //[Route("GetRecipeById")]
        public User Get(int id)
        {
            var user = userList.FirstOrDefault(r => r.Id == id);
            return user;
        }
        [HttpPost]
        [Route("Login")]
        public ActionResult Login(LoginRequest loginRequest)
        {
           User Existuser=userList.FirstOrDefault(u=>u.Name==loginRequest.Username);
           if(Existuser!=null)
            {
                if (Existuser.Password == loginRequest.Password)
                    return Ok();
                return BadRequest();
            }
            return NotFound();
        }
        [HttpPost]
        [Route("Register")]
        public ActionResult Post(User user)
        {
            var existingUser = userList.FirstOrDefault(u => u.Email == user.Email);

            if (existingUser != null)
            {
                return BadRequest();
            }

            userList.Add(user);

            return Ok();
        }
        public class LoginRequest
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }

    }
}
