import { DrawFlowEditorMode } from "drawflow";

export interface draflowOptions
{
    reroute: boolean,
    reroute_fix_curvature: boolean,
    curvature: number,
    reroute_curvature_start_end: number,
    reroute_curvature: number,
    reroute_width: number,
    line_path: number,
    force_first_input: boolean,
    editor_mode: DrawFlowEditorMode,
    zoom: number,
    zoom_max: number,
    zoom_min: number,
    zoom_value: number,
    zoom_last_value: number,
    draggable_inputs: boolean,
    useuuid: boolean
}