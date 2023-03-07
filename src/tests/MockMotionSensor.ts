import { Listener } from "../core/Listener";
import { MotionSensor } from "../core/MotionSensor";
import { SensorEvent } from "../core/sensor-events";

export class MockMotionSensor implements MotionSensor{
    
    notify(SensorEvent: SensorEvent): void {
    }
    attach(listener: Listener): void {
    }
}