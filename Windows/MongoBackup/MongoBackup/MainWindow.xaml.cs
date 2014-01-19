using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MongoBackup
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void btnTestConnection_Click(object sender, RoutedEventArgs e)
        {
            MongoBackupDriver.MongoBackup bkp = new MongoBackupDriver.MongoBackup(txtServerName.Text);

            var status = bkp.TestConnection() ? "Success" : "Fail";
            MessageBox.Show(status);
        }

        private void btnConnect_Click(object sender, RoutedEventArgs e)
        {
            MongoBackupDriver.MongoBackup bkp = new MongoBackupDriver.MongoBackup(txtServerName.Text);

            cmbDataBase.ItemsSource = bkp.GetDbNames();
        }

        private void btnCollection_Click(object sender, RoutedEventArgs e)
        {
            MongoBackupDriver.MongoBackup bkp = new MongoBackupDriver.MongoBackup(txtServerName.Text);

            var selDb = cmbDataBase.SelectedItem.ToString();

            foreach (var item in bkp.GetCollectionNames(selDb))
            {
                CheckBox chk = new CheckBox() { Content = item };
                chk.Click += chk_Click;
                stkCollection.Children.Add(chk);
            }
        }

        void chk_Click(object sender, RoutedEventArgs e)
        {
            MongoBackupDriver.MongoBackup bkp = new MongoBackupDriver.MongoBackup(txtServerName.Text);

            //var selDb = cmbDataBase.SelectedItem.ToString();
            //var colName = (sender as CheckBox).Content.ToString();

            //var data = bkp.GetCollectionData(selDb, colName);
            //txtJsonContent.Text = data;
        }
    }
}
