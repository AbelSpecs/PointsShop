export default function serviceWorker(){

  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js', { scope: '/'})
      .then(function (registration) {
        console.log('service Worker Registered');
      });
      navigator.serviceWorker.ready.then(function (registration) {
        console.log('Service Worker Ready');
      });
  }
}

