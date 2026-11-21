/* DNX_RECEIVER_SCROLLBAR_START */
(function(){
  "use strict";

  if(window.__dnxReceiverScrollbar) return;
  window.__dnxReceiverScrollbar = true;

  var STYLE_ID="dnx-receiver-scrollbar-style";

  function installStyle(){
    if(document.getElementById(STYLE_ID)) return;

    var style=document.createElement("style");
    style.id=STYLE_ID;

    style.textContent=`
      #openwebrx-panel-receiver{
        max-height:calc(100vh - 18px) !important;
        overflow-y:scroll !important;
        overflow-x:hidden !important;
        overscroll-behavior:contain !important;
        scrollbar-gutter:stable !important;
        scrollbar-width:auto !important;
        scrollbar-color:#28ff72 #18231d !important;
        padding-right:5px !important;
        box-sizing:border-box !important;
      }

      #openwebrx-panel-receiver::-webkit-scrollbar{
        width:13px !important;
        display:block !important;
      }

      #openwebrx-panel-receiver::-webkit-scrollbar-track{
        background:#18231d !important;
        border-left:1px solid rgba(40,255,114,.30) !important;
        border-radius:8px !important;
      }

      #openwebrx-panel-receiver::-webkit-scrollbar-thumb{
        min-height:44px !important;
        background:
          linear-gradient(
            90deg,
            #0f8f45 0%,
            #28ff72 48%,
            #0f8f45 100%
          ) !important;
        border:2px solid #18231d !important;
        border-radius:9px !important;
        box-shadow:
          inset 0 0 4px rgba(255,255,255,.28),
          0 0 6px rgba(40,255,114,.55) !important;
      }

      #openwebrx-panel-receiver::-webkit-scrollbar-thumb:hover{
        background:
          linear-gradient(
            90deg,
            #19bb59 0%,
            #70ff9d 48%,
            #19bb59 100%
          ) !important;
        box-shadow:
          0 0 9px rgba(40,255,114,.85) !important;
      }

      #openwebrx-panel-receiver::-webkit-scrollbar-button{
        height:12px !important;
        background:#124d2c !important;
      }

      @media (max-width:800px){
        #openwebrx-panel-receiver{
          max-height:calc(100vh - 8px) !important;
          scrollbar-width:thin !important;
          padding-right:3px !important;
        }

        #openwebrx-panel-receiver::-webkit-scrollbar{
          width:9px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function enforce(){
    installStyle();

    var panel=document.getElementById(
      "openwebrx-panel-receiver"
    );

    if(!panel) return;

    panel.style.setProperty(
      "max-height",
      "calc(100vh - 18px)",
      "important"
    );

    panel.style.setProperty(
      "overflow-y",
      "scroll",
      "important"
    );

    panel.style.setProperty(
      "overflow-x",
      "hidden",
      "important"
    );

    panel.style.setProperty(
      "overscroll-behavior",
      "contain",
      "important"
    );
  }

  function boot(){
    enforce();

    window.setTimeout(enforce,300);
    window.setTimeout(enforce,1000);
    window.setTimeout(enforce,2500);

    window.setInterval(enforce,1500);
  }

  if(document.readyState==="loading"){
    document.addEventListener(
      "DOMContentLoaded",
      boot,
      {once:true}
    );
  }else{
    boot();
  }

  window.addEventListener("load",boot);
  window.addEventListener("resize",enforce);
})();
/* DNX_RECEIVER_SCROLLBAR_END */
