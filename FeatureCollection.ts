import GeoJson from "geojson";
import z from "zod";
import { BBoxSchema } from "./BBox";
import { AssertEqual } from "./AssertEqual";
import { FeatureSchema } from "./Feature";

export const FeatureCollectionSchema = z.object({
  type: z.literal('FeatureCollection'),
  bbox: BBoxSchema.optional(),
  features: z.array(FeatureSchema)
})

export type FeatureCollection = z.infer<typeof FeatureCollectionSchema>

const test: AssertEqual<FeatureCollection, GeoJson.FeatureCollection> = true
test
