export interface MotionSensor{
    notify(SensorEvent):void
    attach(Listener):void
}