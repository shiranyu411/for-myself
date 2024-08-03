function calculateFeelTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const windspeed = parseFloat(document.getElementById('windspeed').value) || 0;

    let feelTemperature;
    
    if (temperature < 10) {
        feelTemperature = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16);
    } else {
        feelTemperature = temperature - ((0.55 - 0.0055 * humidity) * (temperature - 14.5));
    }

    document.getElementById('result').textContent = `体感温度为: ${feelTemperature.toFixed(2)} °C`;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}
