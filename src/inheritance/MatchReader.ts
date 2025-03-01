import { MatchResult } from "../MatchResults";
import { dateStringToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader";


type MatchData = [Date, string, string, number, number, MatchResult, string]; // Tuple

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // type assertion
            row[6]
        ]
    }
}