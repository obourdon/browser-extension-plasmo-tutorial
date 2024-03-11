# browser-extension-plasmo-tutorial

Step by step tutorial(s) for Plasmo web browsers extension framework

Following the first video [Create a Google Chrome extension with ReactJS | Plasmo quickstart tutorial](https://www.youtube.com/watch?v=Fa2nFDw-dBw) (June 19th 2022 18mn)

```
$ node --version
v21.7.1
$ pnpm dlx plasmo init "browser-ext-plasmo-tutorial"
```

![Plasmo create extension code command output](./pictures/PlasmoTutorialLaunch.png)

To run/compile/generate the extension:

```
$ cd browser-ext-plasmo-tutorial && pnpm dev
```

![Plasmo create extension code command output](./pictures/PlasmoRunDevServer.png)

Now, go to the Chrome Extensions page:

![Chrome Extension Page](./pictures/ChromeExtentions.png)

Verify that the Developer mode is activated in the upper right corner and use the upper left button `Load unpacked` to select the newly generated extension code:

![Chrome Extension Select 1](./pictures/ChromeExtSelect1.png)
![Chrome Extension Select 2](./pictures/ChromeExtSelect2.png)
![Chrome Extension Select 3](./pictures/ChromeExtSelect3.png)
![Chrome Extension OK](./pictures/ChromeExtOK.png)
![Chrome Extension Details](./pictures/ChromeExtDetails.png)

Once done, access the extension Icon in the upper right corner to pin the new extension:

![Chrome Extension Icon](./pictures/ChromeExtIcon.png)
![Chrome Extension Menu](./pictures/ChromeExtMenu.png)

The new extension icon is now visible within the list of pinned extensions in the upper right corner:

![Chrome Extension Icon](./pictures/ChromeExtNewIcon.png)

and once clicked the extension code is executed and appears:

![Chrome Extension Activate](./pictures/ChromeExtActivate.png)

Here the default generated code creates a popup and its code resides in the `popup.tsx` file but you can also use other browser API(s) to create new tabs, options UI, ...

Changing the text of the message in the code and having the dev server running in the background should automatically take new changes into account without having to do anything. If this is not the case, the reload button in the extention basic info pane can be used.

![Chrome Extension Activate](./pictures/ChromeExtReload.png)

