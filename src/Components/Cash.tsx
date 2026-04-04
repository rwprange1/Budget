import { useEffect, useState } from "react";


interface CashProps{
    accounts: Account[] | undefined
}

export default function Cash(props: CashProps) {
    let temp = 0;
    
    if (props.accounts){
        temp = props.accounts.reduce((temp, account: Account) => temp + account.amount, 0);
    } 
    const [total, setTotal] = useState<number>(temp);

   
    if (props.accounts){

        return (
            <div> 
                <h1>Cash</h1>
                <h1>${total}</h1>
                {props.accounts.map((val: Account, index: number) => (
                    <div key={index}>
                        <h1>{val.bank}</h1>
                        <h1>{val.accountNumber}</h1>
                    </div>
                ))}
            </div>
        )

    }



    return (
        <div>
            <h1>Cash</h1>
            <h1>No data found, add accounts to view cash</h1>
            <button>Click here to add an account</button>

        </div>


    );

}   