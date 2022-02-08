import "./styles.css";
import SongLibrary from "./components/SongLibrary";
import PlayerBar from "./components/PlayerBar";

export default function App() {
    let songs = [{ title: "thank u, next", artist: "Ariana Grande" }];

    return (
        <div className="App">
            <SongLibrary songs={songs} />
            <PlayerBar currentSong={songs[0].title} />
        </div>
    );
}
