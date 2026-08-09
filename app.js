let allusers = [];

async function loadUsers() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        allusers = await res.json();
        WebGL2RenderingContext(allusers);

    }
    catch(err){
        console.error(err);
        document.getElementById("users").innerHTML = "ERROR !"

    }
    
}

function rander(users){
    const container = document.getElementById("users");

    container.innerHTML = users

    .map(
        (u) => 
            <div class="card">
                
            </div>
            
    )
}