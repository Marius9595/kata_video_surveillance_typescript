export class SpyVideoRecorder implements VideoRecorder {
	public on = false;
	startRecording(): void {
		this.on = true;
	}

	stopRecording(): void {
		this.on = false;
	}
}
