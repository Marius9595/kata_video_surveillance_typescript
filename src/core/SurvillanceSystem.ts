import { Controller } from "./Controller";
import { MotionSensor } from "./MotionSensor";

export class SurveillanceSystem {
    private controller: Controller;
    private motionSensor: MotionSensor;

    private constructor(controller: Controller, motionSensor: MotionSensor){
        this.controller = controller;
        this.motionSensor = motionSensor;
    }    
 

    public static create(controller: Controller, motionSensor: MotionSensor){
    }


}