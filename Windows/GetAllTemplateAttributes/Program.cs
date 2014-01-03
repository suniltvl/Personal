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
using Inooga.Inforius.Infrastructure.Common;

namespace GetAllTemplateAttributes
{
    //Added Comment Venkat
    class Program
    {
        static void Main(string[] args)
        {
            List<KeyValueDto<object, object>> test = new List<KeyValueDto<object, object>>();
            test.Add(new KeyValueDto<object, object> { Key = "UserName", Value = "Venkat" });
            test.Add(new KeyValueDto<object, object> { Key = "Password", Value = "Test" });

            DynamicEntity dynObj = new DynamicEntity(test);
            


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

            Console.WriteLine("Completed");
            Console.Read();
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
        private IDictionary<object, object> _keyvalues;

        public DynamicEntity(IDictionary<string, object> values)
        {
            _values = values;
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

        public DynamicEntity(ICollection<KeyValueDto<object, object>> values)
        {
            _keyvalues = new Dictionary<object, object>();
            values.ToList().ForEach(
                t =>
                {
                    if (t != null)
                        _keyvalues.Add(t.Key, t.Value);
                }
                );
        }

        public override bool TryGetMember(GetMemberBinder binder, out object result)
        {
            if (_values.ContainsKey(binder.Name))
            {
                result = _values[binder.Name];
                return true;
            }
            if (_keyvalues.ContainsKey(binder.Name))
            {
                result = _keyvalues[binder.Name];
                return true;
            }
            result = null;
            return false;
        }
    }
}
