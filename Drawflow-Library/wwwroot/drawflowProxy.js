"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clear = exports.ClearModuleSelected = exports.GetModuleFromNodeId = exports.RemoveConnectionNodes = exports.UpdateConnectionNodes = exports.RemoveSingleConnection = exports.AddConnection = exports.RemoveNodeOutput = exports.RemoveNodeInput = exports.AddNodeOutput = exports.AddNodeInput = exports.UpdateNodeDataFromId = exports.RemoveNodeId = exports.GetNodeFromName = exports.GetNodeFromId = exports.ZoomOut = exports.ZoomIn = exports.AddNode = exports.RemoveModule = exports.AddModule = exports.ChangeModule = exports.CreateDrawflow = exports.GlobalEditor = void 0;
const drawflow_1 = __importDefault(require("drawflow"));
exports.GlobalEditor = undefined;
function CreateDrawflow(proxyID, ID, options) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        exports.GlobalEditor = new drawflow_1.default(ID);
        // draflow options
        exports.GlobalEditor.reroute = options.reroute;
        exports.GlobalEditor.reroute_curvature = options.reroute_curvature;
        exports.GlobalEditor.curvature = options.curvature;
        exports.GlobalEditor.reroute_curvature_start_end = options.reroute_curvature_start_end;
        exports.GlobalEditor.reroute_fix_curvature = options.reroute_fix_curvature;
        exports.GlobalEditor.reroute_width = options.reroute_width;
        exports.GlobalEditor.line_path = options.line_path;
        exports.GlobalEditor.force_first_input = options.force_first_input;
        exports.GlobalEditor.editor_mode = options.editor_mode;
        exports.GlobalEditor.zoom = options.zoom;
        exports.GlobalEditor.zoom_max = options.zoom_max;
        exports.GlobalEditor.zoom_min = options.zoom_min;
        exports.GlobalEditor.zoom_value = options.zoom_value;
        exports.GlobalEditor.zoom_last_value = options.zoom_last_value;
        exports.GlobalEditor.draggable_inputs = options.draggable_inputs;
        exports.GlobalEditor.useuuid = options.useuuid;
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.CreateDrawflow = CreateDrawflow;
function ChangeModule(proxyID, moduleName) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.changeModule(moduleName);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.ChangeModule = ChangeModule;
function AddModule(proxyID, moduleName) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.addModule(moduleName);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.AddModule = AddModule;
function RemoveModule(proxyID, moduleName) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.removeModule(moduleName);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.RemoveModule = RemoveModule;
function AddNode(proxyID, name, inputs, outputs, pos_x, pos_y, classes, data, html, typenode) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.addNode(name, inputs, outputs, pos_x, pos_y, classes, data, html, typenode);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.AddNode = AddNode;
function ZoomIn(proxyID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.zoom_in();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.ZoomIn = ZoomIn;
function ZoomOut(proxyID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        exports.GlobalEditor.zoom_out();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.ZoomOut = ZoomOut;
function GetNodeFromId(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.getNodeFromId(nodeID);
    }
    catch (error) {
        console.log(error);
        return undefined;
    }
}
exports.GetNodeFromId = GetNodeFromId;
function GetNodeFromName(proxyID, nodeName) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.getNodesFromName(nodeName);
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
exports.GetNodeFromName = GetNodeFromName;
function RemoveNodeId(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.removeNodeId(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.RemoveNodeId = RemoveNodeId;
function UpdateNodeDataFromId(proxyID, nodeID, data) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.updateNodeDataFromId(nodeID, data);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.UpdateNodeDataFromId = UpdateNodeDataFromId;
function AddNodeInput(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.addNodeInput(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.AddNodeInput = AddNodeInput;
function AddNodeOutput(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.addNodeOutput(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.AddNodeOutput = AddNodeOutput;
function RemoveNodeInput(proxyID, nodeID, input_class) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.removeNodeInput(nodeID, input_class);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.RemoveNodeInput = RemoveNodeInput;
function RemoveNodeOutput(proxyID, nodeID, input_class) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.removeNodeOutput(nodeID, input_class);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.RemoveNodeOutput = RemoveNodeOutput;
function AddConnection(proxyID, id_output, id_input, output_class, input_class) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.addConnection(id_output, id_input, output_class, input_class);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.AddConnection = AddConnection;
function RemoveSingleConnection(proxyID, id_output, id_input, output_class, input_class) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.removeSingleConnection(id_output, id_input, output_class, input_class);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.RemoveSingleConnection = RemoveSingleConnection;
function UpdateConnectionNodes(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.updateConnectionNodes(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.UpdateConnectionNodes = UpdateConnectionNodes;
function RemoveConnectionNodes(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.removeConnectionNodeId(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.RemoveConnectionNodes = RemoveConnectionNodes;
function GetModuleFromNodeId(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.getModuleFromNodeId(nodeID);
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.GetModuleFromNodeId = GetModuleFromNodeId;
function ClearModuleSelected(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.clearModuleSelected();
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.ClearModuleSelected = ClearModuleSelected;
function Clear(proxyID, nodeID) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        if (exports.GlobalEditor == undefined)
            throw new Error("Global editor is undefined. First create drawflow editor.");
        return exports.GlobalEditor.clear();
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.Clear = Clear;
