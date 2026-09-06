let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The strange envelope had been waiting in Clark’s mailbox on Saturday. Typewritten, no salutation. The typewriter keys had been filthy; the e sat too low, the o was nothing but a black smudge. Meet Monday, 6 p.m., the clearing we spoke of. Bring all photos and negatives for handover. No witnesses, no tricks, no police or you’re a dead man. Twenty-five words. It was Clark’s death warrant. His hands shook so violently that the paper rustled. He was not a man for the knife. He was no target for a bullet. All his life, he had crossed the street whenever things got loud. And now this. Fear hung over the back of his neck like a cold, wet cloth. He cursed softly. He lacked the grit. He lacked the tools to handle a man like Aaron Baker. He was entirely alone. Clark wondered: Did Baker have backup? Maybe, who could possibly know. He sank onto his sofa. What on earth had he been thinking in the courtroom? The trial had been halted, yes. But only so that the rats could catch him in the dark. The moment he was gone, they would tighten the noose around Edgar's neck again. He had simply acted too foolishly, too recklessly. It had been a blind impulse, one that might now cost him his life. Now his back was against the wall. But what should he do now? Go to Richard? No, that was impossible. If they were tailing him, he would drag Richard down into the abyss with him. These men played in a different league. Espionage, sabotage, what did a petty social worker matter to them? They would snuff him out like a burning match. Clark shuddered. They had pushed George Davies into a running buzz saw. The blood on the wood shavings was still visible even now. What monsters they were, pure psychopaths. Clark had endured two days of endless brooding, virtually without sleep. By now, it was already Monday, and the walls of the tiny apartment seemed to be closing in. What if Baker had no intention of negotiating? What if he just took a cheap shot at him from the undergrowth, quite possibly with a silencer? No one would ever find me in the thick ferns, Clark shuddered at the thought. Or they’re setting a trap. They’ll take photos of the handover and then accuse me of espionage! High treason, a crime punishable by hanging. Weeks of waiting in a damp cell while sheer terror devoured his mind. Baker was cruel enough to hatch such a plan. What could possibly drive a sergeant into such criminal depths? Gradually, a sense of clarity washed over Clark. He absolutely needed a witness. A pair of eyes in the woods to watch over him. Not for his own sake, but for Edgar's. Someone must be able to testify to the truth if my heart should stop beating. Edgar must be protected, Clark concluded the thought. His own life was a joke anyway. His father had constantly scolded him: You should have learned a trade! Clark had become a social worker. In his father’s eyes, he was a starving wretch. On top of that, he was a failed author with a drawer full of unread manuscripts. But what Eyleen, Edgar, and Liz thought of him also burned like salt in his wound. Bedford was a foreign city to him; he knew no one here except them. McAllroy was out of the question—the man had no heart, only legal paragraphs. And Edgar? The boy was a psychological wreck. That left only Eyleen. Forty-seven years old, hysterical, and full of arrogance. She had despised him ever since he had tried to get closer to her. Clark walked over to the window and lit a cigarette. The blue haze drifted slowly through the gap into the gray sky above Bedford. In the smoke, a face appeared to him. Liz, the thought jolted through him. Her dark eyes. Her calm demeanor. Only she could save him. He rushed to the wardrobe. In a frantic hurry, he yanked out an old pair of khaki trousers and an olive-green US field jacket—remnants from an army surplus store in London. He crumpled the clothes together and stuffed them into an old shoebox. Then, breaking the pencil lead twice, he wrote: Liz, you must help me. It’s not just Edgar whose life is in grave danger. He was sweating. He mustn't tell her too much, but just enough to make her come to his aid. She had to sense the danger. Quickly, he added a few explanatory sentences, placed the paper on top of the clothes, and slid the lid over the box. He sealed the shoebox with wide tape until everything was airtight. Using charcoal, he scrawled large letters onto the cardboard: URGENT SEWING WORK! IMMEDIATE! Tucking the box under his arm, he was about to rush down the stairs. But he stopped. The plan was too risky. If someone was waiting for him outside, the package would blow his cover. He himself had to stay here until the afternoon and then drive straight to the clearing. He knocked on Mrs. Gable’s door on the ground floor. The old lady opened it, cleaning rag in hand. She didn’t even wait for him to start speaking, but immediately pressed forward in indignation: Mr. Rudney! I saw you in court. What on earth was that? You were supposed to help Edgar, and then you just walk out? She thrust out her lower lip. Were you overwhelmed, perhaps? Well, it was a matter of life and death, wasn't it? Clark closed his eyes for a second. His nerves were shot. The last thing he wanted was to start an argument, not now. Mrs. Gable. it was complicated, he lied, his voice dry. Could you do me a favor? If you’re going to Hartley’s on Midland Road at nine. could you please take this to Liz Tyler at the sewing shop? A shoebox? To a dressmaker? She narrowed her eyes, suspicious. It’s urgent. My shirt. Please, Mrs. Gable, you have a good heart. What’s wrong with the shirt, then? Her withered fingers were already clawing at the tape on the lid. She wanted to look inside. Her curiosity was like a disease. The buttons came off, he said hastily. The buttons? She smiled broadly, took the box, and set it behind her apartment door. I’ll do that for you free of charge, Mr. Rudney. No need to throw your money down Tyler’s throat. Panic tightened around his throat. No! The sleeve is torn off too. Very complicated. Only a dressmaker can manage it. Clark was left behind in the dark hallway. His heart hammered against his breastbone. He climbed the stairs back up to his apartment. There, he pushed his chair to the window, sat down, and stared down at the wet pavement. The clock ticked. He waited. Finally, Mrs. Gable appeared on her bicycle. Clark breathed a sigh of relief. She had his shoebox strapped to the luggage rack.";
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
