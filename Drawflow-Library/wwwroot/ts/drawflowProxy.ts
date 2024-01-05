
import Drawflow, { DrawflowNode } from "drawflow";
import { draflowOptions } from "./drawflowOptions";

const dataToImport = {
    "drawflow":
    {
      "Home":
      {
        "data":
        {
          "1":
          {"id":1,"name":"welcome","data":{},"class":"welcome","html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ","typenode": false, "inputs":{},"outputs":{},"pos_x":50,"pos_y":50},"2":{"id":2,"name":"slack","data":{},"class":"slack","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message</div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1028,"pos_y":87},"3":{"id":3,"name":"telegram","data":{"channel":"channel_2"},"class":"telegram","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1032,"pos_y":184},"4":{"id":4,"name":"email","data":{},"class":"email","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},"outputs":{},"pos_x":1033,"pos_y":439},"5":{"id":5,"name":"template","data":{"template":"Write your template"},"class":"template","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":607,"pos_y":304},"6":{"id":6,"name":"github","data":{"name":"https://github.com/jerosoler/Drawflow"},"class":"github","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":341,"pos_y":191},"7":{"id":7,"name":"facebook","data":{},"class":"facebook","html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":347,"pos_y":87},"11":{"id":11,"name":"log","data":{},"class":"log","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1031,"pos_y":363}}},"Other":{"data":{"8":{"id":8,"name":"personalized","data":{},"class":"personalized","html":"\n            <div>\n              Personalized\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},"outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},"pos_x":764,"pos_y":227},"9":{"id":9,"name":"dbclick","data":{"name":"Hello World!!"},"class":"dbclick","html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},"pos_x":209,"pos_y":38},"12":{"id":12,"name":"multiple","data":{},"class":"multiple","html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},"pos_x":179,"pos_y":272}}}}}


export let GlobalEditor: Drawflow | undefined = undefined;

export function CreateDrawflow(ID: string, options: draflowOptions, Style: string, Classes: string[]): boolean
{
    try {
        let htmlElement = document.getElementById(ID)
        if(htmlElement == undefined || htmlElement == null) throw new Error("element with given id does not exist.")
        GlobalEditor = new Drawflow(htmlElement!);
        
        Classes.forEach(c => {
            htmlElement!.classList.add(c);

        });
        
        htmlElement.style.cssText = Style;

        htmlElement.ondrop = (event: DragEvent) => {
            drop(event);
        }

        htmlElement.ondrag = (event: DragEvent) => {
            drag(event);
        }
        htmlElement.ondragover = (event: DragEvent) => {
            event.preventDefault();
        }
        //draflow options
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

        GlobalEditor.reroute = true;

        GlobalEditor.start();
        GlobalEditor.import(dataToImport);
        
        return true;
    } catch (error) {
        return false;
    }
}

let mobile_item_selec = '';
let mobile_last_move: any = null;

function allowDrop(ev: DragEvent): void {
    ev.preventDefault();
  }

  function drag(ev: any): void {
    if (ev.type === "touchstart") {
      mobile_item_selec = ev.target!.closest(".drag-drawflow").getAttribute('data-node');
    } else {
    ev.dataTransfer!.setData("node", ev.target.getAttribute('data-node'));
    }
  }

  function drop(ev: DragEvent): void {
    if (ev.type === "touchend") {
      var parentdrawflow = document.elementFromPoint( mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)!.closest("#drawflow");
      if(parentdrawflow != null) {
        addNodeToDrawFlow(mobile_item_selec, mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY);
      }
      mobile_item_selec = '';
    } else {
      ev.preventDefault();
      var data = ev.dataTransfer!.getData("node");
      addNodeToDrawFlow(data, ev.clientX, ev.clientY);
    }

  }

  function addNodeToDrawFlow(name: string, pos_x: number, pos_y: number) {
    if(GlobalEditor == undefined) throw new Error("Global editor is undefined.");
    if(GlobalEditor.editor_mode === 'fixed') {
      return false;
    }
    pos_x = pos_x * ( GlobalEditor.precanvas.clientWidth / (GlobalEditor.precanvas.clientWidth * GlobalEditor.zoom)) - (GlobalEditor.precanvas.getBoundingClientRect().x * ( GlobalEditor.precanvas.clientWidth / (GlobalEditor.precanvas.clientWidth * GlobalEditor.zoom)));
    pos_y = pos_y * ( GlobalEditor.precanvas.clientHeight / (GlobalEditor.precanvas.clientHeight * GlobalEditor.zoom)) - (GlobalEditor.precanvas.getBoundingClientRect().y * ( GlobalEditor.precanvas.clientHeight / (GlobalEditor.precanvas.clientHeight * GlobalEditor.zoom)));
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