using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using igroup193DBcontext;
using System.Text;

namespace WebApplication_ServerSide.Controllers
{
    //[EnableCors]
    public class RecipesController : ApiController
    {
        public IEnumerable<recipes> Get()
        {
            using (igroup193DBcontext db = new igroup193DBcontext())
            {
                return db.Recipes.ToList();
            }
        }

        //Insert
        public HttpResponseMessage Post([FromBody] recipes recipe)
        {
            try
            {
                using (igroup193DBcontext db = new igroup193DBcontext())
                {
                    db.Recipes.Add(recipe);
                    db.SaveChanges();
                    //return Created(new Uri(Request.RequestUri.AbsolutePath+recipe.Id), recipe);

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
