import { ActionParam } from "./ActionParam";
import { ActionMasterEnum } from "./ActionMasterEnum";

export interface ActionFieldMapping {
  isOCR: boolean;
  Active: boolean;
  fieldId: number;
  eventType: string;
  fieldName: string;
  fieldType: string;
  isRequired: boolean; // Assuming isRequired can be a string based on the provided JSON
  actionParam?: ActionParam[]; // Assuming actionParam is an array of objects with a specific structure
  actionMaster?: ActionMasterEnum; // Assuming actionMaster is optional based on the provided JSON
  defaultValue?: string;
  vectorCoordinate: string; // Assuming vectorCoordinate is a string based on the provided JSON [x1, y1, x2, y2]
}
