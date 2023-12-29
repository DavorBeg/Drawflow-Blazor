"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNodeFromName = exports.ZoomOut = exports.ZoomIn = exports.AddNode = exports.RemoveModule = exports.AddModule = exports.ChangeModule = exports.CreateDrawflow = void 0;
const drawflow_1 = __importDefault(require("drawflow"));
let GlobalDrawFlows = [];
function CreateDrawflow(proxyID, ID, options) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID] = new drawflow_1.default(ID);
        let workingdf = GlobalDrawFlows[proxyID];
        // draflow options
        workingdf.reroute = options.reroute;
        workingdf.reroute_curvature = options.reroute_curvature;
        workingdf.curvature = options.curvature;
        workingdf.reroute_curvature_start_end = options.reroute_curvature_start_end;
        workingdf.reroute_fix_curvature = options.reroute_fix_curvature;
        workingdf.reroute_width = options.reroute_width;
        workingdf.line_path = options.line_path;
        workingdf.force_first_input = options.force_first_input;
        workingdf.editor_mode = options.editor_mode;
        workingdf.zoom = options.zoom;
        workingdf.zoom_max = options.zoom_max;
        workingdf.zoom_min = options.zoom_min;
        workingdf.zoom_value = options.zoom_value;
        workingdf.zoom_last_value = options.zoom_last_value;
        workingdf.draggable_inputs = options.draggable_inputs;
        workingdf.useuuid = options.useuuid;
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
        GlobalDrawFlows[proxyID].changeModule(moduleName);
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
        GlobalDrawFlows[proxyID].addModule(moduleName);
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
        GlobalDrawFlows[proxyID].removeModule(moduleName);
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
        GlobalDrawFlows[proxyID].addNode(name, inputs, outputs, pos_x, pos_y, classes, data, html, typenode);
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
        GlobalDrawFlows[proxyID].zoom_in();
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
        GlobalDrawFlows[proxyID].zoom_out();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.ZoomOut = ZoomOut;
function GetNodeFromName(proxyID, nodeName) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        return GlobalDrawFlows[proxyID].getNodesFromName(nodeName);
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
exports.GetNodeFromName = GetNodeFromName;
