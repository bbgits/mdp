const axios = require('axios');

// const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524');
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };

// console.log(sendGetRequest());


// async () => {
//     let data;
//     function status() {
//         const url = "http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524";
//         return axios.get(url).then((resp) => {
//             return resp.data;
//         });
//     }
//     data = await status();
//     console.log(data);
// };


(async () => {
    let data = {};
    async function status() {
        const url = "http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524";
        const response = await axios.get(url);
        data = response.data;
    }
    await status();
    console.log(data); // {...response.data}
    // Now you can manipulate and use the properties of data in subsequent code here
})()
