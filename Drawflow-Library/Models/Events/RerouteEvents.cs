using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Events
{
	public static class RerouteEvents
	{
		public static Func<int>? Add = null;
		public static Func<int>? Remove = null;
	}
}
