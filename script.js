// Interatividade do Universo das Circunferências

document.addEventListener('DOMContentLoaded', () => {

    // Cálculo da Equação da Circunferência
    const calcEquationBtn = document.getElementById('calcEquation');
    const equationResult = document.getElementById('equationResult');

    calcEquationBtn.addEventListener('click', () => {
        const centerX = document.getElementById('centerX').value;
        const centerY = document.getElementById('centerY').value;
        const radius = document.getElementById('radius').value;

        if (centerX && centerY && radius) {
            const equation = `(x - ${centerX})² + (y - ${centerY})² = ${radius}²`;
            equationResult.innerHTML = `
                <p class="font-semibold">Equação da Circunferência:</p>
                <code>${equation}</code>
                <p class="text-sm text-gray-600 mt-2">
                    Centro: (${centerX}, ${centerY}), Raio: ${radius}
                </p>
            `;
        } else {
            equationResult.textContent = 'Por favor, preencha todos os campos';
        }
    });

    // Verificação da Posição do Ponto
    const checkPointBtn = document.getElementById('checkPoint');
    const pointResult = document.getElementById('pointResult');

    checkPointBtn.addEventListener('click', () => {
        const pointX = parseFloat(document.getElementById('pointX').value);
        const pointY = parseFloat(document.getElementById('pointY').value);
        const centerX = parseFloat(document.getElementById('checkCenterX').value);
        const centerY = parseFloat(document.getElementById('checkCenterY').value);
        const radius = parseFloat(document.getElementById('checkRadius').value);

        if (!isNaN(pointX) && !isNaN(pointY) && !isNaN(centerX) && !isNaN(centerY) && !isNaN(radius)) {
            const distance = Math.sqrt(
                Math.pow(pointX - centerX, 2) + Math.pow(pointY - centerY, 2)
            );

            if (distance < radius) {
                pointResult.innerHTML = `
                    <p class="font-semibold text-green-600">O ponto está dentro da circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            } else if (distance === radius) {
                pointResult.innerHTML = `
                    <p class="font-semibold text-blue-600">O ponto está na circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            } else {
                pointResult.innerHTML = `
                    <p class="font-semibold text-red-600">O ponto está fora da circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            }
        } else {
            pointResult.textContent = 'Por favor, preencha todos os campos corretamente';
        }
    });

    // Verificação da Relação Reta-Circunferência
    const checkLineBtn = document.getElementById('checkLine');
    const lineResult = document.getElementById('lineResult');

    checkLineBtn.addEventListener('click', () => {
        const a = parseFloat(document.getElementById('lineA').value);
        const b = parseFloat(document.getElementById('lineB').value);
        const centerX = parseFloat(document.getElementById('lineCenterX').value);
        const centerY = parseFloat(document.getElementById('lineCenterY').value);
        const radius = parseFloat(document.getElementById('lineRadius').value);

        if (!isNaN(a) && !isNaN(b) && !isNaN(centerX) && !isNaN(centerY) && !isNaN(radius)) {
            const distance = Math.abs(a * centerX - centerY + b) / Math.sqrt(a * a + 1);

            if (distance < radius) {
                lineResult.innerHTML = `
                    <p class="font-semibold text-green-600">A reta é secante à circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            } else if (distance === radius) {
                lineResult.innerHTML = `
                    <p class="font-semibold text-blue-600">A reta é tangente à circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            } else {
                lineResult.innerHTML = `
                    <p class="font-semibold text-red-600">A reta é externa à circunferência.</p>
                    <p class="text-sm text-gray-600">Distância: ${distance.toFixed(2)}</p>
                `;
            }
        } else {
            lineResult.textContent = 'Por favor, preencha todos os campos corretamente';
        }
    });
});
