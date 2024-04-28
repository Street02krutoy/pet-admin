import React, {useState} from 'react';
import axios from "axios";
import {redirect} from "react-router-dom";
import RadioButton from "src/components/atoms/checkbox/radioButton/RadioButton";

const RegisterForm = () => {
    const [data, setData] = useState({"name":"", "password":"", "address":"", "phone":"", "email":""})
    const sendHandler = () =>{
        console.log(data)
        axios.post("http://127.0.0.1:8080/api/register/clinic", data)
            .then(res => localStorage.setItem("token", res["data"]["token"]))
            .catch(err => console.log(err))
        window.location.replace("/general")
    }

    return (
        <div className="bg-super-dark-violet border border-black rounded-2xl p-16 mx-96">
            <form onSubmit={e => e.preventDefault()} className="max-w-sm mx-auto">
                <div className="grid gap-3 mb-6 md:grid-cols-1">
                    <h1 className="text-3xl font-bold text-white text-center">Registration</h1>
                    <input
                        onChange={event => setData({...data, name: event.target.value})}
                        className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="id" required/>
                    <input
                        onChange={event => setData({...data, password: event.target.value})}
                        type="password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="password" required/>
                    <input
                        onChange={event => setData({...data, address: event.target.value})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="adress" required/>
                    <input
                        onChange={event => setData({...data, phone: event.target.value})}
                        type="tel"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+7 000 000-00-00"  required/>
                    <input
                        onChange={event => setData({...data, email: event.target.value})}
                        type="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="mail" required/>
                    <div className="mt-5 text-center">
                        <button onClick={sendHandler} className="w-40 bg-violet hover:bg-violet
        text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded-xl">
                            Enter
                        </button>
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