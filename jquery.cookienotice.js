/*

###############################################
#                                             #
#             -- Cookie-Notice --             #
#  A Lightweight GDPR Compliant Cookie Popup  #
#             -- Version 1.0.0 --             #
#                                             #
###############################################

MIT License

Copyright (c) 2020 Julian Stefan

*/


// Loads the required modules and executes the cookie-notice script

jQuery.getScript('https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js', function() {
  cookieNotice();
});

function cookieNotice() {

  // COOKIE DETAILS: This section names the cookie and sets the expiry days

  var cookieName = "cookiePreferences";
  var cookieDuration = 30;

  // POPUP DESCRIPTION: This section specifies the text your visitors will see in the popup

  var cookieDescription = {
    title: "Cookies & Privacy",
    description: "We use cookies 🍪 to steal your babies! Just click 'Accept All' below to get rid of this annoying popup and carry on. You know you want to.",
    linkText: "More Information & Consent Withdrawal",
    linkUrl: "https://your-website.com/privacy-policy"
  };

  // REQUIRED COOKIES: These cookies are always on. You can explain more about what they do and why they are needed. You can rename sections or add more.

  var cookieListRequired = [{
    name: "Required",
    description: "These cookies are required to make our page work. They can't be turned off.",
    value: "required"
  }, ];

  // OPTIONAL COOKIES: These cookies are optional. You can explain what they do and allow users to accept or refuse them. You can rename/remove sections or add more.

  var cookieListOptional = [{
      name: "Analytics",
      description: "Analytic cookies help us to better understand where visitors come from and how they move through our website.",
      value: "analytics",
      code: function() {
        // Insert the code you'd like to execute when visitors accept analytics cookies
      }
    },
    {
      name: "Marketing",
      description: "Marketing cookies enable our newsletter popup, livechat and associating visitors with their social media profiles.",
      value: "marketing",
      code: function() {
        // Insert the code you'd like to execute when visitors accept marketing cookies
      }
    }
  ];

  // Creates all html for the cookie box and makes it appear after one second

  jQuery("body").append('<div class="cookie-popup-box"><div class="cookie-popup-top"><h5 class="cookie-popup-header">' + cookieDescription.title + '</h5><p class="cookie-popup-text">' + cookieDescription.description + '</p><a class="cookie-popup-link" href="' + cookieDescription.linkUrl + '" target="_blank">' + cookieDescription.linkText + '</a></div><div class="cookie-popup-middle"><form class="cookie-popup-options"></form></div><div class="cookie-popup-bottom"><button class="cookie-popup-btn-accept" type="button" name="cookie-popup-btn-accept">Accept All Cookies</button><button class="cookie-popup-btn-preferences" type="button" name="cookie-popup-btn-preferences">Cookie Preferences</button></div></div>');
  setTimeout(function() {
    jQuery(".cookie-popup-box").animate({
      opacity: 1
    });
  }, 1500); // You can change the miliseconds delay before the popup is displayed here.

  // Creates the checkboxes for required Cookies

  for (var i = 0; i < cookieListRequired.length; i++) {
    jQuery(".cookie-popup-options").append('<div class="cookie-popup-row"><input type="checkbox" name="' + cookieListRequired[i].value + '" class="cookie-popup-checkbox cookie-' + cookieListRequired[i].value + '" value=' + cookieListRequired[i].value + '" checked disabled="disabled"><label for="' + cookieListRequired[i].value + '">' + cookieListRequired[i].name + '</label><br><p class="cookie-type-description">' + cookieListRequired[i].description + '</p></div>');
  };

  // Creates the checkboxes for optional Cookies

  for (var i = 0; i < cookieListOptional.length; i++) {
    jQuery(".cookie-popup-options").append('<div class="cookie-popup-row"><input type="checkbox" name="' + cookieListOptional[i].value + '" class="cookie-popup-checkbox cookie-' + cookieListOptional[i].value + '" value=' + cookieListOptional[i].value + '" checked><label for="' + cookieListOptional[i].value + '">' + cookieListOptional[i].name + '</label><br><p class="cookie-type-description">' + cookieListOptional[i].description + '</p></div>');
  };

  // Cookie Preferences  - open additional options on click

  jQuery(".cookie-popup-btn-preferences").click(function() {
    jQuery(".cookie-popup-middle").css("display", "block");
    jQuery(".cookie-popup-btn-accept").text("Accept Selection");
    jQuery(".cookie-popup-btn-preferences").attr("disabled", "disabled");
    for (var i = 0; i < cookieListOptional.length; i++) {
      jQuery(".cookie-" + cookieListOptional[i].value).removeAttr("checked");
    };
  });

  // Setting cookie - on clicking Accept

  jQuery(".cookie-popup-btn-accept").click(function() {
    var cookieTypesSet = [];
    for (var i = 0; i < cookieListOptional.length; i++) {
      if (jQuery('.cookie-' + cookieListOptional[i].value).is(':checked')) {
        cookieTypesSet.push(cookieListOptional[i].value + '=on');
      } else {
        cookieTypesSet.push(cookieListOptional[i].value + '=off');
      };
    };
    Cookies.set(cookieName, cookieTypesSet, {
      expires: cookieDuration
    });
    jQuery(".cookie-popup-box").fadeOut();
    window.location.reload();
  });

  // If cookie has been set, hide popup and run code for all accepted settings

  if (Cookies.get(cookieName) !== undefined) {
    jQuery(".cookie-popup-box").hide();
    for (var i = 0; i < cookieListOptional.length; i++) {
      if (Cookies.get(cookieName).includes(cookieListOptional[i].value + "=on") === true) {
        cookieListOptional[i].code();
      };
    };
  };

  // Clear All Cookies on click. Give the class "cookie-popup-btn-remove" to any element (eg. a link or button) in your privacy policy, so visitors can reset their cookie preferences.

  jQuery(".cookie-popup-btn-remove").click(function() {
    Cookies.remove(cookieName);
    window.location.reload();
  });
};