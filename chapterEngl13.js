let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Out walking your dog, are we? Clark broke the silence. A pathetic attempt to appear harmless. No. The reply left no room for doubt. We're off the clock. Off the clock? At midday? We’ve been pulling guard duty all night, young man.The man spat into the undergrowth. His eyes were tired, bloodshot. Safe to say we've earned our shift's end. He tightened the strap of his shotgun and made to push past Clark. What is there to guard out here in the middle of nowhere that's so important? Clark didn't budge. Oh, aren’t you a clever boy. The man let out a short laugh, a dry, throaty bark. We're not in the middle of nowhere. Didn't you see the sheds? Those massive things over in Cardington? This is all military ground, lad. The RAF had a wireless interception station here during the war. And the Yanks have been leasing the whole lot since 1950. The United States Air Force. No one knows what they’re up to over there. Cold War business. Top secret, all of it. Out here, blokes like me keep watch; on the inside, it's the Yanks themselves. The man caught himself. His eyes narrowed. It clearly dawned on him that, in his end-of-shift mood, his tongue had been a little too loose. Without another word, he yanked the dog around and vanished into the dense pine trees. Clark sent a silent prayer to heaven. A spy nest. That was the key. The exchange in the photographs—money, documents, keys, hadn't happened here by accident. It was about the base. He grabbed the handlebars of the heavy ladies' bicycle, turned it around on the muddy path, and raced the bike back toward Bedford. He slammed on the brakes on Midland Road. He rushed to Liz's house, but the second-floor windows were dark, and the dressmaker's shop was locked up too. No one was there. McAllroy’s office a few streets away was also bolted, the blinds drawn tight. So Clark decided to cycle back to his own flat. As he wheeled the bicycle into the gloomy hallway, his landlady shot out of her door. Her face was flushed with excitement. Have you heard the news, Mr. Rudney? News? What news? The Newland boy. That Edgar. She pressed her hands to her chest. He’s confessed! To the gruesome deed! Clark went pale. The air in the hallway suddenly felt as heavy as lead. He’s what? He admitted to killing George Davies. Of his own free will. As if in a trance, Clark threw open the front door and ran out into the street. He couldn't believe any of it. Outside, a newsboy was shouting against the wind: Late extra! He's confessed! Verdict tomorrow, then it's the noose! Clark tossed the boy a few pennies, snatched a still-damp copy of the evening edition from his hand, and flicked it open. The large, black lettering was unmistakable. Edgar had indeed confessed. No,it flashed through Clark's mind, that's impossible.Had his judgment of character failed him so monumentally? He had to see Edgar, and see him now. Damn it! Clark slammed his fist against his thigh. His ID—that vital bloody document was still sitting in McAllroy’s locked office. He set off anyway, grabbed his bike, and tore down the road. His gaze fixed entirely on the gray walls of the prison. He arrived at the gates just as McAllroy and Liz were coming down the steps. Their faces spoke volumes. Ah, look who decided to grace us with his presence, McAllroy sneered, his voice cutting through the gust of wind. You’re about as dependable as the British weather! Liz, I’ll see you at court tomorrow morning at nine. The solicitor didn't give Clark another glance. He climbed into his dark green Austin, slammed the door shut, and let out the clutch. The car pulled away, leaving Clark standing like a schoolboy in a cloud of exhaust fumes. Liz. Clark stepped up to her. Did you see him? Liz broke down. Tears flooded her eyes, hot and unstoppable. Yes. Oh, Clark. He did it. He told us to our faces. They’re going to hang him! Her knees buckled. Before she could hit the hard pavement, Clark’s arms wrapped around her. He held her tight, feeling her body sobbing violently against his chest. Liz, calm down. Please, he whispered into her hair. Calm down? She looked up, her eyes red and swollen. The game's up. There’s nothing left to do. The words pierced his heart like needles. I’m not buying it, Liz. Clark gripped her gently by the shoulders. His determination was back. We need to get back in there. I have to talk to him. But I can't get inside without my ID. Please, Liz. Let's go see Edgar again. Liz let out a breath—a bitter laugh. Do you honestly flatter yourself that you can do more than his legal aid? McAllroy pulled out all the stops. But no lawyer in the world can beat a confession. We have no choice! Clark didn't waste any time. He took her by the arm and practically marched her up the steps toward the heavy portal of the prison. The guard at the gatehouse frowned. Miss Tyler? You were only just here for three hours. What is it you want now? The lad’s already admitted to everything. Clark stepped forward, drawing himself up to his full height. Officer, I am the caseworker assigned to this matter. I am assisting Mr. McAllroy. I must be granted the legal opportunity to speak with the accused before tomorrow’s trial. Especially in light of this abrupt turn in the evidence. The guard looked from Clark to Liz, muttered something unintelligible into his beard, and checked his wristwatch. Half an hour. Not a tick longer. A short while later, the key rattled in the lock of the visiting room. It was the same bleak room with the same bare walls as before. But the boy sitting at the table was no longer the same. When Clark set eyes on Edgar, a shiver ran through his bones. Last time, there had been a pale, terrified boy weeping his eyes out. Now, a mere shell sat there. Dehumanized. A zombie with a stony glare, his eyes staring into nothingness.";
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
