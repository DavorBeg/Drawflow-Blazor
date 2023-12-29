import Drawflow from "drawflow";
import { draflowOptions } from "./drawflowOptions";

let GlobalDrawFlows: Drawflow[] = [];

export function CreateDrawflow(proxyID: number, ID: HTMLElement, options: draflowOptions): boolean
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID] = new Drawflow(ID);
        let workingdf = GlobalDrawFlows[proxyID]

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
    } catch (error) {
        return false;
    }
}

export function ChangeModule(proxyID: number, moduleName: string): boolean
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID].changeModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function AddModule(proxyID: number, moduleName: string): boolean
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID].addModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function RemoveModule(proxyID: number, moduleName: string): boolean
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID].removeModule(moduleName);
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function AddNode(proxyID: number,
                        name: string, 
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
                                if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
                                GlobalDrawFlows[proxyID].addNode(name, inputs, outputs, pos_x, pos_y, classes, data, html, typenode);
                                return true;
                        
                            } catch (error) {
                                console.log(error)
                                return false;   
                            }

                        }

export function ZoomIn(proxyID: number)
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID].zoom_in();
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function ZoomOut(proxyID: number)
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID].zoom_out();
        return true;

    } catch (error) {
        console.log(error)
        return false;   
    }
}

export function GetNodeFromName(proxyID: number, nodeName: string): number[]
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        return GlobalDrawFlows[proxyID].getNodesFromName(nodeName);
        

    } catch (error) {
        console.log(error)
        return [];
    }
}
