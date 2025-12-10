<template>  <section>
    <!-- Hero Section mit Hintergrundbild -->    <div class="historie-hero-section relative mb-12 overflow-hidden h-[48rem]">
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <img class="page-image" src="../assets/History/medaillen.png" alt="Historie Impression" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <!-- Sterne-Partikel Container -->
      <div class="stars-container" ref="starsContainer"></div>      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="hero-title-container text-center animate__animated animate__fadeInDown">
          <h1 class="page-title">
            Unsere Historie
          </h1>
          <p class="page-undertitle">Die Geschichte Flensburgias</p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>

    <!-- Animierter Textcontainer -->
    <div class="container mx-auto px-4 py-8">
      <div
        class="mb-16 max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 via-white to-indigo-50 rounded-xl shadow-xl p-10 backdrop-blur-sm relative overflow-hidden intro-container"
        data-aos="fade-up">

        <h3 class="text-3xl font-bold mb-8 text-indigo-900 text-center relative z-10">Die Geschichte unseres Reyches
        </h3>

        <div class="prose prose-lg max-w-none relative z-10">
          <p class="mb-5 text-lg leading-relaxed text-indigo-900 fade-in-up" style="animation-delay: 0.3s;">
            <span
              class="text-3xl text-red-700 font-serif float-left mr-3 mt-1 p-2 bg-yellow-100 rounded-lg">"S</span>eit
            Anno
            Uhui 135 (1874) prägt die Schlaraffia Flensburgia das kulturelle Leben im hohen Norden. Gegründet von
            visionären
            Persönlichkeiten, hat unser Reych eine bewegte Geschichte voller Höhen und Tiefen erlebt. Von der
            Gründungszeit
            über die dunklen Jahre der Zwangspause bis hin zur glorreichen Wiederbelebung - diese Seite führt durch die
            Zeitepochen unserer Gemeinschaft.
          </p>

          <p class="text-lg leading-relaxed text-indigo-900 fade-in-up" style="animation-delay: 0.6s;">
            Mit Stolz blicken wir auf 150 Jahre freundschaftlicher Verbundenheit zurück, in denen die Ideale der Kunst,
            des Humors und der Freundschaft stets hochgehalten wurden, selbst in schwierigen Zeiten. Unsere Geschichte
            ist ein lebendiges Zeugnis der Beständigkeit schlaraffischer Werte.
          </p>

          <p class="text-lg leading-relaxed text-amber-800 italic fade-in-up mt-6"
            style="animation-delay: 0.9s; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            "Im Strome der Zeit, wo der Uhu schweiget still, da schwingt sich das Reych Flensburgia empor, auf Schwingen
            der
            Historie getragen, und bewahret die Chronik der edlen Fechsungen und ritterlichen Taten, auf dass die
            Jungschlaraffen der Zukunft das Erbe der Ahnen in Ehren halten mögen."
          </p>
        </div>

        <!-- Bulletpoints mit Icons -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-6 fade-in-up" style="animation-delay: 1.2s;">
          <!-- Punkt 1 -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-red-100 p-3 rounded-full mr-4 text-red-600">
              <i class="fas fa-landmark text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Reiche Tradition</h4>
              <p class="text-sm text-gray-700">Seit 1874 pflegen wir unsere Traditionen und Rituale im schlaraffischen
                Geiste</p>
            </div>
          </div>

          <!-- Punkt 2 -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
              <i class="fas fa-scroll text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Historische Dokumente</h4>
              <p class="text-sm text-gray-700">Wertvolle Chroniken und Aufzeichnungen bewahren unser kulturelles Erbe
              </p>
            </div>
          </div>

          <!-- Punkt 3 -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
              <i class="fas fa-medal text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Jubiläen & Meilensteine</h4>
              <p class="text-sm text-gray-700">Besondere Ereignisse und Feierlichkeiten prägen unsere 150-jährige
                Geschichte</p>
            </div>
          </div>
        </div>

        <!-- Zusätzliche Info mit Animation -->
        <div class="text-center mt-8 fade-in-up" style="animation-delay: 0.3s;">
          <span
            class="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 rounded-full text-sm font-medium bounce-animation">
            <i class="fas fa-history mr-2"></i>150 Jahre Flensburgia - Gegründet Anno Uhui 135
          </span>
        </div>
      </div>
    </div>

    <div class="animated-trenner">
      <Trenner />
    </div>

    <h3
      class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
      Zeitstrahl der Flensburgia</h3>

    <!-- Verbesserter Zeitstrahl mit Animationen -->
    <div class="relative w-full max-w-6xl mx-auto my-16">
      <div class="timeline-line animate-pulse-slow"></div>

      <!-- 1859 - Gründung des Bundes -->
      <div class="timeline-item" data-aos="fade-left" data-aos-duration="1100">
        <div class="timeline-dot">
          <span class="year">1859</span>
          <div class="dot-pulse"></div>
        </div>
        <div class="timeline-content-left">
          <div class="timeline-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Gründung des Bundes Schlaraffia</h4>
              <span class="year-badge">120 a.U.</span>
            </div>
            <p class="text-amber-700">Der edle Bund der Schlaraffia erblickt zu Prag das Licht der Welt und beginnt
              seine ruhmreiche Reise in die weiten Gefilde des Uhuversums. Die hohen Ideale - Kunst, Humor und traute
              Freundschaft - werden zur leitenden Fackel für alle edlen Reyche im Reigen.</p>
          </div>
        </div>
      </div>

      <!-- 1874 - Gründung Flensburg -->
      <div class="timeline-item" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="150">
        <div class="timeline-dot">
          <span class="year">1874</span>
          <div class="dot-pulse"></div>
        </div>
        <div class="timeline-content-right">
          <div class="timeline-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Gründung der Schlaraffia Flensburg</h4>
              <span class="year-badge">135 a.U.</span>
            </div>
            <p class="text-amber-700">Im Jahre 135 der glorreichen Uhuzahl ward die hohe Flensburgia zum Leben erwecket
              und erblüht alsbald zu einem leuchtenden Juwel des schlaraffischen Lebens im nordischen Gefilde. Die
              ersten Sippungen werden in festlichem Rahmen abgehalten, während Uhu's Weisheit über allem thront.</p>
          </div>
        </div>
      </div>

      <!-- 1937 - Zwangspause -->
      <div class="timeline-item" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="300">
        <div class="timeline-dot">
          <span class="year">1937</span>
          <div class="dot-pulse"></div>
        </div>
        <div class="timeline-content-left">
          <div class="timeline-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Zeit der Dunkelpause</h4>
              <span class="year-badge">198 a.U.</span>
            </div>
            <p class="text-amber-700">Als finstere Wolken das Uhuversum verdunkelten, musste die edle Flensburgia ihre
              strahlenden Kristalle und ihr glorreiches Banner verhüllen. Die kostbaren Reliquien und ehrwürdigen
              Pergamente wurden von treuen Sassen in sicheren Verstecken vor dem Zugriff profaner Häscher bewahrt.</p>
          </div>
        </div>
      </div>

      <!-- 1950 - Wiedergründung -->
      <div class="timeline-item" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="450">
        <div class="timeline-dot">
          <span class="year">1950</span>
          <div class="dot-pulse"></div>
        </div>
        <div class="timeline-content-right">
          <div class="timeline-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Triumphale Wiedergeburt</h4>
              <span class="year-badge">211 a.U.</span>
            </div>
            <p class="text-amber-700">Nach Jahren des Schweigens erhob sich die Flensburgia gleich einem Phönix aus der
              Asche! Mit Fanfaren und Pauken wurde die Burg wiedererbaut, die edlen Insignien entstaubt und der
              schlaraffische Geist zu neuem Leben erweckt. Die alten Rituale erstrahlten in neuem Glanze, während neue
              Traditionen das Reych bereicherten.</p>
          </div>
        </div>
      </div>

      <!-- 1974 - 100-jähriges Jubiläum -->
      <div class="timeline-item" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="600">
        <div class="timeline-dot">
          <span class="year">1974</span>
          <div class="dot-pulse"></div>
        </div>
        <div class="timeline-content-left">
          <div class="timeline-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Centenarium - 100 Jahrungen Pracht</h4>
              <span class="year-badge">235 a.U.</span>
            </div>
            <p class="text-amber-700">Der Thron Uhus erstrahlte im Glanze des ersten Centenariums der hohen Flensburgia!
              Mit prächtigen Festlichkeiten, funkelnd wie die Sterne am Firmament, ward dieses Ereignis gewürdiget. Edle
              Recken aus allen Winkeln des Uhuversums pilgerten herbei, um dem Reych ihre Reverenz zu erweisen und an
              den glanzvollen Sippungen teilzuhaben.</p>
          </div>
        </div>
      </div>

      <!-- 2024 - 150-jähriges Jubiläum -->
      <div class="timeline-item" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="750">
        <div class="timeline-dot highlight-dot">
          <span class="year">2024</span>
          <div class="dot-pulse highlight-pulse"></div>
        </div>
        <div class="timeline-content-right">
          <div class="timeline-card highlight-card">
            <div class="card-header">
              <h4 class="font-bold text-amber-800 text-xl mb-2">Sesquicentenarium - 150 Jahrungen Glanz</h4>
              <span class="year-badge">285 a.U.</span>
            </div>
            <p class="text-amber-700">Die Schlaraffia Flensburgia feiert mit höchstem Prunk das ruhmreiche
              Sesquicentenarium - ein Meilenstein, der in goldenen Lettern in die Pergamente des Reyches eingetragen
              wird! Mit Stolz und Ehrfurcht blicken wir auf anderthalb Saecula schlaraffischen Lebens zurück und heben
              den Pokal auf viele weitere Jahrungen im Lichte Uhus!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="animated-trenner">
      <Trenner />
    </div> <!-- Link zur Erinnerungen-Seite -->
    <div class="flex flex-col items-center justify-center my-16 w-full">
      <h4
        class="text-3xl font-bold mb-6 title-font text-center bg-gradient-to-r from-red-600 via-amber-500 to-red-600 bg-clip-text text-transparent px-4 max-w-3xl mx-auto">
        Erinnerungen und historische Dokumente
      </h4>
      <p class="text-lg mb-8 max-w-3xl mx-auto">
        Entdecken Sie weitere besondere Würdigungen verdienter Persönlichkeiten der Flensburgia und wertvolle
        historische Dokumente des Reyches.
      </p>
      <router-link to="/erinnerungen"
        class="bg-gradient-to-r from-amber-100 to-yellow-200 hover:from-amber-200 hover:to-yellow-300 text-amber-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
        <i class="fas fa-book-open mr-2"></i> Zur Erinnerungsseite
      </router-link>
    </div>



  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { createStars } from '../utils/stars.js';
