import React from 'react';
import Header from "src/components/organism/header/Header";
import MessageField from "src/components/atoms/textField/Message/MessageField";

const Main = ({children}:any) => {
    return (
        <div>
            <Header/>
            <main className="mt-40">
                {children}
            </main>
        </div>
    );
};

export default Main;