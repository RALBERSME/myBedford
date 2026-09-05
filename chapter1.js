let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Bus der juneited caunties Omnibus kompani bog schwenkend in die mitländ rot ein. Clark ließ die Schultern sinken. Endlich, nur noch ein paar Minuten, dann hatte er es geschafft. In dieser Stadt würde alles anders werden, da war er sich ganz sicher. Er dachte an Luten, an die endlosen Überstunden im Sozialamt, an den fahlen Geschmack von kaltem Kaffee und chronischer Erschöpfung. Plötzlich blockierten die Bremsen. Gummi fraß sich kreischend in den Asphalt, und ein heftiger Stoß warf ihn nach vorn. 'Ai, ai, la mia gamba, ai!' Schreie gellten von draußen herein. Wie die anderen Passagiere drückte Clark die Stirn gegen das kühle Glas der Scheibe. Auf dem Pflaster lag ein Fahrrad, dessen Räder sich noch träge drehten. Daneben hockte ein kleiner Junge mit pechschwarzem Haar. Clark spürte ein kaltes Ziehen im Magen. Der Fahrer riss den Hebel der Bustür herum und sprang hinaus. Fast zeitgleich tauchte ein Sergeant auf, der vom Bahnhof herüber eilte. Seine Trillerpfeife schrillte ohrenbetäubend durch die feuchte Luft. Clark sprang auf. Die Beine bewegten sich von allein, der alte Reflex funktionierte noch. Doch an der Bustür prallte er ab. Ein schwerer, dunkler Ärmel versperrte ihm den Weg. Zurückbleiben! Hier gibt es nichts zu sehen. Durch die Scheibe sah Clark, wie sich das Kind bereits aufrappelte. Der Junge biss die Zähne zusammen und hielt sich das Knie. Der Busfahrer packte ihn unsanft am Arm, zog ihn auf die Beine und schob das verbogene Rad zu einer Holzbank. Der Sergeant winkte ab. Er drehte dem Bus den Rücken zu, sprach aber betont laut. Jedes Wort schnitt durch die neblige Luft: Kein Grund für Papierkram. Nur einer von diesen italienischen Lausebengeln. Was gehen die uns an? Clark ballte die Fäuste in den Manteltaschen. Beim Aussteigen glitt sein Blick über das silberne Dienstabzeichen des Polizisten. Aaron Baker hieß er also, dachte Clark. Genauso wie in Luton. Die Leute hier unterschieden sich nicht von denen in der alten Heimat. Auch dort hatte Clark den stummen Krieg auf den Straßen miterlebt. Die Fabriken schrien nach Arbeitern, die Boote brachten sie aus den armen Dörfern Süditaliens herbei, billige Hände für den Wirtschaftsboom. Doch hier erwarteten sie nur enge Wohnungen, giftige Blicke und ein Hass, der wie feiner Staub in den Gassen hing. Clark atmete schwer aus. Sollte er sich am ersten Tag bereits mit der Wache anlegen? Nachdenklich knetete er seine Unterlippe. Der Junge humpelte inzwischen die Straße hinunter; eine Hand hielt den schiefen Lenker, bei jedem Schritt zog er das linke Bein nach. Lass es, murmelte Clark und schüttelte den Kopf. Es ist vorbei. Ich bin kein Sozialarbeiter mehr. Ein feiges Gefühl der Erleichterung schlich sich ein, gepaart mit einem bitteren Nachgeschmack. Sein Vater hatte ihm eingeprügelt, sich nie mit denen da oben anzulegen. Wer gegen den Strom schwimmt, geht unter, die Stimme seines Erzeugers saß ihm noch immer im Nacken. Er wandte sich ab, griff nach den abgewetzten Griffen seiner zwei schweren Koffer, wuchtete den Rucksack auf die Schultern und trat endgültig ins Freie. Wenige Meter hinter der Haltestelle bog er in die Ashburnham Road ein. Dann stockte ihm der Atem. Der Anblick der Straße überrollte ihn förmlich. Links erhoben sich dreistöckige, vom Fabrikrauch geschwärzte viktorianische Reihenhäuser. Ihre Schornsteine trugen dunkle Rußkrusten, die schweren Holztüren wirkten wie die Tore von Festungen. Rechts dagegen klaffte eine Wunde im Viertel: Die alten Mauern hatte man abgerissen und durch klobige, verputzte Wohnblöcke mit Flachdächern ersetzt. Ein nach billigem Fortschritt riechender Beton hatte hier Einzug erhalten. An einer der Backsteintüren drückte Clark den Klingelknopf. Eine ältere Frau öffnete und wies nach oben: Dritter Stock, der Herr. Clark schleppte das Gepäck die schmale, ausgetretene Holztreppe hinauf. Seine Lungen brannten vor Erschöpfung, als er die Tür zu seiner neuen Bleibe aufstieß. Er blickte auf zwei Stühle, ein durchgesessenes Sofa und einen Tisch, der arg wackelig aussah. Durch die Sprossenfenster drang das dumpfe Murmeln der Stadt herauf. Clark ignorierte die Aussicht. Etwas anderes brannte ihm unter den Nägeln. Er ging zum Tisch und stellte den Rucksack ab. Seine Hände gruben sich durch den Stoff, bis sie das schwere Metall der Remington zu fassen bekamen. Die Maschine war kühl. Rasch zog er sie heraus und platzierte sie wie einen Schatz auf dem Holz. Sanft strich er über die runden Tasten und spürte den mechanischen Widerstand. Augenblicklich schoss ihm ein Gedanke durch den Kopf. Er zog den Holzstuhl heran, ließ sich darauf fallen, kurbelte ein weißes Blatt Papier zwischen die Walzen und begann, die ersten Buchstaben in das Weiß zu hämmern. Willkommen in Bedford von Clark Rudney. Ein leeres Blatt in die Maschine gespannt, bald werde ich als Autor bekannt. Denn hier in Bedford beginnt meine Zeit, zu neuen Abenteuern bin ich bereit";
  utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();

  const maleVoiceNames = [
    "Microsoft Stefan",
    "Microsoft Christoph",
    "Google deutsch",
    "Yannick",
    "Markus",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("de") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("de"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.pitch = 0.75;
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

function stoppeVorlesen() {
  window.speechSynthesis.cancel();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () =>
    window.speechSynthesis.getVoices();
}
