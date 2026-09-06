let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The handle didn't budge a millimeter. The little sewing shop was locked. Clark felt cold sweat trickle down his neck as he pressed his forehead against the cool glass of the shop door. Inside, it was dark. But then he heard footsteps. Liz came hurrying down the street, the heels of her shoes clicking on the pavement from afar. Her face lit up. A wide, relieving smile spread across her lips when she recognized Clark. She waved, the keys jingling in her hand. I'm so glad, Clark. She didn't wait, but immediately reached for his hand. Her fingers were warm, squeezing his knuckles gently. You're unhurt. We were so worried about you. We. The word echoed in Clark's ears. Clark stared at her. Who is 'we'? he thought, but the answer was already standing beside him. A uniform stepped out from the shadow of the wall. It was Sergeant Baker, his brass buttons gleaming in the afternoon light. I've just reported everything to Sergeant Baker, Liz chatted away cheerfully, her voice driven by sheer relief. I told him all about the incident in the clearing. I even showed him the bullet — the one from the pine tree. Baker didn't smile. Between his thick forefingers, he rolled a small, silver piece of metal—a projectile. The dull click as the lead struck his wedding band boomed in Clark's ears like a cannon shot. His throat tightened. The voice of the hooded man crept back from the recesses of his memory, rasping, grating, like a promise from the dark: Monday is over. Forget Bedford, Rudney. If I see you there again, I’ll aim lower. A tremor ran through his knees. He fought it off with an effort, bracing himself. I just want to give the Sergeant the photos, he heard Liz say as she turned back toward the shop. The ones I took beneath the pine tree. Then we’ll have some time to ourselves. This is an absolute nightmare, the thought shot through Clark as if he had just been struck by lightning. He acted before his mind could protest. With a quick lunge forward, he roughly brushed his shoulder past Liz and forced his way into the cramped sewing shop. His muscles were rock-hard with tension. I can do that for you! he cried, far too loudly. The cheerfulness in his voice sounded artificial, like bad acting. Where is the camera? Why, on the small table in the seating area, Liz called after him. She paused at the threshold and turned to Baker, her tone dripping with gratitude. You truly are one of the most obliging officers the police force has to offer. Walking me home after hours—what service! Clark barely heard her. He had reached the back room alone, and he knew he only had seconds. He grabbed the camera. Immediately, he ripped open the back cover, rewound the film canister, and slid it deep into his trousers pocket. With a heavy swing, he hurled the empty camera through the open window into the dense bushes of the neighboring garden. Then, he swept the back of his hand across the table. A heavy wax candle toppled over, landing silently on the carpet. He kicked the freshly ironed blouses off their stack so they clustered around the candle, and stomped on them briefly with his heels until everything looked completely chaotic. His work was done. Taking one more deep breath, he screamed at the top of his lungs, Oh no! This can't be happening! Liz came bursting into the shop, Baker close behind her, his hand on his belt. Clark stood in the middle of the mess, arms outstretched, his index finger pointing rigidly at the open window sash swaying gently in the wind. Someone must have broken in here. Look at this! Liz clapped a hand over her mouth, a choked sound escaping her. My God. the beautiful blouses. Then her gaze fell on the dresser. And the camera. it's gone! Baker dropped to his knees. He examined the floor, sniffing around like a bloodhound. His gaze drifted to the window. As he climbed out, the wooden frame groaned under his weight. A few minutes later he returned, visibly annoyed. He held the Leica in his hand, its back cover dangling loose. The film is gone, he growled. His eyes narrowed into slits as he locked his gaze onto Clark, a scathing, suspicious look. Clark didn't move. He stood his ground against the sergeant, motionless as a statue, while his fingers inside his pocket pressed the film canister deeper into the fabric. You animal, he thought, his jaw grinding so hard it ached. You won't double-cross me again. Baker offered a curt goodbye. He muttered something about Liz reporting the theft at the station tomorrow, then left. The shop door clicked shut. Liz was already kneeling on the floor, her lips thin with distress as she tried to brush the dirt off the customer orders. Her Hände trembled slightly. Clark stood there, forcing his voice into a gentle tone. I understand. Work comes first. It's a pity, I was so looking forward to a proper chat, we can drop the formalities now, can't we? He waited until she looked up briefly. Saturday. At the Park Café. Let me treat you. Please. She hesitated, then nodded faintly. All right, in two days then. At home, Clark locked the door thrice. He breathed a sigh of relief. Finally, he was alone. He pulled the film canister from his pocket. The metal was lukewarm from his body heat. He pressed it against his lips and closed his eyes. This was his insurance policy. Surely no one would look for it anymore; the staged break-in had done the trick. A brief pang of guilt flared up inside him over Liz's ruined blouses, but he brushed it aside. It just had to look real, he reassured himself. Then he went into the bedroom. He emptied the wooden nightstand, cleared out the drawer, and turned the heavy piece of furniture upside down. Then he fetched his pocketknife from the wardrobe. A soft, rhythmic scraping sounded, and sawdust trickled like fine snow onto the carpet. Carefully, he sliced a paper thin disc off the bottom of the rear table leg. Then he hollowed out the wood from underneath until a deep, dark cavity was formed. The film canister slid inside. It was a perfect fit. Clark nailed the sawed-off piece of wood back over the hole as an inconspicuous cap before sliding the nightstand back to its old place against the wall. Done, he said solemnly. Finally, he found time for his Remington. The metallic clack of the keys broke the silence of the room. He typed precise instructions for Richard: where the film was located and what to do if he, Clark, failed to reappear. He slid the paper into an envelope and sealed the flap. Before going to bed, he hurried down the street to the cast-iron mailbox on the corner. The letter dropped through the slot with a faint thud. That night, Clark finally slept peacefully again. The fear had vanished along with the adrenaline of the past few hours. He slept deeply and soundly. In his mind’s eye, he saw himself stepping into the Park Café with a light stride, cradling a huge, almost unwieldy bouquet of deep red roses in his arms. The scent of whipped cream and freshly baked sponge cake filled the air. The sun blazed through the tall windows. And there she stood: his Liz. She was no longer wearing her gray work apron, but a dress made of flowing, vibrant red fabric dotted with tiny white specks. She had sewn it herself. For herself. Because she had stopped existing solely for the wishes of others. The roses in his hand almost melted into the red of her dress as he took a step toward her. Slowly, her arms nestled against his shoulders, wrapping gently around his back.";
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
