import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const MultiPolygonSchema = z.object({
  type: z.literal('MultiPolygon'),
  bbox: BBoxSchema.optional(),
  coordinates: z.array(z.array(z.array(PositionSchema)))
})

export type MultiPolygon = z.infer<typeof MultiPolygonSchema>

const test: AssertEqual<MultiPolygon, GeoJson.MultiPolygon> = true
test
