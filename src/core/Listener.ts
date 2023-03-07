import { SensorEvent } from "./sensor-events";

export interface Listener{
    update(sensorEvent: SensorEvent): void
}