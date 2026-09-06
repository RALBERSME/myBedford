let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "A deafening crash jolted everyone to their feet. The side door had flown open, slamming shut again a moment later with a rattling clang. Clark bolted upright, his skull smacking against the underside of the table. A dull, throbbing pain radiated outward, forcing fresh tears into his eyes, but the sheer brutality of the impact snapped him out of his spiral of self-pity. Rubbing his forehead, he scrambled back onto the leather cushion of his chair and blinked his vision clear. Across the room at the judicial bench stood Sergeant Baker. His uniform jacket was drenched in sweat, his breath shallow. Pressing himself close to the dais, he hastily whispered something into the judge’s ear. Instantly, the judge’s brow furrowed into deep, dark creases. He froze. Court is adjourned for the day. The factual circumstances appear to have changed! The judge’s voice brooked no argument. He stood up, his black robe sweeping the floor as he vanished through the narrow door behind his chair. Two uniformed officers leaped forward, grabbing Edgar roughly by his upper arms and dragging him toward the cells. Chaos erupted in the courtroom behind the gallery partition. Voices overlapped, chairs flew backward, and people gestured wildly. A restless, loud surge of bodies pressed toward the exit, but Clark heard it only as if through cotton wool. At the defense table, utter bewilderment reigned. Liz stared at the empty bench. Eyleen and McAllroy stood up, putting their heads together, their hands gesturing helplessly in the air. Clark did not move. He remained seated, as if chained to the chair. His muscles trembled from the sudden drop in adrenaline. He closed his eyes. A long, shaky inhalation painfully expanded his lungs. His lips seemed to form a silent, desperate prayer as the paralysis of shame slowly gave way to a stunned sense of relief. In the prison, the key shrieked in the lock, a sound that had chilled Edgar Tyler to the marrow over the last few days. The guard kicked the heavy iron door open with his boot, tossed a clipboard onto the bare wooden table, and jerked his chin toward it. Edgar signed the release form. His fingers shook so violently that the nib tore into the paper, a blotch of blue ink blurring the name Tyler. Not a word was exchanged as he left the cell. Only the hollow echo of their footsteps rang out on the cold concrete until the heavy outer gate slammed shut behind him with a metallic thud. Free at last. Edgar breathed a sigh of relief, looking up at the sky and inhaling deeply the soot of his city. Then he turned his face back to the street. There on the sidewalk they stood: three figures in the gray afternoon light. Eyleen lunged forward. Her hands clawed into the coarse wool of his jacket as if she were drowning. She sobbed, a raw, choked sound and pressed her lips repeatedly against his cheek, ignoring his dirty stubble. At last, Edgar, at last, her voice cracked. She smelled of heavy perfume and a rain-soaked coat. I knew it. My boy. If they had used the rope. if they had done that, Edgar, my heart would have burst. Liz stepped up from behind. She placed a hand on his shoulder, feeling the violent rise and fall of his chest. As she stroked his cheek, her palm was instantly wet with his tears. Then she drew her fingers back, buried her face in her handkerchief, and squeezed her eyes shut. McAllroy cleared his throat loudly and mercilessly. Mr. Tyler, look at me, the lawyer’s voice cut through the women’s weeping. Did they give you a reason inside? Present a document? Anything? Edgar stared at his shoes, which were still coated in gray prison dust. He couldn't squeeze out a single word. His throat felt constricted, his mind blank. He just wanted to leave. To see his own front door. To slide the bolt across. Edgar Tyler, damn it, speak to me! What did they say? McAllroy pressed. Edgar hunched his shoulders, a helpless shrug. Nothing. ‘Go,’ they said. That’s all. McAllroy turned away, spat onto the damp pavement, and looked at Eyleen. We’re not out of the woods. The court is silent. Perhaps for now they just don't see a flight risk. Perhaps the trial will collapse. I don't know. All color drained from Eyleen’s face. Her knees buckled. Her body collapsed into itself like a wet sandbag, but Liz caught her under the arms, bracing herself with all her strength against the mother’s weight. It’s not over? Eyleen whispered, horrified. No. McAllroy looked at his pocket watch, his eyes devoid of any spark of pity. The gallows are still standing, Mrs. Tyler. The noose is merely resting on the table for now. That is the naked truth. Liz felt anger boil up inside her, a cold, burning rage. This man was a clockwork mechanism made of legal paragraphs, not a human being. She was just about to ask him to take the mother in his Austin, but McAllroy had already spun around. Duty calls. Other clients are waiting. The car’s engine coughed, roared to life, and left behind nothing but a cloud of blue, foul-smelling smoke. Together, Edgar and Liz dragged their mother to a moss-covered park bench. Liz squeezed Edgar’s hand. Go home, I’ve got this, she whispered. He merely gave a silent nod and shuffled away. His figure grew smaller and smaller until it vanished completely. Liz sank down beside the mother. The bench was damp. The brief, flashing joy from moments ago was gone, swallowed up by McAllroy’s harsh words. Edgar’s neck was still intended for the rope. His death had only been postponed. There was no sign of Clark. No one had spoken to him. When the guard had passed word to McAllroy earlier that Edgar would be at the gate by half-past four, the lawyer had simply packed the women into the car. He hadn't informed Clark at all. But in their minds, Clark already existed only like a name on a weathered tombstone.";
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
