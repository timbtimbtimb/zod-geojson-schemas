import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const MultiPointSchema = z.object({
  type: z.literal('MultiPoint'),
  bbox: BBoxSchema.optional(),
  coordinates: z.array(PositionSchema)
})

export type MultiPoint = z.infer<typeof MultiPointSchema>

const test: AssertEqual<MultiPoint, GeoJson.MultiPoint> = true
test
