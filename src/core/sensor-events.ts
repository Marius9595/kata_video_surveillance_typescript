export interface SensorEvent{}

export class MotionDetected implements SensorEvent{}

export class NoMotionDetected implements SensorEvent{}

export class NotAvailable implements SensorEvent{}