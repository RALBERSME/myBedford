let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Liz still sat motionless in the upholstered chair, her hands resting in her lap, her fingers stiff. The ticking of the grandfather clock in the hallway grated on her nerves. She heard footsteps outside. The heavy wood of the front door creaked—Eyleen had forgotten to pull it shut. Clark stepped inside. He wore his old suit, his collar turned up against the rising wind, his hair disheveled. His eyes widened as he reached the living room doorway. He stared at Liz, who huddled there, a picture of absolute misery. Liz, he gasped, quickly rushing over to her and sinking to his knees before her. His hands gripped her arms. You’re deathly pale. What happened? I heard you were here. Her mouth was dry. I inherited, she whispered, her gaze fixed blankly on the empty table. The house. Aaron Baker’s savings. Everything belongs to me. Clark frowned. His confusion turned into deep concern. You inherited the house? But. why are you so shaken then? Liz, you look like you’ve seen a ghost. She remained silent. Her heart hammered painfully against her ribs. The letter in her pocket felt as though it were burning. Should she tell him? Let him in on the bottomless filth of her lineage? If he found out she was a cuckoo’s egg, an illegitimate bastard child in this bigoted nest called Bedford, he would turn away. Every ounce of affection would vanish, replaced by the horror society reserved for such sins. Fear choked the breath right out of her. Clark did not press her. He only gently stroked the back of her hand with his thumb, holding her fingers in a tight clasp. His eyes were dark, filled with endless empathy, but worry etched deep lines into his forehead. You don't have to say anything if you can't. I'm just glad I found you. This unconditional warmth finally broke the dam. The tears came rushing like a torrential downpour, hot and unchecked. It was an affair, she burst out, her voice barely more than a pitiful whimper. Aaron and my mother. In the past. He is my father, Clark. My biological father. Edward never knew a thing. I’m. I'm a cuckoo's child. Illegitimate. She lowered her head, feeling a shame so profound that she wished she could sink right through the dusty floorboards. Clark didn't move. He only took one long, deep breath. Then, he pulled her tightly against him, burying his face in her hair, holding her as if he could piece the shards of her world back together with his own two hands. He loved her. Exactly as she was. Without conditions. Do you really think that changes anything for me? he murmured into her ear, his voice deep and utterly steady. I don't care at all, Liz. You are my Liz. Not the product of Eyleen’s mistakes. To me, the only thing that matters is who you are today. He pulled back slightly, took her face in both of his hands, and asked her to look at him. Your mother is right about one thing, as bitter as it is: there's no need to tell anyone. Bedford gossips about every little piece of filth anyway. This is nobody's business. It stays our secret. Ours and Aaron’s. The ice in her chest slowly began to thaw. It was true. The world hadn't ended. He was still standing by her.";
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
