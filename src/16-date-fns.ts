import {subDays, format} from 'date-fns';

const date = new Date(2020, 1, 1);
const date2 = subDays(date, 10);
const str = format(date2, 'dd/MM/yyyy');

console.log(str);

