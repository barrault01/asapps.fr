"use strict";

// English is rendered in HTML so all product content remains available without JavaScript.
const english = Object.fromEntries(
  [...document.querySelectorAll("[data-copy]")].map((el) => [
    el.dataset.copy,
    el.textContent,
  ]),
);
const translations = {
  en: english,
  fr: {
    gallery1Label: "01 / RADIO",
    gallery2Label: "02 / LECTEUR",
    gallery3Label: "03 / DÉCOUVRIR",
    gallery4Label: "04 / BLIND TEST",
    gallery5Label: "05 / WIDGETS",
    gallery6Label: "06 / VOTRE STYLE",
    skip: "Aller au contenu",
    navRadio: "Radio",
    navFeatures: "Fonctions",
    navPrivacy: "Confidentialité",
    download: "Obtenir Tunzika",
    heroEyebrow: "Un peu plus d’âme dans votre quotidien",
    listen: "Écoutez.",
    discover: "Découvrez.",
    play: "Jouez.",
    heroDescription:
      "Votre radio préférée. Ce morceau qui vous a séduit. Un quiz dont on ne se lasse pas. Le tout dans une app à l’esprit analogique.",
    heroNote: "La radio gratuite. Sans compte. Appuyez sur lecture.",
    captionRadio: "Une âme analogique.",
    captionModern: "Une nouvelle façon d’écouter.",
    day: "Jour",
    night: "Nuit",
    introEyebrow: "Pour l’amour de la musique",
    introStart: "Moins de recherches.",
    introEnd: "Plus de musique.",
    introText:
      "Une station familière pour commencer la journée. Une nouvelle chanson qui vous accompagne. Tunzika réunit le plaisir de la radio et celui de la découverte.",
    radioEyebrow: "À l’écoute",
    radioTitleStart: "Le monde est à l’antenne.",
    radioTitleEnd: "Trouvez votre fréquence.",
    radioText:
      "Explorez des milliers de radios en direct par pays, ville ou genre. Gardez vos favorites à portée de main et laissez la musique vous accompagner.",
    radioBullet1: "Vos stations préférées, en un geste",
    radioBullet2: "Lecture en arrière-plan et sur l’écran verrouillé",
    radioBullet3: "Un minuteur pour la dernière chanson du soir",
    radioBullet4: "Commandes CarPlay, Siri et Apple Watch",
    radioCta: "Trouvez votre prochaine radio préférée",
    radioLabel: "LA BANDE-SON DE VOTRE JOURNÉE",
    galleryEyebrow: "De plus près",
    galleryTitle: "Une petite app. Beaucoup à aimer.",
    galleryText:
      "Des radios, des découvertes et une platine qui aime la compétition. Faites le tour.",
    gallery1Title: "Là où vous en étiez.",
    gallery1Text: "Votre dernière station et vos favorites vous attendent.",
    gallery2Title: "Vous et la musique.",
    gallery2Text:
      "Un cadran inspiré des radios. De vraies stations. Sans distraction.",
    gallery3Title: "« C’est quoi, ce morceau ? »",
    gallery3Text: "Identifiez-le avec Shazam et retrouvez vos découvertes.",
    gallery4Title: "En trois notes ?",
    gallery4Text:
      "Choisissez une playlist. Trouvez le morceau. Testez votre oreille.",
    gallery5Title: "Toujours à portée.",
    gallery5Text: "Reprenez votre dernière station depuis l’écran d’accueil.",
    gallery6Title: "Comme chez vous.",
    gallery6Text:
      "Des thèmes, icônes et styles de stations qui vous ressemblent.",
    galleryHint:
      "Balayez ou utilisez les commandes pour explorer. Les captures présentent l’app avec des stations et morceaux de démonstration.",
    discoveryEyebrow: "Suivez votre curiosité",
    discoveryTitleStart: "Ce morceau.",
    discoveryTitleEnd: "Vous savez, maintenant.",
    discoveryText:
      "Parfois, les chansons vous trouvent avant que vous les trouviez. Identifiez la musique autour de vous avec Shazam, explorez Apple Music ou scannez le texte imprimé d’une pochette d’album.",
    discoveryText2:
      "Gardez les découvertes qui méritent une deuxième écoute au même endroit.",
    discoveryPowered: "Reconnaissance musicale avec Shazam",
    discoveryLabel: "LA CURIOSITÉ VOUS VA SI BIEN",
    quizEyebrow: "À vous de jouer",
    quizTitleStart: "Du goût, oui.",
    quizTitleEnd: "Et de la mémoire ?",
    quizText:
      "Transformez vos playlists Apple Music en Blind Test. Un extrait de 30 secondes : trouvez l’artiste, le titre, le film ou la série. Tapez votre réponse ou dites-la à voix haute.",
    quizNote:
      "La lecture Apple Music et le Blind Test nécessitent un abonnement Apple Music compatible.",
    everywhereEyebrow: "Au rythme de vos journées",
    everywhereStart: "Votre radio.",
    everywhereEnd: "À portée de main.",
    everywhere1Title: "Sur l’écran d’accueil.",
    everywhere1Text:
      "Les widgets rapprochent votre dernière station et vos favorites.",
    everywhere2Title: "Sur la route.",
    everywhere2Text:
      "Parcourez stations, favorites et écoutes récentes avec CarPlay.",
    everywhere3Title: "En un coup d’œil.",
    everywhere3Text:
      "Contrôlez la radio sur Apple Watch ou demandez à Siri de lancer la lecture.",
    privacyEyebrow: "Votre musique vous appartient",
    privacyTitleStart: "Le son est là.",
    privacyTitleEnd: "Les données restent ici.",
    privacyText:
      "Pas de compte Tunzika. Pas de publicité. Pas de serveur d’analyse. Votre vie musicale vous appartient.",
    privacy1Title: "Sans inscription.",
    privacy1Text:
      "Choisissez un pays, trouvez une station et écoutez. C’est tout.",
    privacy2Title: "Sur votre appareil.",
    privacy2Text:
      "Votre pays, vos radios favorites et votre historique sont stockés localement.",
    privacy3Title: "Vous choisissez l’accès.",
    privacy3Text:
      "Les autorisations du micro, de la caméra et de la musique sont demandées quand vous utilisez ces fonctions.",
    privacyCta: "Lire la politique de confidentialité",
    proEyebrow: "Commencez gratuitement. Restez pour la musique.",
    proTitleStart: "La radio est gratuite.",
    proTitleEnd: "Plus de place avec Pro.",
    proText:
      "Écoutez d’abord. Pour une plus grande collection et davantage de personnalisation, il y a Tunzika Pro.",
    freeTitle: "Appuyez sur lecture.",
    freeText: "Tout pour trouver votre station.",
    free1: "Radio gratuite dans le pays choisi",
    free2: "5 radios favorites",
    free3: "3 reconnaissances ou scans d’album au total",
    free4: "Lecture en arrière-plan et minuteur",
    freeCta: "Télécharger gratuitement",
    paidTitle: "À votre image.",
    paidText: "Un monde plus vaste de radios et de découvertes.",
    paid1: "Favorites illimitées",
    paid2: "Reconnaissances et scans d’album illimités",
    paid3: "Changez de pays d’écoute",
    paid4: "Tous les thèmes, icônes et styles de stations",
    paidNote: "Au mois, à l’année ou à vie. Tarifs dans l’app.",
    downloadEyebrow: "Votre prochaine favorite vous attend",
    downloadStart: "Trouvons",
    downloadEnd: "votre son.",
    downloadText:
      "Tunzika pour iPhone et iPad. Un peu plus de musique dans votre journée.",
    downloadNote:
      "La radio nécessite une connexion internet. Les flux sont fournis par des stations indépendantes.",
    faqTitleStart: "Quelques questions",
    faqTitleEnd: "que vous vous posez.",
    faqSupport: "Consulter l’assistance Tunzika",
    faq1Q: "Tunzika est-elle gratuite ?",
    faq1A:
      "Oui. La radio est gratuite dans le pays choisi, avec lecture en arrière-plan et minuteur. La version gratuite comprend 5 favorites et 3 reconnaissances de morceaux ou scans d’album au total. Tunzika Pro lève ces limites et donne accès aux changements de pays et à la personnalisation.",
    faq2Q: "Faut-il un abonnement Apple Music ?",
    faq2A:
      "Pas pour écouter la radio. La lecture Apple Music et le Blind Test nécessitent une autorisation et un abonnement Apple Music compatible. La disponibilité dépend de votre compte et de votre région.",
    faq3Q: "Puis-je écouter avec le téléphone verrouillé ?",
    faq3A:
      "Oui. La radio continue en arrière-plan, avec des commandes sur l’écran verrouillé et dans le Centre de contrôle. Vous pouvez aussi utiliser CarPlay, les raccourcis Siri et les commandes radio de l’Apple Watch.",
    faq4Q: "Puis-je écouter hors connexion ?",
    faq4A:
      "La radio en direct nécessite une connexion internet. Tunzika ne télécharge pas les flux radio ni les morceaux Apple Music pour une écoute hors connexion.",
    faq5Q: "Mon historique radio se synchronise-t-il ?",
    faq5A:
      "Votre pays, vos radios favorites et votre historique restent sur votre appareil. Tunzika n’exploite ni service de compte ni serveur d’analyse. Les fonctions musicales et de reconnaissance utilisent les services Apple. Les stations reçoivent les informations réseau habituelles lors de la connexion.",
    faq6Q: "Quelles langues sont disponibles dans l’app ?",
    faq6A:
      "Tunzika est disponible en anglais, français, portugais brésilien, espagnol, allemand et italien sur iPhone et iPad.",
    footerTagline: "Radio. Musique. Jeu.",
    support: "Assistance",
    privacyPolicy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
    footerCredit: "Créée par amour de la radio.",
    legalNote:
      "Tunzika est une app indépendante, sans affiliation avec Apple Inc. Apple Music, Shazam, CarPlay, Siri et Apple Watch sont des marques de leurs propriétaires respectifs. Les flux et les visuels des stations appartiennent à leurs fournisseurs.",
  },
  pt: {
    gallery1Label: "01 / RÁDIO",
    gallery2Label: "02 / PLAYER",
    gallery3Label: "03 / DESCUBRA",
    gallery4Label: "04 / BLIND TEST",
    gallery5Label: "05 / WIDGETS",
    gallery6Label: "06 / SEU ESTILO",
    skip: "Ir para o conteúdo",
    navRadio: "Rádio",
    navFeatures: "Recursos",
    navPrivacy: "Privacidade",
    download: "Baixar Tunzika",
    heroEyebrow: "Mais alma no som do seu dia",
    listen: "Ouça.",
    discover: "Descubra.",
    play: "Jogue.",
    heroDescription:
      "Sua rádio favorita. A música que conquistou você. Um quiz que dá vontade de continuar. Tudo em um app com alma analógica.",
    heroNote: "Rádio grátis. Sem conta. É só dar play.",
    captionRadio: "Alma de rádio clássica.",
    captionModern: "Um novo jeito de ouvir.",
    day: "Dia",
    night: "Noite",
    introEyebrow: "Feito por amor à música",
    introStart: "Menos procurar.",
    introEnd: "Mais curtir seu som.",
    introText:
      "Uma rádio conhecida para começar a manhã. Uma música nova que fica com você. Tunzika reúne o prazer do rádio e a alegria de descobrir.",
    radioEyebrow: "Sintonize",
    radioTitleStart: "O mundo está no ar.",
    radioTitleEnd: "Encontre sua frequência.",
    radioText:
      "Explore milhares de rádios ao vivo por país, cidade ou gênero. Mantenha suas favoritas por perto e deixe a música acompanhar seu dia.",
    radioBullet1: "Suas rádios favoritas a um toque",
    radioBullet2: "Reprodução em segundo plano e na Tela Bloqueada",
    radioBullet3: "Timer para a última música da noite",
    radioBullet4: "Controles no CarPlay, Siri e Apple Watch",
    radioCta: "Encontre sua próxima rádio favorita",
    radioLabel: "A TRILHA SONORA DO SEU DIA",
    galleryEyebrow: "Veja de perto",
    galleryTitle: "Um pequeno app. Muito para amar.",
    galleryText:
      "Rádios, descobertas e uma vitrola com espírito competitivo. Venha conhecer.",
    gallery1Title: "De onde você parou.",
    gallery1Text: "Sua última rádio e suas favoritas, prontas para tocar.",
    gallery2Title: "Você e a música.",
    gallery2Text:
      "Um dial inspirado no rádio. Emissoras reais. Sem distrações.",
    gallery3Title: "“Que música é essa?”",
    gallery3Text: "Reconheça com Shazam e reúna suas descobertas.",
    gallery4Title: "Sabe em três notas?",
    gallery4Text: "Escolha uma playlist. Acerte a música. Teste seus ouvidos.",
    gallery5Title: "Sempre por perto.",
    gallery5Text: "Retome sua última rádio direto da Tela de Início.",
    gallery6Title: "Sinta-se em casa.",
    gallery6Text: "Temas, ícones e estilos de estação com a sua cara.",
    galleryHint:
      "Deslize ou use os controles para explorar. As telas mostram o app com rádios e músicas de demonstração.",
    discoveryEyebrow: "Siga sua curiosidade",
    discoveryTitleStart: "Aquela música.",
    discoveryTitleEnd: "Agora você sabe.",
    discoveryText:
      "Algumas músicas encontram você primeiro. Reconheça a música ao seu redor com Shazam, pesquise no Apple Music ou escaneie o texto impresso de uma capa de álbum.",
    discoveryText2:
      "Guarde as descobertas que merecem ser ouvidas de novo em um só lugar.",
    discoveryPowered: "Reconhecimento de músicas com Shazam",
    discoveryLabel: "A CURIOSIDADE COMBINA COM VOCÊ",
    quizEyebrow: "Vamos jogar",
    quizTitleStart: "Bom gosto.",
    quizTitleEnd: "E a memória?",
    quizText:
      "Transforme suas playlists do Apple Music em um Blind Test. Você tem um trecho de 30 segundos. Acerte o artista, a música, o filme ou a série. Digite ou responda em voz alta.",
    quizNote:
      "A reprodução do Apple Music e o Blind Test exigem uma assinatura compatível do Apple Music.",
    everywhereEyebrow: "No ritmo do seu dia",
    everywhereStart: "Sua rádio.",
    everywhereEnd: "Sempre à mão.",
    everywhere1Title: "Na Tela de Início.",
    everywhere1Text:
      "Widgets deixam sua última rádio e suas favoritas a um toque.",
    everywhere2Title: "Na estrada.",
    everywhere2Text: "Explore rádios, favoritas e recentes com CarPlay.",
    everywhere3Title: "Em um olhar.",
    everywhere3Text:
      "Controle sua rádio pelo Apple Watch ou peça à Siri para tocar.",
    privacyEyebrow: "Sua música é assunto seu",
    privacyTitleStart: "Muito som.",
    privacyTitleEnd: "Discrição nos dados.",
    privacyText:
      "Sem conta Tunzika. Sem publicidade. Sem servidor de análise. Sua vida musical pertence a você.",
    privacy1Title: "Sem cadastro.",
    privacy1Text: "Escolha um país, encontre uma rádio e ouça. Só isso.",
    privacy2Title: "No seu aparelho.",
    privacy2Text:
      "Seu país, suas rádios favoritas e seu histórico ficam armazenados localmente.",
    privacy3Title: "Você escolhe o acesso.",
    privacy3Text:
      "As permissões de microfone, câmera e música são solicitadas quando você usa esses recursos.",
    privacyCta: "Ler a política de privacidade",
    proEyebrow: "Comece grátis. Fique pela música.",
    proTitleStart: "O rádio é grátis.",
    proTitleEnd: "Mais espaço com Pro.",
    proText:
      "Ouça primeiro. Se quiser uma coleção maior e mais personalização, existe o Tunzika Pro.",
    freeTitle: "É só dar play.",
    freeText: "Tudo para encontrar sua rádio.",
    free1: "Rádio ao vivo grátis no país escolhido",
    free2: "5 rádios favoritas",
    free3: "3 reconhecimentos ou scans de álbum no total",
    free4: "Reprodução em segundo plano e timer",
    freeCta: "Baixar grátis",
    paidTitle: "Com a sua cara.",
    paidText: "Um mundo maior de rádios e descobertas.",
    paid1: "Favoritas ilimitadas",
    paid2: "Reconhecimentos e scans de álbum ilimitados",
    paid3: "Troque seu país de escuta",
    paid4: "Todos os temas, ícones e estilos de estação",
    paidNote: "Mensal, anual ou vitalício. Preços no app.",
    downloadEyebrow: "Sua próxima favorita está por aí",
    downloadStart: "Vamos encontrar",
    downloadEnd: "seu som.",
    downloadText: "Tunzika para iPhone e iPad. Coloque mais música no seu dia.",
    downloadNote:
      "Rádio exige conexão com a internet. As transmissões são fornecidas por emissoras independentes.",
    faqTitleStart: "Algumas coisas",
    faqTitleEnd: "que você pode querer saber.",
    faqSupport: "Visitar o suporte Tunzika",
    faq1Q: "Tunzika é grátis?",
    faq1A:
      "Sim. Rádio ao vivo é grátis no país escolhido, com reprodução em segundo plano e timer. A versão gratuita inclui 5 favoritas e 3 reconhecimentos de músicas ou scans de álbum no total. Tunzika Pro remove esses limites e libera trocas de país e personalização.",
    faq2Q: "Preciso de uma assinatura do Apple Music?",
    faq2A:
      "Você não precisa do Apple Music para ouvir rádio. A reprodução do Apple Music e o Blind Test exigem acesso autorizado e uma assinatura compatível. A disponibilidade depende da sua conta e região.",
    faq3Q: "Posso ouvir com o telefone bloqueado?",
    faq3A:
      "Sim. O rádio continua tocando em segundo plano, com controles na Tela Bloqueada e na Central de Controle. Você também pode usar CarPlay, atalhos da Siri e controles de rádio no Apple Watch.",
    faq4Q: "Posso ouvir sem internet?",
    faq4A:
      "Rádio ao vivo exige conexão com a internet. Tunzika não baixa transmissões de rádio ou músicas do Apple Music para ouvir offline.",
    faq5Q: "Meu histórico de rádio sincroniza entre aparelhos?",
    faq5A:
      "Seu país, suas rádios favoritas e seu histórico ficam no seu aparelho. Tunzika não tem serviço de conta ou servidor de análise. Recursos opcionais de reconhecimento e música usam serviços da Apple, e as emissoras recebem informações padrão de rede quando você se conecta.",
    faq6Q: "Quais idiomas o app oferece?",
    faq6A:
      "Tunzika está disponível em inglês, francês, português brasileiro, espanhol, alemão e italiano para iPhone e iPad.",
    footerTagline: "Rádio. Música. Jogo.",
    support: "Suporte",
    privacyPolicy: "Privacidade",
    terms: "Termos",
    contact: "Contato",
    footerCredit: "Feito por amor ao rádio.",
    legalNote:
      "Tunzika é um app independente e não é afiliado à Apple Inc. Apple Music, Shazam, CarPlay, Siri e Apple Watch são marcas de seus respectivos proprietários. As transmissões e imagens das emissoras pertencem a seus fornecedores.",
  },
};
const localeMetadata = {
  en: {
    title: "Tunzika — Listen. Discover. Play.",
    description:
      "Your favorite radio, your next music discovery, and a playlist quiz. Meet Tunzika for iPhone and iPad. Free radio. No account. Just press play.",
    download: "Download Tunzika on the App Store",
    language: "Website language",
    previous: "Show previous app screen",
    next: "Show next app screen",
    gallery: "Swipeable app screenshot gallery",
    appearance: "App preview appearance",
  },
  fr: {
    title: "Tunzika — Écoutez. Découvrez. Jouez.",
    description:
      "Vos radios favorites, vos découvertes musicales et un quiz de playlists. Tunzika pour iPhone et iPad. Radio gratuite, sans compte.",
    download: "Télécharger Tunzika sur l’App Store",
    language: "Langue du site",
    previous: "Afficher la capture précédente",
    next: "Afficher la capture suivante",
    gallery: "Galerie de captures de l’app",
    appearance: "Apparence de l’aperçu",
  },
  pt: {
    title: "Tunzika — Ouça. Descubra. Jogue.",
    description:
      "Suas rádios favoritas, descobertas musicais e um quiz de playlists. Tunzika para iPhone e iPad. Rádio grátis, sem conta.",
    download: "Baixar Tunzika na App Store",
    language: "Idioma do site",
    previous: "Mostrar a tela anterior",
    next: "Mostrar a próxima tela",
    gallery: "Galeria de telas do app",
    appearance: "Aparência da prévia",
  },
};
const language = document.querySelector("#language");
function setLanguage(locale) {
  if (!translations[locale]) locale = "en";
  document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
  language.value = locale;
  for (const el of document.querySelectorAll("[data-copy]"))
    el.textContent =
      translations[locale][el.dataset.copy] ?? english[el.dataset.copy];
  const meta = localeMetadata[locale];
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  document.querySelector('meta[property="og:title"]').content = meta.title;
  document.querySelector('meta[property="og:description"]').content =
    meta.description;
  document.querySelector('label[for="language"]').textContent = meta.language;
  document
    .querySelector("#gallery-prev")
    .setAttribute("aria-label", meta.previous);
  document.querySelector("#gallery-next").setAttribute("aria-label", meta.next);
  document.querySelector("#gallery").setAttribute("aria-label", meta.gallery);
  document
    .querySelector(".appearance-picker")
    .setAttribute("aria-label", meta.appearance);
  document.querySelectorAll(".store-link").forEach((el) => {
    el.setAttribute("aria-label", meta.download);
    const badge = el.querySelector("img");
    badge.alt = meta.download;
    badge.src =
      locale === "fr"
        ? "assets/app-store-fr-fr.svg"
        : locale === "pt"
          ? "assets/app-store-pt-br.svg"
          : "assets/app-store.svg";
  });
}
language.addEventListener("change", () => {
  setLanguage(language.value);
  const url = new URL(window.location.href);
  if (language.value === "en") url.searchParams.delete("lang");
  else url.searchParams.set("lang", language.value);
  history.replaceState(null, "", url);
});
setLanguage(new URL(window.location.href).searchParams.get("lang") || "en");
window.addEventListener("popstate", () =>
  setLanguage(new URL(window.location.href).searchParams.get("lang") || "en"),
);

