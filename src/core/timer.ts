export class Timer {
	private task_in_execution;
	execute_task_in_intervals(fn: () => void, interval_in_ms: number): void {
		this.task_in_execution = setInterval(() => {
			fn();
		}, interval_in_ms);
	}

	stop_task_execution(): void {
		clearInterval(this.task_in_execution);
	}
}
