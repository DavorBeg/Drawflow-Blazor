import { GlobalEditor as editor } from './drawflowProxy';
editor === null || editor === void 0 ? void 0 : editor.on('nodeCreated', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeCreated", id);
});
editor === null || editor === void 0 ? void 0 : editor.on('nodeRemoved', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeRemoved", id);
});
editor === null || editor === void 0 ? void 0 : editor.on('nodeSelected', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeSelected", id);
});
editor === null || editor === void 0 ? void 0 : editor.on('nodeUnselected', function (IsUnselected) {
    DotNet.invokeMethod("Drawflow-Library", "nodeUnselected", IsUnselected);
});
editor === null || editor === void 0 ? void 0 : editor.on('nodeMoved', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeMoved", id);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionStart', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionStart", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionCancel', function (isCanceled) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCancel", isCanceled);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionCreated', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCreated", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionRemoved', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionRemoved", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionSelected', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionSelected", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('connectionUnselected', function (IsUnselected) {
    DotNet.invokeMethod("Drawflow-Library", "connectionUnselected", IsUnselected);
});
editor === null || editor === void 0 ? void 0 : editor.on('addReroute', function (node_output_id) {
    DotNet.invokeMethod("Drawflow-Library", "addReroute", node_output_id);
});
editor === null || editor === void 0 ? void 0 : editor.on('removeReroute', function (node_output_id) {
    DotNet.invokeMethod("Drawflow-Library", "removeReroute", node_output_id);
});
editor === null || editor === void 0 ? void 0 : editor.on('moduleCreated', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleCreated", module_name);
});
editor === null || editor === void 0 ? void 0 : editor.on('moduleChanged', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleChanged", module_name);
});
editor === null || editor === void 0 ? void 0 : editor.on('moduleRemoved', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleRemoved", module_name);
});
editor === null || editor === void 0 ? void 0 : editor.on('click', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "click", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('clickEnd', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "clickEnd", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('contextmenu', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "contextmenu", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('mouseMove', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "mouseMove", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('zoom', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "zoom", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('translate', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "translate", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('import', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "import", event);
});
editor === null || editor === void 0 ? void 0 : editor.on('export', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "export", event);
});
