# appest-reject

It's a very simple (non-functional) application developed with **HTML** and **Javascript** that mimics an electronic insect repellent. 
Is a very simple experiment with which you can learn to develop an app in **HTML** to compile in **Cordova**.

**Demo:** https://codeluxestudio.com/github/appest-reject

### Important

It's not a functional application. It's just a practical example of how to develop an application using **css-responsive-tables** (https://github.com/AlejandroDiegoo/css-responsive-tables) and compile it with **Cordova** for later publishing to the **Google Play Store**.

### Ready to compile

First you have to create your cordova project and paste all appest-reject content into **www** folder.

If you are going to compile the application with cordova it's necessary to add the following plugin:

```
cordova plugin add cordova-plugin-battery-status
```

Edit your **config.xml** so that it only allows portrait orientation.

```xml
<platform name="android">
  <preference name="Orientation" value="portrait" />
</platform>

In addition, you can add a hook to your **config.xml** to avoid compiling unnecessary files.

```xml
<platform name="android">
  <preference name="Orientation" value="portrait" />
  <hook type="after_prepare" src="www/js/hooks/ignoreFiles.js" />
</platform>
```
    
You can see **appest-reject** working in:
- https://play.google.com/store/apps/details?id=com.appestreject
