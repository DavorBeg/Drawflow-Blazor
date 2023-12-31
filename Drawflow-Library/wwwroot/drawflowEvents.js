"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drawflowProxy_1 = require("./drawflowProxy");
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('nodeCreated', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeCreated", id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('nodeRemoved', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeRemoved", id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('nodeSelected', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeSelected", id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('nodeUnselected', function (IsUnselected) {
    DotNet.invokeMethod("Drawflow-Library", "nodeUnselected", IsUnselected);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('nodeMoved', function (id) {
    DotNet.invokeMethod("Drawflow-Library", "nodeMoved", id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionStart', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionStart", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionCancel', function (isCanceled) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCancel", isCanceled);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionCreated', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionCreated", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionRemoved', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionRemoved", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionSelected', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "connectionSelected", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('connectionUnselected', function (IsUnselected) {
    DotNet.invokeMethod("Drawflow-Library", "connectionUnselected", IsUnselected);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('addReroute', function (node_output_id) {
    DotNet.invokeMethod("Drawflow-Library", "addReroute", node_output_id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('removeReroute', function (node_output_id) {
    DotNet.invokeMethod("Drawflow-Library", "removeReroute", node_output_id);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('moduleCreated', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleCreated", module_name);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('moduleChanged', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleChanged", module_name);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('moduleRemoved', function (module_name) {
    DotNet.invokeMethod("Drawflow-Library", "moduleRemoved", module_name);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('click', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "click", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('clickEnd', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "clickEnd", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('contextmenu', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "contextmenu", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('mouseMove', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "mouseMove", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('zoom', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "zoom", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('translate', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "translate", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('import', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "import", event);
});
drawflowProxy_1.GlobalEditor === null || drawflowProxy_1.GlobalEditor === void 0 ? void 0 : drawflowProxy_1.GlobalEditor.on('export', function (event) {
    DotNet.invokeMethod("Drawflow-Library", "export", event);
});
