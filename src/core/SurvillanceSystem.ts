import { MotionSensor } from "./MotionSensor";
import { VideoRecorder } from "./VideoRecorder";

export class SurveillanceSystem{
    private videorRecorder: VideoRecorder

    private constructor(videoRecorder){
        this.videorRecorder = videoRecorder;
    }

    public static create(motionSensor: MotionSensor, videorRecorder: VideoRecorder){
    }
}