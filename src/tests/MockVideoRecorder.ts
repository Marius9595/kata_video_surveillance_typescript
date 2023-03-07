import { VideoRecorder } from "../core/VideoRecorder";

export class MockVideoRecorder implements VideoRecorder{

    public isRecording: boolean = false;

    starRecording(): void {
    }
    stopRecording(): void {
        throw new Error("Method not implemented.");
    }

}