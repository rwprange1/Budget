


interface TransactionsProps{
    transactions: Transaction[]
}

export default function Transactions(props: TransactionsProps){


    return (
        <div className='flex bg-clear w-1/4 rounded-2xl'>
            <h2>Transaactions</h2>
            <ul>
                {props.transactions.map(
                    (transaction : Transaction, index: number) => (
                        <div key={index}>
                            <h1>{transaction.transactionName}</h1>
                            <h1>${transaction.amount}</h1>
                        </div>
                    )
                )}
            </ul>
        </div>

    );


}