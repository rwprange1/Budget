import { useContext } from 'react';
import { UserContext } from "../userContext";

interface GraphProps{
    transactions: Transaction[]
}

export default function Graph(props: GraphProps){

    
    const user = useContext(UserContext);

    if (user) console.log(JSON.stringify(user));



    return (
        <div className="rounded-2xl bg-clear">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h1>Spending</h1>
                    <span>This month vs. last</span>
                </div>
            </div>

            <br className="border-2"/>

            <div>
                <canvas>
                    

                </canvas>

            </div>



        </div>


    )

}