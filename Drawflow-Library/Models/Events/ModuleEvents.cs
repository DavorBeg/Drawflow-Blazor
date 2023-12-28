using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Events
{
	public static class ModuleEvents
	{
		public static Func<string>? Changed = null; 
		public static Func<string>? Created = null;
	}
}
