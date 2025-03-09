interface User {
    id : string,
    email? : string,
    name? : string,
    number : string,
    OnRampTransactions? : Array<object>
    Balance? : Array<object>
    sentTransfers? : Array<object>
    receivedTransfers? : Array<object>
}
