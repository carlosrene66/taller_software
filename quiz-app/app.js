const questions = [
    {
        text: "¿Qué plan suena mejor para un viernes por la noche?",
        options: [
            { text: "Salir a buscar emociones fuertes", genre: "Acción" },
            { text: "Contar historias de miedo con amigos", genre: "Terror" },
            { text: "Tener una cena romántica y tranquila", genre: "Romance" },
            { text: "Reírte hasta que te duela el estómago", genre: "Comedia" },
            { text: "Imaginar mundos mágicos y criaturas fantásticas", genre: "Fantasia" },
            { text: "Conversar sobre la vida y sus altibajos", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué tipo de final prefieres en una película?",
        options: [
            { text: "Uno donde todo se resuelve con acción y adrenalina", genre: "Acción" },
            { text: "Un giro inesperado que te deja pensando", genre: "Terror" },
            { text: "Un final feliz y lleno de amor", genre: "Romance" },
            { text: "Algo que te haga reír incluso después de los créditos", genre: "Comedia" },
            { text: "Un desenlace mágico o imposible en la vida real", genre: "Fantasia" },
            { text: "Un final emotivo que te haga reflexionar", genre: "Drama" }
        ]
    },
    {
        text: "¿Con qué frase te identificas más al ver una película?",
        options: [
            { text: "¡No puedo dejar de moverme en el asiento!", genre: "Acción" },
            { text: "¡Eso sí me dio miedo!", genre: "Terror" },
            { text: "¡Qué bonito, me hizo suspirar!", genre: "Romance" },
            { text: "¡No paro de reír!", genre: "Comedia" },
            { text: "¡Qué imaginación tan increíble!", genre: "Fantasia" },
            { text: "¡Esa historia me llegó al corazón!", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué prefieres en una tarde lluviosa?",
        options: [
            { text: "Ver algo que me haga sentir valiente", genre: "Acción" },
            { text: "Escuchar historias que me pongan los pelos de punta", genre: "Terror" },
            { text: "Disfrutar de una historia de amor", genre: "Romance" },
            { text: "Pasar el rato con algo divertido", genre: "Comedia" },
            { text: "Soñar despierto con mundos diferentes", genre: "Fantasia" },
            { text: "Reflexionar sobre la vida con una buena historia", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué te gustaría que tuviera la película perfecta?",
        options: [
            { text: "Escenas llenas de energía y movimiento", genre: "Acción" },
            { text: "Momentos que te sorprendan y asusten", genre: "Terror" },
            { text: "Un romance que te haga creer en el amor", genre: "Romance" },
            { text: "Chistes y situaciones graciosas", genre: "Comedia" },
            { text: "Elementos mágicos o irreales", genre: "Fantasia" },
            { text: "Personajes con historias profundas", genre: "Drama" }
        ]
    },
    {
        text: "¿Con quién prefieres ver una película?",
        options: [
            { text: "Con amigos que disfruten la emoción", genre: "Acción" },
            { text: "Con quien le guste asustarse", genre: "Terror" },
            { text: "Con alguien especial para compartir momentos tiernos", genre: "Romance" },
            { text: "Con quien le encanten las carcajadas", genre: "Comedia" },
            { text: "Con personas que sueñan despiertas", genre: "Fantasia" },
            { text: "Con quien le guste analizar historias", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué escena te gustaría ver en una película?",
        options: [
            { text: "Una persecución emocionante", genre: "Acción" },
            { text: "Un susto inesperado", genre: "Terror" },
            { text: "Un beso bajo la lluvia", genre: "Romance" },
            { text: "Un chiste que se vuelve viral", genre: "Comedia" },
            { text: "Un dragón volando sobre un castillo", genre: "Fantasia" },
            { text: "Un reencuentro emotivo", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué te gustaría sentir al terminar una película?",
        options: [
            { text: "Adrenalina y energía", genre: "Acción" },
            { text: "Un poco de miedo o tensión", genre: "Terror" },
            { text: "Mariposas en el estómago", genre: "Romance" },
            { text: "Alegría y ganas de contar chistes", genre: "Comedia" },
            { text: "Asombro por lo que viste", genre: "Fantasia" },
            { text: "Reflexión sobre la vida", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué tipo de personaje te atrae más?",
        options: [
            { text: "El héroe valiente", genre: "Acción" },
            { text: "El villano misterioso", genre: "Terror" },
            { text: "La pareja soñadora", genre: "Romance" },
            { text: "El amigo gracioso", genre: "Comedia" },
            { text: "El mago o criatura mágica", genre: "Fantasia" },
            { text: "El personaje con un pasado complicado", genre: "Drama" }
        ]
    },
    {
        text: "¿Qué frase describe mejor tu reacción al ver una película?",
        options: [
            { text: "¡Eso estuvo épico!", genre: "Acción" },
            { text: "¡No voy a dormir hoy!", genre: "Terror" },
            { text: "¡Qué tierno!", genre: "Romance" },
            { text: "¡No puedo parar de reír!", genre: "Comedia" },
            { text: "¡Eso fue de otro mundo!", genre: "Fantasia" },
            { text: "¡Me hizo pensar mucho!", genre: "Drama" }
        ]
    }
];

const genres = ["Acción", "Terror", "Romance", "Comedia", "Fantasia", "Drama"];
let current = 0;
let scores = { "Acción": 0, "Terror": 0, "Romance": 0, "Comedia": 0, "Fantasia": 0, "Drama": 0 };

function showQuestion() {
    const quiz = document.getElementById('quiz');
    if (current >= questions.length) {
        showResult();
        return;
    }
    const q = questions[current];
    quiz.innerHTML = `
        <div class="question">
            <h2>Pregunta ${current + 1} de ${questions.length}</h2>
            <p>${q.text}</p>
            <div class="options">
                ${q.options.map((opt, i) => `<button onclick=\"selectOption('${opt.genre}')\">${opt.text}</button>`).join('')}
            </div>
        </div>
    `;
}

window.selectOption = function(genre) {
    scores[genre]++;
    current++;
    showQuestion();
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    const result = document.getElementById('result');
    result.style.display = 'block';
    const bars = document.getElementById('bars');
    bars.innerHTML = '';
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    genres.forEach(genre => {
        const percent = total ? Math.round((scores[genre] / total) * 100) : 0;
        bars.innerHTML += `
            <div><strong>${genre}</strong></div>
            <div class="bar-container">
                <div class="bar bar-${genre}" style="width:${percent}%;">${percent}%</div>
            </div>
        `;
    });
}

showQuestion();
