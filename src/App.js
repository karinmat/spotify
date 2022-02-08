import "./styles.css";
import SongLibrary from "./components/SongLibrary";
import PlayerBar from "./components/PlayerBar";

export default function App() {
    let songs = [
        {
            title: "thank u, next",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "needy",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "fake smile",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "imagine",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "in my head",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "bad idea",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "7 rings",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "ghostin",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "make up",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "NASA",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "break up with your girlfriend, i'm bored",
            album: "thank u, next",
            artist: "Ariana Grande"
        },
        {
            title: "positions",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "34 + 36",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "off the table",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "safety net",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "obvious",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "six thirty",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "just like magic",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "shut up",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "pov",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "west side",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "nasty",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "my hair",
            album: "positions",
            artist: "Ariana Grande"
        },
        {
            title: "love language",
            album: "positions",
            artist: "Ariana Grande"
        }
    ];

    return (
        <div className="App">
            <div className="Wrapper">
                <SongLibrary songs={songs} />
                <PlayerBar currentSong={songs[0].title} />
            </div>
        </div>
    );
}
