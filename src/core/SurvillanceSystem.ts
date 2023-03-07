import { MotionSensor } from "./MotionSensor";
import { VideoRecorder } from "./VideoRecorder";

export class SurveillanceSystem{
    private motionSensor: MotionSensor;
    private videorRecorder: VideoRecorder

    private constructor(motionSensor, videoRecorder){
        this.motionSensor = motionSensor;
        this.videorRecorder = videoRecorder;
    }

    public static create(motionSensor: MotionSensor, videorRecorder: VideoRecorder){

    }
}