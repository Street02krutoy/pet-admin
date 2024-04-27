import React from 'react';
import Main from "src/components/template/main/Main";
import RegisterForm from "src/components/organism/authorizationMainForm/RegisterForm/RegisterForm";

const RegisterPage = () => {
    return (
        <Main>
            <div className="mt-36">
            <RegisterForm/>
            </div>
        </Main>
    );
};

export default RegisterPage;