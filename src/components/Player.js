import { Button } from "antd";
import {
    StepForwardOutlined,
    CaretRightOutlined,
    StepBackwardOutlined
} from "@ant-design/icons";
export default function Player() {
    return (
        <div style={{ marginBottom: "100px" }}>
            <Button>
                <StepBackwardOutlined />
            </Button>
            <Button>
                <StepForwardOutlined />
            </Button>
            <Button>
                <CaretRightOutlined />
            </Button>
        </div>
    );
}
