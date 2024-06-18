import { Coordinate } from "./Coordinate";

export interface StrokeData {
  contentBounds?: ContentBounds;
  coordinates: Coordinate[];
  isLive?: boolean;
  pageAddress: string;
  timeRange?: TimeRange;
}

interface ContentBounds {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface TimeRange {
  startTime: number;
  timeDuration: number;
  endTime: number;
}
