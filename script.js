function calculateFuelConsumption() {
    const distance = parseFloat(document.getElementById('distance').value.replace(',', '.'));
    const fuel = parseFloat(document.getElementById('fuel').value.replace(',', '.'));
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value.replace(',', '.'));

    if (isNaN(distance) || isNaN(fuel) || distance <= 0 || fuel <= 0) {
        document.getElementById('result').textContent = "Proszę podać prawidłowe wartości dla dystansu i zużycia paliwa.";
        return;
    }

    const consumption = (fuel / distance) * 100;
    let resultText = `Średnie spalanie: ${consumption.toFixed(2)} L/100km`;

    if (!isNaN(fuelPrice) && fuelPrice > 0) {
        const travelCost = fuel * fuelPrice;
        resultText += `<br>Koszt przejazdu: ${travelCost.toFixed(2)} PLN`;
    } else {
        resultText += `<br>Podaj prawidłową cenę paliwa, aby obliczyć koszt przejazdu.`;
    }

    document.getElementById('result').innerHTML = resultText;
}
