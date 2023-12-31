import { ConnectionEvent, ConnectionStartEvent, MousePositionEvent } from 'drawflow';
import { GlobalEditor as editor }  from './drawflowProxy'


editor?.on('nodeCreated', function(id) {

});


editor?.on('nodeRemoved', function(id) {

});

editor?.on('nodeSelected', function(id) {

});


editor?.on('nodeUnselected', function(IsUnselected) {

});


editor?.on('nodeMoved', function(id) {

});


editor?.on('connectionStart', function(event: ConnectionStartEvent) {

});


editor?.on('connectionCancel', function(isCanceled) {

});


editor?.on('connectionCreated', function(event: ConnectionEvent) {

});



editor?.on('connectionRemoved', function(event: ConnectionEvent) {

});



editor?.on('connectionSelected', function(event: ConnectionEvent) {

});



editor?.on('connectionUnselected', function(IsUnselected: boolean) {

});



editor?.on('addReroute', function(node_output_id: number) {

});



editor?.on('removeReroute', function(node_output_id: number) {

});



editor?.on('moduleCreated', function(module_name: string) {

});



editor?.on('moduleChanged', function(module_name: string) {

});


editor?.on('moduleRemoved', function(module_name: string) {

});

editor?.on('click', function(event: MouseEvent) {

});


editor?.on('clickEnd', function(event: any) {

});

editor?.on('contextmenu', function(event: any) {

});

editor?.on('mouseMove', function(event: MousePositionEvent) {

});


editor?.on('zoom', function(event: any) {

});

editor?.on('translate', function(event: MousePositionEvent) {

});

editor?.on('import', function(event: any) {

});

editor?.on('export', function(event: any) {

});