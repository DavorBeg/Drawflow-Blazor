using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Events
{
	public static class NodeEvents
	{
		public static Func<int>? Created = null;
		public static Func<int>? Removed = null;
		public static Func<int>? Selected = null;
		public static Func<int>? Moved = null;
    }
}
