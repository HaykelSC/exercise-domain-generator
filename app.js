console.log ("ejercicio de domain names");

let pronoun= ["the", "our","his","her","my"];
let adj= ["great", "big","amazing","ridiculus","boring"];
let noun= ["jogger","racoon","team","work","boss","building"];
let domains= [".com",".es",".cr",".cl",".us",".go.cr",".ac"];

const createdomains = () => {
    for (p in pronoun){
        for (a in adj){
            for(n in noun){
                for(d in domains){
                    let str=`${pronoun[p]}${adj[a]}${noun[n]}`
                    if(str.includes(domains[d])){
                        let newStr = str.replace(domains[d], "");
                        finalStr = `${newStr}.${domains[d]}`
                        console.log(finalStr)
                    }else {
                        console.log(`${str}${domains[d]}`)
                    }
                }
            }
        }
    }
}
createdomains();