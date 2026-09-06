let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Sunday passed. Monday started gray. A sharp knock sounded at the apartment door. Eyleen hurried into the hallway, her silk robe billowing behind her. Standing on the threshold was a gaunt man in a dark frock coat. It was Dr. Vance, the executor of the estate. Eyleen’s eyes lit up. She hastily, almost breathlessly, ushered him into the parlor. Dr. Vance, what a surprise! she chirped, hands clasped excitedly against her chest. In her mind’s eye, she could already see Aaron Baker’s bank accounts and his handsome house. Dr. Vance remained stiff, placing his leather briefcase on the table and adjusting his spectacles. Mrs. Tyler. I must insist that all persons registered at this address be present for the reading of the will. It is a matter of formality. We shall meet at precisely four o'clock this afternoon directly at the house of the deceased for the official reading. Eyleen instantly swept into the small, stuffy sewing room where Liz was currently working on a cuff. Liz! Put that down! she commanded, her voice trembling with greed. We must be at Aaron Baker’s house by four. The executor is here. Liz set down her shears and furrowed her brow. We? Why me? What do I have to do with it? Why, it is completely self-evident! Eyleen snapped at her, already adjusting her hat in the mirror. How often did we help poor Aaron? You tailored his fine waistcoats, mended his trousers. And I. after all, I gave him my undivided attention. My time and my spiritual support! What kind of supp. Liz began, but Eyleen was already out the door. Her hairdresser was waiting. After all, one had to look presentable for an inheritance. At four o'clock, Dr. Vance opened the heavy oak door of Aaron Baker’s house. The scent of floor wax and cold pipe tobacco greeted them. Eyleen immediately sat on the plush sofa, her back poker-straight, ready for the blessing. Liz remained standing uncertainly by the doorframe. Before I read, Dr. Vance began, unfolding a document, the coroner sent me the final confirmation this afternoon. Sergeant Baker’s death was beyond a doubt an accident. A tragic fall in the line of duty. Eyleen waved her hand dismissively. Death was yesterday. Today was about the money. Dr. Vance cleared his throat. I come to the Last Will and Testament of the deceased. I, Aaron Baker, bequeath my entire estate, both real and personal property, namely this residence and all savings in my bank accounts. to Miss Liz Tyler. A dead silence fell over the room. Eyleen’s eyes flew open. Her lips formed a silent 'O' before a shrill sound burst from her. And me?! What about me? This must be a mistake! A sick joke! Dr. Vance ignored the outburst. He gave the large envelope another vigorous shake over the wooden table. A small, white envelope slid out. Eyleen’s hand shot forward like a snake striking its prey. But the executor was faster. He intercepted the letter. This one is strictly for Miss Liz, he said coldly, handing Liz the missive and placing the heavy, iron house key beside it. My condolences. And my congratulations. Good day, ladies. He packed his briefcase and left them to the silence of the dead man's house. Liz stared at the key in her hand. Why me? she whispered. Why did he leave it all to me? Eyleen sprang up, her cheeks blotchy with suppressed rage. Well! she screamed, her voice cracking. You certainly worked hard for the police, didn't you? Sewing curtains, mending uniforms. Hard to believe how dearly that man paid for such cheap sewing services! She stepped right up to Liz, her eyes nearly bulging from their sockets with jealousy and vicious suspicion. Or was there something more going on between you two? Did you throw yourself at that old man behind my back? Speak up, you snake! Liz turned deathly pale. The accusation hit her like a punch to the gut. Mother, stop! He was like an. like an uncle. Nothing happened! Of course, Eyleen hissed, turning away and beginning to pace the room furiously, taking stock of the items that now belonged to her daughter. Once again, she seized the opportunity to tear Liz down and shred her tiny morsel of happiness with the sharpest words she could find. Eventually, however, the storm subsided. They were left alone in the house. The light grew dim. Liz walked over to a corner of the living room where a row of photographs in dark wooden frames hung on the wall. Her gaze caught on a large group portrait. Look, Mother, Liz said softly, trying to break the icy atmosphere. That was Aaron Baker’s forty-fifth birthday. Eyleen reluctantly stepped closer, her arms crossed over her chest. In the picture, half the community was crowded around a laughing Aaron Baker. Pat O’Neill stood near the edge, her hair neatly teased. Mrs. Gable sat on the arm of a chair, looking much younger than she did today. Oh, Eyleen murmured, and for a brief moment, genuine melancholy flickered in her features. Some of them aren't even around anymore. Look. my goodness, Edgar is in it too! How handsome my boy looked back then. An angel. An absolute prince of a man. Liz ignored the paean to the favorite son. Her finger traced across the glass to Pat's face. Pat O’Neill. Do you remember how she came racing down the street on her bicycle recently, screaming? Completely out of her mind? Eyleen’s face instantly froze over again. She roughly slapped Liz’s hand away from the picture. I don't want to hear another word about that! she barked at her daughter, her eyes flashing dangerously. They wanted to frame my Edgar for murder! That innocent, pure boy! Liz, the matter is closed. Forget it once and for all. Edgar is and remains innocent, no matter what that crazy O’Neill woman was screaming about! Liz drew her hand back. She felt the unopened letter in her pocket. The lines had been drawn. The house belonged to her, but her mother’s chains felt heavier than ever in that moment.";
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
