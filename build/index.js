"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// create an object that satisfies the 'DataReader' interface
/* const csvFileReader = new CsvFileReader('104 - football.csv')
const matchReader = new MatchReader(csvFileReader); */
const matchReader = MatchReader_1.MatchReader.fromCsv('104 - football.csv');
matchReader.load();
/* const summary = new Summary(
    new WinsAnalysis('Man United'),
    // new ConsoleReport()
    new HtmlReport()
)
 */
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
