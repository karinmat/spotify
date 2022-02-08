export default function SongRow({ song }) {
    return (
        <tr>
            <td> {song.title} </td>
            <td> {song.album} </td>
            <td> {song.artist} </td>
        </tr>
    );
}
