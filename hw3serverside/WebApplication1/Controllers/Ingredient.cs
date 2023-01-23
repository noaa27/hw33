using igroup193DBcontext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication_ServerSide.Controllers
{
    public class Ingredient : ApiController
    {
        public IEnumerable<Ingredient> Get()
        {
            using (igroup193DBcontext db = new igroup193DBcontext())
            {
                return db.Ingredients.ToList();
            }
        }
        public HttpResponseMessage Post([FromBody] Recipe recipe)
        {
            try
            {
                using (igroup193DBcontext db = new igroup193DBcontext())
                {
                    db.Recipes.Add(recipe);
                    db.SaveChanges();

                    var message = Request.CreateResponse(HttpStatusCode.Created, recipe);
                    message.Headers.Location = new Uri(Request.RequestUri + recipe.Id.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                var r = Request.CreateResponse(HttpStatusCode.BadRequest);
                r.Content = new StringContent("Dude...I have no idle why your getting this error!", Encoding.UTF8, "text/plain");
                return r;
            }

        }
    }
}
