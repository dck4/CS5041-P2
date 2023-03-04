import { useEffect, useState } from "react";
import { View } from "react-native";
// import SteamFetchAPI from "steam-fetch-api";
// import SteamAPI from "steamapi";
import { styles } from "../../styles/post-style";
import { SteamDetails } from "./steam-details";


export function GameDetails({game, gameList}) {

    const apikey = "C21C1D532C4B4953D7CCD5F3BDC8D5C1"

    // const steam = new SteamAPI('C21C1D532C4B4953D7CCD5F3BDC8D5C1');

    // let info = {}

    // useEffect(() => {
    //     info = steam.getAppList()
    // }, [])

    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        let gameId = gameList[game.replace(/\W/g, '').trim().toLowerCase()]
        if (gameId == null) {
            setGameInfo(null)
            return
        }
        console.log("fetching game info")
        // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:8080/http://store.steampowered.com/api/appdetails?appids=${gameId}`)
            .then(response => response.json())
            .then(data => setGameInfo(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [gameList]);

    return (
        <>
            {game == null || game == undefined
                ? <View style={styles.leftContent} />
                : <SteamDetails info={gameInfo} style={styles.steamdetails}/>
            }
        </>
    )
}