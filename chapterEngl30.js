let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The church was filled to the very last seat. Half the neighborhood crowded the pews, the air heavy with the sweet scent of melting candles. Liz stood in the third row, her head slightly bowed. Her gaze wandered restlessly over the heads of the mourners. She had scanned the crowd row by row, but she couldn't spot Clark. He simply hadn't shown up. His absence burned like an open wound on Liz's skin — silent proof that his principles weighed heavier than her hope for a supportive glance. Liz adjusted the fit of Eyleen’s veil. She had sacrificed almost the entire night for her mother’s black silk dress, but now it fit perfectly. It flowed. Every fold was tailored for the grand entrance. Eyleen was not crying. She was waiting. Her breath came shallow; she had touched up her lips in bright red once more beneath the black netting. When the priest opened the microphone, Eyleen stepped forward. The heels of her shoes clicked rhythmically on the stone flags of the center aisle. The congregation held its breath. All eyes were on her—the former primadonna now taking the stage of death. Liz quietly withdrew into the shadow of a massive sandstone pillar. She did not want to be seen. A tear stole down her cheek, but it was not a tear of deep grief for Aaron Baker. It was exhaustion and loneliness that could no longer be suppressed. She had liked Baker, of course. He had been polite, always greeting her warmly. Once, he had even carried a heavy crate of buttons into her shop. But that was all. There had never been any deeper conversations with him. She knew only the fleeting kindness of a man who was good to everyone. The general hysteria of the town bypassed Liz. She felt strangely numb, disconnected from the great sorrow of the masses. Then Eyleen spoke. Her voice possessed that vibrato-like volume that filled every corner of the nave. He was no ordinary man, Eyleen began, her hand placed dramatically on the wooden lectern. Aaron Baker was a giant. A superman in an epoch of moral decay. A guardian angel whose light illuminated these dark streets. A murmur rippled through the crowd. Handkerchiefs were drawn. Liz stared at the floor. Every word of the speech came from Eyleen’s own pen, hastily scratched onto paper after she had torn up Liz’s honest draft. This speech wasn't about Baker. It wasn't about him at all. It was the greatest honor of my life to count this man among my confidants, Eyleen continued. Her voice dropped to an intimate whisper that nevertheless reached everyone. And I know, in the quiet hours of our intellectual exchange, he too felt it to be the greatest blessing to meet an artist of my stature. He found solace in my art, in the memories of my grand evenings on the stage. We were two souls who recognized each other in the storm of the world. A few older ladies nodded, deeply moved. Liz felt her stomach turn. The discrepancy was almost unbearable. Standing up there was her mother, a living production of black silk and fabricated tragedies, using a sergeant's death to draw the spotlight back to her faded career. And standing here in the shadows was she, the daughter whose fingers ached from sewing, cheated out of her date, cheated out of a loving, warm-hearted mother, trapped in a mourning that was not even her own. Eyleen raised her gaze to the ceiling. It was a perfect finale. Liz turned away. She couldn't take it anymore. Quietly, without making a sound on the cold stone, she slipped through the heavy side door out into the gray drizzle.";
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
