using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Events
{
	public static class ViewportEvents
	{
		public static Func<int>? Zoom = null;
		public static Func<Position>? Translate = null;
	}
}
