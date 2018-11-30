export default function getAMap() {
    var isLoaded = true
    return new Promise(function (resolve, reject) {
      if (isLoaded) {
        window.AMap.plugin(['AMap.MouseTool', 'AMap.PolyEditor'], () => {
          resolve(window.AMap)
        })
        return
      }
      
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'http://webapi.amap.com/maps?v=1.4.3&key=key&callback=$$$maptcinit&plugin=AMap.MouseTool'
      // script.onload = resolve
      script.onerror = reject
      script.onload = function () {
        isLoaded = true
        resolve(window.AMap)
      }
      document.head.appendChild(script)
    })
  }