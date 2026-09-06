let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Liz had gone to Ashburnham Road, where she rang Clark’s doorbell several times. To no avail, there was no answer. Only the hollow, metallic rattle of the bell pull died away unheard in the dark hallway of the house. Liz let go of the handle. Her fingertips were numb from pressing so hard. She waited, her ear pressed tightly against the rotten wood of the front door. Yet there was still not a sound to be heard. No shuffling step, no creaking of the floorboards. Clark was not there. Already the day before, she had walked her feet off on the pavement, circling the block three times only to end up standing in front of this locked door once again. The uncertainty of what had happened to Clark felt like a slow-acting poison. It crept into her limbs, paralyzing every clear thought. Had he fled? Or was he lying somewhere in Bedford Woods, covered with wet pine needles while his blood seeped into the mud? The image of the man in the light beige duffle coat raising his weapon burned behind her eyelids. By the third day, she could no longer stand it. The sky over Bedford was nothing but a gray soup as she climbed the steps to the house entrance once more. She pressed the doorbell button. Again and again, a mechanical, desperate staccato. You can press until your finger falls off, Miss Tyler. The fine gentleman is not to be spoken to. Liz spun around. Mrs. Gable stood in the doorway, a woven shopping basket nestled in her arm, her lips as thin as a piece of twine. Her inquisitive eyes darted swiftly from Liz’s pale face to the nameplate and back again. She sniffed the air through her nose like a hound catching a scent. Three days, the landlady said, stepping closer so that the smell of floor wax and cold cabbage wafted around them. Mr. Rudney hasn’t come home for three days. He cycled off on Monday evening. Snatched my bicycle! Without even asking. The absolute nerve of it. Now I have to do all my shopping on foot. My knees, you know? Liz felt the blood drain from her head, leaving her lightheaded. Monday evening. So he hadn’t returned here after the meeting in the clearing. Do you know. do you know if anything happened? Liz managed to say. Her voice sounded thin, almost helpless. She pressed her handbag tightly against her stomach. Happened? Mrs. Gable gave a short, hollow laugh. What on earth should have happened? It’s all there in black and white in the papers. Your brother Edgar’s acquittal—all of Bedford is talking about it! The matter is settled. She waved her hand dismissively. Mr. Rudney is just lazy, if you ask me. A slacker. He didn’t exactly bend over backward for your brother in the courtroom either. Arriving late, just running out—and now that the work is done, he makes himself scarce. He's probably sitting in some dive in London, spending his money on cheap booze. Liz opened her mouth. A hot torrent of words rushed to the tip of her tongue. She wanted to scream at the old woman that Clark had been in the woods, that a madman had shot at him, that Clark was no slacker but a hunted man himself. But she remained silent. She swallowed the truth, and it tasted bitter. If she spoke now, Mrs. Gable would immediately run to the nearest neighbor. The whole neighborhood would know. And who knew who else belonged to those gangsters? The spies, the men in the duffle coats, they had eyes everywhere. Yes, Liz merely muttered, lowering her gaze and stepping back from the door. Perhaps you’re right. Of course I’m right, Gable snorted triumphantly, adjusting her basket and brushing past Liz into the hallway. The heavy front door clicked shut. Liz stood alone on the wet pavement. The wind tugged at the edges of her coat. She was entirely on her own. Clark was gone—dead or on the run. And she was sitting on a powder keg. Should she go to the police? The thought flashed through her mind, cold and tempting. The station was only three streets away. She needed protection. She needed someone to clear up this nightmare. Her hand slipped into her coat pocket, searching for the slit in the lining until her fingertips struck the hard, deformed piece of metal. The bullet from the fir tree. It was cold now, but in Liz’s hand, it felt like a glowing piece of coal. Sergeant Aaron Baker, it occurred to Liz. He was her solution. McAllroy had praised him to the skies, after all: a fine fellow, a highly intelligent policeman who had proven Edgar’s innocence. Liz had known Baker since her childhood days. He had always been kind and helpful to her. Even when he had questioned them all in that terrible murder case, he had shown great empathy toward her family. If anyone could help her solve the mystery of Clark and the shooter in the duffle coat, it was him. He stood on the side of justice. He had saved Edgar. Liz clenched her hand around the projectile. Taking a deep breath, she squared her shoulders and turned away from Clark’s empty house. Her path took her briefly back to the sewing shop before she headed toward the police station on High Street. She had no idea what a hornet’s nest she was about to poke.";
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
