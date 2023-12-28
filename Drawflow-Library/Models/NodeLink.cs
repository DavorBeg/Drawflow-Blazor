using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Drawflow_Library.Models.Enums;

namespace Drawflow_Library.Models
{
    public class NodeLink
	{
		public int Id { get; set; } = 0;
		IEnumerable<Connection> Connections { get; set; }
		public LinkType LinkType { get; set; }
		public string Name 
		{ get {  return new String(LinkType.ToString().ToLower() + "_" + Id.ToString()); } }
	}
}
