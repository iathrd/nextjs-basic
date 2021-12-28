function UserList({users}){
    return (
        <>
    <h1>List of User</h1>
    {
        users.map(user => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))
    }
    </>
    )
}

export default UserList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    return {
        props:{
            users:data
        }
    }
}