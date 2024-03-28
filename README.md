# Chat App

## Description

The chat app for mobile device using React Native. The app will provide users with a chat interface and options to share images and their location.

## Features

- Users can enter their name and choose a background color for the chat screen
  before joining the chat
- A page displaying the conversation, as well as an input field and submit button
- Users can share images from their library or directly through the camera
- Users can send location data
- Data gets stored online and offline

## Dependencies

- React Native
- React Navigation
- Expo
- Google Firestore Database
- Google Firebase authentication.
- Firebase Cloud Storage
- Gifted Chat library

## Getting started

### 1. Make sure you have Expo CLI installed

```
npm install -g expo-cli
```

### 2. Database configuration

- Please create a Firebase Account and then a new project in the Firebase console:
  https://console.firebase.google.com/
- Cloud Firestore DB: Initialize a new database and set its rules to: allow read, write: if true;
- Firebase Authentication: Activate anonymous authentication for the app.
- Firebase Storage: Activate storage by clicking on "Start now" and set its rules to: allow read, write: if true;
- Configuration: Under the project settings, add a new app and follow the steps provided by Firebase until you obtain the configuration code.

```
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};
```

- Update the 'firebaseConfig.js' in your project with the above configuration object

## 3. Installation

clone the repository:

```
git clone https://github.com/nozomis0129/chat-demo.git
```

Navigate into the project directory:

```
cd chat-demo:
```

Install the dependencies

```
npm unstall
```

Start the Expo project:

```
expo start
```

On your emulator or the Expo Go app on your phone, click on the running link after logging in to your Expo account.

## User Interface

<img width="200" src="https://github.com/nozomis0129/chat-demo/assets/129555124/c32d03dc-c1f2-40c2-9d3f-bdcc4d522db1">
