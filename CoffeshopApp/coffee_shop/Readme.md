React-native getting started

reference: https://reactnavigation.org/docs/getting-started/

# Navigational Dependencies

1. npx react-native init <App Name>
2. npm i @react-navigation/native
3. npm install react-native-screens react-native-safe-area-context
4. android >> app >> src >> main >> Android_manifest

- android:screenOrientation = "portrait"

5. android >> app >> src >> main >> java

- import android.os.Bundle
- @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  }

6. install native stack - go to Navigators >> Native stack - https://reactnavigation.org/docs/native-stack-navigator

7. npm install @react-navigation/native-stack
8. Install bottom tabs - go to Navigators >> Bottom Tabs
9. npm install @react-navigation/bottom-tabs

# Elementary dependencies

1. npm i react-native-linear-gradient
2. npm i @react-native-community/blur
3. npm i lottie-react-native
4. npm i --save-dev @types/react-native-vector-icons
5. npm i react-native-vector-icons

# Zustland

1. npm i zustland
   (a small updation in the app should be reflected to the whole app. for that install zustland)

# Immer

1. npm i immer
   (Immer simplifies handling immutable data structures - for example in combination with React state, React or Redux reducers, or configuration management. )
2. npm i @react-native-async-storage/async-storage
   (for storing data persistently over the device.)

-cd android/
-clean the gradle using ./gradlew clean
-cd ..
-npx react-native run-android
cd android/
./gradlew clean
- src
-assets
npx react-native-asset