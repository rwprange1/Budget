
declare global {
    enum Category {
        ENTERTAINMENT,
        GROCERIES,
        RESTAURANT_TAKEOUT,
        UTILITIES,
        RENT_MORTGAGE,
        MISC
    }




    type Transaction = {
        transactionName: string;
        transactionCategory: Category;
        transactionDate: Date;
        amount: number;
    };

    type User = {
        username: string;
        password: string;
        transactions: Transaction[];
    }

    type Account = {
        amount: number;
        accountNumber: string;
        bank: "Truist" | "Ally" | "Bank of America" | "Wells Fargo" | "Other"
    }
}
 


