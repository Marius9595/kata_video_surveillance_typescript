import { CustomClock } from '../core/custom_clock';

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

export class StubClock implements CustomClock {
	private life_time: number;
	private constructor(life_time_working_in_seconds: number) {
		this.life_time = life_time_working_in_seconds;
	}

	static with_lifetime_working(life_time_working_in_seconds: number) {
		return new StubClock(life_time_working_in_seconds);
	}
}
