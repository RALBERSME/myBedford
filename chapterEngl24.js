let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The car parked in front of the toy shop. McAllroy had arrived. Liz saw the gleaming metal of the Austin through the window of her sewing room. She ran into the neighboring house and up the stairs, two flights up to her mother’s apartment. Her knees felt like they had turned to water. In Eyleen’s salon, the fireplace was blazing, but the air was thick, heavy with face powder and the scent of fresh coffee beans. Mr. McAllroy, Liz gasped, her hands trembling as she let go of the salon door handle. Is there a decision? And what a decision, my darling! Eyleen stepped forward in her silk gown, holding a steaming cup like a stage prop. Our wonderful lawyer has done it. The trial is dead. Dismissed! There were procedural errors during the arrest. But tell her yourself, Mr. McAllroy. You are the master. McAllroy cleared his throat, a vain, dry sound. He adjusted his tie and looked as though he had just saved the King. Well, the justice system could not withstand our arguments. The police were forced to review the forensic psychologist's files. Sergeant Baker initiated that. A magnificent officer. A man of sharp intellect. Liz held her breath, her heart racing. Spare us the suspense, Mr. McAllroy, she urged, completely indifferent to her fine upbringing at that moment. What did they do to Edgar? Brainwashing, young lady. Pure sabotage of the mind, McAllroy announced arrogantly. Brainwashing? To Edgar? Why? Liz’s head throbbed. The world seemed to be spinning out of control. A psychopath, McAllroy stated, pacing across the room. Andrew Kennedy. A madman with a degree. He copied the torture methods of a namesake: sensory deprivation, absolute isolation in the cell. And then he combined it with chemistry. He used sodium amytal, a serum that forces foreign images upon the brain until the victim believes in their own guilt. The whole thing is completely illegal and abhorrent. But I brought the house of cards crashing down.” He threw his head back, basking in his triumph. Eyleen giggled, shrill and inappropriate. Liz, do you hear that? Fascinating, this Kennedy. A villain, certainly, but with a dramatic flair. Don't you think? Liz recoiled, her skin crawling with disgust. Mother, he wanted to see Edgar hang. He wanted to kill him. Eyleen scoffed. He is in the dungeon, Elisabeth. Where he can rot. An eerie coldness crept up inside Liz. Her relief gave way to a dull, paralyzing exhaustion. This light chatter about Edgar’s near-executed death sentence tightened around her throat. She had no strength left. And the circumstantial evidence? Liz asked, still troubled, thinking of the gray mud on her shoes from the day before. The fibers on the circular saw? In Davies’ flesh, what about them? Worthless! McAllroy interjected, reaching for a biscuit. Baker explained it to us. The murderer could easily have used the jacket to plant false trails after the deed. They can't resolve this with scientific methods. And Edgar’s protestations of innocence were documented before the chemical injections. They will simply have to look for another killer. Liz nodded slowly. So free? A true acquittal? A true one, the lawyer confirmed. Liz pressed her hands to her face, tears of relief welling in her eyes. Finally, the horror was over. I must go straight to. She swallowed the last word. To whom, my child? Eyleen’s gaze bored into her. Her mother could smell the betrayal. We must celebrate! Liz corrected herself quickly, taking a deep breath. While Eyleen went into the kitchen to look for the champagne, Liz’s thoughts raced. The clearing. The muffled conversation from last night. The man in the duffle coat. And now the acquittal? Did it fit together? Was this perhaps the reward for Clark’s secret handover? She accepted the glass. The wine sparkled, but she tasted only metal. You don’t look happy at all, Liz, her mother chided. That’s not how joy looks. I am, Mother. I'm just wondering. She looked at McAllroy. Will Kennedy be charged with murder? McAllroy shook his head with a patronizing grin. No. He didn't murder, he only lied. A case for the asylum. That means a life sentence behind rubber walls, but no noose for him. Shortly afterward, she couldn't take it anymore. She lied, saying the sewing room was calling her. McAllroy stayed for the salmon. His self-satisfied prattle was still echoing through the house when he finally started up the Austin. He failed to notice the sign on Liz's shop door: Closed Today. Liz sat in the dark behind the curtains. In her pocket lay the deformed bullet she had cut from the fir tree. The puzzle in her head had only grown larger.";
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
