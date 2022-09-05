import _ from 'lodash';

const data = [
    {
        username: 'john',
        role: 'admin'
    },
    {
        username: 'jane',
        role: 'user'
    },
    {
        username: 'joe',
        role: 'user'
    }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);