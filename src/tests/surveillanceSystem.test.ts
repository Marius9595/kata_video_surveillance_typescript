import { SurveillanceSystem } from "./../core/SurvillanceSystem";
import { MotionDetected } from "./../core/sensor-events";

import { MockMotionSensor } from "./MockMotionSensor";
import { MockVideoRecorder } from "./MockVideoRecorder";


describe('surveillance system should', ()=>{
    it('start recording if any motion is detected', () => {

        const motionSensor = new MockMotionSensor();
        const videoRecorder = new MockVideoRecorder();
        
        const surveillanceSystem = SurveillanceSystem.create(motionSensor, videoRecorder);
        motionSensor.notify(new MotionDetected());

        expect(videoRecorder.isRecording).toBeTruthy();
    })
})