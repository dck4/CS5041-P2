import { useEffect, useState } from "react";
import { View } from "react-native";
// import SteamFetchAPI from "steam-fetch-api";
// import SteamAPI from "steamapi";
import { styles } from "../../styles/post-style";
import { SteamDetails } from "./steam-details";


export function GameDetails({game, gameList}) {

    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        // don't try to load game information if the gameList hasn't loaded, or doesn't contain the game
        if (gameList == null) return
        let gameId = gameList[game.replace(/\W/g, '').trim().toLowerCase()]
        if (gameId == null) {
            setGameInfo(null)
            return
        }
        
        // fetch game info from the steam API
        fetch(`http://localhost:8080/http://store.steampowered.com/api/appdetails?appids=${gameId}`)
            .then(response => response.json())
            .then(data => setGameInfo(data));

    // setting game list as dependency means game info will load once the game list has loaded
    }, [gameList]);

    return (
        <>
            {game == null || game == undefined
            // display an empty view if game info hasn't loaded, otherwise the steam game details
                ? <View style={styles.leftContent} />
                : <SteamDetails info={gameInfo} style={styles.steamdetails}/>
            }
        </>
    )
}