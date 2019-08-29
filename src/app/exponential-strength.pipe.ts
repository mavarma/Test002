/*
* Modification Details:
* 1. This is the custom Pipe class to define the given text length to be limited to show on view page
*
*/

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'limitTo'
})
export class TruncatePipe {
    transform(value: string, args: string): string {
        let limit = args ? parseInt(args, 10) : 10;
        let trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}