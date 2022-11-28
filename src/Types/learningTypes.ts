type NetworkFailed = {
    state : "failed";
    code : number;
}

type NetworkSuccessful = {
    state : "success";
    response: {
        data: string;        
    }
}

type NetworkDownloading = {
    state : "progress";

}

type NetworkStatus = NetworkDownloading | NetworkFailed | NetworkSuccessful;

function CheckStatus(networStatus : NetworkStatus) : string {
    switch(networStatus.state){
        case "failed": return `Request failed with code "${networStatus.code}". Please contact our customer suppot at 888-765-1234 `;
        case "success" : return `Response is successful ${networStatus.response.data}`;
        case "progress" : return "Request is in process";
        default: return "Unknown status!";
    }
}

export function CheckStatusRunner() : string {
    let status : NetworkFailed = {code: 45 , state:"failed"};
    return CheckStatus(status);
    //return  CheckStatus({state : "success", response: {data: "downloaded data from the url..."}});
    
}




// type Name = {
//     readonly first: string;
//     readonly last: string;
// }

// type Address = {
//     unit: Number;
//     street: string;
//     city: string;
// }

// type DateOfBirth = {
//     day: number; month: number; year: number;
// }

// type Person = {name: Name; address: Address; dob: DateOfBirth}
// export function UseTypes(){
//     let employee : Person;
//     employee = {
//         name: {first: "Yawar", last : "Murtaza"},
//         address: {unit: 16, street: "Blundell Road", city: "Richmond"},
//         dob: {day: 5, month: 1, year: 1981}
//     }

//     employee.address.city = "asdfsdf";

// employee.address.city = ""
//     let player : Person = []
//     player.name.first = "David";
//     player.name.last = "Backem";
//     player.address.city = "London";

//     employee.name.first = "Yawar";
// employee.address.city = "Vancouver";

//     console.log(`${employee.address}`)
    
    
// }