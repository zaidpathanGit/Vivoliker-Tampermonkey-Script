// ==UserScript==
// @name         VivoLiker script for likes on instagram photos in a queue part1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vivoliker.com/instagram/likes?u=*
// @grant        none
// ==/UserScript==

var photoArray = ['https://www.instagram.com/p/BwzWMaGFdB0/?utm_source=ig_web_copy_link',
                  'https://www.instagram.com/p/BwzWKskFxja/?utm_source=ig_web_copy_link',
                  'https://www.instagram.com/p/BwyZ5NGlqxx/?utm_source=ig_web_copy_link',
                  'https://www.instagram.com/p/BwbzcJWFnGS/?utm_source=ig_web_copy_link',
                  'https://www.instagram.com/p/Bp3oMVeBd_7/?utm_source=ig_web_copy_link'
                 ];

(function() {

    //code to be execute when page is ready
    $(document).ready(function(){

        //code to set array index and get value from cookie
        var param = document.cookie.split("arrayIndex=");
            param = param[1].split(";");
            param = param[0];

        var arrayIndex;
        var arrayLength = photoArray.length - 1;

        //code to set arrayIndex value according to querystring
        if(param == null)
        {
            arrayIndex = 0;
        }
        else
        {
            arrayIndex = param;
        }

        //code to set values into form
        document.getElementsByName('link')[0].value = photoArray[arrayIndex];
        document.getElementsByName('mobile')[0].value = "swayam_love";
        document.getElementsByName('email')[0].value = "zaidpathan339@gmail.com";

        //code to get submit button
        var btn = document.getElementsByName('add_order')[0];

        //code to give increment after attaching all values
        if(arrayIndex > arrayLength)
        {
            //code to be executed after every 2 hours if all link is in process
            setTimeout(function(){
                arrayIndex = 0;

                //code to put arrayIndex[0] value if arrayIndex value is more than arrayLength
                document.getElementsByName('link')[0].value = photoArray[arrayIndex];
                document.getElementsByName('mobile')[0].value = "swayam_love";
                document.getElementsByName('email')[0].value = "zaidpathan339@gmail.com";

                //code to add cookie
                document.cookie = "arrayIndex="+arrayIndex+"";
                //code to click on submit button
                btn.click();
            },7200000);
        }
        else
        {
            arrayIndex++;

            //code to add cookie
            document.cookie = "arrayIndex="+arrayIndex+"";
            //code to click on submit button
            btn.click();
        }

        
    });

})();