using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Events
{
	public static class ConnectionEvents
	{
		public static Func<Connection>? Created = null;
		public static Func<Connection>? Changed = null;
	}
}
