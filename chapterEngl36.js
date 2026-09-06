let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Clark’s apartment welcomed her with the familiar scent of dried mint and printed paper—a small island of sanity in a town that, over the last few hours, had turned into a living nightmare for Liz. She sat slumped on Clark’s sofa, the blanket pulled up to her chin, while outside the rain lashed mercilessly against the windowpanes. Clark handed her a mug of hot tea. Instead of sitting on the chair opposite her, he sat right next to her on the floor, his spine leaning against the sofa. His hand found her knee beneath the woolen blanket. His grip was gentle. It was no longer the hesitant, tentative touch from a few days ago, when he, as a hesitant social worker, had tried to mend the shattered pieces of the Tyler family without getting burned himself. He seemed more grounded now. The weight of the town no longer appeared to crush him. That explains a lot, he said softly, staring into the dark amber of his tea. I was quite naive back then, after the break-in at Aaron’s office and during the trial. I knew I hadn't obtained the evidence legally. I lost my head, Liz. I was so damn terrified of messing everything up. He let out a short laugh, a dry, humorless sound. So I just confronted Aaron. Face to face. I told him I’d spill everything if Edgar wasn't released. And do you know what he did? He deflected the blame instantly. He blamed the psychiatrist, saying that pig had crossed the line. As for Aaron planning the whole thing himself. I had a suspicion. Deep down, I think I already felt it. He paused for a moment before continuing. But I didn't care back then, either. I just wanted to get Edgar out of there. And protect you. Liz shook her head, her teeth chattering slightly against the rim of her mug. I can't take it anymore, Clark. I can't do this anymore. She set the tea down on the side table. My mother is a cold-hearted egomaniac who treated me like dirt my entire life just to reflect her own vanity. My father. my biological father is a murderer. A cold-blooded traitor who allowed my brother to be broken. She grabbed Clark’s shirt sleeve, her fingernails digging through the thin fabric. I don’t want his house. I don’t want his money. There is blood on everything, Clark. On the walls, on the savings, on every single damn curtain I sewed for him. It’s suffocating me. Clark turned around and pulled himself up onto the sofa. Then he took her face in both of his hands. His thumbs stroked over her cheekbones, wiping away the salty dampness. There was no pity in his eyes, nothing that would have made her feel small again. There was only a calm, unshakeable strength. Then we won’t take it, he said. His voice was deep, an anchor in the tempest of her panic. We will leave it behind. He reached for the crumpled letter lying on the table, the official ledger hand of Aaron Baker that had brought so much ruin. Clark stood up, walked over to the small cast-iron stove in the corner of the room, and opened the latch. If we give this to the authorities, they will tear your family apart all over again, Clark said without turning around. They will reopen the case, they will churn up the mud, and your reputation in this town will be ruined forever. They will only ever see you as the murderer's daughter. We won’t let that happen. He struck a match and let the paper catch fire before tossing it into the stove. The paper curled up with a crackle. A bright yellow flame illuminated Clark’s face for a few brief seconds. The dark secrets of Bedford turned into gray, weightless ash, escaping through the chimney into the night. Liz felt an invisible band around her chest give way as the fire died out. She could breathe again. Deeply. All the way down into her stomach. Clark came back, sat beside her, and pulled her close against his chest. She nestled into him, burying her face in the crook of his neck. When I realized Eyleen’s true character, I pulled away from her, he whispered into her hair. His arms closed around her like a protective wall. I saw the coldness in her. And when I suspected Aaron’s true character, I kept my distance. It was cowardly of me to retreat, Liz. I thought if I just hid well enough, this town couldn't hurt me. But you... you woke me up. He pulled back slightly and looked her straight in the eyes. Liz, you are not like them. You are not like Eyleen, who only takes to fill the void in her own heart. And you are not like Aaron, who wanted to see the world burn because he couldn't bear his own pain. For years, you’ve been the emotional dustbin for this family, carrying everyone else's burdens until your fingers bled from sewing. But that role is over. You are shedding it now. A gentle but firm smile played on his lips. The two of us are different, Liz. We don’t belong in this world of hypocrisy and ancient sins. Let’s give the house to Eyleen. Or we sell it, donate it to the parish, do whatever you want with it. And then we just leave. Where to? Liz breathed, and for the very first time, a tiny spark of hope mingled with her voice. To Ireland, he said, his eyes lighting up. Away from here. Away from Eyleen. Away from Bedford, away from all the awful memories. We’ll rent a small cottage on the coast, where the wind blows your mind clear. You can sew dresses for people who appreciate you for it. And I will write. The truth. But our own. Liz looked at him. The man who used to flinch at every loud word from Eyleen now sat before her, solid as a rock. And she? She no longer felt any fear of her mother’s wrath. Eyleen’s shrill voice, which usually echoed like thunder in her head, shrank to an insignificant hum in the presence of Clark's closeness. The chains hadn't broken; they had simply melted away. Ireland, she repeated, and the word tasted of salt and freedom. She placed her hand in his. Her fingers were no longer cold. Let’s go, Clark. Right now. He nodded, leaned forward, and kissed her. It was not a kiss of farewell to the old world, but the foundation for everything that now lay ahead of them. A new life, far away from the shadow of the sawmill and the faded playbills of a dying musical star.";
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
