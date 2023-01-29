import { CustomClock } from './custom_clock';

export class VideoSurveillanceController {
	constructor(private motion_sensor: MotionSensor, private video_recorder: VideoRecorder, custom_clock: CustomClock) {}

	public start_surveillance() {
		if (this.motion_sensor.isDetectingMotion()) {
			this.video_recorder.startRecording();
		} else {
			this.video_recorder.stopRecording();
		}
	}
}
