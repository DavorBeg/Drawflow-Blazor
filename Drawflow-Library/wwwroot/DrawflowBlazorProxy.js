import Drawflow from "./drawflow.min.js"

let drawflowEditors = [];

export function CreateDrawFlow(proxyID, id, options)
{
    try
    {
        if(typeof(proxyID) != Number) throw new Error("proxyID must be type of number.");
        drawflowEditors[proxyID] = new Drawflow(id);

        
        return true;
    }
    catch(error)
    {
        console.log(error)
    }
}

