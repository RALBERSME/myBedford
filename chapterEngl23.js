let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The forest was a wall of darkness and wet moss. Liz reached the clearing by five in the afternoon, a full hour too early. The cold, late-afternoon wind whipped the rain horizontally through the treetops. Her knees dug into the muddy forest floor. The heavy US field jacket, smelling of mothballs, was slowly soaking through, and Liz could taste grit on her lips. Inch by inch, she crawled on her stomach beneath the low-hanging, scratching branches of the fir trees. The undergrowth was dense, providing the perfect blind. Around her neck dangled the cold metal of the Agfa camera, its leather case protecting the lens from the mud. Her heart hammered so violently that she feared she might flush the birds in the canopy above. Suddenly, she froze. Her gaze drifted upward. Directly ahead, at the edge of the clearing, the rotting timbers of the deer stand loomed against the gray sky. And someone was sitting up there. The lookout box was not empty. A man crouched upon the narrow wooden planks. He wore a light beige duffle coat, its hood pulled so low over his face that nothing but a shadow remained where his eyes should have been. In his hands, he held heavy military binoculars. Slowly, mechanically, he scanned the thicket. Liz pressed her face flat into the wet pine needles. She did not dare to breathe. Whatever you do, don't climb that deer stand! Clark’s words burned in her mind. He had known. If she hadn't followed his advice, she would be standing face-to-face with this phantom right now. The faint, rhythmic clicking of a bicycle chain cut through the rushing wind. The man on the deer stand reacted instantly. Lowering the binoculars, he slipped down the wooden ladder with uncanny speed and vanished for a moment into the shadows of the tree trunks. Out of the fog emerged Clark. He was wheeling his bicycle along the waterlogged path, his shoulders hunched, his face as pale as chalk. He looked around in a panic. His eyes searched the dense firs, desperately hoping for some sign of Liz’s presence, yet simultaneously cursing himself for dragging her into this hell. The man in the duffle coat stepped out of the undergrowth. His footsteps were silent. He walked straight toward Clark. No greeting, no gesture of familiarity. The hood remained deep over his face. Liz gripped the camera. With trembling fingers, she pulled the leather cover from the lens. The glass was clean. She raised the camera to her eye and brought the scene into focus. The click of the shutter was swallowed by the howling wind. With stiff, mechanical fingers, Clark reached into his coat pocket. He pulled out a package. It was flat, about the thickness of a chocolate bar, tightly wrapped in dark wax paper, the negatives and all the prints that could seal Aaron’s fate. The stranger took the package with a swift, predatory movement and slipped it into the pocket of his light coat. The men spoke, but their voices were nothing to Liz but a muffled murmur, torn apart by the wind. She couldn't catch a single word. Squinting one eye, she turned the camera's thumbwheel. Another photo. She needed his face. Just once he had to lift his head, just once the hood had to slip. But the phantom did not move. Instead, the man’s hand slid into the other pocket of his duffle coat. Metal glinted in the pallid, fading light. It was a weapon. It was black and heavy,a Webley revolver. The barrel pointed directly at Clark’s chest. A breathless scream escaped Liz. She slammed her hand over her mouth, her entire body beginning to shake. Clark recoiled a step, his hands half-raised as his bicycle tipped silently into the mud. Liz snapped the next photo, her fingers locked rigidly around the camera body. Was this Clark’s end? The stranger seemed to say something, a final threat. Then, without warning, he spun on his heel. The barrel of the gun swung away from Clark and aimed directly into the curtain of fir trees. Directly at Liz. A deafening crack shattered the silence of the forest. A gust of hot air brushed Liz’s temple. Bark splintered. Barely a thumb's width from her head, the bullet slammed into the trunk of the old fir tree under which she crouched in sheer panic. The smell of burnt gunpowder and fresh resin stung her nose; her head throbbed. Pure, naked terror paralyzed her limbs. The shot had not been a targeted attack on her, it was a brutal warning. Proof that the man in the duffle coat was prepared to kill. Clark collapsed inward. Even from this distance and without the camera, Liz could read the unadulterated horror on his face. He stared at the bushes in disbelief, as if certain the shooter had just taken Liz’s life. The man barked a final, louder threat, of which Liz again understood nothing. Then he turned. He didn't walk away; he seemed to simply dissolve into the fog. His figure shrank until nothing was left but the roaring of the trees. It took Clark a moment to compose himself. Finally, he righted the bicycle, climbed onto the pedals with trembling legs, and tore off as if pursued by demons. He didn't look back even once. Liz lay in the dirt for minutes more. She heard nothing but her own ragged breathing. She was alive. Slowly, like an old woman, she pushed herself up. Her knees were numb. She pulled her father’s small pocketknife from the deep pocket of her US trousers. Her fingers barely obeyed her as she pried open the blade. The dull beam of her flashlight cut through the darkness and caught the rough trunk of the fir. She recognized the fresh entry wound immediately: white wood gleamed beneath the shredded bark. Using the tip of the blade, she dug deep into the soft wood. She pried and scraped until metal struck something hard. After a few agonizing seconds, a deformed, heavy slug of lead dropped into her open palm. It was the bullet. It was still warm. Liz closed her fingers around the projectile. This was the proof. It wasn't a dream; it wasn't one of her mother’s theatrical delusions. This was stark, lethal reality. Pocketing the lead, she pulled her US army cap lower over her face and began the trek home. Step by step, she trudged through the mud, the camera secure beneath her jacket. She knew now that there was no turning back.";
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
