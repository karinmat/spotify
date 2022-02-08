import SongRow from "./SongRow";

export default function SongLibraray({ songs }) {
    const rows = [];

    songs.forEach((song) => {
        rows.push(<SongRow song={song} key={song.title + song.artist} />);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
