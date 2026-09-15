function mostrarConsejo() {

    const consejos = [
        "Consume frutas y verduras diariamente.",
        "Mantente hidratado durante todo el día.",
        "Realiza actividad física al menos 30 minutos diarios.",
        "Duerme entre 7 y 8 horas cada noche.",
        "Consulta a un profesional antes de tomar suplementos."
    ];

    const aleatorio = Math.floor(Math.random() * consejos.length);

    alert("💡 Consejo de salud: " + consejos[aleatorio]);
}

function calcularAgua() {

    let peso = document.getElementById("peso").value;

    if (peso === "" || peso <= 0) {
        document.getElementById("resultado").innerHTML =
            "Ingrese un peso válido.";
        return;
    }

    let litros = (peso * 35) / 1000;

    document.getElementById("resultado").innerHTML =
        "Debes consumir aproximadamente " +
        litros.toFixed(2) +
        " litros de agua al día.";
}
