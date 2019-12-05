       var link = document.querySelector(".login-button-header");
       var popup = document.querySelector(".modal-login");
       var close = document.querySelector(".button-close");
       var overlay = document.querySelector(".modal-overlay");
       var login = popup.querySelector(".form-icon-user");
       var password = popup.querySelector(".password-js");
       var form = popup.querySelector("form");
       var isStorageSupport = true;
       var storage = "";


       try {
          storage = localStorage.getItem("login");
       } catch (err) {
          isStorageSupport = false;
       }

       link.addEventListener("click", function(evt) {
          evt.preventDefault ();
          popup.classList.add("modal-show");
          overlay.classList.add("modal-show");
          if (storage) {
              login.value = storage;
              password.focus();
          } else {
              login.focus();
          }
       });

       close.addEventListener("click", function(evt) {
          evt.preventDefault ();
          popup.classList.remove("modal-show");
          overlay.classList.remove("modal-show");
       });

       overlay.addEventListener("click", function(evt) {
          evt.preventDefault ();
          popup.classList.remove("modal-show");
          overlay.classList.remove("modal-show");
       });

       form.addEventListener("submit", function(evt) {
         if (!login.value || !password.value) {
             evt.preventDefault ();
             console.log("Нужно ввести логин и пароль");
         }else {
             if (isStorageSupport) {
                 localStorage.setItem("login", login.value);
             }
         }
       });



       var mapLink = document.querySelector(".js-button-map");
       var mapPopup = document.querySelector(".modal-map");
       var mapClose = mapPopup.querySelector(".button-close");
       var overlay = document.querySelector(".modal-overlay");
       var footerMap = document.querySelector(".footer-map");


       mapLink.addEventListener("click", function(evt) {
          evt.preventDefault ();
          mapPopup.classList.add("modal-show");
          overlay.classList.add("modal-show");
       });

          footerMap.addEventListener("click", function(evt) {
          evt.preventDefault ();
          mapPopup.classList.add("modal-show");
          overlay.classList.add("modal-show");
       });

       mapClose.addEventListener("click", function(evt) {
          evt.preventDefault ();
          mapPopup.classList.remove("modal-show");
          overlay.classList.remove("modal-show");
       });

       overlay.addEventListener("click", function(evt) {
          evt.preventDefault ();
          mapPopup.classList.remove("modal-show");
          overlay.classList.remove("modal-show");
       });
