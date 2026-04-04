// todo figure out how to add colors and diff withs based on 
// category and perecentage 

interface CategoriesProps {
    expenses: Transaction[]
}

export default function Categories(props : CategoriesProps) {

    let map: Record<Category, number> = {};
    let total = 0;
    props.expenses.forEach ( (val: Transaction) => {
        if (map[val.transactionCategory]){
            map[val.transactionCategory] += val.amount;
        }else {
            map[val.transactionCategory] = val.amount;
        }
        total += val.amount;
    });
    const totals = Object.entries(map).map(([key, value]) => ({
        Category: key,
        total: value
    }));

    totals.sort(compare);


    return (
        <div>
            <h1>Top expenses by category</h1>
            {totals.map( (val, index:number) => (

                <div key={index}>
                    {val.Category}
                    {val.total}
                </div>

            ))}
        </div>
    );


}

function compare(a:  {Category: string, total: number}, b:  {Category: string, total: number} ){
    return a.total - b.total;
}