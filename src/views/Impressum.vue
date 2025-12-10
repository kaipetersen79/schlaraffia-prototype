<template>  <div>    <!-- Hero Section - exakt wie Footer-Hintergrund -->
    <div class="footer-match-hero relative h-64 bg-gray-800 text-white py-8">
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="text-center">
          <h1 class="page-title">Impressum</h1>
          <p class="text-lg md:text-xl font-serif">Rechtliche Informationen</p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>

    <!-- Abstand zwischen Hero und Containern -->
    <div class="my-12"></div>

    <section>
      <div>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Vereinsinformationen -->
            <div class="container-basic">
              <h3>Angaben gemäß § 5 DDG</h3>
              <h4>Schlaraffia Flensburgia e.V.</h4>
              <p class="mb-4">
                Händelhof 7<br>
                24394 Flensburg
              </p>
              <h4>Registergericht:</h4>
              <p class="mb-4">Amtsgericht Flensburg</p>
            </div>

            <!-- Vertretungsberechtigt -->
            <div class="container-basic">
              <h3>Vertretungsberechtigt</h3>
              <h4>Franz Dewanger<br>(Ritter Wohlbedacht)</h4>
              <p class="mb-4">
                Am Mühlenteich 2<br>
                24980 Meyn
              </p>
              <p class="mb-2"><strong>Telefon:</strong> 04639 78064</p>
              <p><strong>E-Mail:</strong> f.dewanger(at)t-online.de</p>
            </div>

            <!-- Netzvogt -->
            <div class="container-basic-2-span">
              <h3>Netzvogt</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4>Andreas Ovens (Kn244)</h4>
                  <p class="mb-4">
                    Händelhof 7<br>
                    24394 Flensburg
                  </p>
                </div>
                <div>
                  <p><strong>E-Mail:</strong> andreas.ovens@gmx.de</p>
                </div>
              </div>
            </div>

            <!-- Haftungsausschluss -->
            <div class="bg-amber-50 p-8 rounded-xl shadow-lg border border-amber-200 lg:col-span-2">
              <h3 class="text-xl font-bold mb-6 text-amber-800 flex items-center">
                <i class="fas fa-exclamation-triangle mr-3"></i>
                Haftungsausschluss
              </h3>
              <div class="space-y-6 text-gray-700">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Haftung für Inhalte</h4>
                  <p class="leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Haftung für Links</h4>
                  <p class="leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Urheberrecht</h4>
                  <p class="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <!-- Bildrechte -->
            <div class="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 lg:col-span-2">
              <h3 class="text-xl font-bold mb-6 text-blue-800 flex items-center">
                <i class="fas fa-images mr-3"></i>
                Bildrechte und Fotografien
              </h3>
              <div class="text-gray-700 space-y-4">
                <p class="leading-relaxed">
                  Alle auf dieser Website verwendeten Fotografien und Bilder sind Eigentum der Schlaraffia Flensburgia e.V. 
                  oder werden mit ausdrücklicher Erlaubnis der Urheber verwendet.
                </p>
                <p class="leading-relaxed">
                  Zur Wahrung der Persönlichkeitsrechte am eigenen Bild hat jede abgelichtete und hier zu sehende Person 
                  ihre Einwilligung schriftlich erteilt.
                </p>
                <p class="leading-relaxed font-medium text-blue-800">
                  Die Verwendung der Bilder ohne ausdrückliche Genehmigung ist untersagt.
                </p>
              </div>
            </div>
          </div>

          <!-- Footer Note -->
          <div class="mt-12 text-center">
            <div class="bg-gray-100 p-6 rounded-lg border border-gray-200">
              <p class="text-gray-600 text-sm">
                <i class="fas fa-info-circle mr-2"></i>
                Bei Fragen zu diesem Impressum oder rechtlichen Angelegenheiten wenden Sie sich bitte an die oben genannten Kontaktdaten.
              </p>
              <p class="text-gray-500 text-xs mt-2">
                Stand: {{ new Date().toLocaleDateString('de-DE') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<!-- Styles moved to style.css -->