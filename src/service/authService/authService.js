import axios from "axios";

export const signUp = (id, pw) => {
    const data = JSON.stringify({
        "username": id,
        "password": pw,
        "birthday": 20221023
    });
    console.log(data);

    const config = {
        method: 'post',
        url: 'http://localhost:3001/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}