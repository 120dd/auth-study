import axios from "axios";

export const signUp = async (id, pw, birth) => {
    const data = JSON.stringify({
        "username": id,
        "password": pw,
        "birthday": birth
    });

    const config = {
        method: 'post',
        url: 'http://localhost:3001/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const signIn = async (userInfo) => {
    const data = JSON.stringify({
        "username": userInfo.id,
        "password": userInfo.pw,
    });

    const config = {
        method: 'post',
        url: 'http://localhost:3001/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    return  await axios(config)
        .then(res=> {
            return res;
        })
        .catch(err=>{
            throw err
        })
}