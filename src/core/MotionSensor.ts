import { Listener } from "./Listener"
import { SensorEvent } from "./sensor-events"

export interface MotionSensor{
    notify(sensorEvent: SensorEvent):void
    attach(listener: Listener):void
}