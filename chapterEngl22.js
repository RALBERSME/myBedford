let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "She had spent the night on the sofa in her sewing shop. While it couldn't compare to her own bed, and despite sleeping poorly, she was glad not to have to wake up in Eyleen’s apartment. Liz sat on the edge of the table, knees pulled to her chest. Her eyes burned. The argument with her mother stuck in her flesh like a poisoned needle. Only out of pity. Her mother’s words still echoed in her mind. She looked down at her hands, which looked almost gray in the pale morning light. Here, among the bolts of fabric and the scent of tailor's chalk, she was safe from Eyleen’s venom. But she was also lonely. Suddenly, the shop door bell rang, loud and impatient. Liz started, smoothed down her skirt, and opened the door. Outside stood Mrs. Gable, her face flushed from riding her bicycle so fast. In her arms, she held a shoebox tightly wrapped in heavy tape. Here, the old lady said without preamble, thrusting the package against Liz’s chest. From your Mr. Rudney. He was completely unhinged. Babbling something about torn-off sleeves that I supposedly couldn't repair. Mrs. Gable snorted disdainfully, adjusted a stray lock of hair beneath her hat, and eyed Liz with narrowed eyes. The man is losing his mind, if you ask me. But there you go. I've done my duty. She turned on her heel and wheeled her bicycle away. Liz closed the door. The bolt clicked into place. A package from Clark. Her heart beat faster. It was a familiar, warm sensation, one she immediately fought down in anger. Before the trial, Clark had been her rock. His calm voice, his presence, she had believed he was different from all the rest. And now? Now he had gone into hiding, even though Edgar was still not a free man. Exactly as her mother had said: He only wanted to bask in our glory. Skeptical, Liz ripped the sticky tape from the box and lifted the lid. Resting right on top was a folded piece of paper. It was Clark’s handwriting, hastily scribbled: Liz, you must help me. It’s not just Edgar whose life is in grave danger, but mine as well. I cannot tell you what this is about. Every word on this paper is a risk. I am at the end of my rope. On Monday at 6 p.m., I have to hand something over at the clearing in Bedford Woods. I need your eyes. Should I not survive, you must be able to testify for Edgar’s sake, to save him from the gallows. Liz caught her breath. Grave danger? She read on, the words growing more absurd, almost maniacal. Inside the box are clothes. Put them on. They are US Army gear I bought in London. If you button the jacket and hide your hair, no one will see that you are a woman in the twilight. You will also need to get a US soldier’s cap. And a camera. I don’t have one anymore. Hide beneath the thick fir trees on the eastern edge of the clearing. Photograph everything. Every man, every face, every handover. But a warning, Liz: whatever you do, do not climb up into the deer stand! That would be your death warrant. If they spot you in the undergrowth, do not run away. Act like a drunk US soldier from the barracks who just had to step into the woods to relieve himself. Uncertainty will protect you. They don’t harm the Americans here. Please, Liz. I beg of you. Liz let the letter drop. It drifted slowly to the floor. She reached into the box. Her fingers brushed against the rough, heavy fabric of the US field jacket. It smelled of mothballs. Then she pulled out the trousers and held them up. They were huge. A fortress of khaki. A wild storm erupted in her head. Her reason screamed at her to take the box and hurl it into the stove. Was Clark mixed up in criminal dealings? Her mother had been right. He was a fraud. He was using her, dragging her down into a hole from which there was no escape. Why should she risk her life for a man who had done nothing but play a part for weeks? She feared for Edgar, yes, but Edgar was out on bail. The gallows still loomed over him, but what did a cursed clearing in the woods have to do with that? And yet, she remembered Clark’s eyes in court. That had not been the look of a gangster. It had been the look of a hunted animal. If he was lying, why did his letters carry such raw, mortal terror? If she didn't go, and Clark was killed tonight, could she ever look at herself in the mirror again? Edgar needed an acquittal, and perhaps this was the only way to get it. Liz took a deep breath. She walked over to the dresser in the back and picked up her father’s old Agfa camera. It was slightly dusty, but fully functional. There was still an unused roll of film in the cupboard. Her hand tightened around the cold metal. I still need a US cap, she recalled Clark’s message. She knew exactly where one was. Two weeks ago, young Corporal Miller from the US barracks had brought his uniform jacket in for repairs and left his garrison cap on the counter. It was still sitting on the bottom shelf. Liz pulled out the olive-green cap and ran her hand over the badge. Then she stepped in front of the large cheval glass, where the ladies of Bedford usually posed during fittings. She took off her cardigan and slipped into the army shirt. It swallowed her body entirely. The sleeves hung far past her fingertips; she simply cuffed them back. Then she pulled the heavy field jacket over it, buttoned it to the throat, and tucked her long, dark hair beneath the soldier's cap. She looked into the mirror. No dressmaker stood there anymore. No little daughter stood there, no trash can for Eyleen’s embittered dreams. In the shadowed glass of the mirror, the silhouette of a young, slight American soldier emerged, strange, almost menacing. Liz felt the chill of the fabric seep onto her skin. She would go. Not for her mother. Not even just for Clark. She would go to prove to herself that she was brave enough to fight for Edgar. She packed the camera into the deep inside pocket of the field jacket. It wouldn't be long until 6 p.m. And the clearing was waiting.";
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
