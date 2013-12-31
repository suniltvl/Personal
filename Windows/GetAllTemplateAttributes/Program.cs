using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Inooga.Inforius.Infrastructure.ExcelExtensions;
using System.IO;

namespace GetAllTemplateAttributes
{
    class Program
    {
        static void Main(string[] args)
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
}
