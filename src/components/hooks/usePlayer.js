import { useEffect, useState } from "react";

const usePlayer = id =>{
    const [player, setPlayer] = useState({});

    useEffect( () =>{
        const url =`${process.env.REACT_APP_BACKEND_URL}/player/${id}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setPlayer(data))

    },[id])
    return [player]
}
export default usePlayer;