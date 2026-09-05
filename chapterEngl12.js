let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "His breath caught. The news was a punch to the gut. Tomorrow—already tomorrow—the curtain was set to rise in court. Fibers from Edgar’s jacket were embedded in the corpse's wounds; the noose was tightening mercilessly. Yet inside, deep in his gut, everything in Clark screamed against it. He had seen Edgar in his cell. He could still see the sweat-slicked fingers, the pitiful trembling of his lips, and those soft, almost childlike eyes. That boy didn't have the stomach for murder, never. Clark stared at the face of his wristwatch. The seconds ticked loudly, eating away at his time. He threw himself over the wooden living room table. The magnifying glass felt heavy in his hand, its lens slightly scratched. He leaned so low over the print that the tip of his nose nearly touched the paper. There, at the very back of the photograph. Right where a dark spot was discernible in the shadow of the branches. Wasn’t that a post?, he wondered. Clark tore the picture from the table, hurried into the bedroom, and switched on the small bedside lamp. The yellowish light illuminated the room. He pressed the magnifying glass back onto the paper. There’s a sign, he muttered. His lips were dry. Damn it, what does it say? His eyes were so weary. He rubbed his eyelids with his knuckles and took a deep breath. The scent of Richard’s fixing bath still clung to his fingertips. Once more, he looked through the glass. The letters were blurred, their edges eaten away by the film's coarse grain. “H A U N E S,” he spelled out. Haunes? Could that be it? He cursed softly. Bedford was foreign to him, every street an unfamiliar riddle. Clark bolted from the room and dashed down the wooden staircase, making the steps groan. He hammered on his landlady’s door. Inside, slippers shuffled. Then the lock clicked, and a slender, exasperated woman in a floral smock stood in the frame. Mr. Rudney! For heaven’s sake, where’s the fire? It’s the afternoon quiet hour! Forgive me. He gasped for air, his hand pressed firmly against the doorframe. I need to get to Haunes urgently. Can you tell me how to get there? The woman knitted her brow. Haunes? There’s no such place around here. You’re turning my whole day upside down for a made-up hamlet? Please. His reply was nearly a whimper. It must be named something like that. I just wrote it down wrong in the heat of the moment. Think. The landlady shrugged, staring past him into nothingness. Then her features brightened. A knowing smile. You mean Haynes, Mr. Rudney. Haynes. It’s a tiny village to the south. Right on the edge of Chicksands Wood. Eleven, maybe twelve kilometers down the country road. That far. The words escaped him like a sigh. He looked down at her shoes, then into the gloomy hallway. Do you have a bicycle? Anything I could borrow to get there? Just until tomorrow morning. The black one over there. In the hallway under the stairs. She pointed with a sharp finger. Take it. But heaven help you if it’s not back in its place tomorrow morning. I need it for the market. Clark didn't waste another word. He grabbed the heavy handlebars of the black lady's bike, wheeled the antiquated monstrosity outside, and swung himself onto the saddle. The pedals were stiff, the chain rattled drily. He pedaled until his calves burned. The road dragged on stubbornly up the hill. Nearly an hour later, he stood on a crest. Now the rural ridges of Bedfordshire lay before him, stark and windswept. Then came Haynes. It wasn’t a proper village. In essence, it was just three loose clusters of houses, huddling like timid animals around the gray stone walls of an old church. Narrow, muddy tracks cut through endless, brown fields. Here, it was entirely still. Too still, Clark thought. The smoke from the chimneys of the thatched, timber-framed cottages rose straight up into the leaden sky. The Victorian brick facades looked like stone sentinels. Clark pulled up outside the pub. The wooden door was heavy, and he could hear glasses clinking from within. He reached into his coat pocket, feeling the stiff paper of the photographs. His first impulse was simply to walk in and ask the publican. He already envisioned himself slapping the pictures down onto the counter. But then he let his hand drop again. No, that would be too dangerous. If an illicit deal had gone down here, the photograph would become village gossip in no time. That could not happen. Witnesses were too high a risk. Everything had to remain strictly confidential. For the next two hours, he was back to pedaling. He checked every side road, every rutted cart track that led in any way into the dark wall of the forest. The dampness crept under his collar. The bicycle skidded over the wet roots of the trees. Finally, sheer luck saved him. As he rounded a dense hedge of holly, the thicket suddenly opened up. A clearing lay before him, it was the very clearing from his print. At the edge, the rotten, crooked signpost stood in the undergrowth. Clark leapt off the bike. He let the vehicle tilt sideways against the trunk of an old oak. His eyes scanned the terrain. Where would the damn photographer have stood? Where had the lens been aimed? It must have been over there,, he decided. Right where the tall, densely packed firs swallowed the remaining daylight. He crawled beneath them. Down here, it was almost pitch-black. Clark fought his way through the scratchy underbrush, twigs whipping against his cheeks. After twenty meters, his head nearly struck wooden planks. It was a hunting stand, cobbled together from raw spruce logs, well-camouflaged within the needle canopy. This is it, he whispered, and climbed up. This was where the gamekeeper had perched. Perhaps he had been waiting for a deer. Or perhaps he had known that something dirty was bound to happen right here. He had lain in wait. And at just the right moment, his finger had pressed the shutter button. The perfect leverage. Was it blackmail? Clark chewed on his lower lip. He shook his head. If the gamekeeper had those two men where he wanted them, why was the film still sitting undeveloped in the camera? No one blackmails anyone before developing the images on their strip of celluloid. Unless. they caught him, Clark concluded. A cold shiver ran down his spine. What if one of the men in the woods had noticed the camera flash or the click of the shutter? That would be a damn good motive for murder. Clark grabbed the wooden ladder and hurriedly climbed back down. His shoes slipped on the damp rungs. All he wanted now was to get back to the bicycle and away from this sinister place. He had just set foot on the soft forest floor again when the snapping of dry wood broke the silence. Out from the thicket snorted a hound, its nose pressed deep to the ground. Behind it, a man in a weatherproof loden cape stepped onto the path. He carried a shotgun slung across his arm.";
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
