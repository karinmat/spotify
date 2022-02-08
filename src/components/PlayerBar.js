import Player from "./Player";

export default function PlayerBar({ currentSong }) {
    return (
        <div>
            current song is {currentSong}
            <Player />
        </div>
    );
}
