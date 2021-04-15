const axios = require('axios').default;
const fs = require('fs').promises;

//send request to url
axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(async (response) => {
        try {
            //make dir, dont throw error if dir already exists
            await fs.mkdir('result', { recursive: true });
            //write file to dir
            await fs.writeFile('result/posts.txt', JSON.stringify(response.data));
        } catch (error) {
            console.log(error)
        }
    })
    .catch((error) => {
        console.log(error);
    });