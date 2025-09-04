import GeoJson from "geojson";
import z from "zod";
import { AssertEqual } from "./AssertEqual";

export const PropertiesSchema = z.record(z.string(), z.any()).nullable()

export type Properties = z.infer<typeof PropertiesSchema>

const test: AssertEqual<Properties, GeoJson.GeoJsonProperties> = true
test
