using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Inooga.Inforius.Infrastructure.ExcelExtensions;
using System.IO;
using Inooga.Inforius.DataEntity.Model.Dto;
using System.Dynamic;

namespace GetAllTemplateAttributes
{
    //Added Comment Venkat
    class Program
    {
        static void Main(string[] args)
        {
            //CreateResxTableData();

            //GetTemplateValues();

            var lst = new List<KeyValueDto<string, string>>();
            lst.Add(new KeyValueDto<string, string> { Key = "UserName", Value = "Venkat" });
            lst.Add(new KeyValueDto<string, string> { Key = "Password", Value = "Test" });


            dynamic dynObj = new DynamicEntity(lst);

            Console.WriteLine("Completed " + dynObj.UserName + "  " + dynObj.Password);
            Console.Read();
        }

        /// <summary>
        /// To Get all template values from the dto classes in the template parser project
        /// </summary>
        private static void GetTemplateValues()
        {
            var assembly = Assembly.Load("Inooga.Inforius.TemplateProcessor");
            var classes = assembly.GetTypes().Where(t => t.Name != "TemplateParser" && t.Name.StartsWith("Template"));
            List<TemplateVariables> exportObject = new List<TemplateVariables>();
            var classCount = 0;

            classes.ToList().ForEach(t =>
            {
                string className = "Inooga.Inforius.TemplateProcessor." + t.Name;
                var type = assembly.GetType(className);
                var props = type.GetProperties();
                classCount = classCount + 1;

                TemplateVariables cl = new TemplateVariables { ClassId = classCount.ToString(), ClassName = t.Name, PropertyName = "" };
                exportObject.Add(cl);
                var propCount = 0;
                props.ToList().ForEach(p =>
                {
                    propCount = propCount + 1;

                    TemplateVariables pro = new TemplateVariables { PropId = propCount.ToString(), ClassName = t.Name, PropertyName = p.Name, DataType = p.PropertyType.Name };
                    exportObject.Add(pro);
                });

            });

            var fileBytes = exportObject.Select(t =>
             new
             {
                 ClassName = (t.ClassId != null && t.ClassId != "") ? t.ClassName : "",
                 PropertyName = t.PropertyName,
                 VariableName = (t.PropId != null && t.PropId != "") ? "@Model." + t.ClassName + "." + t.PropertyName : ""
             }
            ).ToList()
                .ExportExcelDataToStream("TemplateValues", true);
            File.WriteAllBytes("d:/temp/TemplateValues.xlsx", fileBytes);
        }

        /// <summary>
        /// To Create the insert statements from the resx json file if table data droped missing
        /// </summary>
        private static void CreateResxTableData()
        {
            List<string> lstQuery = new List<string>();
            using (StreamReader strRead = new StreamReader(@"D:\Projects\Github\Personal\Windows\GetAllTemplateAttributes\AcResx.json"))
            {
                var ar = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, string>>(strRead.ReadToEnd());
                using (StreamWriter strWrite = new StreamWriter(@"D:\Projects\Github\Personal\Windows\GetAllTemplateAttributes\inf_resxkey_value.sql"))
                {

                    foreach (var item in ar)
                    {
                        var arItem = item.Key.ToString().Split('_');
                        var id = arItem[1];
                        var type = arItem[0];
                        var key = arItem[2];
                        var value = item.Value.Replace(id, "");
                        var isUsed = item.Value.ToString().Contains(id) ? 0 : 1;
                        var sql = "insert into inf_resxkey_value values(" + id + ",'" + key + "','" + value + "'," + isUsed + ",'" + type + "',0,''  );";
                        strWrite.WriteLine(sql);

                        //lstQuery.Add();
                    }

                }
            }



        }
    }

    public class TemplateVariables
    {
        public string ClassId { get; set; }

        public string PropId { get; set; }

        public string ClassName { get; set; }

        public string PropertyName { get; set; }

        public string DataType { get; set; }

    }

    public class DynamicEntity : DynamicObject
    {
        private IDictionary<string, object> _values;
        private IDictionary<string, string> _strValues;

        public DynamicEntity(IDictionary<string, object> values)
        {
            _values = values;
        }

        public DynamicEntity(ICollection<KeyValueDto<string, string>> values)
        {
            _strValues = new Dictionary<string, string>();
            values.ToList().ForEach(
                t =>
                {
                    if (t != null)
                        _strValues.Add(t.Key, t.Value);
                }
                );
        }

        public DynamicEntity(ICollection<object> values)
        {
            _values = new Dictionary<string, object>();
            values.ToList().ForEach(
                t =>
                {
                    if (t != null)
                        _values.Add(t.GetType().Name, t);
                }
                );
        }

        public override bool TryGetMember(GetMemberBinder binder, out object result)
        {
            if (_values != null && _values.ContainsKey(binder.Name))
            {
                result = _values[binder.Name];
                return true;
            }

            if (_strValues != null && _strValues.ContainsKey(binder.Name))
            {
                result = _strValues[binder.Name];
                return true;
            }
            result = null;
            return false;
        }

    }

  }
