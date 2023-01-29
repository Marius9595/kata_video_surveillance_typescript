/*
 previously...
 we can communicate with movement sensor through queries to retrieve his state (active or not active)
 On the other hand, the comunication with recorder should be through commands because we will change his state

 In this way, It is interesting to use Stub to mock movement sensor to simulate a predefined response.
 And for recorder a spy and mock to check if the controller has executed the correct method to change his state
 */

import {VideoSurveillanceController} from '../core/video_surveillance_controller';
import {FakeClock} from './fakes';
import {StubMotionSensor} from './stub_motion_sensor';
import {SpyVideoRecorder} from "./spies";

describe('Video surveillance should', () => {
	it('start video recording when motion sensor is activated', () => {
		const video_recorder = new SpyVideoRecorder();
		const video_controller = new VideoSurveillanceController(
			StubMotionSensor.with_response(true),
			video_recorder,
			new FakeClock()
		);

		video_controller.start_surveillance();

		expect(video_recorder.on).toBeTruthy();
	});
});
