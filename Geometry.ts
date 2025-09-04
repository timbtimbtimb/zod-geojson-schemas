import GeoJson from "geojson";
import z from "zod";
import { PointSchema } from "./Point";
import { MultiPointSchema } from "./MultiPoint";
import { LineStringSchema } from "./LineString";
import { MultiLineStringSchema } from "./MultiLineString";
import { PolygonSchema } from "./Polygon";
import { MultiPolygonSchema } from "./MultiPolygon";
import { GeometryCollectionSchema } from "./GeometryCollection";
import { AssertEqual } from "./AssertEqual";

export const GeometrySchema = z.union([
  PointSchema,
  MultiPointSchema,
  LineStringSchema,
  MultiLineStringSchema,
  PolygonSchema,
  MultiPolygonSchema,
  GeometryCollectionSchema
])

export type Geometry = z.infer<typeof GeometrySchema>

const test: AssertEqual<Geometry, GeoJson.Geometry> = true
test
