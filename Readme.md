# Kata Video Surveillance

The context of the kata is the following:

A security company needs a software to control its new product. It consist an innovative machine that can surveillance automatically when it detects motion with  a sensor, giving a video evidence. Then, you, as developer, have to build that controller. However, just ones can know the details of product, so they will give you the following interfaces in order to know how to interact with it.

```Typescript
interface MotionSensor {
  isDetectingMotion(): boolean;
}

interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}

```
Once you know this. In the meeting with bussiness, they ask you the following requirements that controller must meet:

- Video recorder does not record if no motion is detected
- Video recorder start a recording when motion is detected
- If sensor throw errors, the video recording must stop
- Controller should check motion sensor each second

## Instrucciones
* `npm upgrade`
* `npm install`
* `npm test`

Check this course: [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
