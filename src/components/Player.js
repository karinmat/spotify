import { Button } from "antd";
import {
    StepForwardOutlined,
    CaretRightOutlined,
    StepBackwardOutlined
} from "@ant-design/icons";

export default function Player({ nextSong, prevSong, currentSong }) {
    return (
        <div className="Player">
            <div className="PlayerControls">
                <Button size="small" onClick={prevSong}>
                    <StepBackwardOutlined />
                </Button>
                <Button size="small">
                    <CaretRightOutlined />
                </Button>
                <Button size="small" onClick={nextSong}>
                    <StepForwardOutlined />
                </Button>
            </div>
            <audio
                src={currentSong.url}
                controls
                key={currentSong.title + currentSong.artist}
            >
                <source src={currentSong.url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
