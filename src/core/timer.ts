export class Timer {
	private task_in_execution;
	execute_task_in_intervals(task: () => void, interval_in_ms: number): void {
		this.task_in_execution = setInterval(() => {
			task();
		}, interval_in_ms);
	}

	stop_task_execution(): void {
		clearInterval(this.task_in_execution);
	}
}
