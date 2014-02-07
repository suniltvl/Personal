using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MvcApplication1.Controllers
{
    public class FileController : ApiController
    {
        [HttpPost]
        public bool UploadFile()
        {

            return false;
        }

        [HttpGet]
        public HttpResponseMessage SayHello()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "Test");
        }
    }
}
