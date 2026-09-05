let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "The United Counties Omnibus Company bus swung sharply into Midland Road. Clark let his shoulders drop. Finally. Just a few more minutes and he would be there. Everything was going to be different in this town; of that he was absolutely certain. He thought of Luton, of the endless overtime at the social services office, of the stale taste of cold coffee and chronic exhaustion.Suddenly, the brakes locked. Rubber screeched violently against the asphalt, and a sharp jolt threw him forward. ie, ie, la mia gamba, ie! Cries rang out from the street. Like the other passengers, Clark pressed his forehead against the cool glass of the window. A bicycle lay on the pavement, its wheels still spinning lazily. Crouched beside it was a young boy with jet-black hair. Clark felt a cold knot tighten in his stomach. The driver wrenched the bus door lever open and leapt out. Almost at the same instant, a sergeant appeared, rushing over from the station. His whistle pierced the damp air with a deafening shriek.Clark sprang up. His legs moved on their own, the old reflex still worked. But he was blocked at the bus door. A heavy, dark sleeve barred his way.Stay back! There's nothing to see here.Through the window, Clark saw the child already picking himself up. The boy gritted his teeth, clutching his knee. The bus driver grabbed him roughly by the arm, pulled him to his feet, and wheeled the buckled bike over to a wooden bench.The sergeant waved it off. He turned his back to the bus but spoke with deliberate loudness. Each word cut through the foggy air: No need for paperwork. Just one of those Italian street urchins. What do they matter to us? Clark clenched his fists inside his coat pockets. As he stepped off the bus, his gaze swept over the policeman's silver badge.  Aaron Baker was his name, then, Clark thought. Just like in Luton. The people here were no different from those back home.There, too, Clark had witnessed the silent war on the streets. The factories clamored for workers, and the boats brought them in from the poor villages of Southern Italy, cheap labor for the economic boom. Yet here, nothing awaited them but cramped flats, toxic glares, and a hatred that hung like fine dust in the alleys.Clark let out a heavy breath. Was he really going to pick a fight with the police on his very first day? Pensively, he kneaded his lower lip. Meanwhile, the boy limped down the street; one hand held the crooked handlebars, his left leg dragging with every step. Let it go, Clark muttered, shaking his head. It's over. I'm not a social worker anymore. A cowardly sense of relief crept in, tinged with a bitter aftertaste. His father had beaten it into him never to cross those in power. Swim against the current, and you'll drown, his old man's voice still echoed in the back of his mind. He turned away, grabbed the worn handles of his two heavy suitcases, hoisted the backpack onto his shoulders, and finally stepped out into the open. A few yards past the bus stop, he turned into Ashburnham Road.Then, his breath caught. The sight of the street hit him with full force.To the left rose three-story Victorian terraced houses, blackened by factory smoke. Their chimneys bore dark crusts of soot, and the heavy wooden doors looked like the gates of fortresses. To the right, by contrast, a wound gaped in the neighborhood: the old walls had been torn down and replaced by clunky, plastered apartment blocks with flat roofs. Concrete, reeking of cheap progress, had taken over here.At one of the brick doors, Clark pressed the buzzer. An elderly woman opened it and pointed upstairs: Third floor, sir.Clark lugged his baggage up the narrow, worn wooden staircase. His lungs burned with exhaustion as he threw open the door to his new lodgings. He looked at two chairs, a sagging sofa, and a table that looked terribly wobbly. Through the sash windows, the muffled murmur of the city drifted up.Clark ignored the view. Something else was weighing on his mind. He walked over to the table and set his backpack down. His hands dug through the fabric until they gripped the heavy metal of the Remington. The typewriter was cool to the touch. He quickly pulled it out and placed it on the wood like a treasure. Gently, he stroked the round keys, feeling their mechanical resistance.Instantly, a thought flashed through his mind. He pulled up the wooden chair, dropped into it, rolled a blank sheet of paper between the rollers, and began hammering the first letters into the white expanse: Welcome to Bedford by Clark Rudney: A blank sheet wound into the machine today, soon I'll be known as an author, they'll say. For here in Bedford my time will begin, ready for new adventures to win ...";
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
