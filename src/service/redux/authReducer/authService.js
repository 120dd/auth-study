import API from "../../API";

export const signUp = async ( id , pw , birth , userName ) => {
    const data = {
        "id": id ,
        "password": pw ,
        "username": userName ,
        "birth": birth ,
    };

    try {
        await API.post('/signup' , data)
    } catch (err) {
        console.log(err);
    }
}

export const getUsers = async () => {
    try {
        const { data } = await API.get('/users');
        return data
    } catch (e) {
        console.error(e);
    }
}
