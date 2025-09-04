import GeoJson from "geojson";
import z from "zod";
import { AssertEqual } from "./AssertEqual";

export const PositionSchema = z.array(z.number()).min(2)

export type Position = z.infer<typeof PositionSchema>

const test: AssertEqual<Position, GeoJson.Position> = true
test