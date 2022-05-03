import axios from "axios";

export const signUp = async ( id , pw , birth , userName ) => {
    const data = JSON.stringify({
        "id": id ,
        "password": pw ,
        "username": userName ,
        "birthday": birth ,
    });

    const config = {
        method: 'post' ,
        url: 'http://localhost:3001/signup' ,
        headers: {
            'Content-Type': 'application/json'
        } ,
        data: data
    };

    try {
        await axios(config)
    } catch (err) {
        console.log(err);
    }
}

// export const signIn = async ( userInfo ) => {
//     const data = JSON.stringify({
//         "id": userInfo.id ,
//         "password": userInfo.pw ,
//     });
//
//     const config = {
//         method: 'post' ,
//         url: 'http://localhost:3001/login' ,
//         headers: {
//             'Content-Type': 'application/json'
//         } ,
//         data: data
//     };
//
//     try {
//         const { data } = await axios(config)
//     } catch (err) {
//         console.log(err);
//     }
