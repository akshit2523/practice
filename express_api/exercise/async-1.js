// getCustomer(1,(customer) => {
//     console.log('Customer:',customer)
//     if(customer.isGold){
//         getTopMovies((movies) => {
//             console.log('Top Movies:',movies);
//             sendEmail(customer.email,movies,() => {
//                 console.log('Email Sent...');
//             });   
//         });
//     };
// });

async function notifyCustomer() {
    const customer = await getCustomer(1);
    console.log('Customer:',customer)
    if(customer.isGold){
        const movies = await getTopMovies();
        console.log('Top Movies :',movies)
        await sendEmail(customer.email,movies)
        console.log('Email sent...'); 
    }
}
notifyCustomer()

function getCustomer(id,callback) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                id : 1,
                name : 'Akshit',
                isGold : true,
                email : 'Email',
            })
        },1000)
    })
}

function getTopMovies(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['Movie1','Movie2']);
        },1000)
    })
}

function sendEmail(email,movies,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        },1000);
    })
}

