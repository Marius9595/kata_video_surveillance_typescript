# Kata Video Surveillance

A program capable of implementing a surveillance system/product consisting of a motion sensor and a video recorder is required.

It is mentioned to us that upon motion detection, the event is recorded. As long as there is no motion detection, there should be no recording. It is possible that the sensor may no longer be available.

No information is available about the APIs of each artifact, you have to be able to create your own elements capable of consuming them and hiding those details to show that the controller is working properly.


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
