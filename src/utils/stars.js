/**
 * Erstellt einen Sterneneffekt in einem Container
 * @param {HTMLElement} container - Der Container, in dem die Sterne erstellt werden
 * @param {Object} options - Optionen für die Sterne
 * @param {number} options.density - Dichte der Sterne (höherer Wert = weniger Sterne), Standard: 10000
 * @param {number} options.minDuration - Minimale Animationsdauer in Sekunden, Standard: 3
 * @param {number} options.maxDuration - Maximale Animationsdauer in Sekunden, Standard: 8
 */
export function createStars(container, options = {}) {
    if (!container) return;

    // Standardoptionen setzen, falls nicht angegeben
    const density = options.density || 10000;
    const minDuration = options.minDuration || 3;
    const maxDuration = options.maxDuration || 8;
    const durationRange = maxDuration - minDuration;

    // Container leeren vor dem Hinzufügen neuer Sterne
    container.innerHTML = '';

    // Berechnung der Sternenanzahl basierend auf Containergröße und Dichte
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const starCount = Math.floor((containerWidth * containerHeight) / density);

    // Erzeuge die einzelnen Sterne
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Weise zufällige Größenklasse zu (klein, mittel oder groß)
        const sizeClass = Math.random() < 0.5 ? 'small' : Math.random() < 0.85 ? 'medium' : 'large';
        star.classList.add(sizeClass);

        // Positioniere Stern zufällig im Container
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Setze zufällige Animationsdauer für Blinken
        const twinkleDuration = minDuration + Math.random() * durationRange;

        // Setze zufällige Animationsdauer für Schwebebewegung (langsamer als Blinken)
        const floatDuration = (minDuration + 3) + Math.random() * durationRange;

        // Wende beide Animationen mit unterschiedlichen Dauern an
        star.style.animationDuration = `${twinkleDuration}s, ${floatDuration}s`;

        // Setze zufällige Verzögerungen für natürlicheren Effekt
        star.style.animationDelay = `${Math.random() * twinkleDuration}s, ${Math.random() * 2}s`;

        // Füge Stern zum Container hinzu
        container.appendChild(star);
    }
}