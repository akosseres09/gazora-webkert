import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "firebase/firestore";
@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(timestamp: Timestamp, ...args: unknown[]): string {
    return timestamp.toDate().toLocaleString();
  }

}
