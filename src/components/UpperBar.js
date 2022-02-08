import logo from "../images/spotify_logo.JPG";

export default function UpperBar() {
    return (
        <div className="UpperBar">
            <div className="logo">
                <img src={logo} alt="spotify"></img>
            </div>
        </div>
    );
}
