import "./styles.css";
import { useState } from "react";
import SongLibrary from "./components/SongLibrary";
import PlayerBar from "./components/PlayerBar";
import UpperBar from "./components/UpperBar";

import s from "./images/Ariana_Grande_thank_u_next";
import s1 from "./images/Ariana Grande_needy.mp3";

export default function App() {
    const [songs, setSongs] = useState(songs_data);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    let nextSong = () => {
        if (currentSongIndex < songs.length) {
            setCurrentSongIndex(currentSongIndex + 1);
        } else {
            setCurrentSongIndex(0);
        }
    };

    let prevSong = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1);
        }
    };

    return (
        <div className="App">
            <div className="Wrapper">
                <UpperBar />
                <SongLibrary songs={songs} />
                <PlayerBar
                    currentSong={songs[currentSongIndex]}
                    nextSong={nextSong}
                    prevSong={prevSong}
                />
            </div>
        </div>
    );
}
let songs_data = [
    {
        title: "thank u, next",
        album: "thank u, next",
        artist: "Ariana Grande",
        url: { s }
    },
    {
        title: "needy",
        album: "thank u, next",
        artist: "Ariana Grande",
        url: { s1 }
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
