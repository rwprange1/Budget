
//todo maybe play around with oauth
import {useState} from 'react';

import { login, addUser } from "../api/api";

interface LoginProps{
    login: (auth: boolean, who: User) => void;
}


export default function Login(props: LoginProps){
    
    const [createAccount, setCreateAccount] = useState<boolean>(false);
    
    /**
     * If the user object is defined we will submit a request to the api to validate the credentials
     * @returns void
     */
    async function handleFormSubmit(formdata: FormData){

        let dataUsername = formdata.get("username")?.toString();
        let dataPassword = formdata.get("password")?.toString();
        
        if (!dataUsername || !dataPassword) {
            alert("Invalid form data");
            return;
        }

        let user: User = {
            username: dataUsername,
            password: dataPassword,
            transactions: []
        };
        
        //todo tell user why the request failed
        if (createAccount){
            let createAttempt =  await addUser(user);
            if (!createAttempt) {
                alert("There was an error creating your account");
                return;
            }
        }

        let isAuth = await login(user);
        props.login(isAuth, user);

    }





    return (
        <div className='flex  flex-row justify-center  h-screen w-full   '>
             <div className="flex flex-col items-center self-center w-1/4 bg-neutral-500 rounded-2xl text-2xl  mt-5 mb-5 h-1/2 p-4">
                    <h2 className='text-center'>Welcome to R + A budgeting app</h2>
            {!createAccount ?
                <div className='flex flex-col '>
                
                <h1 className='text-center text-lg pb-12'>Sign in to access your budget</h1>

                <form className="flex flex-col content-center gap-2" action={handleFormSubmit}>
                    <div className="flex flex-col gap-1 ">
                        <label>Username* </label>
                        <input className='border-2 border-purple-800 rounded-xl text-sm w-1/2 h-full pl-1' name="username"></input>
                    </div>
                    <div className="flex flex-col gap-1 pb-5">
                        <label>Password* </label>
                        <input className='border-2 border-purple-800 rounded-xl text-sm w-1/2 h-full pl-1' type="password"  name="password"/>
                    </div>

                   
                       

                        <div className="flex">
                            <button type="submit" className='bg-purple-800 rounded-3xl p-2 text-center text-lg w-full'>Sign in</button>
                        </div>
                    
                    
               

                    

                   
                </form>
                 <div className='mt-auto text-base content-center self-center'>
                        <text>Don't have an account? </text>
                        <button className='underline' onClick={ () => setCreateAccount(true)}>Sign up</button>

                    </div>
                </div>
            :
               <div className='flex flex-col '>
                
                <h1 className='text-center text-lg pb-12'>Create an account to start your budget</h1>

                <form className="flex flex-col content-center gap-2" action={handleFormSubmit}>
                    <div className="flex flex-col gap-1 ">
                        <label>Username* </label>
                        <input className='border-2 border-purple-800 rounded-xl text-sm w-1/2 h-full pl-1' name="username"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Password* </label>
                        <input className='border-2 border-purple-800 rounded-xl text-sm w-1/2 h-full pl-1' type="password"  name="password"/>
                    </div>
                    <div className="flex flex-col gap-1 pb-5">
                        <label>Confirm Password* </label>
                        <input className='border-2 border-purple-800 rounded-xl text-sm w-1/2 h-full pl-1' type="password"  name="password2"/>
                    </div>

                   
                       

                        <div className="flex">
                            <button type="submit" className='bg-purple-800 rounded-3xl p-2 text-center text-lg w-full'>Sign Up</button>
                        </div>
                    
                    
               

                    

                   
                </form>
                 <div className='mt-auto text-base content-center self-center'>
                        <text>Already have an account? </text>
                        <button className='underline' onClick={ () => setCreateAccount(false)}>Sign in</button>

                    </div>
                </div>

            
            }

            


            
        </div>  
        </div>
       
    );
}


 