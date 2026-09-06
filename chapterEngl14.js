let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Edgar, what exactly happened today? Clark tried to pierce through the zombie-like fog that enveloped Edgar. Edgar sounded like a broken record. I’ve already told you. I admitted to pushing Davies into the saw, the words echoed hollowly from his mouth. But last time, you said you weren't even on the premises when the murder took place, Clark countered. I must have blocked it all out. The court psychologist explained it to me. A sort of memory blackout. Edgar stared down at the table. He was doing everything he could to avoid looking his sister or Clark in the eye. Clark shook his head. What business did that wretched court psychologist have meddling here again? When did he visit you, this court psychologist? Clark demanded to know. He came a few times. Always along with the sergeant. They helped me remember, Edgar conceded, looking up. Liz, I’m so sorry for what I’ve put you both through. Liz began to weep, but Clark had to stay focused on Edgar. Right, the confession. What did you confess to? Tell me, word for word. That I attacked Davies. With an iron bar, Edgar explained coldly. And why on earth would you do that? Clark still couldn't make sense of the boy. Well, because I needed money. A lot of money, urgently. I asked Davies for an advance, but he refused. While he was out, I went into his office to help myself to something. I searched everywhere, but there was nothing there. So I waited for him to come back. I told him I needed money. 'Give me some.' But Davies wouldn't budge. That's when I flew at him. I struck him. But he fought back. So I grabbed the iron bar and let him have it, right across the head too. Right where the sergeant says they found all those hematomas on the corpse. And then I just shoved him into the saw. He screamed like a stuck pig, George did, blood splattering everywhere. Onto my jacket, too. So I took off the jacket I’d been wearing during the struggle, threw it onto the chopping block, and ran for it. Down by the river, I washed all the blood off my hands. There, Mr. Caseworker, now you know the truth. Edgar fell silent, his account finished. Liz cried out in anguish. She couldn't bear to listen to such atrocities—least of all coming from her own brother. The guard decided it would be best for Liz to leave the room. Clark was now alone with Edgar and the guard. Alright, Edgar, Clark resumed the conversation. So you murdered your boss in cold blood. There was a pause. Edgar, tell me about growing up. What was it like with your father, your mother? Tell me about those days, Clark prompted, encouraging the silent boy. Edgar cleared his throat. He hadn't expected a question like that. Well, we were quite a lively family back then, I suppose. My mother gave up her musical career just for me. But she still sang a lot around the house. She sang me a lullaby every single night. I was her pride and joy, and she tried to give me everything I wanted. Edgar truly began to brighten up, continuing his tale: My father loved me too. He taught me a lot of handy tricks. He was a painter, you know. But he didn't just know about colors; he knew how to build wooden frames, carve little things, tinker about. It was with him that I discovered my love for craftsmanship. Yes, and my passion for nature. We often went on trips together, just Papa and I. Mother found it too dull. And when I was four, my sister Liz came along. Clark could tell that Edgar could go on for hours, but he felt the guard's eyes on the back of his neck, and his time was running short. Splendid, Edgar. Now tell me, when did your money troubles begin? Clark pressed. Money troubles? What money troubles? Edgar looked utterly taken aback. I’ve never had money troubles. My mother always slipped me a bit of pocket money when I was a lad, and then I did my apprenticeship and earned my own wage. I live in a cheap neighborhood. My mother threw a terrible fit about it. 'You can't possibly live in a place like that,' she said. But it’s enough for me. I get by just fine. Edgar clearly didn't understand Clark's question. I see, Clark mused. And this iron bar, where did you get it from? he asked, diving back in. What iron bar? Edgar was bewildered. The iron bar you grabbed in front of the saw. No idea. It must have been lying around, Edgar muttered. What did this iron bar look like? Clark probed deeper. I don't know. How should I know? Edgar was growing resentful. Didn't you strike him with the iron bar? Clark was relentless now. Strike him? Edgar stared at him. This conversation is just going round in circles, the guard interjected. Besides, the half hour is up. If I could ask you to leave now. The guard's voice was no request. It was an order. Clark said his goodbyes and left the prison. Liz was nowhere to be seen. Presumably, she had walked home alone. But Clark had no time to look for her. Something here was profoundly wrong, and he had to get to the bottom of it before the trial commenced tomorrow, he owed Edgar that much.";
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
