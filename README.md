# cookienotice
A lightweight GDPR compliant cookie popup

### What it is ###
Cookienotice is a small jQuery-based script that shows a cookie popup and gives visitors the chance to accept all cookies or decide which ones they want. After accepting cookies, only those scripts accepted by the visitor will be executed. It has been designed with GDPR compliance in mind. Therefore it ensures:
1) no scripts are executed before the visitor has given their consent
2) visitors can see what types of cookies will be set and pick & choose which they want
3) no pre-selected checkboxes
4) link to privacy policy and addtional information
5) functionality to revoke the consent. This can be achieved through a simple button or link, which can be added anywhere (for example inside the privacy policy)

### How to install it ###
1. download jquery.cookienotice.js from this repository
2. jQuery is needed for this script to run properly. One way to include it is by adding the folllowing line to each of your webpages: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
3. the downloaded jquery.cookienotice.js file needs to be loaded on each of your webpages (AFTER jQuery). You can achieve this by storing the file on your server and loading it with <script src="path-to-your-file/jquery.cookienotice.js"></script>
4. add all styles from either styles.css or styles-blank.css to your stylesheet. Styles-blank.css contains the minimum code needed to get the popup running. If you want a fully styled popup without too much work, use the code in style.css and adjust as needed
5. customize the first section of jquery.cookienotice.js as needed. You can change the name of the cookie, description, link to privacy policy, etc
6. add/rename/remove as many cookie types as you need. By default the popup will show required, analytics (eg Google Analytics) and marketing (eg. Facebook pixel, Mailchimp, Livechat, etc).
7. add the code that should be executed inside the indicated function of each cookie Type (in the code section).
8. add a button, link, or any other element to your privacy policy and give it the class="cookie-popup-btn-remove". When clicked, this will remove the users cookie and display the popup again. No scripts will be activated until consent is given again.

### Thanks To ###
Ketan Mistry at https://github.com/ketanmistry/ihavecookies
I used his cookie popup notice for a long time and got inspired to write my own version.
