import { Listener } from "../core/Listener";
import { MotionSensor } from "../core/MotionSensor";
import { SensorEvent } from "../core/sensor-events";

export class MockMotionSensor implements MotionSensor{
    listener: Listener;
    
    notify(sensorEvent: SensorEvent): void {
        this.listener.update(sensorEvent);
    }
    attach(listener: Listener): void {
        this.listener = listener;
    }
}