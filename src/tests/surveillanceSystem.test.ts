import { SurveillanceSystem } from "./../core/SurvillanceSystem";
import { MotionDetected } from "./../core/sensor-events";

import { MockMotionSensor } from "./MockMotionSensor";
import { MockVideoRecorder } from "./MockVideoRecorder";
import { Controller } from "../core/Controller";


describe('surveillance system should', ()=>{
    it('start recording if any motion is detected', () => {

        const motionSensor = new MockMotionSensor();
        const videoRecorder = new MockVideoRecorder();
        const controller = new Controller(videoRecorder);
        
        const surveillanceSystem = SurveillanceSystem.create(controller, motionSensor);
        motionSensor.notify(new MotionDetected());

        expect(videoRecorder.isRecording).toBeTruthy();
    })
})