import Trenner from '../components/Trenner.vue'

const block1 = `Verehrte Burgmaid Maike!

Schlaraffen hört, des Reyches Vieledler, 
- weiland Ritter Rode Grütt der Lekkertähn, Ursippe, Erb-schlaraffe, Erb-Kanzler, Reichsberichterstatter, 
Schulrat, Kämmerer, Ehrenritter, Weiser Oberschlaraffenrat und bis zuletzt unser wohltuend/ schmeichelhaft/ seelenmassierender Wiegenfest- 
und Sendbotenschreiber - ist nicht mehr.- Er befindet sich in Ahall.

Er wurde am 4. Im Christmond a. Uhui 127 Schlaraffe. 
Auch wenn die heutige Ehrung an äußerlichen Dingen eher Zurückhaltung übt, 
ist es doch die innere Wertgestaltung, 
welche große Formen annahm.

35 Jahrungen Schlaraffe zu sein, dieser Zeitlauf ist in unserer heutigen Sicht eine großartige Leistung. 
Angesichts seiner vielen Ämbter und seine schon so lange omnipotente Mit - Verantwortung zum Wohle des Reyches hat so manches Profane in den Hintergrund treten lassen. 
Dies wohl nicht immer unter tosendem Beifall seiner Burgfrau und Tross.

Wir können nur vermuten, aber es ist vielleicht die Schönheit und Freude an unserer kaleidoskop-artigen Form der Kunst, 
dem Humor und unserem freundschaftlichem Miteinander, 
welches der Vieledle geradezu in Vollendung zur Anwendung brachte und damit nicht nur junge Schlaraffen in großer Bewunderung aufschauen ließ.

Die Erhebungen an der Junkertafel - 
und die damit verbundenen hochnotpeinlichen Prüfungen durch ihn als den Ritter Schulrat waren beste Beweise seiner humoristischen, 
gefühlvollen und trotz Allem fordernden Art.

Ein kurzer Blick in die Stammrolle lässt sich nicht vermeiden. 
Schlaraffen hört, dort ist die Rede vom „Nächtlichen Straßen-Walzer-König“ und „Reichsverbindender km-Fresser“. 
Dies nur ein kleiner Hinweis auf seine Bereitschaft, Ross und sich selbst als Reiter zur Verfügung zu stellen, um in anderen Reichen eine Sippung mehr oder weniger fern der Heimburg zu erleben. 
Immer war sein Ross bis zum letzten Sattel besetzt, um den Freunden Gelegenheit zu geben, glückhafte Wirklichkeit zu erleben.

Weiland Ritter Rode Grütt belebte unser so geliebtes Treiben, und nichts war ihm mehr fremd als die Mechanisierung unseres Spiels. 
Seine spontanen in unberechenbaren Momenten eingebrachten Zwischenrufe zeugten von seinem hintergründigen Witz und Humor.

Wer zum erlauchten Hochgenuss seiner Sendboten zum Wiegenfest gehörte, kann bestätigen, 
dass eine sonstige noch so gut gelungene Laudatio nur schwer an seine immer lebensbejahenden und fast liebevoll abgefassten Verse heranreichte. 
Ich selbst habe mich als Empfänger oftmals gewundert, dass er wirklich mich meinte!

Seine reichhaltigen Tätigkeiten als Kanzler des Reiches, verdienen Achtung und Ehrung. 
Schlaraffen hört: Es wäre auch einfacher gegangen. 
Aber es war ihm nicht genug - gerade dies zeichnete unseren weiland Ritter Rode Grütt um so mehr aus!

Während einer laufenden Sippung war er bei der spontanen Vergabe von Tituln von unschätzbarem Wert. 
Ein Zettel mit einem Stichwort war genug, und nach kurzer Zeit reichte er eine fertige Urkunde auf dem „kleinen Dienstweg“ zum Thron. 
Auch hier war er begeistert, Freunden damit indirekt eine Freude zu machen. Seine Kanzlerschaft füllte er aus mit Herz und Seele. 
Sein Nachlass spricht Bände! Erst dadurch erfuhren wir, mit welcher Akribie er sich seiner Aufgabe widmete. Ein Buchhalter würde vor Neid erblassen.

Oftmals wird der Spruch, Fels in der Brandung angeführt. 
Wenn einer dieses Sinnbild verdient, dann war es unser Ritter Rode Grütt, der den Sinn dessen so oft unter Beweis stellte. 
Wir waren und sind stolz auf ihn, ihn in unseren Reihen gehabt zu haben.

Schlaraffen hört, wir sind ziemlich sicher, dass er, wo er sich jetzt auch befindet 
- wir nehmen ja an - an der großen Rittertafel in Ahall - Ordnung schaffen wird. 
Und dort genau so wie zu seinen Lebzeiten großes Lob erhalten wird.

Wir gönnen ihm von Herzen die ewige Ruhe. 
Wir ehren Ihn als einen der ganz großen Schlaraffen der Flensburgia und werden ihn nie vergessen.

LULU`

