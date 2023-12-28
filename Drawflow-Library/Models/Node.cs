using Drawflow_Library.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models
{
	public class Node
	{
		public int Id { get; set; } = 1;
		public  string Name { get; set; } = string.Empty;
		public IEnumerable<NodeData<INodeData>>? Data { get; set; }
		public string Class { get; set; } = string.Empty;
		public string Html { get; set; } = string.Empty;
		public bool TypeNode { get; set; } = false;
		public IEnumerable<NodeLink>? NodeInputs { get; set; }
		public IEnumerable<NodeLink>? NodeOutputs { get; set; }
		public Position Position { get; set; } = new Position();

	}
}
