using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Tools.Ribbon;
using COM = System.Runtime.InteropServices.ComTypes;
using System.IO;

namespace MsWordFirstAddon
{
    public partial class CustRibbon
    {
        private void CustRibbon_Load(object sender, RibbonUIEventArgs e)
        {

        }

        private void btnSaveDoc_Click(object sender, RibbonControlEventArgs e)
        {
            Microsoft.Office.Interop.Word.Document nativeDocument = Globals.ThisAddIn.Application.ActiveDocument;

            COM.IPersistFile compoundDocument = nativeDocument as COM.IPersistFile;

            string path = @"d:\Temp\test_" + DateTime.Now.Ticks.ToString() + ".docx";

            compoundDocument.Save(path, false);
            byte[] content = File.ReadAllBytes(path);


        }
    }
}
