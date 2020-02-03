<div align="center">

![GIF sample for react-native-shifting-text](https://raw.githubusercontent.com/HenryQuan/react-native-shifting-text/master/sample.gif)

<h1>react-native-shifting-text</h1>
</div>

## Why?
This was created because of my app, [WoWs Info](https://github.com/HenryQuan/WoWs-Info-Re). Basically, I change her name every major or minor update. That's why I wanted something that can change the name text every 2 or 3 seconds. I am not experience with `Animated` but somehow, it managed to work quite well.

## The implementation
There is one label to the left which is `WoWs Info` in this case. To the right, there are two labels and `label 1` is on top of `label 2`. `label1` has absolute positioning but `label2` is relative. Since users could only see `label2` at the end, it is important to position `label2` properly. The animation is rather simple. Move label 1 up while fading out and move label 2 up while fading it. Reset, repeat and ???.