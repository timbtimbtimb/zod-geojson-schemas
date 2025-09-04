import GeoJson from "geojson";
import z from "zod";
import { AssertEqual } from "./AssertEqual";

export const BBoxSchema = z.union([
  z.tuple([z.number(), z.number(), z.number(), z.number()]),
  z.tuple([z.number(), z.number(), z.number(), z.number(), z.number(), z.number()]),
])

export type BBox = z.infer<typeof BBoxSchema>

const test: AssertEqual<BBox, GeoJson.BBox> = true
test