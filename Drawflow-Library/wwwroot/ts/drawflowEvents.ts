import { ConnectionEvent, ConnectionStartEvent, MousePositionEvent } from 'drawflow';
import { GlobalEditor as editor }  from './drawflowProxy'


editor?.on('nodeCreated', function(id: any) {
    DotNet.invokeMethod("Drawflow-Library", "nodeCreated", id);
});


editor?.on('nodeRemoved', function(id: any) {
    DotNet.invokeMethod("Drawflow-Library", "nodeRemoved", id);
});

editor?.on('nodeSelected', function(id: any) {
    DotNet.invokeMethod("Drawflow-Library", "nodeSelected", id);
});


editor?.on('nodeUnselected', function(IsUnselected: boolean) {
    DotNet.invokeMethod("Drawflow-Library", "nodeUnselected", IsUnselected);
});


editor?.on('nodeMoved', function(id: any) {
    DotNet.invokeMethod("Drawflow-Library", "nodeMoved", id);
});


editor?.on('connectionStart', function(event: ConnectionStartEvent) {
    DotNet.invokeMethod("Drawflow-Library", "connectionStart", event);
});


editor?.on('connectionCancel', function(isCanceled: boolean) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCancel", isCanceled);
});


editor?.on('connectionCreated', function(event: ConnectionEvent) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCreated", event);
});



editor?.on('connectionRemoved', function(event: ConnectionEvent) {
    DotNet.invokeMethod("Drawflow-Library", "connectionRemoved", event);
});



editor?.on('connectionSelected', function(event: ConnectionEvent) {
    DotNet.invokeMethod("Drawflow-Library", "connectionSelected", event);
});



editor?.on('connectionUnselected', function(IsUnselected: boolean) {
    DotNet.invokeMethod("Drawflow-Library", "connectionUnselected", IsUnselected);
});



editor?.on('addReroute', function(node_output_id: number) {
    DotNet.invokeMethod("Drawflow-Library", "addReroute", node_output_id);
});



editor?.on('removeReroute', function(node_output_id: number) {
    DotNet.invokeMethod("Drawflow-Library", "removeReroute", node_output_id);
});



editor?.on('moduleCreated', function(module_name: string) {
    DotNet.invokeMethod("Drawflow-Library", "moduleCreated", module_name);
});



editor?.on('moduleChanged', function(module_name: string) {
    DotNet.invokeMethod("Drawflow-Library", "moduleChanged", module_name);
});


editor?.on('moduleRemoved', function(module_name: string) {
    DotNet.invokeMethod("Drawflow-Library", "moduleRemoved", module_name);
});

editor?.on('click', function(event: MouseEvent) {
    DotNet.invokeMethod("Drawflow-Library", "click", event);
});


editor?.on('clickEnd', function(event: any) {
    DotNet.invokeMethod("Drawflow-Library", "clickEnd", event);
});

editor?.on('contextmenu', function(event: any) {
    DotNet.invokeMethod("Drawflow-Library", "contextmenu", event);
});

editor?.on('mouseMove', function(event: MousePositionEvent) {
    DotNet.invokeMethod("Drawflow-Library", "mouseMove", event);
});


editor?.on('zoom', function(event: any) {
    DotNet.invokeMethod("Drawflow-Library", "zoom", event);
});

editor?.on('translate', function(event: MousePositionEvent) {
    DotNet.invokeMethod("Drawflow-Library", "translate", event);
});

editor?.on('import', function(event: any) {
    DotNet.invokeMethod("Drawflow-Library", "import", event);
});

editor?.on('export', function(event: any) {
    DotNet.invokeMethod("Drawflow-Library", "export", event);
});