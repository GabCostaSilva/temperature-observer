export function displayNotification() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
    if (Notification.permission == 'granted') {
        console.log("WAS IT?");

        navigator.serviceWorker.getRegistration()
            .then(function (reg: any) {
                var options = {
                    body: 'Here is a notification body!',
                    icon: 'images/example.png',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    },
                    actions: [
                        {
                            action: 'explore', title: 'Explore this new world',
                            icon: 'images/checkmark.png'
                        },
                        {
                            action: 'close', title: 'Close notification',
                            icon: 'images/xmark.png'
                        },
                    ]
                };
                reg.showNotification('Hello world!', options);
            });
    } else {
        alert("libera p nois ae") 
    }
}