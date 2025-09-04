import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const PolygonSchema = z.object({
  type: z.literal('Polygon'),
  bbox: BBoxSchema.optional(),
  coordinates: z.array(z.array(PositionSchema))
})

export type Polygon = z.infer<typeof PolygonSchema>

const test: AssertEqual<Polygon, GeoJson.Polygon> = true
test
