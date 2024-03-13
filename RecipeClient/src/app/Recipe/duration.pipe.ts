import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  // standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} דקות`;
    } else if (remainingMinutes === 0) {
      return `${hours} שעות`;
    } else {
      return `${hours} שעות ו-${remainingMinutes} דקות`;
    }
  }

}
