import Player from "./Player";

export default function PlayerBar({ currentSong, nextSong, prevSong }) {
    let title = currentSong.title;
    return (
        <div className="Footer">
            <div className="PlayerBar">
                <div className="CurrentSongInfo" style={{ textAlign: "left" }}>
                    current song is: {title}
                </div>
                <Player
                    nextSong={nextSong}
                    prevSong={prevSong}
                    currentSong={currentSong}
                />
            </div>
        </div>
    );
}
