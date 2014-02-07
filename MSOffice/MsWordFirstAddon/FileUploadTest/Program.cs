using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Specialized;

namespace FileUploadTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ReadLine();
            var filePath = @"D:\Temp\2013-02-20.docx";
            byte[] content = File.ReadAllBytes(filePath);
            Uri u = new Uri("http://localhost:1100/api/file/UploadFile");


            HttpWebRequest req = new HttpWebRequest();
            req.Method = "POST";
            req.GetResponse();
        }

        
    }
}