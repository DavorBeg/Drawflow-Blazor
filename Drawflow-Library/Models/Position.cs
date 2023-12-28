using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models
{
	public struct Position
	{
        public int x;
		public int y;
        public Position(int x, int y)
        {
            this.x = x; this.y = y;
        }
        public Position()
        {
            this.x = 0; this.y = 0;
        }
	}
}
