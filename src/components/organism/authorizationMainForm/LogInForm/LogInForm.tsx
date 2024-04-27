import React from 'react';
import IdField from "src/components/atoms/textField/LogIn/idField/IdField";
import PasswordField from "src/components/atoms/textField/LogIn/passwordField/PasswordField";
import AuthorizationButton from "src/components/molecule/buttons/Authorization/AuthorizationButton";

const LogInForm = () => {
    return (
        <div className="bg-super-dark-violet border border-black rounded-2xl p-20 mx-96">
            <form className="max-w-sm mx-auto">
                <div className="grid gap-3 mb-6 md:grid-cols-1">
                    <h1 className="text-3xl font-bold text-white text-center">Log In</h1>
                    <IdField/>
                    <PasswordField/>
                    <div className="mt-2 text-center">
                        <AuthorizationButton/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogInForm;