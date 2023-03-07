import { SurveillanceSystem } from "./../core/SurvillanceSystem";
import { MotionDetected, NoMotionDetected, NotAvailable } from "./../core/sensor-events";

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

    it('stop recording if motion is not detected', () => {
        const motionSensor = new MockMotionSensor();
        const videoRecorder = new MockVideoRecorder();
        const controller = new Controller(videoRecorder);
        const surveillanceSystem = SurveillanceSystem.create(controller, motionSensor);
        
        motionSensor.notify(new MotionDetected());
        motionSensor.notify(new NoMotionDetected());

        expect(videoRecorder.isRecording).toBeFalsy();
    })

    it('stop recording if motionSensor has problems', () => {
        const motionSensor = new MockMotionSensor();
        const videoRecorder = new MockVideoRecorder();
        const controller = new Controller(videoRecorder);
        const surveillanceSystem = SurveillanceSystem.create(controller, motionSensor);
        
        motionSensor.notify(new MotionDetected());
        motionSensor.notify(new NotAvailable());

        expect(videoRecorder.isRecording).toBeFalsy();
    })
})