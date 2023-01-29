export class MockMotionSensor implements MotionSensor {
	isDetectingMotion(): boolean {
		throw Error('Unexpected error occurred');
	}
}
