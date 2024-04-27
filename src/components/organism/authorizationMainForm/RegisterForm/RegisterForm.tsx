import React from 'react';
import IdRegistField from "src/components/atoms/textField/Registration/idField/IdRegistField";
import PasswordField from "src/components/atoms/textField/LogIn/passwordField/PasswordField";
import PasswordRegistField from "src/components/atoms/textField/Registration/passwordField/PasswordRegistField";
import AdressRegistField from "src/components/atoms/textField/Registration/adressField/AdressRegistField";
import PhoneRegistField from "src/components/atoms/textField/Registration/phoneField/PhoneRegistField";
import MailField from "src/components/atoms/textField/Registration/mailField/MailField";
import AuthorizationButton from "src/components/molecule/buttons/Authorization/AuthorizationButton";

const RegisterForm = () => {
    return (
        <div className="bg-super-dark-violet border border-black rounded-2xl p-16 mx-96">
            <form className="max-w-sm mx-auto">
                <div className="grid gap-3 mb-6 md:grid-cols-1">
                    <h1 className="text-3xl font-bold text-white text-center">Registration</h1>
                    <IdRegistField/>
                    <PasswordRegistField/>
                    <AdressRegistField/>
                    <PhoneRegistField/>
                    <MailField/>
                    <div className="mt-5 text-center">
                        <AuthorizationButton/>
                        <div className="flex gap-2 pl-28 pt-2">
                            <h1 className="text-white">If you have account</h1>
                            <a href="/" className="text-blue-600">Log In</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;