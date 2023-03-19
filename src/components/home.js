import { useEffect, useState } from "react";
import axios from 'axios';
import Heading from "./heading";
import List from "./list";

function Home()
{
    const adventure="http://localhost:1337/api/adventure-games";
    const arcade="http://localhost:1337/api/arcade-games";
    const [adv,setadv]=useState([]);
    const [arc,setarc]=useState([]);
    useEffect(()=>{
        axios.get(adventure).then((data)=>{
            setadv(data.data.data)
        }).catch((e)=>{
            console.log(e);
        })
        axios.get(arcade).then((data)=>{
            setarc(data.data.data)
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    return <div className="main">
        <Heading/>
            <h1>Adventure games</h1>
            {adv.map((game)=>{
                return <List  item={game.attributes}/>
            })}
            <h1>Arcade games</h1>
            {arc.map((game)=>{
                return <List  item={game.attributes}/>
            })}
        
    </div>
}
export default Home;