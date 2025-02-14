import fs from 'fs';

export abstract class CsvFileReader<T> {
    abstract mapRow(row: string[]): T;
    data: T[] = [];

    constructor(public filename: string) { }

    read() {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow)
    }
}