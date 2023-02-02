/*
 previously...
 we can communicate with movement sensor through queries to retrieve his state (active or not active)
 On the other hand, the comunication with recorder should be through commands because we will change his state

 In this way, It is interesting to use Stub to mock movement sensor to simulate a predefined response.
 And for recorder a spy and mock to check if the controller has executed the correct method to change his state
 */

import { VideoSurveillanceController } from '../core/video_surveillance_controller';
import { FakeVideoRecorder } from './fakes';
import { StubMotionSensor } from './stubs';
import { SpyMotionSensor, SpyVideoRecorder } from './spies';
import { MockMotionSensor } from './mocks';
import { Timer } from '../core/timer';

describe('Video surveillance should', () => {
	it('start video recording when motion sensor is activated', () => {
		const video_recorder = new SpyVideoRecorder();
		const video_controller = new VideoSurveillanceController(
			StubMotionSensor.with_response(true),
			video_recorder,
			new Timer()
		);

		video_controller.start_surveillance();

		setTimeout(() => {
			video_controller.stop_surveillance();
			expect(video_recorder.on).toBeFalsy();
		}, 1000);
	});

	it('stop video recording when motion sensor is not activated', () => {
		const video_recorder = new SpyVideoRecorder();
		video_recorder.on = true;
		const video_controller = new VideoSurveillanceController(
			StubMotionSensor.with_response(false),
			video_recorder,
			new Timer()
		);

		video_controller.start_surveillance();

		setTimeout(() => {
			video_controller.stop_surveillance();
			expect(video_recorder.on).toBeFalsy();
		}, 1000);
	});

	it('stop video recording when motion sensor fails', () => {
		const video_recorder = new SpyVideoRecorder();
		video_recorder.on = true;
		const video_controller = new VideoSurveillanceController(new MockMotionSensor(), video_recorder, new Timer());

		video_controller.start_surveillance();

		setTimeout(() => {
			video_controller.stop_surveillance();
			expect(video_recorder.on).toBeFalsy();
		}, 1000);
	});

	it('check motion sensor each second', () => {
		const motion_sensor = new SpyMotionSensor();
		const intervals_per_seconds = 3;
		const video_controller = new VideoSurveillanceController(motion_sensor, new FakeVideoRecorder(), new Timer());

		video_controller.start_surveillance();

		const checks_per_interval = 1 * intervals_per_seconds;
		setTimeout(() => {
			video_controller.stop_surveillance();
			expect(motion_sensor.checks).toBe(checks_per_interval);
		}, intervals_per_seconds * 1000);
	});
});
