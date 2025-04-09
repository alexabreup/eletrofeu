#!/bin/bash

# Build the Quasar app for Capacitor
echo "Building Quasar app for Capacitor..."
npx quasar build -m capacitor

# Copy the built files to the Android project
echo "Copying files to Android project..."
cd src-capacitor
npx cap copy android

# Build the Android APK
echo "Building Android APK..."
cd android
./gradlew assembleDebug

echo "Build completed!"
echo "APK location: src-capacitor/android/app/build/outputs/apk/debug/app-debug.apk"
