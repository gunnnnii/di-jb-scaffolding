# Julius Baer Community (working title...)
This is an [native expo app](https://docs.expo.dev/) for the JB project.

## Running the project

### Prerequisites
- set up all prerequisites for [the Expo CLI](https://docs.expo.dev/get-started/installation/#requirements)
- [install xcode](https://developer.apple.com/download/all/?q=Xcode) to run the app on ios[^1]
- [install android studio](https://developer.android.com/studio) to run the app on android

After all prerequisites you should be able to run the app using the following commands
```
npm install
# prebuild is not needed for this skeleton app, but will probably be required further on when we add some native dependencies
# npx expo prebuild
# and then either of these two
npm run ios
npm run android
```

[^1]: Don't worry, you will pretty much never need to think about xcode or android studio, they are simple necessary to provide expo with the toolchain it needs to build the app