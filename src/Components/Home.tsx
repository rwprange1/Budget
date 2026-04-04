/**
 * This component will house the components for the budget app
 */

import Graph from "./Graph";
import EmeergencyFund from "./EmergencyFund";
import Cash from "./Cash";
import CashFlow from "./CashFlow"
import Transactions from "./Transactions";
import Categories from "./Categories";









export default function Home(){




    return(

        <div className="grid grid-cols-6 grid-rows-7 gap-2 justify-center w-full bg-green-400 ">
            <div className="col-start-1 col-span-2 row-start-1 row-end-3 rounded-2xl p-2 bg-red-500"><Graph/></div>
            <div className="col-start-3 col-end-3 row-start-1 row-end-1 bg-yellow-400"> <EmeergencyFund></EmeergencyFund></div>
            <div className="col-start-3 col-end-3 row-start-2 row-end-2 bg-yellow-400"><Cash/></div>
            <div className="col-start-4 col-end-6 row-start-1 row-end-3 bg-red-500"><CashFlow/></div>    


            <div className="col-start-1 col-span-2 row-start-3 row-span-3 bg-amber-500 w-4/5"> <Transactions transactions={[]}/> </div>
            <div className="col-start-3 col-span-1 row-start-3 row-span-3 bg-purple-500 w-[120%]"><Categories expenses={[]}/></div>
            <div className="col-start-5 col-span-1 row-start-3 row-span-3 bg-pink-500"><Categories expenses={[]}/></div> {/** TODO add buckets here*/}
        </div>
  
    );

}