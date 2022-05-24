# FEEDIT

An experimental React Native project

### Important libraries and versions:
<ul>
      <li>React (17.0.2)</li>
      <li>React Native (0.68.2)</li>
      <li>React Navigation (6)</li>
      <li>Redux Saga (1.1.3)</li>
      <li>Redux Toolkit (1.8.1)</li>
      <li>Styled Components (5.3.5)</li>
      <li>Typescript (4.4.4)</li>
      <li>Json Server (0.17.0)</li>
  </ul>

## Prerequisites
***

### 1. Specify your SDK location

<ul>
  <li>Go to your React-Native Project --> Android</li>
  <li>Create a file local.properties</li>
  <li>Open the file</li>
  <li>Paste your Android SDK path like below
  <ul>
      <li>in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk</li>
      <li>in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk</li>
      <li>in Linux sdk.dir = /home/USERNAME/Android/Sdk</li>
  </ul>
</li>
</ul>

Replace USERNAME with your user name


```
sdk.dir = /Users/USERNAME/Library/Android/sdk
```

***
### 2. Set Your Local IP For JSON Server

Go to the file in path: 

```
src/helpers/axios.js
```

and replace YOUR_LOCAL_IP with your device' s local IP (192.168.1.XX)

```
const API_URL = 'http:/YOUR_LOCAL_IP:3000';
```

Since we are using a local JSON Server, it is necessary!

### 3. Start JSON Server

```
json-server --host YOUR_LOCAL_IP feedIt_db.js 
```

Replace YOUR_LOCAL_IP with your device's local ip

To get your local IP (192.168.1.XX)
<ul>
  <li>On MacOS, type "ifconfig" in your terminal</li>
  <li>On Windows, type "ipconfig" in your terminal</li>
  <li>On Linux, type "ifconfig -a" in your terminal</li>
</ul>

***

### Start

```sh
# IOS
npx react-native run-ios

# ANDROID
npx react-native run-android
```


https://user-images.githubusercontent.com/37984694/170118485-6a1612bb-5787-4185-a1ef-ccf78e676f85.mp4

