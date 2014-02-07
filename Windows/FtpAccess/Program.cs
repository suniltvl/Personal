using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.IO;

namespace FtpAccess
{
    class Program
    {
        static void Main(string[] args)
        {
            Ftp ftpClient = new Ftp("ftp://5.9.108.110/InoogaReleases/", "administrator", "heDjO54s");
            var data = ftpClient.directoryListSimple("2013-12-27");
            
            Console.Read();
        }

        static object ftpClient_OnDownloading(string status)
        {
            Console.WriteLine(status);
            return null;
        }

        static object ftpClient_OnDownloadComplete(string status)
        {
            Console.WriteLine(status);
            return null;
        }
    }
}

