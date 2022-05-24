# FEEDIT

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

### 2. Start JSON Server

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

