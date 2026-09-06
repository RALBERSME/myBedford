let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The wind tasted of salt, wild thyme, and freedom. Liz stood on the small cliff behind the thatched stone cottage, her arms spread wide. No more suffocating confinement, no more stifling sewing room under the pale light of Bedford’s streetlamps. Here on the west coast of Ireland, the sky was so vast that it stretched the soul with every breath. She wore a simple, self-made apron of coarse green linen. Her fingers, which in Bedford had so often been raw and pricked from the frantic pace of piecework, felt soft now. She stroked the fabric. Three days ago, she had finished the wedding dress for the daughter of a local fisherman. The villagers had not sized her up with haughty glances; they had welcomed her with open arms. Here, she was paid with honest gratitude, with fresh fish, peat for the hearth, and deep, respectful smiles. For the first time in her life, she was tailoring not to appease a tyranny, but to bring beauty into the world. A pair of strong arms wrapped around her waist from behind. Clark buried his face in the crook of her neck, breathing in the scent of sea air and lavender that clung to her. The postman brought the tea from Cork, he murmured into her ear. His voice was deep, entirely free of its old, nervous brittleness. He seemed broader, his shoulders square. The daily chore of chopping wood and long walks along the cliffs had wiped the pale town-color from his face. His cheeks were healthily tanned by the Irish sun. Liz turned around in his arms, placed her hands on his cheeks, and looked at him. Out of the fearful, conflict-averse social worker had emerged a man who knew exactly where his place in life was. On the small kitchen table inside lay the completed manuscript of his first novel, an honest, powerful story about guilt, justice, and the masks of society. Without censorship. Without fear of others' judgment. Did we get any mail from home? Liz asked softly. A tiny shadow cast itself over her features, only to vanish instantly in the warm light of Clark’s eyes. Edgar wrote, Clark nodded, gently kissing her forehead. He sends us his blessings. He made it, Liz. He finally left the apartment in Bedford and is working at a printing press in London now. He’s starting over. Free of her. Liz exhaled in relief. And the house? Sold, Clark said calmly. The broker transferred the proceeds directly into a trust fund for the orphans of Bedford, just as agreed. Not a single penny of Aaron’s blood money touched our soil. It’s gone. Erased. They fell silent for a moment, listening to the rhythmic crashing of the waves against the cliffs below. They no longer needed to ask about her mother’s fate. Eyleen Tyler had been left behind in Bedford. When Liz and Clark fled the town, she had still tried to legally claim the Sergeant’s house for herself, firmly convinced that as the deceased man’s muse, the inheritance belonged to her. But the will documents were unassailably made out to Liz. Without the money she had previously extracted from Liz’s dressmaking, and above all without her familiar scapegoat audience, the facade of the grand diva had finally imploded. The neighbors had grown weary of Eyleen’s theatrical outbursts and incessant tales of her glorious past, turning away from her. Eyleen now lived a solitary life in a small, dark apartment on the outskirts of town, surrounded by dusty playbills and the ghosts of a career that had died an eternity ago. She can’t reach us anymore, can she? Liz whispered as she leaned her head against Clark’s chest, listening to the steady, strong beating of his heart. Never again, Clark replied firmly. He pressed her a little closer still. We’ve struck our own roots, Liz. This is our realm. Together, they looked out over the Atlantic, where the evening sun dipped the water into a deep, warm gold. They had blossomed. No longer as victims of their lineage, but as the architects of their own, innocent happiness.";
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
