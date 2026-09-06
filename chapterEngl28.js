let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "As early as Friday evening, right after closing time, Liz had glided the iron over the blue viscose until every wrinkle had succumbed to the hot steam. She had even been to the hairdresser; he had trimmed her ends into precise curves. Her pulse was racing. Clark was no good for her at least, that was what her reason claimed—but whenever he entered a room, the blood hammered dully against her temples. In the beginning, guilt had eaten away at her. He had courted Eyleen first, standing in the hallway with his hat and flowers. But Eyleen had snubbed him, time and again. She had dissected his manners, ultimately dismissing him as a cheap phony. If Eyleen chose to push him away, then surely she, Liz, was entitled to reach out. Besides, it was Clark who had intercepted her yesterday outside her sewing shop and invited her out, not the other way around. And his hand on her elbow had been warm and tender. That was a novelty in her life. Never before had a man triggered this sudden tightness in her chest. Eyleen would throw a tantrum. Let her. Hadn't the great diva taken her own husband back then without asking anyone for permission? Liz had just as much right. The air in the apartment had been combustible for days. Liz no longer ducked away; she no longer gathered the scattered breadcrumbs from the linoleum just so Eyleen could sit upright on her imaginary throne. Sometimes Liz looked in the mirror for resemblances to her, but found only features that resembled those of an unloved stepchild. Edgar got the cream. Edgar got the gentle voice, the tender caresses, the understanding, and every hard-saved penny, while Liz pricked her fingertips in the pale light of the sewing lamp. The applause for Eyleen's leading roles had long since faded; the golden years lay thirty years in the past, gathering dust beneath old theater bills. A single wrong breath from Liz was enough for Eyleen to cut her off: demanding she was, selfish, oversensitive, a millstone around the family's neck. Her father had never spoken to her that way. He would look at her in silence, smile, and simply let her be as she was. But those times were more than ten years gone, buried in the rubble of London's bombed-out streets. It was now a quarter to five in the morning. The hands of the bedside clock crept forward agonizingly slowly. Liz threw herself onto her left side. The sheet creaked, the blanket was too hot, her thoughts too loud for sleep. By seven o'clock, she couldn't bear it any longer. In the kitchen, she clattered with the dishes. She set out the cups, sliced the ham into paper thin ribbons, arranged cheese and tomatoes on a platter, and put the coffee on. Then she went into the bathroom and washed the fatigue from her face. She heard the lock of the apartment door click. The heavy oak door shut. Eyleen was back from the bakery. Panic welled up inside Liz. She mustn't be late for breakfast. If Eyleen found the table empty, the mood would freeze for the rest of the day. She didn't wait; she demanded compliance and her coffee poured precisely on time. Liz had long since filed this humiliation away as normal everyday life — a habit one didn't try to explain away. Hurriedly, she pulled a fresh blouse over her head and fastened the last buttons. Then she stumbled into the kitchen.";
  utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();
  const maleVoiceNames = [
    "Microsoft David",
    "Microsoft George",
    "Google UK English Male",
    "Google US English Male",
    "en-us-x-sfg-local",
    "en-gb-x-rjs-local",
    "Ravi",
    "Daniel",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("en") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("en"));
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
