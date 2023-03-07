import { MotionSensor } from "../core/MotionSensor";

export class MockMotionSensor implements MotionSensor{
    notify(SensorEvent: any): void {

    }
    attach(Listener: any): void {
        throw new Error("Method not implemented.");
    }
}