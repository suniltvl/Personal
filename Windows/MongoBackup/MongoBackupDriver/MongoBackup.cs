using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace MongoBackupDriver
{
    public class MongoBackup
    {
        #region Properties


        public string ConnectionString
        {
            get
            {
                return "mongodb://" + ServerName + "/";
            }
            set
            {

            }
        }
        public string ServerName { get; set; }

        public MongoServer Server
        {
            get
            {
                MongoClient cl = new MongoClient(ConnectionString);
                var srvr = cl.GetServer();
                srvr.GetDatabaseNames();
                return srvr;
            }
        }

        #endregion

        public MongoBackup(string server)
        {
            try
            {
                ServerName = server;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public bool TestConnection()
        {
            try
            {
                Server.GetDatabaseNames();
                return true;
            }
            catch (Exception)
            {
                return false;

                throw;
            }

        }

        public ICollection<string> GetDbNames()
        {
            return Server.GetDatabaseNames().ToList();
        }

        public ICollection<string> GetCollectionNames(string dbName)
        {
            return Server.GetDatabase(dbName).GetCollectionNames().ToList();
        }


        public string GetCollectionData(string dbName, string collName)
        {
            MongoCollection<BsonDocument> colData = Server.GetDatabase(dbName).GetCollection(collName);
            var data = colData.FindAll();

            return JsonConvert.SerializeObject(data);
        }
    }
}
