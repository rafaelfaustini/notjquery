// Loadash, debounce
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  



function init(){
    animators = document.querySelectorAll("[animation]")
    if(animators.length){
    window.addEventListener('scroll', debounce(function(){
        const pos = window.pageYOffset + ((window.innerHeight* 3)/4);
        animators.forEach(element => {
            if(pos > element.offsetTop){
                $('', element).addClass("animate");
            } else {
                $('', element).removeClass("animate")
            }
        });
    }, 200))
    }
}
init()

function $(seletor='', htmlObj=null) {
    const obj =
    {
        element: document.querySelector(seletor || null),
        html: () => obj.element,
        text: (text = null) => {
            if (text) {
                obj.element.innerText = text;
            }
            return obj.element.innerText
        },
        val: (text = null) => {
            if (text) {
                obj.element.value = text;
            }
            return obj.element.value;
        },

        on: (evento, callback) => {
            obj.element.addEventListener(evento, callback)
        },

        checkCallBack: (callback) => {
            if (callback) {
                callback();
            }
        },

        hide: (callback = null) => {
            obj.element.style.display = 'none';
            obj.checkCallBack(callback)
        },
        show: (callback = null) => {
            obj.element.style.display = 'block';
            obj.checkCallBack(callback)
        },
        toggle: (callback = null) => {
            if (obj.element.style.display == 'none') {
                obj.element.style.display = 'block';
            } else {
                obj.element.style.display = 'none'
            }
            obj.checkCallBack(callback)
        },
        fadeIn: (interval=50,callback = null)=> {
            let opacity= parseFloat(obj.element.style.opacity) || 0;
            var effect = setInterval(() => {
                if(!obj.element.style.opacity){
                    obj.element.style.opacity = 0;
                }
                opacity = parseFloat(obj.element.style.opacity)
                if(opacity < 1){
                    obj.element.style.opacity = (opacity+0.1).toString()
                } else {
                    obj.element.style.display == 'none'
                    clearInterval(effect)
                }
            }, interval);
            obj.checkCallBack(callback)
            return effect
        },
        fadeOut: (interval=50,callback = null)=> {
            let opacity= parseFloat(obj.element.style.opacity) || 0;
            var effect = setInterval(() => {
                if(!obj.element.style.opacity){
                    obj.element.style.opacity = 1;
                }
                opacity = parseFloat(obj.element.style.opacity)
                if(opacity > 0){
                    obj.element.style.opacity = (opacity-0.1).toString();
                } else {
                    clearInterval(effect)
                }
            }, interval);
            obj.checkCallBack(callback)
            return effect
        },
        fade: (interval=50,callback = null)=> {
            if(obj.element.style.opacity && obj.element.style.opacity < 1 || obj.element.style.display && obj.element.style.display == 'none'){
                obj.fadeIn(interval)
            } else{
                obj.fadeOut(interval)
            }
        },
        addClass: (text)=> {
            obj.element.classList.add(text);
        },
        removeClass: (text)=> {
            obj.element.classList.remove(text);
        },
        animate: ()=> {
            obj.element.addClass("animate");
        }
        
    };
    if(htmlObj){
        obj.element = htmlObj
    }
    return obj
}

const notjquery = {
    get(url, data, options = null) {
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
            if (options && options.headers) {
                for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
        });
    },
    post(url, data, options = null) {
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
            if (options && options.headers) {
                for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
        });
    },

    put(url, data, options = null) {
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

            xhr.open('PUT', url);
            if (options && options.headers) {
                for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
        });
    },

    delete(url, data, options = null) {
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

            xhr.open('DELETE', url);
            if (options && options.headers) {
                for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }
            xhr.withCredentials = "true";

            xhr.send(JSON.stringify(data));
        });
    }
}