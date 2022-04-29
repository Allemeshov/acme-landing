import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleDate'
})
export class ArticleDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return value.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

}
