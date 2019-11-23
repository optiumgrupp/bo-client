import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

export interface NumbersToDate {
  day: number;
  month: number;
  year: number;
}

export interface FieldNames {
  day: string;
  month: string;
  year: string;
}

@Pipe({
  name: 'numbersToDate'
})
export class NumbersToDatePipe implements PipeTransform {
  public transform(value: NumbersToDate, fieldNames?: FieldNames): Date {
    if (fieldNames) {
      return this.momentToDate(moment(value[fieldNames.year] + '-' + value[fieldNames.month] + '-' + value[fieldNames.day]));
    }
    return this.momentToDate(moment(value.year + '-' + value.month + '-' + value.day + '-'));
  }

  private momentToDate(val: moment.Moment): Date {
    if (val.isValid()) {
      return val.toDate();
    }
    return null;
  }
}
