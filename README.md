The purpose of this repository is to easily reproduce a React Native Maps memory leak.

## Problem:

On Android, when using react-native-maps with the react-native-router-flux router, when a map is loaded
over and over, there is a large memory leak that can result in an application crash.

It appears that the map instance is not disposed of. After a short look at a heap dump,
it seems like 'AirMap' is not getting disposed. I suspect this is a native Java wrapper
around the Google Maps instance.

## Project Setup

```
git clone https://github.com/gregberns/ReactNativeMapTest.git
cd ReactNativeMapTest
npm install
react-native run-android
```

You'll also need a Google Maps API key for the map to use.
Once you have it, put it in the Android Manafest: `android/app/src/main/AndroidManafest.xml`

## Reproduce the Issue

Once the app is running in a debug environment

1) on the main page, click "Go To Map"
2) Map will load, once loaded, click the back button
3) Now back on the main page, click "Go To Map"
4) Repeat

To make the application crash, you may need to go back and forth 20-25 times, 
depending on your device. You can also run the Android Studio Memory monitor tool
and see the memory increase.