const block2 = `Schlaraffen hört,

mit unserem Ritter Rode Grütt verbinde ich unter anderem folgende Begebenheit:

Nach meinem zweiten Eynritt als Pilger fragte ich ihn, ob er das gleichnamige Gedicht von Hermann Claudius kenne. 
Ja, lautete die Antwort, und dann sagte er das Gedicht einfach auf.

Meine Frage war sehr naiv, denn ich wusste noch nicht, dass er ein noch universal ausgebildeter und vor allem auch interessierter Lehrer war. 
Zwischen Natur- und Geisteswissenschaften „switschte“ er nur so hin und her. Und sein Schatz an Gedichten, bzw. Literatur schien unerschöpflich zu sein.

Im Gedenken an Ritter Rode Grütt möchte ich nun das Gesicht von Hermann Claudius vortragen: 

Die Schlaraffia Flensburgia bedankt sich bei Frau Marion Körner, die die Abdruckrechte für das Werk von
Hermann Claudius verwaltet, für die Erlaubnis, den Text hier verwenden zu dürfen.

Rode Grütt
Rode Grütt! Rode Grütt!
Kiek mal, wat lütt Hein hüüt itt.
All ́ns rundüm hett he vergeten.
Rode Grütt, dat is en Eten!
Rode Grütt!
In de School de letzte Stünn 
kunn he sick op nix besinn ́n,
un in ́t Bookstabeern un Lesen
is he lang so dumm nich wesen.
Man he keem bi dat un düt
jümmer mang de Rode Grütt.
Rode Grütt!
„Na, lütt Heini, noch en beten?“
Mudder het hüüt veel to möten.
Hans un Hein un Stien un Greet
eet, as güng dat üm de Wett,
Rode Grütt!
Leddig is de grote Grapen.
Greten ielt, em uttoschrapen.
Heini man, de lütte Deef,
höllt mit beide Hann ́n den Sleef.
Wat dor all ́ns noch binnen sitt!
Rode Grütt!`


/* const ehrenschlaraffen = ref([
  { name: 'Rt. Wunderfern', title: 'Gründer der Flensburgia', description: 'Einer der Gründungsväter...', years: '1850-1920' },
  // ...weitere Personen!
]) */
const selectedText = ref(block1)
const activeButton = ref('block1')

function selectButton(block) {
  if (block === 'block1') {
    selectedText.value = block1
  } else if (block === 'block2') {
    selectedText.value = block2
  }
  activeButton.value = block


}

// Referenz zum Sternen-Container
const starsContainer = ref(null);

// Resize-Handler als benannte Funktion, damit wir sie für cleanup verwenden können
const handleResize = () => {
  if (starsContainer.value) {
    createStars(starsContainer.value, {
      density: 9000,       // Etwas weniger Sterne für die Historie-Seite
      minDuration: 3,      // Etwas langsamere Animation für historischen Effekt
      maxDuration: 7
    });
  }
};

onMounted(() => {
  // Sterne erstellen
  handleResize();
  
  // Bei Größenänderung neu berechnen
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
