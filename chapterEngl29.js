let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "When Liz entered the kitchen, the usual majestic coldness that her mother wore like an invisible fur coat in the mornings had vanished without a trace. Eyleen sat slumped on the wooden kitchen chair, her shoulders pulled deep and forward, her gaze fixed rigidly on the empty breadbasket. The pastry bag lay carelessly on the floor, two bread rolls having rolled out. What frightened Liz most, however, was Eyleen’s face. The usually flawless mask of the former musical beauty had completely dissolved. Smudges of black mascara ran like dried riverbeds through the powder on her cheeks, and a rhythmic, almost animalistic wailing escaped her throat. Eyleen? Liz gasped. The excitement of her upcoming date with Clark was wiped away in an instant. Her old, deeply ingrained defense mechanisms took over immediately: whenever Eyleen suffered, Liz had to fix the world. Liz rushed forward, dropping to her knees before the chair and wrapping her arms around her mother’s trembling shoulders. She pushed aside the thought of how often those same shoulders had turned away whenever she herself had needed comfort. What on earth happened? Talk to me. Eyleen clung to Liz’s blouse — so tightly that the fabric tautened. Her breath smelled of bitter bile. He’s dead, Liz, she sobbed, her voice shrill and theatrical, yet carried by genuine horror. Just dead. They were all talking about it at the bakery. A police operation at the harbor... an accident. He didn't survive. Who? Liz’s heart skipped a beat. Surely not. Aaron, Eyleen groaned, throwing her head back dramatically. Sergeant Baker! Our Aaron Baker! An icy shiver ran down Liz’s spine. Sergeant Aaron Baker. The whole neighborhood knew him; everyone loved him. He had been the prototype of the good-natured, incorruptible policeman who escorted drunks safely home at night instead of locking them up, and who bought hot chestnuts for the street children in winter. Liz had valued him too; he always had a kind word for her when she returned from the wholesale market laden with heavy bolts of fabric. A man without enemies, without a family of his own and now he was just gone. Oh God, Liz whispered, a genuine tear forming in her eye. Poor Aaron Ba. But Eyleen’s grief brooked no rivals. Promptly, she straightened up a bit, pushing Liz away with a gentle but firm shove, and pressed a handkerchief to her eyes. It is a tragedy for art, for culture, for us all! He was the only one left who possessed true decency. And he has not a soul in this world. No one. I cannot allow him to be buried like a nameless dog. I will take charge of this, Liz. I will organize the funeral. I owe it to my reputation and to his memory. Liz blinked. Aaron Baker had been a simple sergeant, not a theater director. But she did not dare object. Instead, she stroked her mother’s back reassuringly. That is. that is very generous of you, Mother. Eyleen’s tears dried noticeably, replaced by that familiar, feverish gleam that always came over her whenever she could stage a new project. She grabbed Liz by the wrist; her grip was surprisingly painful. You must help me. I need a dress. A mourning dress appropriate for this tragedy. Nothing off the rack, Liz, you must get to work immediately. Black silk crêpe, high-necked, but with that flowing drape in the skirt like the one you made for the mayor's wife the other day. I must face the congregation with dignity. But tonight I have. Liz began cautiously, the image of Clark’s smiling face before her eyes. What do you have tonight? Eyleen snapped, her voice instantly sharp. A bit of free time? While a hero of this town lies dead in the morgue? How can you be so selfish, Liz? Always thinking only of your own pleasure. Your father would turn in his grave. Liz swallowed hard. Guilt, that familiar, heavy poison, spread through her chest. All right, she said quietly. I’ll get to the pattern cutting later. Good, Eyleen decreed, smoothing her hair, already entirely the director again. And one more thing. You must write the funeral oration. I lack the strength to put those heartbreaking words on paper. But hold back on your usual, wooden phrases. It must be moving. I. I can try to write something down, Liz said uncertainty. But perhaps we should ask Clark? He is an author, after all; he will surely find much better words than I can. Eyleen’s face darkened instantly. Clark? That hack? That embittered wannabe man of letters? He has absolutely no sense for the true tragedies of life. But fine, ask him. If he possesses a shred of decency, he will render his community this service. A few hours later, Liz sat in the Park Café. She was wearing her freshly ironed blue dress, but the hoped-for lightness had vanished. When she told Clark of Aaron Baker’s death and finally relayed Eyleen’s request, his face froze. He stirred his coffee slowly, almost mechanically, then shook his head. No, Liz. I will not write this speech, he said. But why not? You are so good with words. And everyone respected Sergeant Baker. Not everyone, Clark interrupted gently, but with a seriousness that brooked no argument. I don’t want to justify myself, but in this case, I find myself unable to put anything on paper. I’m sorry. Liz felt torn. Clark’s cold refusal hurt her, because she wanted to preserve Baker’s memory. At the same time, she sensed that behind his rigid stare lay a secret he was unwilling to share. When she came home late in the evening, she sat exhausted at the kitchen table. With trembling fingers, she composed the speech herself. She wrote of Baker’s helpfulness, of the warm chestnuts for the children, of his quiet, dependable manner. It was an honest, human speech. The next morning, she placed the written sheet of paper next to Eyleen’s coffee. Her mother, whose hair was already perfectly styled once more as she awaited the first fitting of the black silk dress, took the paper with dainty fingers. Her gaze skimmed the lines, her eyebrows lifting a bit higher with every sentence. Finally, she let the paper drop onto the table with a contemptuous snort. This is pathetic, Liz, she said coldly. 'A diligent officer who did his duty'? 'He bought chestnuts'? What is this supposed to be, an essay for primary school? This is utterly devoid of class! It lacks any creative merit. The man was a giant of everyday life, a guardian angel in uniform, a rock in the surf of our decaying epoch! It was what I felt, Mother. Liz whispered. Your feelings are as shallow as a puddle, my dear, Eyleen countered, rising majestically to reach for a fresh sheet of paper and her fountain pen. I see that if you want anything done, you must do it yourself. If you want to see the eagle fly, you don't send a dove. Liz stood by in silence as Eyleen began to write with grand gestures and theatrical sighs. Every word the pen scratched onto the paper dripped with exuberant pathos, artificial sorrow, and above all, the self-aggrandizement of a speaker who supposedly felt the loss more deeply than anyone else. In the corner of the room hung her mother’s black mourning dress. Liz cast a glance at the garment, upon which she had worked all night until her fingers ached. Yet in her mother’s eyes, she was once again nothing but the inadequate, soulless extra failing in the shadow of a great tragedy.";
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
