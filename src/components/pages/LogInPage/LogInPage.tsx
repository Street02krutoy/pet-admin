import React from 'react';
import Main from "src/components/template/main/Main";
import IdField from "src/components/atoms/textField/LogIn/idField/IdField";
import PasswordField from "src/components/atoms/textField/LogIn/passwordField/PasswordField";
import LogInForm from "src/components/organism/authorizationMainForm/LogInForm/LogInForm";



const LogInPage = () => {
    return (
        <Main>
            <div className="mt-40">
                <LogInForm/>
            </div>
        </Main>
    );
};

export default LogInPage;