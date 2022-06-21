import { useEffect, useState } from "react";

const usePlayer = id =>{
    const [player, setPlayer] = useState({});

    useEffect( () =>{
        const url =`http://localhost:5000/player/${id}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setPlayer(data))

    },[id])
    return [player]
}
export default usePlayer;