using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentMongo.Linq.Util;
using MongoDB.Bson;
using Newtonsoft.Json;
using System.IO;

namespace TestApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var connectionString = "mongodb://5.9.108.110/";
            MongoClient cl = new MongoClient(connectionString);
            var srvr = cl.GetServer();
            var firstDB = srvr.GetDatabase(srvr.GetDatabaseNames().FirstOrDefault());
            string collectionName = firstDB.GetCollectionNames().FirstOrDefault();
            MongoCollection<BsonDocument> col = firstDB.GetCollection(collectionName);
            var ss = col.FindAll();
            var sss = JsonConvert.SerializeObject(ss);

            using (StreamWriter strWrite = new StreamWriter("D:/temp/" + collectionName + ".json"))
            {
                strWrite.Write(sss);
            }
        }
    }
}
