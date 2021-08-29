// // const getPosts = require('../getPosts/index.js');
// const supertest = require('supertest')
// const mocha = require('mocha')
// const getPost = require('../getPost')

// describe("Learn github Actions", () => {
// //   describe("test getPosts", () => {
//     const api = supertest('https://n46ugv8pe2.execute-api.ap-northeast-1.amazonaws.com/testAPI')

//     it('returns a 200 for a known movies through api-gateway', (done) => {
//       api.post()
//         .expect(200, done)
//         // const response = JSON.parse(res);
//         // .expect(response[0].itemId).toBe("100");
//     })
// //   })
// });


const {request} =require('./request');

test('id=1request', async () => {
    return request().then(data => {
        // su dung promise

        expect(data.data).toEqual({
            "data": "eyJBY2NlcHRSYW5nZXMiOiJieXRlcyIsIkxhc3RNb2RpZmllZCI6IjIwMjEtMDgtMjNUMTM6MDg6MzMuMDAwWiIsIkNvbnRlbnRMZW5ndGgiOjQsIkVUYWciOiJcIjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2XCIiLCJDb250ZW50RW5jb2RpbmciOiJiYXNlNjQiLCJDb250ZW50VHlwZSI6InRleHQvcGxhaW4iLCJNZXRhZGF0YSI6e30sIkJvZHkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOlsxMTYsMTAxLDExNSwxMTZdfX0=",
            "itemId": 100,
            "itemName": "test"
        })
    })
})

// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
  
//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
//   });