obj = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}


function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        body : JSON.stringify(obj),
        headers : {
            'content-type' : 'application/json; charset=UTF-8', 
        }
    }).then((response)=>{return response.json()}).then((data)=>{alert(`Dummy Data Uploaded : ${data.title}, ${data.body}, ${data.userId}`)});
}

// following code is for updating existig data

//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method : 'PUT',
//         body : JSON.stringify(obj),
//         headers : {
//             'content-type' : 'application/json; charset=UTF-8', 
//         }
//     }).then((response)=>{return response.json()}).then((data)=>{alert(`Dummy Data Uploaded : ${data.title}, ${data.body}, ${data.userId}`)});



// following code is for Deleting existig data

//     fetch('here goes the path of data which needs to be deleted',{
//         method : 'DELETE',
//     })

function fetchData(){
    document.getElementById("statusText").innerText = "Fetching data...";
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        if(!response.ok){
            alert(`Error : ${response.status}`);
        }
        return response.json()
    })
    .then((data)=>{displayFunction(data)})
    .catch((error)=>{errorFunction(error)});

    function errorFunction(error){
        alert(error);
    };

    function displayFunction(data){
        document.getElementById("statusText").innerText = "";
        const users = data;
        const tableBody = document.querySelector("#usersTable tbody");
        users.forEach((user,index) => {
            setTimeout(()=>{
                const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
            `;
            tableBody.appendChild(row);
            }, index * 500)
        });
    };
}  