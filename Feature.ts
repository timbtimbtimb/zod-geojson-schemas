import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { PropertiesSchema } from "./Properties";
import { AssertEqual } from "./AssertEqual";
import { GeometrySchema } from "./Geometry";

export const FeatureSchema = z.object({
  type: z.literal('Feature'),
  bbox: BBoxSchema.optional(),
  id: z.union([z.number(), z.string()]).optional(),
  properties: PropertiesSchema,
  geometry: GeometrySchema
})

export type Feature = z.infer<typeof FeatureSchema>

const test: AssertEqual<Feature, GeoJson.Feature> = true
test
