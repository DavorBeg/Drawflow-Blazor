using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library
{
    public static class Helper
    {
        public static string ClassesToString(List<string> Classes)
        {
            return string.Join(" ", Classes);
        }
    }
}
