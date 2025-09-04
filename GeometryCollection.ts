import GeoJson from "geojson";
import z from "zod";
import { GeometrySchema } from "./Geometry";
import { AssertEqual } from "./AssertEqual";
import { MultiPolygonSchema } from "./MultiPolygon";
import { PolygonSchema } from "./Polygon";
import { MultiLineStringSchema } from "./MultiLineString";
import { LineStringSchema } from "./LineString";
import { MultiPointSchema } from "./MultiPoint";
import { PointSchema } from "./Point";

export const GeometryCollectionSchema: z.ZodType<GeoJson.GeometryCollection> = z.lazy(() =>
  z.object({
    type: z.literal("GeometryCollection"),
    geometries: z.array(z.union([
      PointSchema,
      MultiPointSchema,
      LineStringSchema,
      MultiLineStringSchema,
      PolygonSchema,
      MultiPolygonSchema,
      GeometryCollectionSchema
    ])),
  })
);

export type GeometryCollection = z.infer<typeof GeometryCollectionSchema>

const test: AssertEqual<GeometryCollection, GeoJson.GeometryCollection> = true
test