// App-only appearance preview; the presentation itself keeps its warm paper surface.
const appearanceButtons = document.querySelectorAll("[data-appearance]");
let previewRequest = 0;
for (const button of appearanceButtons)
  button.addEventListener("click", async () => {
    const request = ++previewRequest;
    const mode = button.dataset.appearance;
    const previews = [...document.querySelectorAll("[data-preview]")];
    await Promise.all(
      previews.map(
        (el) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = resolve;
            image.src = `assets/${el.dataset.preview}-${mode}.webp`;
          }),
      ),
    );
    if (request !== previewRequest) return;
    previews.forEach((el) => {
      el.src = `assets/${el.dataset.preview}-${mode}.webp`;
    });
    appearanceButtons.forEach((el) =>
      el.setAttribute("aria-pressed", String(el === button)),
    );
  });

const gallery = document.querySelector("#gallery");
const previous = document.querySelector("#gallery-prev");
const next = document.querySelector("#gallery-next");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function stepGallery(direction) {
  const card = gallery.querySelector(".gallery-card");
  const step =
    card.getBoundingClientRect().width +
    parseFloat(getComputedStyle(gallery).gap);
  gallery.scrollBy({
    left: direction * step,
    behavior: reducedMotion.matches ? "instant" : "smooth",
  });
}
function updateGalleryControls() {
  previous.disabled = gallery.scrollLeft < 4;
  next.disabled =
    gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 4;
}
previous.addEventListener("click", () => stepGallery(-1));
next.addEventListener("click", () => stepGallery(1));
gallery.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    stepGallery(event.key === "ArrowRight" ? 1 : -1);
  }
});
gallery.addEventListener("scroll", updateGalleryControls, { passive: true });
window.addEventListener("resize", updateGalleryControls, { passive: true });
updateGalleryControls();
