import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PositionSchema } from "./Position";
import { AssertEqual } from "./AssertEqual";

export const MultiLineStringSchema = z.object({
  type: z.literal('MultiLineString'),
  bbox: BBoxSchema.optional(),
  coordinates: z.array(z.array(PositionSchema))
})

export type MultiLineString = z.infer<typeof MultiLineStringSchema>

const test: AssertEqual<MultiLineString, GeoJson.MultiLineString> = true
test
