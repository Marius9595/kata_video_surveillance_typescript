interface MotionSensor {
	isDetectingMotion(): boolean;
}

interface VideoRecorder {
	startRecording(): void;
	stopRecording(): void;
}
