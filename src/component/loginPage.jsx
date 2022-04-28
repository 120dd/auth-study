import React from 'react';
import Button from "./button";

const LoginPage = (props) => {
    return(
        <div>
            <h1>login</h1>
            <form>
                <input type="text"/>
                <input type="text"/>
                <Button btnName="login" />
            </form>
        </div>
    )
};

export default LoginPage;