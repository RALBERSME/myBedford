let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The rain had stopped. The air tasted of damp asphalt and burnt wood as Liz climbed the steps to Clark's apartment. Her fingers trembled as she knocked. Three short raps. The door opened. Clark stood there, his shirt sleeves rolled up, smudges of printer's ink on his fingertips. He looked at her without saying a word. You weren't there, Liz said. Her voice was raspy from the silence in the church. The whole town was there. Even the old women from the suburbs. Only you were missing. Clark took a step back, let go of the handle, and walked into the small kitchen. I told you what I thought of that farce, Liz. I don’t attend that kind of staging. It wasn't a staging for me! she cried, the pent-up rage of the past few days finally breaking loose. She followed him, planting herself directly in the path between him and the stove. I stood there all alone in the shadow of that damn pillar. I sewed the dress, I endured the mockery, and I hoped that at least one single face would be there to have my back. Your face, Clark! He paused. In his hand, he balanced a dented tin teapot. His jaw ground, the muscles tightening beneath his pale skin. He looked at her, long, intensely, as if he wanted to fire back with something that would completely crush her. Then he exhaled. His shoulders sagged. I'm sorry, he said softly. He lit the gas stove. The blue flame flared to life, casting restless shadows against the wall. They fell silent. At last, the whistling of the kettle cut through the quiet. He poured the tea—into two simple earthenware mugs. The scent of dried chamomile and mint settled over the kitchen. He handed her a mug. Their fingers brushed. His skin was rougher than hers, warm and firm. The argument just died. Right then and there. Sit down, he said gently once they were back in the living room. She took a seat on the wobbly wooden chair by the window. Clark knelt before her, entirely unselfconscious, setting his mug on the floor and taking her cold hands in his. He rubbed them carefully until the feeling returned to her fingertips. Your mother is sucking the life out of you, Liz, he whispered, his gaze locked onto her eyes. You tailor her dresses, you swallow her bile. When do you start breathing? I don't know, she breathed. Her lips trembled. Clark didn't wait any longer. He leaned forward, slowly, almost inquiringly, until his breath brushed her face. The kiss was quiet. No stormy clutching, but a tentative homecoming. His lips tasted of bitter tea, but they were soft, infinitely gentle. There was no comparison to the hardness that usually surrounded Liz. She closed her eyes and let herself go. For the first time in her life, someone was holding her without demanding a performance in return. When they parted, the world seemed to spin more slowly. They parted in silence, completely fulfilled. A brief smile at the door, a promise without words. The walk home felt like a magnificent floating state for her. Liz no longer felt the wind whistling through the alleys. She was still filled with the sensation on her lips, with the warmth in her belly. She was deeply moved and full of hope. For a brief moment, the little seamstress had become a desirable woman. Liz quietly unlocked the apartment door, intending to slip into her room. There you are. The voice cut like a razor blade through the darkness of the hallway. Eyleen sat in the armchair, the mourning dress still on her body, but the veil thrown back. Her eyes were narrow and malicious. She didn't need light to see what had happened. A single glance at Liz's flushed cheeks, at the dead giveaway of the glow in her eyes, was enough. Eyleen sprang up. The majestic grief of the church was gone, replaced by naked, venomous rage. You were with him, she hissed, stepping so close to Liz that her breath hit her. With that hack. With Clark! Mother, I. Silence! Eyleen screamed, slamming her hand down on the chest of drawers. Do you think I'm blind? You reek of his cheap tobacco! Of that gutter! How dare you involve yourself with that failure on the day of my greatest triumph, on the day of this sacred memorial service? He has no money, no talent, no name! He is an absolute nothing! He's not a failure, Liz countered, but her voice was too weak against the familiar thunderstorm. He is trash! Eyleen spat, her fingers clawing deep into the fabric of her dress. And you throw yourself at him like a streetwalker. But I will put a stop to this, Liz. Do you hear me? I will not allow my own daughter to sink so low and drag our family name through the mud. You will not see him again. Never again. You stay here, where your place is! Every word was a blow. The warmth Liz had just felt in her chest contracted, freezing into a tiny, painful lump. Reality had caught up with her again. Without another word, Liz turned around, went into her room, and pulled the door shut behind her. She didn't turn the key; she merely pressed her back against the wood, inconsolable. The tears came now, hot and unstoppable. She knew the breaking point had been reached. She had to fight. She had to defend herself, break out, and stand up to this tyranny. But not today. The day had demanded everything of her,the hours at the sewing machine, the hypocrisy in the church, the emotional earthquake at Clark's, and now this emotional execution by her own mother. She simply lacked the strength. She crawled into her cold bed, pulled the blanket over her ears, and wept herself silently to sleep, while in the hallway, the angry pacing of her mother could still be heard.";
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
