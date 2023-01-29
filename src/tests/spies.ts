export class SpyVideoRecorder implements VideoRecorder {
	public on = false;
	startRecording(): void {
		this.on = true;
	}

	stopRecording(): void {
		this.on = false;
	}
}

export class SpyMotionSensor implements MotionSensor {
	public checks = 0;
	isDetectingMotion(): boolean {
		this.checks++;
		return this.checks % 2 != 0;
	}
}
