import axios from "axios";

const BASE_URL: string = "/api/user";

/**
 * Given a username this function returns a promise
 * @param username the username to get
 * @returns the user
 */
export async function getUser(username: string): Promise<User> {

    try {
        let response = await axios.get(`${BASE_URL}/${username}`);
        if (response.status === axios.HttpStatusCode.Ok){
            return Promise.resolve(response.data);
        }
        return Promise.reject();
    }catch (err){
        console.error("Error fetching user: ", err);
        return Promise.reject(); 
    }

}

/**
 * An api we will use when a new user tries to create an account
 * @param user the user to add to the application
 * @returns a boolean to indicate a valid insertion to the database
 */
export async function addUser(user: User): Promise<boolean>{
    try {
        let response = await axios.post(`${BASE_URL}/addUser`,
            user
        );

        return Promise.resolve(response.status === axios.HttpStatusCode.Created);
    }catch (err){
        console.error("Error adding transaction: ", err);
        return Promise.resolve(false);
    }
}

/**
 * We use this api to try to validate a user's credientials
 * @param user  the user information to validate
 * @returns a boolean to indicate the validity of the input data, true is a 
 * successful auth false otherwise
 */
export async function login(user: User): Promise<boolean>{
    try{
        let response =  await axios.post(`${BASE_URL}/login`,
            user
        );
        return Promise.resolve(response.status === axios.HttpStatusCode.Ok);
    } catch (error){
        console.error("Error adding transaction: ", error);
        return Promise.resolve(false);
    }
}


/**
 * An api for when a user wants to add a transaction to their list of transactions
 * @param data the data to 
 * @param user 
 * @returns 
 */
export async function addTransaction(data: Transaction, user: User){
    let userNew: User = {
        username: user.username,
        password: "" ,
        transactions: user.transactions
    };
    
    userNew.transactions.push(data);

    try {
        let response  = await axios.post(`${BASE_URL}/addTransaction`,
            userNew
        );
        return response.status === axios.HttpStatusCode.Created;
    }catch (error){
        console.error("Error adding transaction: ", error);
        return false;
    }
}

/**
 * 
 * @param data Todo
 * @param userId 
 * @returns 
 */
export async function getExpenses(username: string): Promise<Transaction[]>{

    try {
        let response  = await axios.get(`${BASE_URL}/${username}/transactions`);

        if (response.status === axios.HttpStatusCode.Ok){
            return Promise.resolve(response.data);
        }else {
            return Promise.reject();
        }


    }catch (error){
        console.error("Error adding transaction: ", error);
        return Promise.reject();
    }
}