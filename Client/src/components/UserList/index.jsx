import { useEffect, useState } from "react";

function UserList(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error)
            }finally{
                setIsLoading(false);
            }
        }
        fetchUser();
    }, [])

    if(isLoading){
        return <p>Cargando...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return(
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user)=>{
                    <li key={user.id}>
                        {user.name}
                    </li>
                })}
            </ul>
        </>
    )
}

export default UserList;