import { Listener } from "./Listener";
import { MotionDetected, NoMotionDetected, NotAvailable, SensorEvent } from "./sensor-events";
import { VideoRecorder } from "./VideoRecorder";

export class Controller implements Listener{
    videoRecorder: VideoRecorder

    constructor(videoRecorder:VideoRecorder){
        this.videoRecorder = videoRecorder;
    }
    update(sensorEvent: SensorEvent): void {
        if (sensorEvent instanceof MotionDetected){
            this.videoRecorder.starRecording();
        }else if(sensorEvent instanceof NoMotionDetected){
            this.videoRecorder.stopRecording();
        }else if(sensorEvent instanceof NotAvailable){
            this.videoRecorder.stopRecording();
        }
    }
}