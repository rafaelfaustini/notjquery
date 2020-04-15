function $(seletor){
    const obj = 
    {
        elemento: document.querySelector(seletor),
        html: ()=> obj.elemento,
        text: (texto=null)=> {
            if(texto){
                obj.elemento.innerText = texto;
            }
            return obj.elemento.innerText
        },
        val: (texto=null)=> {
            if(texto){
                obj.elemento.value = texto;
            }
            return obj.elemento.value;
        },

        on:(evento, callback)=>{
            obj.elemento.addEventListener(evento, callback)
        },

        checkCallBack: (callback)=>{
            if(callback){
                callback();
            }
        },

        hide:(callback = null)=> {
            obj.elemento.style.display = 'none';
            obj.checkCallBack(callback)
        },
        show:(callback = null)=> {
            obj.elemento.style.display = 'block';
            obj.checkCallBack(callback)   
        },
        toggle:(callback = null)=> {
            if(obj.elemento.style.display == 'none'){
                obj.elemento.style.display = 'block';
            } else {
                obj.elemento.style.display = 'none'
            }
            obj.checkCallBack(callback)
        },



    };
    return obj
}

const notjquery = {
        get(url, data, options) {
            var xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = (e) => {
              if (xhr.readyState !== 4) {
                return;
              }
        
              if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
              } else {
                console.warn('request_error');
              }
            };
        
            xhr.open('GET', url);
            for(var header in options.headers){
                xhr.setRequestHeader(header, options.headers[header]);
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
          });
    },
        post(url, data, options) {
            var xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }
        
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                console.warn('request_error');
            }
            };
        
            xhr.open('POST', url);
            for(var header in options.headers){
                xhr.setRequestHeader(header, options.headers[header]);
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
        });
        }
}