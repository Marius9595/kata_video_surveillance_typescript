import { Timer } from './custom_clock';

export class VideoSurveillanceController {
	constructor(
		private motion_sensor: MotionSensor,
		private video_recorder: VideoRecorder,
		private timer: Timer
	) {}

	public start_surveillance() {
		const interval_in_ms = 1000;
		this.timer.execute_task_in_intervals(this.check_motion_sensor, interval_in_ms);
	}

	private check_motion_sensor() {
		try {
			if (this.motion_sensor.isDetectingMotion()) {
				this.video_recorder.startRecording();
			} else {
				this.video_recorder.stopRecording();
			}
		} catch (Error) {
			this.video_recorder.stopRecording();
		}
	}

	stop_surveillance() {
		this.timer.stop_task_execution();
	}
}
