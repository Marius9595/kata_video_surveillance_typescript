import { CustomClock } from './custom_clock';

export class VideoSurveillanceController {
	constructor(private motion_sensor: MotionSensor, private vide_recorder: VideoRecorder, custom_clock: CustomClock) {}

	public start_surveillance() {}
	public stop_surveillance() {}
}
