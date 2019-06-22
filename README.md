# Vivoliker-Tampermonkey-Script

The [Vivoliker](https://vivoliker.com) website provides free likes service on instagram photos. but the only limitation is that you need to wait for 15 Minutes every time once you submitted an order to get likes on your instagram images.

The `Vivoliker-Tampermonkey-Script` will help you to overcome this limitation. by simply following the easy steps to setup the `Vivoliker-Tampermonkey-Script` script on your browser to automatically process likes on your instagram pictures without interupting your current task.

### Pre-requirements

* Javascript supported browser.
* Chrome extension supported browser.
* Install `Tampermonkey` extension in your browser.

### How to use ??

Step 1 : Download the files from repository.

Step 2 : Open `Tampermonkey` extension dashboard on your browser.

Step 3 : Select `utilities`.

Step 4 : Now you can import the files by zip (by putting all `.js` files into zip) directly or by manually selecting files which ends with `.js`.

Step 5 : Once import process is completed open the file named as `VivoLiker script for likes on instagram photos in a queue part1` and replace the following code with your instagram post url.

`Note: You can get the url of the post by open instagram into browser and select post and then click on 3 dot option menu and select copy link`

```sh
var photoArray = [
    'https://www.instagram.com/p/BwzWMaGFdB0/?utm_source=ig_web_copy_link', 
    'https://www.instagram.com/p/BwzWKskFxja/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/p/BwyZ5NGlqxx/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/p/BwbzcJWFnGS/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/p/Bp3oMVeBd_7/?utm_source=ig_web_copy_link'
];
```

* Replace all the URLS and make sure that all the URLS are comma(,) seperated and the last URL should not contain any comma.

* You can use any number of URLS of the post but for better perfomance make sure it should be less than 15 URLS.

Step 6 : Save the file from the menu and then visit the [Vivoliker](https://vivoliker.com) website then select `Instagram Likes` then `verify captcha` then `accept agreement` then select `Use` button from Instagram Likes.

Step 7 : Now let the script do it work and sit back relax. :D.

Step 8 : Finish.

### Conclusion

Thats all from my side still if you find anything which makes my repository works more better then feel free to tell me. you can also contact on zaidpathan339@gmail.com Thank you :)
