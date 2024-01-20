AOS.init();
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;
    const diasEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diasEmMs / horaEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaEmMs) / minutoEmMs;
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
