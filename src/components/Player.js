import { Button } from "antd";
import {
    StepForwardOutlined,
    CaretRightOutlined,
    StepBackwardOutlined
} from "@ant-design/icons";

export default function Player({ nextSong, prevSong }) {
    return (
        <div className="Player">
            <Button onClick={prevSong}>
                <StepBackwardOutlined />
            </Button>
            <Button>
                <CaretRightOutlined />
            </Button>
            <Button onClick={nextSong}>
                <StepForwardOutlined />
            </Button>
        </div>
    );
}
