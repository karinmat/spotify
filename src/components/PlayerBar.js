import Player from "./Player";

export default function PlayerBar({ currentSong }) {
    return (
        <div className="Footer">
            <div className="PlayerBar">
                <div className="CurrentSongInfo" style={{ textAlign: "left" }}>
                    current song is: {currentSong}
                </div>
                <Player />
            </div>
        </div>
    );
}
