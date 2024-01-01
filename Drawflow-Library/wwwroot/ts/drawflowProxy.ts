
import Drawflow, { DrawflowNode } from "drawflow";
import './index.main.less';
import { draflowOptions } from "./drawflowOptions";



export let GlobalEditor: Drawflow | undefined = undefined;

export function CreateDrawflow(ID: string, options: draflowOptions): boolean
{
    try {
        let htmlElement = document.getElementById(ID)
        if(htmlElement == undefined) throw new Error("element with given id does not exist.")
        GlobalEditor = new Drawflow(htmlElement!);
        
        // draflow options
        GlobalEditor.reroute = options.reroute;
        GlobalEditor.reroute_curvature = options.reroute_curvature;
        GlobalEditor.curvature = options.curvature;
        GlobalEditor.reroute_curvature_start_end = options.reroute_curvature_start_end;
        GlobalEditor.reroute_fix_curvature = options.reroute_fix_curvature;
        GlobalEditor.reroute_width = options.reroute_width;
        GlobalEditor.line_path = options.line_path;
        GlobalEditor.force_first_input = options.force_first_input;
        GlobalEditor.editor_mode = options.editor_mode;
        GlobalEditor.zoom = options.zoom;
        GlobalEditor.zoom_max = options.zoom_max;
        GlobalEditor.zoom_min = options.zoom_min;
        GlobalEditor.zoom_value = options.zoom_value;
        GlobalEditor.zoom_last_value = options.zoom_last_value;
        GlobalEditor.draggable_inputs = options.draggable_inputs;
        GlobalEditor.useuuid = options.useuuid;
        GlobalEditor.start();
        console.log(GlobalEditor)
        return true;
    } catch (error) {
        return false;
    }
}

export function ChangeModule(moduleName: string): boolean
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        GlobalEditor.changeModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function AddModule(moduleName: string): boolean
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        GlobalEditor.addModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function RemoveModule(proxyID: number, moduleName: string): boolean
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        GlobalEditor.removeModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function AddNode(name: string, 
                        inputs: number, 
                        outputs: number, 
                        pos_x: number, 
                        pos_y: number, 
                        classes: string,
                        data: object,
                        html: string,
                        typenode: boolean): boolean
                        {

                            try {
                                if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
                                GlobalEditor.addNode(name, inputs, outputs, pos_x, pos_y, classes, data, html, typenode);
                                return true;
                        
                            } catch (error) {
                                console.log(error)
                                return false;   
                            }

                        }

export function ZoomIn(proxyID: number)
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        GlobalEditor.zoom_in();
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function ZoomOut()
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        GlobalEditor.zoom_out();
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function GetNodeFromId(nodeID: number): DrawflowNode | undefined
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.getNodeFromId(nodeID)
        

    } catch (error) {
        console.log(error)
        return undefined;
    }
}

export function GetNodeFromName(nodeName: string): number[]
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.getNodesFromName(nodeName);
        

    } catch (error) {
        console.log(error)
        return [];
    }
}

export function RemoveNodeId(nodeID: number): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.removeNodeId(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function UpdateNodeDataFromId(nodeID: number | string, data: object): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.updateNodeDataFromId(nodeID, data);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function AddNodeInput(nodeID: number | string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.addNodeInput(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}


export function AddNodeOutput(nodeID: number | string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.addNodeOutput(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}


export function RemoveNodeInput(nodeID: number | string, input_class: string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.removeNodeInput(nodeID, input_class);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function RemoveNodeOutput(nodeID: number | string, input_class: string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.removeNodeOutput(nodeID, input_class);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function AddConnection(id_output: number | string, id_input: number | string, output_class: string, input_class: string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.addConnection(id_output, id_input, output_class, input_class);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function RemoveSingleConnection(id_output: number | string, id_input: number | string, output_class: string, input_class: string): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.removeSingleConnection(id_output, id_input, output_class, input_class);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function UpdateConnectionNodes(nodeID: string | number): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.updateConnectionNodes(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}


export function RemoveConnectionNodes(nodeID: string | number): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.removeConnectionNodeId(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function GetModuleFromNodeId(nodeID: string | number): string | undefined
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.getModuleFromNodeId(nodeID);
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function ClearModuleSelected(): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.clearModuleSelected();
        

    } catch (error) {
        console.log(error)
        return;
    }
}

export function Clear(): void
{
    try {
        if(GlobalEditor == undefined) throw new Error("Global editor is undefined. First create drawflow editor.")
        return GlobalEditor.clear();
        

    } catch (error) {
        console.log(error)
        return;
    }
}