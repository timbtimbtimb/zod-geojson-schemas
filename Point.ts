import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const PointSchema = z.object({
  type: z.literal('Point'),
  bbox: BBoxSchema.optional(),
  coordinates: PositionSchema
})

export type Point = z.infer<typeof PointSchema>

const test: AssertEqual<Point, GeoJson.Point> = true
test
