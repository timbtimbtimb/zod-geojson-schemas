import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const LineStringSchema = z.object({
  type: z.literal('LineString'),
  bbox: BBoxSchema.optional(),
  coordinates: z.array(PositionSchema)
})

export type LineString = z.infer<typeof LineStringSchema>

const test: AssertEqual<LineString, GeoJson.LineString> = true
test
