let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Clark moved like a ghost through Richard’s dark hallway. Just don’t wake Richard, he thought. He tucked the small note deep into his jacket pocket, then stepped outside. He was greeted by a twilight silence. The sky was still shrouded in a pale grey, but dawn was imminent. Thirty kilometres lay ahead of him. A grueling athletic feat for the early morning, but with every push of the pedals, Clark knew exactly whom he was doing it for. By the time he parked the bicycle in his landlady’s narrow entrance hall, his shoulder had begun to burn like fire again. His legs trembled with exhaustion. He wanted nothing more than to head up to his flat, but on the very first steps, Mrs Gable came down toward him. Her coat was only hastily buttoned; her eyes gleamed with an unhealthy curiosity. Well, this is perfect timing, she prattled, pushing past him. I’m heading straight to the court. There’s going to be a massive crowd. Everyone wants to see the trial of the Newland woman's boy. I can't miss it, even if I'm certainly not one to pry. With a sharp tug, she snatched the bicycle from his hand, swung herself onto it, and rolled away. The tyres brushed quietly over the asphalt. Clark stormed up the stairs, taking them three at a time. In his room, he yanked open the chest of drawers, pulled out the magnifying glass, and bent over the table. He held the lens just above the photographs. His eyes scanned the lines—the shadow of the hood, the posture of the shoulders. Every single detail burned itself into his memory. After a hasty wash at the basin, he threw on a fresh shirt and slipped the photographs into the inside pocket of his suit. There was no time for anything else. As fast as his legs could carry him, he hurried back down the stairs and out onto the street. He froze, then rushed back into the hallway. “Where’s the bloody bicycle?” he muttered in disbelief, staring blankly at the bare wall. Only now did the realization sink into his exhausted brain: Mrs Gable had taken it again. There was no helping it. He would have to go on foot. Clark began to run. He sprinted until his lungs burned and the biting, damp wind off the Ouse brought tears to his eyes. His legs whipped him through the grey alleys of Bedford, past the goggling faces of bystanders, heading straight toward St Paul’s Square. The heavy church bells of St Paul’s began to toll—a deep, metallic chime announcing the hour. I’m too late, the thought pierced Clark to the bone. At last, the imposing brick edifice of the Shire Hall came into view, but time was running against him. He threw open the heavy double doors of the courtroom. Inside, the session was a cauldron of noise. Every single seat was taken. The air was thick with sweat, damp tweed, and cheap perfume clinging to the spectators' clothes. Clark shoved his way as quickly as possible through the standing crowd that had formed at the back of the courtroom, pressing forward toward the bar. There they sat at the defence table: McAllroy, his face contorted into an angry mask, flanked by a deathly pale Eyleen and Liz. Three pairs of eyes hit him like whiplashes. Where on earth have you been? McAllroy hissed. His voice was little more than a venomous whisper, nearly drowned out by the murmur of the room. If your own head weren't attached to your shoulders, you’d manage to lose that too. Social workers, honestly. He slid a small wooden card across the table. Clark instantly recognized his official ID. Here. So you don’t go leaving this behind as well. And now, I don’t want to hear another single word from you. McAllroy’s knuckles turned white. At that moment, he would have liked nothing more than to have the bobbies throw Clark out. Glancing toward the centre of the room, Clark felt his throat tighten. Edgar was no longer in the dock. He was already standing across the room in the wooden witness box, his slender hand resting on the worn leather Bible. High up on his bench beneath the heavy oak rafters, the judge was administering the oath. From their gallery, twelve jurors stared at the boy. Not a single one of them so much as blinked. The indictment had already been read, the most crucial part was over. Clark clenched his fists in his pockets. As the boy's advocate, he should have heard every line of the police allegations to know what sort of case they had constructed. He forced himself to stay calm and scanned the faces in the room. Where was Aaron Baker? The Sergeant was bound to be called as a witness for the Crown. But none of the police officers scheduled to testify were sitting inside. Of course, Clark remembered. They had to wait outside, as was the rule for witnesses. Baker was waiting in the corridor, guarded by the usher, to ensure he heard nothing of what was spoken in the courtroom. I swear, so help me God, Edgar’s voice now echoed through the timber of the room. It sounded hollow, completely drained of strength. Clark didn’t even wait for the oath to finish. He turned around, elbowed his way back through the jeering crowd, and slipped through the heavy door back into the hallway. There he sat: huddled in a dim corner on a wooden bench was Sergeant Aaron Baker. His uniform was perfectly pressed, the buttons reflecting the pale light. Clark slowed his pace, keeping his distance, and pretended to look for the washroom. As he did, his gaze sliced sharply to the left like a scalpel. He recognized the Sergeant's arms and saw how his hands lay flat upon his knees. A smile crept onto Clark’s face, if only for a fraction of a second. A wave of relief washed through him. He had found what he was looking for. Then he looked strictly straight ahead again and pushed the courtroom door open once more. McAllroy didn’t deign to give him so much as a glance. The social worker was dead to him. Inside, Edgar had reached the end of his statement. His voice droned on, mechanically reeling off exactly what he had already told Clark in prison. It sounded like a rehearsed script. The judge leaned forward, his full-bottomed wig shifting slightly and his scarlet robes bunching into heavy folds. His voice cut through the silence: You confess, then, to having committed this act with murderous intent? Edgar merely nodded, his gaze fixed firmly on the floor. Speak up, please! the judge barked down from on high. The wood of the dais creaked. You confess, then, to having committed this act with murderous in. He got no further. Clark had stepped forward. His shoes clacked loudly on the tiles of the centre aisle. He raised his voice so that it echoed all the way out into the corridor: Objection, My Lord! I can prove that Edgar Tyler did not make this confession of his own free will. He has been brainwashed! A jolt went through the gallery. Heads snapped around. Within seconds, the incredulous murmuring swelled into a deafening roar. In the jury box, stunned whispering and shaking of heads broke out. This is entirely improper, Mr... Who on earth are you? The judge glared at him, his eyes peering far over the rim of his spectacles. Clark Rudney, My Lord. Clark stood dead straight. I know it’s hardly proper form to interrupt in this manner. But there are miscarriages of justice here that must be addressed beforehand. What is to be addressed here is for me, and me alone, to decide! thundered from the judicial bench. The voice sounded as cold and merciless as the scaffold. McAllroy could no longer remain in his seat. He sprang up, his face crimson with rage at the chaos this social worker was wreaking. My Lord, I request a brief adjournment. He struggled to maintain his veneer of formality. The glare he shot at Clark was tantamount to a death sentence. The judge exhaled heavily and smoothed down his wig. Adjournment granted. Fifteen minutes. Then we shall proceed, he declared, rising and disappearing through the small door set into the wood-panelled backdrop. McAllroy whipped around, his hand already outstretched to seize Clark by the collar and drag him out into the corridor. But where Clark had stood just a moment before, there was no one. He had already ducked into the excitedly chattering crowd of spectators, vanishing into the labyrinthine corridors of Shire Hall.";
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
