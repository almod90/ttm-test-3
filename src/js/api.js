const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('/api/test-3').reply(200, [
    {
        name: "object 1",
        traffic: 1231
    },
    {
        name: "object 2",
        traffic: 2345
    },
    {
        name: "object 3",
        traffic: 94565
    },
    {
        name: "object 4",
        traffic: 14512
    },
    {
        name: "object 5",
        traffic: 53421
    }
]);
