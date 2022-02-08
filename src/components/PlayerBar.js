import Player from "./Player";

export default function PlayerBar({ currentSong }) {
    return (
        <div className="PlayerBar">
            current song is {currentSong}
            <Player />
        </div>
    );
}
