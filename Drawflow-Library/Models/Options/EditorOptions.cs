using Drawflow_Library.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Drawflow_Library.Models.Options
{
    public class EditorOptions
    {
        /// <summary>
        /// Active reroute connections. Use before start or import.
        /// Create point with double click on line connection. Double click on point for remove.
        /// </summary>
        public bool reroute { get; set; } = false;
        public bool reroute_fix_curvature { get; set; } = false;
        public decimal curvature { get; set; } = 0.5M;
        public decimal reroute_curvature { get; set; } = 0.5M;
        public int reroute_width { get; set; } = 6;
        public int line_path { get; set; } = 5;
        public bool force_first_input { get; set; } = false;
        public string editor_mode { get; set; } = EditorMode.Editor;
        public decimal zoom { get; set; } = 1;
        public decimal zoom_max { get; set; } = 1.6M;
        public decimal zoom_min { get; set; } = 0.5M;
        public decimal zoom_last_value { get; set; } = 1M;
        public bool draggable_inputs { get; set; } = true;
        public bool useuuid { get; set; } = false;
    }
}
