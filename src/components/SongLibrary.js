import SongRow from "./SongRow";
import Table from "react-bootstrap/Table";

export default function SongLibraray({ songs }) {
    const rows = [];

    songs.forEach((song) => {
        rows.push(<SongRow song={song} key={song.title + song.artist} />);
    });

    return (
        <Table hover size="sm">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
