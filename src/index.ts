import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";


// create an object that satisfies the 'DataReader' interface
/* const csvFileReader = new CsvFileReader('104 - football.csv')
const matchReader = new MatchReader(csvFileReader); */
const matchReader = MatchReader.fromCsv('104 - football.csv');
matchReader.load();

/* const summary = new Summary(
    new WinsAnalysis('Man United'),
    // new ConsoleReport()
    new HtmlReport()
)
 */
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);