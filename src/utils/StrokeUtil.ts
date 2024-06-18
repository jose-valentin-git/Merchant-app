import { Coordinate } from "../model/stroke/Coordinate";

export default class StrokeUtil {
  static getSingleStrokeData = (
    strokesList: Coordinate[],
    rxPageAddress: string
  ) => {
    const contentBounds = {
      top: strokesList[0].y,
      bottom: strokesList[0].y,
      left: strokesList[0].x,
      right: strokesList[0].x,
    };

    let startTime = strokesList[0]._time;
    let endTime = strokesList[0]._time;

    for (const coordinateItem of strokesList) {
      if (coordinateItem.y < contentBounds.top)
        contentBounds.top = coordinateItem.y;
      if (coordinateItem.y > contentBounds.bottom)
        contentBounds.bottom = coordinateItem.y;
      if (coordinateItem.x < contentBounds.left)
        contentBounds.left = coordinateItem.x;
      if (coordinateItem.x > contentBounds.right)
        contentBounds.right = coordinateItem.x;

      if (coordinateItem._time < startTime) startTime = coordinateItem._time;
      if (coordinateItem._time > endTime) endTime = coordinateItem._time;

      coordinateItem._pressure = 0;
    }

    return {
      contentBounds,
      coordinates: strokesList,
      isLive: true,
      pageAddress: rxPageAddress,
      timeRange: {
        startTime,
        timeDuration: endTime - startTime,
        endTime,
      },
    };
  };
}
