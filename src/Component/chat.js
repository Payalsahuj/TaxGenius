
import React from 'react'

function KommunicateChat(){
    React.useEffect(()=>{
        (function(d, m){
            var kommunicateSettings = {"appId":"20edef014f4a3795b3d32beacc04452fe","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    },[])
    return <div></div>
}

export default KommunicateChat
