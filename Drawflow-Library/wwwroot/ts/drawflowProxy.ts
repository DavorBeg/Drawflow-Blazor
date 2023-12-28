import Drawflow from "drawflow";

let GlobalDrawFlows: Drawflow[] = [];



export function CreateDrawflow(proxyID: number, ID: HTMLElement, options: any): boolean
{
    try {
        if(typeof proxyID !== 'number') throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID] = new Drawflow(ID);
        let workingDrawflow = GlobalDrawFlows[proxyID]
        



        return true;
    } catch (error) {
        return false;
    }
}
