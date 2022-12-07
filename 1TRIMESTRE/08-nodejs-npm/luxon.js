
import {DateTime} from 'luxon';
console.log(DateTime.now().setZone('Europe/Madrid').minus({weeks:1}).endOf('day').toISO());