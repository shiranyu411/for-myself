function calculateFeelTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const windspeed = parseFloat(document.getElementById('windspeed').value) || 0;

    let feelTemp;

    if (temperature >= 27) {
        feelTemp = -8.784695 + 1.61139411 * temperature + 2.338549 * humidity
            - 0.14611605 * temperature * humidity - 0.012308094 * Math.pow(temperature, 2)
            - 0.016424828 * Math.pow(humidity, 2) + 0.002211732 * Math.pow(temperature, 2) * humidity
            + 0.00072546 * temperature * Math.pow(humidity, 2) - 0.000003582 * Math.pow(temperature, 2) * Math.pow(humidity, 2);
    } else if (temperature <= 10 && windspeed > 4.8) {
        feelTemp = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed * 3.6, 0.16) + 0.3965 * temperature * Math.pow(windspeed * 3.6, 0.16);
    } else {
        feelTemp = temperature;
    }

    document.getElementById('result').innerText = `体感温度: ${feelTemp.toFixed(2)} °C`;
}
