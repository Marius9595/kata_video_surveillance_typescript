import { VideoRecorder } from "./VideoRecorder";

export class Controller{
    videoRecorder: VideoRecorder
    
    constructor(videoRecorder:VideoRecorder){
        this.videoRecorder = videoRecorder;
    }
}