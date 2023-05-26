console.log('Before');

//callback-based approach

// getUser(1,(user) =>{
//     getRepositories(user.gitHubUsername,(repos) => {
//         getCommits(repos[0],(commits) =>{
//             console.log(commits);
//         })
//     });
// });

//promise-based approach
// getUser(1)
//  .then(user => getRepositories(user.gitHubUsername))
//  .then(repos => getCommits(repos[0]))
//  .then(commits => console.log('commits',commits))
//  .catch(err => console.log('Error',err.massage))

 //Async & Await approach
 async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error',err.message);
    }
};
displayCommits();

console.log('After');

// function getRepositories(user){
//     getRepositories(user.gitHubUsername,getCommits);
// };
  
// function getCommits(repos){
//     getCommits(repo,displayCommits);
// }

// function displayCommits(commits){
//     console.log(commits);
// }

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log('Reading a user database...');
            resolve({id : id, gitHubUsername : 'akshit'});
        },2000);
    });
};

function getRepositories(userName){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log('Calling Github Api...');
            // resolve(['repo1','repo2','repo3']);
            reject(new Error('Could not get the repos'));
        },2000);
    });
};

function getCommits(repo){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling Github Api...');
            resolve(['commit']);
        },2000);
    });
};

