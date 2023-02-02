export class StubMotionSensor implements MotionSensor {
	private readonly state: boolean;
	static with_response(response: boolean): MotionSensor {
		return new StubMotionSensor(response);
	}
	private constructor(response: boolean) {
		this.state = response;
	}
	isDetectingMotion(): boolean {
		return this.state;
	}
}
