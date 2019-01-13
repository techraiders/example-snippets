import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "weekdays"
})
export class WeekdaysPipe implements PipeTransform {
  transform(date: Date, args?: any): Array<Date> {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    var now = date ? new Date(date) : new Date();

    // set time to some convenient value
    now.setHours(0, 0, 0, 0);

    // Get the previous Sunday
    var sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay());

    // Get next Saturday
    var saturday = new Date(now);
    saturday.setDate(sunday.getDate() - sunday.getDay() + 6);

    // Return array of date objects
    var week = [sunday];
    week[1] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 1
    );
    week[2] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 2
    );
    week[3] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 3
    );
    week[4] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 4
    );
    week[5] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 5
    );
    week[6] = new Date(
      sunday.getFullYear(),
      sunday.getMonth(),
      sunday.getDate() + 6
    );
    /*week[3] = new Date(now.setDate(week[2].getDate() + 3));
    week[4] = new Date(now.setDate(week[3].getDate() + 1));
    week[5] = new Date(now.setDate(week[4].getDate() + 1));
    week[6] = new Date(now.setDate(week[5].getDate() + 1));*/
    return week;
  }
}
