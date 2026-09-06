let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Clark slowly released her from the embrace. His gaze fell upon the white envelope that Liz was still pressing to her chest like a protective shield. What is that? he asked softly. Liz looked down at herself. Her fingers were leaving creases in the paper. Dr. Vance gave it to me. It fell right out of the envelope containing the will. I suppose. I suppose that’s where the truth about the paternity is. The final truth. Clark placed a hand on her shoulder and gave it a gentle squeeze. Well, go on and open it then, he advised in a calm, steady voice. Then you’ll know for sure. This uncertainty is only eating you alive. Liz’s breath caught. She slid her thumb beneath the flap, the paper tore with a sharp, dry rasp. She unfolded the tightly creased sheet. Her eyes flew across the lines—slowly at first, then feverishly. The letters felt as though they were stabbing at her. Halfway down the page, her heart stopped. An icy veil fell over her vision. All at once, her knees buckled. She collapsed onto the wooden floorboards, the paper slipping from her powerless fingers. Liz! Clark’s voice sounded far away, as if submerged underwater. He reacted instantly, cursing softly under his breath as he slipped his arms beneath her body and lifted her up. He laid her down on the plush sofa, flung the window open to let the cold air rush in, and hurried into the kitchen. He returned with a glass of water, carefully coaxing her to drink, and brushed the hair from her forehead. Come on, Liz. Breathe. Just breathe. A violent fit of coughing shook her as she regained consciousness. Her eyes found Clark’s worried face. She was trembling from head to toe. What happened? he asked, his voice hoarse with concern. What does it say? Liz couldn't squeeze out a single word. She only raised her arm, pointing a index finger at the piece of paper lying on the floor, and let out a strangled gasp. Read, she urged him. Read it yourself. Clark picked up the sheet, stepped into the dim light of the window, and began to read. The letter was unmistakably from Aaron Baker. Yet it was not the confession of a loving father. It was the written monument of a man who saw himself as the epicenter of a tragedy, egoistic, driven, and intent until the very end on spinning his own legend. Liz, it read in a neat, official police ledger hand. If you are reading this, I am no more. They will call me a good Sergeant, a hero of the community. They have no idea who I truly was. They are too dull to comprehend the magnitude of my grief. I was born here in Bedford, became a policeman because I was smarter than the others, more ambitious. Then Eyleen crossed my path. She was married, yes, but her beauty was a force of nature I could not resist. She seduced me, Liz. She used me. When she became pregnant with you, she tried to blackmail me, to destroy my career unless I continued the affair. She wanted my money, wanted to ruin my future. What a blunt sword. I was smarter. I had met Carol, my true love, a woman actually worthy of me. I broke things off with Eyleen. I threatened her: if she didn't hold her tongue, I would go to Edward, her husband, and tell him everything. He would have thrown her out on the street posthaste. That kept her mouth shut. Clark swallowed, casting a brief glance at Liz, who was burying her face in the pillow. Then he read on. I rose through the ranks, became Sergeant Baker. In 1939, I married Carol. I didn't need a career anymore; I had everything. I was simply happy. Until July 23, 1942. Carol was heavily pregnant, merely wanting to run a few errands at the local sweetshop, when the German bombers came over Bedford. The newspapers later proudly claimed there had been no casualties. What a lie of the censorship! Carol was so deeply traumatized by the detonations, so shocked, that she lost the baby. Our child. When news arrived days later that her parents had also perished in the raids on London, her mind shattered. She could no longer bear the world. She hanged herself in our attic. She simply left me alone with this heap of rubble. The tone of the letter changed rapidly, turning darker, almost fanatical. I could not cope with it. Why her? Why me? I volunteered for the army, even though as a policeman I would have been exempt. I sought death in combat, but did not find it. In 1946, I returned to Bedford, to my old post. I hoped to win my life back, but there was nothing left. My life lay in ruins. I swore to myself: never again a woman. Never again weakness. The period of austerity was eating the country alive, and Bedford was starving. I had lost all purpose. Law and order? It suddenly held no value for me; it degenerated into a mere fiction, for it could not bring my Carol back to life. Why, then, should I abide by rules that had stripped me of everything? Clark held his breath, but the narrative only grew bleaker. In the 1950s, I became corrupt. I sold information. Intel about the American classified facilities at Chicksands. I met with a Russian spy in the woods. It was a perfect business venture until George Davies caught me. He was sitting in his deer stand, and I saw the glint of his binoculars in the evening sun. He knew. He was a threat to me, to my reputation, to everything I had painstakingly built. I could not allow a simple sawmill owner to destroy me. So I went to him. I beat him to death in his own mill. To be absolutely certain, I shoved his dead body into the running saw. The wood consumed him. But a corpse requires a murderer. Edgar was working at the sawmill back then. It couldn't have been more perfect. I rubbed Edgar's jacket against the victim and the teeth of the saw to leave fibers behind as evidence. When my incompetent colleagues didn't swallow the bait, I went even further. I brought in a psychiatrist. We broke Edgar, Liz. We brainwashed him. A forced confession through pure psychological violence. He was to bleed so that I could shine. Near the end of the letter, the handwriting trembled, as if Baker had barely been able to hold the pen. Now I sit here. I feel like nothing more than a hunted man. I can no longer find peace, no restful sleep. The guilt is eating me from the inside out; it is greater than I am. This house, the money—it is the blood money of my life. I am giving it to you, Liz. Because you are the only piece of me that is uncorrupted. For all the atrocities I have inflicted upon you, your family, and above all Edgar, I beg for your forgiveness. Do not bear my name, but take my inheritance. It is the only price left for me to pay. Clark let the paper sink. His hand was trembling now, too. He stared at the wall, at the birthday photograph where Aaron had laughed so heartily. A murderer. A traitor. A man who, out of sheer self-pity, had destroyed the life of an innocent boy. Liz lay curled up on the sofa, unable to move. Her worldview had not just imploded—it had been pulverized. Her biological father was a monster, and her mother had used the truth of her birth as a weapon to keep her small. Clark sat down beside her, silently drawing her into his arms and holding her tight as the darkness of the night fell over Bedford.";
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
