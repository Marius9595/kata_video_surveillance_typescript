describe('surveillance system should', ()=>{
    it('start recording if any motion is detected', () => {

        const motionSensor = new MockMotionSensor();
        const videoRecorder = new MockVideoRecorder()
        const surveillanceSystem = new SurveillanceSystem.create();

        motionSensor.notify(new MotionDetectedEvent())

        expect(videoRecorder.isRecording).toBeTruthy()
    })
})