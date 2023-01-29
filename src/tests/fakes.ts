import { CustomClock } from '../core/custom_clock';

export class FakeClock implements CustomClock {}

export class FakeVideoRecorder implements VideoRecorder {
	startRecording(): void {}

	stopRecording(): void {}
}
