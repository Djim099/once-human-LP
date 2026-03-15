
(function(){
'use strict';

/* ---- CONFIG ---- */
var CTA_URL='https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=16314';

/* A/B variants removed — single fixed copy */

/* ---- TRANSLATIONS ---- */
var I18N={
  en:{
    site_name:'Once Human',
    hero_eyebrow:'Free to Play · Open World Survival',
    hero_title:'Something in the Mist Is',
    hero_title2:'Watching You',
    hero_sub:'The contamination rewrote everything you knew about survival. The rules are gone. The world is hostile. And something out there is patient.',
    hero_cta:'Enter If You Dare — It\'s Free',
    hero_micro:'Free to play on Steam · Windows PC · Optional in-game purchases.',
    watch_trailer:'▶ Watch Trailer',
    proof_1:'Players Worldwide',proof_2:'Massive Contaminated Map',proof_3:'No Paywalls, All Skill',
    proof_4:'Your Rules',proof_5:'Optional PvP',proof_6:'Windows PC',
    core_eye:'What You\'ll Actually Do',
    core_title:'The Loop That <span class="c">Never Gets Old</span>',
    core_lead:'Every session in Once Human builds on the last. Explore. Scavenge. Build. Fight. Level up. Repeat — but it never feels like a treadmill.',
    c1_h:'Explore the Mist',c1_p:'Venture into contaminated zones. Every biome hides different threats, loot tiers, and world events.',
    c2_h:'Scavenge & Craft',c2_p:'Strip abandoned facilities. Combine raw materials into gear that changes how you play.',
    c3_h:'Build Your Base',c3_p:'Claim territory. Raise walls. Your base is a statement about who you are in this world.',
    c4_h:'Fight & Overcome',c4_p:'Face Stardust Aberrations and corrupted bosses. Combat rewards coordination — not button mashing.',
    c5_h:'Research & Upgrade',c5_p:'Unlock blueprints, evolve your Metahuman abilities, push your power ceiling.',
    c6_h:'Connect or Conquer',c6_p:'Join a squad for raids or establish dominance as a lone operator.',
    s1:'Open world to explore',s2:'Craftable items',s3:'Co-op squads',s4:'No entry barrier',
    cta1_h:'The Mist Has Been Waiting',cta1_p:'Thousands of survivors are already in. Will you enter prepared — or become another cautionary tale?',cta1_btn:'Enter the World — It\'s Free',
    world_eye:'The Setting',world_title:'A World That Wants <span class="c">You Dead</span>',
    world_lead:'Stardust didn\'t just contaminate the environment. It rewrote biology and gave birth to things that don\'t play by any rules you know.',
    tag_danger:'Danger Zone',tag_mystery:'Unknown Entity',tag_world:'World Event',
    t1_h:'The Contaminated Zones',t1_p:'Dense mist, warped physics, and mutant density that scales with how deep you push.',
    t2_h:'Stardust Aberrations',t2_p:'These weren\'t always monsters. Stardust rewrote them. Now they take everything from you if you\'re unprepared.',
    t3_h:'Dynamic World Events',t3_p:'Anomaly storms roll in without warning. No two nights in the open world are the same.',
    why_eye:'Why Players Stay',why_title:'This World Gets <span class="c">Under Your Skin</span>',
    w1_h:'Mystery That Actually Pays Off',w1_p:'Layered lore — abandoned research logs, encrypted transmissions, corrupted AI terminals. Players who dig find answers.',
    w2_h:'Danger That Feels Real',w2_p:'Losing your loadout to a Stardust storm changes your evening. It creates genuine tension and genuine triumph.',
    w3_h:'Progression That Compounds',w3_p:'Every hour you invest shifts the experience. The ceiling doesn\'t stop rising.',
    w4_h:'A Map Worth Getting Lost In',w4_p:'Ghost towns, bunkers, flooded lowlands. Every corner rewards the curious.',
    w5_h:'Base Building With Soul',w5_p:'Your base is the physical record of your time in the world — every room a decision.',
    w6_h:'Co-op That Changes Everything',w6_p:'A boss that destroyed your solo run becomes a highlight reel with four friends.',
    play_eye:'Your Identity',play_title:'Choose Your <span class="c">Playstyle</span>',
    play_lead:'Once Human doesn\'t lock you into a class. Your playstyle is defined by your gear and the choices you make.',
    tab_lone:'Lone Operator',tab_builder:'Master Builder',tab_squad:'Squad Leader',tab_hunter:'Boss Hunter',
    lone_h:'The Ghost of the Mist',lone_p:'You move through contaminated zones with surgical precision. Solo play is a different — and often more intense — experience.',
    lone_p1:'Stealth Routes',lone_p2:'Compact Builds',lone_p3:'Self-Sufficiency',lone_p4:'Agile Loadouts',
    builder_h:'Architect of the Ruins',builder_p:'Your base is an engineering statement. Construction isn\'t a minigame — it\'s the whole point.',
    builder_p1:'Complex Layouts',builder_p2:'Power Grid Design',builder_p3:'Max Efficiency',builder_p4:'Crafting Chains',
    squad_h:'Force Multiplier',squad_p:'Coordinating ability combos and managing shared resources — you turn four players into something unstoppable.',
    squad_p1:'Ability Combos',squad_p2:'Shared Loot',squad_p3:'Boss Raids',squad_p4:'Territory Hold',
    hunter_h:'Apex of the Food Chain',hunter_p:'Bosses are your benchmark. You spec for the encounter and return until you hit clean kills.',
    hunter_p1:'Boss Patterns',hunter_p2:'Min-Max Builds',hunter_p3:'Elite Loot',hunter_p4:'Deviant Powers',
    base_eye:'Territory System',base_title:'Your Base Is Your <span class="c">Declaration</span>',
    base_p1:'Territory isn\'t just a spawn point. It\'s the physical manifestation of every hour you\'ve invested.',
    base_p2:'Manage power lines, build workshops, set up automated production, and fortify against anomalies.',
    bf1_h:'Modular Construction',bf1_p:'Hundreds of structural pieces. Full creative control over footprint and height.',
    bf2_h:'Power & Automation',bf2_p:'Wire up generators, lights, workbenches and automated storage systems.',
    bf3_h:'Deviants & Defense',bf3_p:'Deploy Deviants as base companions. Build turrets, traps, and layered walls.',
    craft_eye:'Progression System',craft_title:'From Scrap to <span class="c">Legend</span>',
    craft_lead:'Once Human\'s crafting tree is an entire game in itself. Every tier reshapes your capability.',
    cr1_h:'Raw Survival',cr1_p:'Stone tools, cloth armor, basic shelters.',
    cr2_h:'Industrial Age',cr2_p:'Metal workbenches, firearms, structural reinforcement.',
    cr3_h:'Tech Synthesis',cr3_p:'Electronics, vehicle parts, automated systems.',
    cr4_h:'Stardust Fusion',cr4_p:'Contaminated alloys, ability augments, exotic weapon mods.',
    cr5_h:'Metahuman Mastery',cr5_p:'Deviant-forged equipment and reality-bending gear.',
    wpn_eye:'Arsenal',wpn_title:'Your Loadout, <span class="c">Your Signature</span>',
    wpn_lead:'Mods, blueprints, and Deviant augments create builds that feel genuinely different.',
    wpn1_h:'Precision Rifles',wpn1_p:'Long-range lethality. Built for patience.',
    wpn2_h:'Shotguns',wpn2_p:'Up close and devastating. Zero forgiveness. Maximum satisfaction.',
    wpn3_h:'Energy Weapons',wpn3_p:'Stardust-powered. Status effects that contaminated units can\'t resist.',
    wpn4_h:'Explosives',wpn4_p:'When you want a large part of the map to disagree with something\'s existence.',
    mode_eye:'Game Modes',mode_title:'Your World, <span class="c">Your Rules</span>',
    pve_badge:'PvE Focus',pve_h:'Survival Mode',pve_p:'You against the world. Contaminated zones, aberrations, and the ever-present threat of Stardust anomalies.',
    pve_f1:'Full open world exploration',pve_f2:'Co-op enabled, PvP optional',pve_f3:'Progressive story missions',pve_f4:'World events and boss raids',pve_f5:'Full crafting and building access',
    pvp_badge:'PvP Optional',pvp_h:'Territory Wars',pvp_p:'When the PvE world isn\'t enough conflict. Hold resource nodes, raid rival bases, and defend your investments.',
    pvp_f1:'Optional — never forced',pvp_f2:'Territory control mechanics',pvp_f3:'Alliance warfare',pvp_f4:'Resource node contention',
    cta2_h:'Your Loadout Won\'t Build Itself',cta2_p:'The best builds were designed by players who started exactly where you are. Free to download.',cta2_btn:'Start Building Your Survivor',
    coop_eye:'Co-op',coop_title:'Some Moments Only Happen <span class="c">Together</span>',
    coop_lead:'Once Human\'s co-op was designed to create its own distinct, shareable moments.',
    cm1_h:'World Boss First Kill',cm1_p:'Four players, coordinated abilities, a boss fight that took three attempts. Legendary.',
    cm2_h:'Base Under Siege',cm2_p:'A Stardust anomaly hits at 2am. Your squadmate logs in. You hold the perimeter. With minutes to spare.',
    cm3_h:'The Deep Zone Run',cm3_p:'A full squad pushes into a Tier 5 zone. Everyone comes back changed.',
    cm4_h:'Resource Division',cm4_p:'One crafts. One scouts. One defends. One researches. When it clicks, it\'s extraordinary.',
    guide_eye:'Getting Started',guide_title:'Your First <span class="c">Hour</span>',
    guide_lead:'Once Human doesn\'t bury you in tutorials. Here\'s what to focus on first.',
    gs1_h:'Land and Breathe',gs1_p:'Collect basic resources. Ignore the urge to explore immediately. You need a workbench first.',
    gs2_h:'Claim Your Territory',gs2_p:'Use your Territory Marker early. Find elevated ground near water.',
    gs3_h:'Build the Core Four',gs3_p:'Workbench, Furnace, Storage, Shelter. These are your minimum viable base.',
    gs4_h:'Find Your First Deviant',gs4_p:'Capture your first Deviant early — even a low-tier one makes exploration safer.',
    gs5_h:'Enter the First Contaminated Zone',gs5_p:'Once you have basic armor and a ranged weapon, push in. What you find will answer your first real questions.',
    cmp_eye:'Why Once Human',cmp_title:'How It <span class="c">Stands Apart</span>',
    cmp_feature:'Feature',cmp_oh:'Once Human',cmp_game2:'Typical Survival A',cmp_game3:'Typical Survival B',
    cmp_r1:'Free to Play',cmp_r2:'Open World Size',cmp_r3:'Lore & Narrative',cmp_r4:'PvE-First Design',
    cmp_r5:'Base Building Depth',cmp_r6:'Deviant/Companion System',cmp_r7:'Regular Content Updates',
    gal_eye:'Screenshots',gal_title:'See the <span class="c">World</span>',
    trail_eye:'Preview',trail_title:'Watch the <span class="c">Contamination</span>',trail_label:'Official Gameplay Trailer',
    cta3_h:'Still on the Fence?',cta3_p:'Once Human is free. Nothing to lose and an entire world to gain.',cta3_btn:'Play Free — Start Now',cta3_sub:'Free to play on Steam · Windows PC',

    req_eye:'Before You Install',
    req_title:'Can Your PC <span class="c">Run It?</span>',
    req_lead:'Built for Windows. Best experienced with enough free space, stable internet, and an SSD.',
    req_min:'Minimum',req_min_title:'What You Need to Start',req_rec:'Recommended',req_rec_title:'Best Way to Experience It',
    req_os:'OS',req_cpu:'Processor',req_ram:'Memory',req_gpu:'Graphics',req_dx:'DirectX',req_net:'Network',req_storage:'Storage',req_notes:'Notes',
    req_min_os:'Windows 10 64-bit Operating System',req_min_cpu:'Intel Core i5-4460',req_min_ram:'8 GB RAM',req_min_gpu:'Nvidia GTX 750ti 4G / AMD Radeon RX550',req_min_dx:'Version 11',req_min_net:'Broadband Internet connection',req_min_storage:'90 GB available space',req_min_notes:'SSD is highly recommended',
    req_rec_os:'Windows 10 64-bit Operating System',req_rec_cpu:'Intel Core i7-7700',req_rec_ram:'16 GB RAM',req_rec_gpu:'Nvidia GTX 1060 6G / AMD Radeon RX 580 2304SP / Intel ARC A380',req_rec_dx:'Version 12',req_rec_net:'Broadband Internet connection',req_rec_storage:'90 GB available space',req_rec_notes:'SSD is highly recommended',
    req_note:'Windows 10/11 style experience • Broadband internet required • 90 GB free space • SSD highly recommended',
    rev_eye:'Steam Trust',rev_title:'What Players Are Saying on <span class="c">Steam</span>',rev_lead:'A quick snapshot of current Steam sentiment plus a few public player review excerpts.',
    rev_recent_label:'Recent Reviews',rev_recent_value:'Very Positive',rev_recent_desc:'Recent Reviews on Steam are currently rated Very Positive.',
    rev_eng_label:'English Reviews',rev_eng_value:'Mostly Positive',rev_eng_desc:'English Reviews on Steam are currently rated Mostly Positive.',
    rev_note:'Sentiment and excerpts based on public Steam reviews and the official Steam page.',
    faq_eye:'Questions',faq_title:'Everything You Want to <span class="c">Know</span>',
    faq1_q:'Is Once Human really free to play?',faq1_a:'Yes. Steam lists Once Human as Free To Play.',
    faq2_q:'Can I play solo?',faq2_a:'Solo play is fully supported and deliberately designed to be satisfying.',
    faq3_q:'Is PvP forced on me?',faq3_a:'No. PvP is opt-in. The default experience is PvE-focused.',
    faq4_q:'What are Deviants?',faq4_a:'Anomalous entities you capture and bond with. Companions, base workers, and ability augmenters.',
    faq5_q:'How does base building work?',faq5_a:'Claim territory, build modularly — walls, floors, power infrastructure, turrets, traps.',
    faq6_q:'Is there a story?',faq6_a:'Both narrative and sandbox. A genuine mystery about Stardust that rewards engagement.',
    faq7_q:'What are the PC requirements?',faq7_a:'Minimum: Windows 10 64-bit, i5-4460, 8 GB RAM, GTX 750ti 4G / RX550, DirectX 11, broadband internet, 90 GB storage. Recommended: i7-7700, 16 GB RAM, GTX 1060 6G / RX 580 2304SP / Intel ARC A380, DirectX 12, broadband internet, 90 GB storage. SSD is highly recommended.',
    faq8_q:'Does it have regular updates?',faq8_a:'Steam shows update history and added content, but timing and scope can change. Check the official Steam page for the latest updates.',
    faq9_q:'Will I lose progress if my base is destroyed?',faq9_a:'Steam highlights territory building and relocation, but exact destruction and persistence rules can vary by mode, server, and season.',
    faq10_q:'How large is the game world?',faq10_a:'Steam describes a strange post-apocalyptic open world with multiple biomes and underground facilities, but it does not publish an official map size on the store page.',
    faq11_q:'Are there in-game purchases?',faq11_a:'Yes. Steam lists In-App Purchases and notes chance based in-game purchases, online interactivity, and in-game chat.',
    re1:'Free To Play',re2:'MMO Features',re3:'Online Co-op',re4:'Online PvP',re5:'In-App Purchases',re6:'Windows PC',
    sticky_label:'Once Human is Live',sticky_reassure:'Free to play · Windows PC',sticky_btn:'Play Free →',
    footer_brand_p:'A multiplayer open-world survival experience in a contaminated future. Build, fight, uncover the truth, and play free on Steam.',
    footer_col1:'Play',footer_play1:'Download Free',footer_play2:'Game Modes',footer_play3:'Playstyles',footer_play4:'New Player Guide',
    footer_col2:'Explore',footer_ex1:'The World',footer_ex2:'Crafting',footer_ex3:'Weapons',footer_ex4:'Base Building',
    footer_col3:'Legal',footer_priv:'Privacy Policy',footer_terms:'Terms of Use',footer_faq:'FAQ',
    footer_copy:'© 2024 Once Human. All rights reserved. Trademarks are property of their respective owners.',
    footer_priv2:'Privacy',footer_terms2:'Terms',
    priv_title:'Privacy Policy',
    priv_p1:'This landing page is operated by an independent affiliate partner. We collect only anonymized analytics data via Google Analytics 4.',
    priv_h2:'Data We Collect',priv_p2:'GA4 collects anonymized page views, session data, and interaction events to optimize this page.',
    priv_h3:'Cookies',priv_p3:'We use localStorage for language/theme preferences. GA4 may set analytics cookies.',
    priv_h4:'Third-Party Links',priv_p4:'Clicking to the Once Human platform subjects you to their privacy practices.',
    priv_h5:'Your Rights',priv_p5:'You can request access or deletion of your data. Contact the site operator for questions.',
    terms_title:'Terms of Use',
    terms_p1:'By accessing this page, you agree to these terms. This is operated by an independent affiliate partner.',
    terms_h2:'Affiliate Disclosure',terms_p2:'This page contains affiliate links. We may earn a commission if you register. The game remains free.',
    terms_h3:'Accuracy',terms_p3:'We maintain accurate information, but game features may change. Check the official platform for current info.',
    terms_h4:'Prohibited Use',terms_p4:'Reproduction or scraping of this content is prohibited without written permission.',
    terms_h5:'Limitation of Liability',terms_p5:'This page is informational. We are not liable for decisions made from its content.',
    pnum_2:'Open World',pnum_3:'Free',pnum_4:'Solo & Squad',pnum_5:'PvE-First',pnum_6:'Windows PC',stat_coop:'Online Co-op',stat_free:'Free',cval_massive:'Massive',cval_medium:'Medium',cval_small:'Small',cval_deep:'✓ Deep',cval_minimal:'Minimal',cval_basic:'Basic',cval_advanced:'✓ Advanced',cval_moderate:'Moderate',cval_unique:'✓ Unique',cval_slow:'Slow',cval_occasional:'Occasional',
    vp1_h:'Massive Open World',vp1_p:'Contaminated biomes, underground ruins, and a map that rewards every direction you explore.',
    vp2_h:'Deep Crafting System',vp2_p:'Five tiers of progression. Hundreds of blueprints. Every unlock reshapes your playstyle.',
    vp3_h:'Co-op Ready',vp3_p:'Play solo or team up in online co-op for exploration, boss fights, and territory defense.',
    vp4_h:'Zero Cost to Start',vp4_p:'Free to play on Steam, with optional in-game purchases listed on the store page.',
    trail_desc:'See Once Human in motion — the biomes, the aberrations, the base raids, the moments that make players stay for months. Every frame is a world you\'ll actually survive in.',
    trail_cta:'Play Free Now →',
    close_eye:'The Mist Doesn\'t Wait',
    close_title:'Your Survival Story Starts <span class="c">Right Now</span>',
    close_sub:'Once Human costs nothing to enter. The world is live — full of players building, fighting, and carving out territory. Every day you wait is a day they\'re ahead of you.',
    close_cta:'Claim Your Territory — Free →',
    close_micro:'Free to play · Windows PC · Optional in-game purchases',
    fav1_d:'Free to start on Steam, with optional in-game purchases listed on the store page.',
    fav1_vs:'Others: paid entry required',
    fav2_d:'A vast contaminated landscape with distinct biomes, underground facilities, and room for deep exploration.',
    fav2_vs:'Others: medium or small',
    fav3_d:'Research logs, encrypted transmissions, corrupted AI terminals. A layered mystery about Stardust that rewards players who actually engage with it.',
    fav3_vs:'Others: minimal or basic',
    fav4_d:'The world is the enemy — contaminated zones, aberrations, and anomalies are your primary challenge. PvP is available but never forced.',
    fav4_vs:'Others: PvP dominant',
    fav5_d:'Modular construction with power grids, automated production systems, turret placement, and Deviant companion deployment. Engineering as gameplay.',
    fav5_vs:'Others: basic or moderate',
    fav6_d:'Capture and bond with anomalous entities that influence combat, crafting, and base defense.',
    fav6_vs:'Others: nothing comparable',
    fav7_d:'Steam shows active update history and additional content while the game continues to evolve with new scenarios and changes.',
    fav7_vs:'Others: slow or occasional'
  },
  fr:{
    site_name:'Once Human',
    hero_eyebrow:'Gratuit · Survie en Monde Ouvert',
    hero_title:'Quelque Chose dans le Brouillard',
    hero_title2:'Vous Observe',
    hero_sub:'La contamination a tout réécrit. Les règles que vous connaissiez n\'existent plus. Le monde est devenu hostile — et ce qui rôde là-dehors est d\'une patience redoutable.',
    hero_cta:'Entrez si Vous l\'Osez — C\'est Gratuit',
    hero_micro:'Gratuit sur Steam · PC Windows · Achats intégrés optionnels.',
    watch_trailer:'▶ Voir la Bande-Annonce',
    proof_1:'Joueurs dans le Monde',proof_2:'Carte Contaminée Massive',proof_3:'Sans Paywalls, que du Skill',
    proof_4:'Vos Règles',proof_5:'PvP Optionnel',proof_6:'PC Windows',
    core_eye:'Ce que vous allez faire',
    core_title:'La Boucle qui ne <span class="c">Lasse Jamais</span>',
    core_lead:'Chaque session dans Once Human s\'appuie sur la précédente. Explorer. Récupérer. Construire. Combattre.',
    c1_h:'Explorer le Brouillard',c1_p:'Aventurez-vous dans des zones contaminées. Chaque biome cache des menaces et des butins différents.',
    c2_h:'Récupérer & Fabriquer',c2_p:'Pilllez les installations abandonnées. Transformez des matières premières en équipement.',
    c3_h:'Construire votre Base',c3_p:'Revendiquez un territoire. Élevez des murs. Votre base vous définit.',
    c4_h:'Combattre & Surmonter',c4_p:'Affrontez les Aberrations Stardust et les boss corrompus.',
    c5_h:'Rechercher & Améliorer',c5_p:'Débloquez des plans, évoluez vos capacités Métahumaines.',
    c6_h:'S\'allier ou Conquérir',c6_p:'Rejoignez une escouade ou imposez votre domination en solitaire.',
    s1:'Monde ouvert à explorer',s2:'Objets fabriquables',s3:'Escouades co-op',s4:'Aucune barrière d\'entrée',
    cta1_h:'Le Brouillard Vous Attend',cta1_p:'Des milliers de survivants sont déjà là. Entrerez-vous préparé ?',cta1_btn:'Entrer dans le Monde — Gratuit',
    world_eye:'Le Cadre',world_title:'Un Monde qui Veut <span class="c">Votre Mort</span>',
    world_lead:'Le Stardust a réécrit la biologie et donné naissance à des choses qui ne respectent aucune règle.',
    tag_danger:'Zone Dangereuse',tag_mystery:'Entité Inconnue',tag_world:'Événement Mondial',
    t1_h:'Les Zones Contaminées',t1_p:'Brouillard dense, physique déformée, densité de mutants qui croît avec la profondeur.',
    t2_h:'Aberrations Stardust',t2_p:'Ces créatures n\'étaient pas toujours des monstres. Le Stardust les a réécrites.',
    t3_h:'Événements Dynamiques',t3_p:'Les tempêtes d\'anomalies arrivent sans prévenir. Aucune nuit ne se ressemble.',
    why_eye:'Pourquoi les Joueurs Restent',why_title:'Ce Monde <span class="c">Vous Rentre Sous la Peau</span>',
    w1_h:'Mystère qui Porte ses Fruits',w1_p:'Lore en couches — journaux de recherche, transmissions cryptées, terminaux IA.',
    w2_h:'Danger Palpable',w2_p:'Perdre votre équipement dans une tempête Stardust change votre soirée.',
    w3_h:'Progression Cumulative',w3_p:'Chaque heure investie transforme l\'expérience.',
    w4_h:'Une Carte qui Mérite d\'Être Perdue',w4_p:'Villes fantômes, bunkers, basses terres inondées. Chaque recoin récompense la curiosité.',
    w5_h:'Construction avec Âme',w5_p:'Votre base est le registre physique de votre temps dans ce monde.',
    w6_h:'Co-op qui Change Tout',w6_p:'Un boss qui vous a détruit en solo devient un moment mémorable avec des amis.',
    play_eye:'Votre Identité',play_title:'Choisissez Votre <span class="c">Style</span>',
    play_lead:'Once Human ne vous enferme pas dans une classe. Votre style est défini par vos choix.',
    tab_lone:'Opérateur Solitaire',tab_builder:'Maître Constructeur',tab_squad:'Chef d\'Escouade',tab_hunter:'Chasseur de Boss',
    lone_h:'Le Fantôme du Brouillard',lone_p:'Vous traversez les zones contaminées avec précision chirurgicale.',
    lone_p1:'Routes Furtives',lone_p2:'Constructions Compactes',lone_p3:'Autosuffisance',lone_p4:'Équipements Agiles',
    builder_h:'Architecte des Ruines',builder_p:'Votre base est une déclaration d\'ingénierie.',
    builder_p1:'Mises en page Complexes',builder_p2:'Réseau Électrique',builder_p3:'Efficacité Max',builder_p4:'Chaînes d\'Artisanat',
    squad_h:'Multiplicateur de Force',squad_p:'Vous transformez quatre joueurs en quelque chose d\'inarrêtable.',
    squad_p1:'Combos d\'Aptitudes',squad_p2:'Butin Partagé',squad_p3:'Raids de Boss',squad_p4:'Contrôle Territorial',
    hunter_h:'Apex de la Chaîne Alimentaire',hunter_p:'Les boss sont votre référence. Vous vous spécialisez pour les rencontres.',
    hunter_p1:'Patterns de Boss',hunter_p2:'Builds Optimaux',hunter_p3:'Butin d\'Élite',hunter_p4:'Pouvoirs Deviants',
    base_eye:'Système de Territoire',base_title:'Votre Base Est Votre <span class="c">Déclaration</span>',
    base_p1:'Le territoire n\'est pas qu\'un point de réapparition. C\'est la manifestation physique de chaque heure investie.',
    base_p2:'Gérez les lignes électriques, construisez des ateliers et fortifiez-vous.',
    bf1_h:'Construction Modulaire',bf1_p:'Des centaines de pièces structurelles. Contrôle créatif total.',
    bf2_h:'Énergie & Automatisation',bf2_p:'Câblez des générateurs, des lumières et des systèmes de stockage automatisés.',
    bf3_h:'Deviants & Défense',bf3_p:'Déployez des Deviants comme compagnons. Construisez des tourelles et des pièges.',
    craft_eye:'Système de Progression',craft_title:'De la Ferraille à la <span class="c">Légende</span>',
    craft_lead:'L\'arbre d\'artisanat d\'Once Human est un jeu entier en lui-même.',
    cr1_h:'Survie Brute',cr1_p:'Outils en pierre, armure en tissu, abris basiques.',
    cr2_h:'Ère Industrielle',cr2_p:'Établis métalliques, armes à feu, renforcement structurel.',
    cr3_h:'Synthèse Technologique',cr3_p:'Électronique, pièces de véhicule, systèmes automatisés.',
    cr4_h:'Fusion Stardust',cr4_p:'Alliages contaminés, augmentations d\'aptitudes, mods d\'armes exotiques.',
    cr5_h:'Maîtrise Métahumaine',cr5_p:'Équipement forgé par les Deviants et armement déformant la réalité.',
    wpn_eye:'Arsenal',wpn_title:'Votre Équipement, <span class="c">Votre Signature</span>',
    wpn_lead:'Mods, plans et augmentations Deviant créent des builds vraiment uniques.',
    wpn1_h:'Fusils de Précision',wpn1_p:'Létalité à longue portée. Fait pour la patience.',
    wpn2_h:'Fusils à Pompe',wpn2_p:'Dévastateurs à courte portée. Zéro compromis.',
    wpn3_h:'Armes Énergétiques',wpn3_p:'Alimentées par le Stardust. Effets de statut irrésistibles.',
    wpn4_h:'Explosifs',wpn4_p:'Pour ceux qui veulent que tout s\'embrasse en même temps.',
    mode_eye:'Modes de Jeu',mode_title:'Votre Monde, <span class="c">Vos Règles</span>',
    pve_badge:'Axé PvE',pve_h:'Mode Survie',pve_p:'Vous contre le monde. Zones contaminées, aberrations, et menaces environnementales permanentes.',
    pve_f1:'Exploration monde ouvert complet',pve_f2:'Co-op activé, PvP optionnel',pve_f3:'Missions narrative progressives',pve_f4:'Événements mondiaux et raids de boss',pve_f5:'Artisanat et construction complets',
    pvp_badge:'PvP Optionnel',pvp_h:'Guerres Territoriales',pvp_p:'Quand le monde PvE ne suffit plus. Contrôlez des nœuds de ressources, raidez des bases.',
    pvp_f1:'Optionnel — jamais forcé',pvp_f2:'Mécaniques de contrôle territorial',pvp_f3:'Guerre d\'alliances',pvp_f4:'Contention de nœuds de ressources',
    cta2_h:'Votre Équipement ne se Construira pas Tout Seul',cta2_p:'Les meilleurs builds ont été créés par des joueurs qui ont commencé exactement là où vous êtes.',cta2_btn:'Commencer à Construire votre Survivant',
    coop_eye:'Co-op',coop_title:'Certains Moments N\'Arrivent <span class="c">qu\'Ensemble</span>',
    coop_lead:'Le co-op d\'Once Human a été conçu pour créer des moments partagés inoubliables.',
    cm1_h:'Premier Kill de Boss Mondial',cm1_p:'Quatre joueurs, aptitudes coordonnées. Légendaire.',
    cm2_h:'Base Assiégée',cm2_p:'Une anomalie frappe à 2h du matin. Votre coéquipier se connecte. Vous tenez le périmètre.',
    cm3_h:'La Course en Zone Profonde',cm3_p:'Une escouade complète s\'enfonce dans une zone de Niveau 5. Tout le monde revient changé.',
    cm4_h:'Division des Ressources',cm4_p:'Un fabrique. Un explore. Un défend. Un recherche. Quand ça clique, c\'est extraordinaire.',
    guide_eye:'Commencer',guide_title:'Votre Première <span class="c">Heure</span>',
    guide_lead:'Once Human ne vous noie pas dans les tutoriels. Voici ce sur quoi vous concentrer.',
    gs1_h:'Atterrir et Souffler',gs1_p:'Collectez des ressources de base. Résistez à l\'envie d\'explorer immédiatement.',
    gs2_h:'Revendiquer votre Territoire',gs2_p:'Utilisez votre Marqueur de Territoire tôt. Trouvez un terrain élevé près de l\'eau.',
    gs3_h:'Construire les Quatre Essentiels',gs3_p:'Établi, Fourneau, Stockage, Abri. Votre base viable minimale.',
    gs4_h:'Trouver votre Premier Deviant',gs4_p:'Capturez un Deviant tôt — même de bas niveau, il rend l\'exploration plus sûre.',
    gs5_h:'Entrer dans la Première Zone Contaminée',gs5_p:'Avec une armure de base et une arme à distance, poussez. Ce que vous trouverez répondra à vos premières vraies questions.',
    cmp_eye:'Pourquoi Once Human',cmp_title:'Ce qui le <span class="c">Distingue</span>',
    cmp_feature:'Fonctionnalité',cmp_oh:'Once Human',cmp_game2:'Survie Typique A',cmp_game3:'Survie Typique B',
    cmp_r1:'Gratuit',cmp_r2:'Taille du Monde Ouvert',cmp_r3:'Lore & Narratif',cmp_r4:'Conception PvE-First',
    cmp_r5:'Profondeur Construction de Base',cmp_r6:'Système Deviant/Compagnon',cmp_r7:'Mises à Jour Régulières',
    gal_eye:'Captures d\'écran',gal_title:'Voir le <span class="c">Monde</span>',
    trail_eye:'Aperçu',trail_title:'Voir la <span class="c">Contamination</span>',trail_label:'Bande-annonce Officielle',
    cta3_h:'Encore Hésitant ?',cta3_p:'Once Human est gratuit. Rien à perdre et un monde entier à gagner.',cta3_btn:'Jouer Gratuitement — Maintenant',cta3_sub:'Gratuit sur Steam · PC Windows',

    req_eye:'Avant d’installer',
    req_title:'Votre PC Peut-il <span class="c">Le Faire Tourner ?</span>',
    req_lead:'Conçu pour Windows. Meilleur avec assez d’espace libre, une connexion stable et un SSD.',
    req_min:'Minimum',req_min_title:'Le strict nécessaire',req_rec:'Recommandé',req_rec_title:'La meilleure façon d’en profiter',
    req_os:'OS',req_cpu:'Processeur',req_ram:'Mémoire',req_gpu:'Graphiques',req_dx:'DirectX',req_net:'Réseau',req_storage:'Stockage',req_notes:'Notes',
    req_min_os:'Windows 10 64 bits',req_min_cpu:'Intel Core i5-4460',req_min_ram:'8 Go de RAM',req_min_gpu:'Nvidia GTX 750ti 4G / AMD Radeon RX550',req_min_dx:'Version 11',req_min_net:'Connexion Internet haut débit',req_min_storage:'90 Go d’espace disponible',req_min_notes:'SSD fortement recommandé',
    req_rec_os:'Windows 10 64 bits',req_rec_cpu:'Intel Core i7-7700',req_rec_ram:'16 Go de RAM',req_rec_gpu:'Nvidia GTX 1060 6G / AMD Radeon RX 580 2304SP / Intel ARC A380',req_rec_dx:'Version 12',req_rec_net:'Connexion Internet haut débit',req_rec_storage:'90 Go d’espace disponible',req_rec_notes:'SSD fortement recommandé',
    req_note:'Expérience type Windows 10/11 • Internet haut débit requis • 90 Go libres • SSD fortement recommandé',
    rev_eye:'Confiance Steam',rev_title:'Ce Que Les Joueurs Disent sur <span class="c">Steam</span>',rev_lead:'Un aperçu rapide du sentiment actuel sur Steam, avec quelques extraits publics d’avis de joueurs.',
    rev_recent_label:'Avis récents',rev_recent_value:'Très positifs',rev_recent_desc:'Les avis récents sur Steam sont actuellement Très positifs.',
    rev_eng_label:'Avis en anglais',rev_eng_value:'Plutôt positifs',rev_eng_desc:'Les avis en anglais sur Steam sont actuellement Plutôt positifs.',
    rev_note:'Sentiment et extraits basés sur des avis publics Steam et la page Steam officielle.',
    faq_eye:'Questions',faq_title:'Tout ce que vous Voulez <span class="c">Savoir</span>',
    faq1_q:'Once Human est-il vraiment gratuit ?',faq1_a:'Oui. Gratuit à télécharger et à jouer. Aucun contenu principal bloqué.',
    faq2_q:'Puis-je jouer en solo ?',faq2_a:'Le jeu solo est pleinement supporté et conçu pour être satisfaisant.',
    faq3_q:'Le PvP est-il forcé ?',faq3_a:'Non. Le PvP est optionnel. L\'expérience par défaut est axée PvE.',
    faq4_q:'Que sont les Deviants ?',faq4_a:'Des entités anormales que vous capturez et dont vous devenez l\'allié.',
    faq5_q:'Comment fonctionne la construction de base ?',faq5_a:'Revendiquez un territoire et construisez librement avec un système modulaire.',
    faq6_q:'Y a-t-il une histoire ?',faq6_a:'Les deux. Une narration et un bac à sable coexistent harmonieusement.',
    faq7_q:'Quelle est la configuration PC requise ?',faq7_a:'Minimum : Windows 10 64 bits, i5-4460, 8 Go de RAM, GTX 750ti 4G / RX550, DirectX 11, connexion Internet haut débit, 90 Go de stockage. Recommandé : i7-7700, 16 Go de RAM, GTX 1060 6G / RX 580 2304SP / Intel ARC A380, DirectX 12, connexion Internet haut débit, 90 Go de stockage. SSD fortement recommandé.',
    faq8_q:'Y a-t-il des mises à jour régulières ?',faq8_a:'Steam affiche l’historique des mises à jour et du contenu ajouté, mais le rythme et l’ampleur peuvent évoluer. Consultez la page Steam officielle pour les dernières nouveautés.',
    faq9_q:'Perdrai-je ma progression si ma base est détruite ?',faq9_a:'Steam met en avant la construction et la relocalisation du territoire, mais les règles exactes de destruction et de persistance peuvent varier selon le mode, le serveur et la saison.',
    faq10_q:'Quelle est la taille du monde de jeu ?',faq10_a:'Steam décrit un monde ouvert post-apocalyptique étrange avec plusieurs biomes et des installations souterraines, mais ne publie pas de taille officielle de carte sur la page boutique.',
    faq11_q:'Y a-t-il des achats intégrés ?',faq11_a:'Oui. Steam indique des achats intégrés et mentionne des achats en jeu aléatoires, l’interactivité en ligne et le chat en jeu.',
    re1:'Gratuit',re2:'Fonctions MMO',re3:'Co-op en ligne',re4:'PvP en ligne',re5:'Achats intégrés',re6:'PC Windows',
    sticky_label:'Once Human est En Ligne',sticky_reassure:'Gratuit · PC Windows',sticky_btn:'Jouer →',
    footer_brand_p:'Une expérience de survie en monde ouvert dans un futur contaminé. Gratuit.',
    footer_col1:'Jouer',footer_play1:'Télécharger Gratuitement',footer_play2:'Modes de Jeu',footer_play3:'Styles de Jeu',footer_play4:'Guide Nouveau Joueur',
    footer_col2:'Explorer',footer_ex1:'Le Monde',footer_ex2:'Artisanat',footer_ex3:'Armes',footer_ex4:'Construction de Base',
    footer_col3:'Légal',footer_priv:'Politique de Confidentialité',footer_terms:'Conditions d\'Utilisation',footer_faq:'FAQ',
    footer_copy:'© 2024 Once Human. Tous droits réservés.',footer_priv2:'Confidentialité',footer_terms2:'Conditions',
    priv_title:'Politique de Confidentialité',
    priv_p1:'Cette page est exploitée par un partenaire affilié indépendant. Nous collectons uniquement des données analytiques anonymisées via Google Analytics 4.',
    priv_h2:'Données Collectées',priv_p2:'GA4 collecte des vues de page anonymisées et des événements d\'interaction.',
    priv_h3:'Cookies',priv_p3:'Nous utilisons localStorage pour les préférences de langue/thème.',
    priv_h4:'Liens Tiers',priv_p4:'En cliquant vers la plateforme Once Human, vous êtes soumis à leurs pratiques de confidentialité.',
    priv_h5:'Vos Droits',priv_p5:'Vous pouvez demander l\'accès ou la suppression de vos données.',
    terms_title:'Conditions d\'Utilisation',
    terms_p1:'En accédant à cette page, vous acceptez ces conditions. Exploité par un partenaire affilié indépendant.',
    terms_h2:'Divulgation d\'Affiliation',terms_p2:'Cette page contient des liens affiliés. Le jeu reste gratuit.',
    terms_h3:'Exactitude',terms_p3:'Nous maintenons des informations exactes, mais les fonctionnalités peuvent changer.',
    terms_h4:'Utilisation Interdite',terms_p4:'La reproduction ou le scraping de ce contenu est interdit.',
    terms_h5:'Limitation de Responsabilité',terms_p5:'Cette page est informative. Nous ne sommes pas responsables des décisions prises sur la base de son contenu.',
    pnum_2:'Monde Ouvert',pnum_3:'Gratuit',pnum_4:'Solo & Escouade',pnum_5:'PvE-First',pnum_6:'PC Windows',stat_coop:'Co-op en ligne',stat_free:'Gratuit',cval_massive:'Massive',cval_medium:'Moyen',cval_small:'Petit',cval_deep:'✓ Profond',cval_minimal:'Minimal',cval_basic:'Basique',cval_advanced:'✓ Avancé',cval_moderate:'Modéré',cval_unique:'✓ Unique',cval_slow:'Lent',cval_occasional:'Occasionnel',
    vp1_h:'Monde Ouvert Massif',vp1_p:'Biomes contaminés, ruines souterraines, et une carte qui récompense chaque direction explorée.',
    vp2_h:'Système d\'Artisanat Profond',vp2_p:'Cinq niveaux de progression. Des centaines de plans. Chaque déverouillage change votre façon de jouer.',
    vp3_h:'Co-op Prêt',vp3_p:'Jouez en solo ou en co-op en ligne pour l’exploration, les boss et la défense du territoire.',
    vp4_h:'Zéro Coût pour Démarrer',vp4_p:'Gratuit sur Steam, avec des achats intégrés optionnels indiqués sur la page boutique.',
    trail_desc:'Regardez Once Human en mouvement — les biomes, les aberrations, les raids de base. Chaque image est un monde dans lequel vous survivrez vraiment.',
    trail_cta:'Jouer Gratuitement →',
    close_eye:'Le Brouillard N\'Attend Pas',
    close_title:'Votre Histoire de Survie Commence <span class="c">Maintenant</span>',
    close_sub:'Once Human ne coûte rien pour entrer. Le monde est en direct — rempli de joueurs construisant et se battant pour leur territoire. Chaque jour d\'attente est un jour de retard.',
    close_cta:'Revendiquer votre Territoire — Gratuit →',
    close_micro:'Gratuit · PC Windows · Achats intégrés optionnels',
    fav1_d:'Commencez gratuitement sur Steam, avec des achats intégrés optionnels indiqués sur la page boutique.',
    fav1_vs:'Autres : entrée payante requise',
    fav2_d:'Un vaste paysage contaminé avec des biomes distincts, des installations souterraines et de quoi explorer en profondeur.',
    fav2_vs:'Autres : moyen ou petit',
    fav3_d:'Journaux de recherche, transmissions cryptées, IA corrompues. Un mystère profond autour du Stardust.',
    fav3_vs:'Autres : minimal ou basique',
    fav4_d:'Le monde est l\'ennemi — zones contaminées et aberrations. Le PvP est disponible mais jamais forcé.',
    fav4_vs:'Autres : PvP dominant',
    fav5_d:'Construction modulaire avec réseaux électriques, systèmes automatisés, tourelles et Deviants. Ingénierie comme gameplay.',
    fav5_vs:'Autres : basique ou modéré',
    fav6_d:'Capturez et liez-vous à des entités anomales qui influencent le combat, l’artisanat et la défense de base.',
    fav6_vs:'Autres : rien de comparable',
    fav7_d:'Steam affiche un historique actif des mises à jour et du contenu supplémentaire pendant que le jeu continue d’évoluer.',
    fav7_vs:'Autres : lent ou occasionnel'
  },
  de:{
    site_name:'Once Human',
    hero_eyebrow:'Kostenlos · Open-World-Überleben',
    hero_title:'Etwas im Nebel',
    hero_title2:'Beobachtet Sie',
    hero_sub:'Die Kontamination hat alles neu geschrieben, was Sie über Überleben wussten. Die Regeln existieren nicht mehr. Die Welt ist feindlich — und draußen lauert etwas mit unendlicher Geduld.',
    hero_cta:'Eintreten wenn Sie sich trauen — Kostenlos',
    hero_micro:'Kostenlos auf Steam · Windows-PC · Optionale In-Game-Käufe.',
    watch_trailer:'▶ Trailer ansehen',
    proof_1:'Spieler Weltweit',proof_2:'Riesige Kontaminierte Karte',proof_3:'Kein Paywall, Nur Können',
    proof_4:'Ihre Regeln',proof_5:'Optionales PvP',proof_6:'Windows-PC',
    core_eye:'Was Sie tun werden',
    core_title:'Der Loop, der <span class="c">nie alt wird</span>',
    core_lead:'Jede Session in Once Human baut auf der vorherigen auf. Erkunden. Sammeln. Bauen. Kämpfen.',
    c1_h:'Den Nebel erkunden',c1_p:'Betreten Sie verseuchte Zonen. Jedes Biom birgt andere Bedrohungen und Beute.',
    c2_h:'Sammeln & Herstellen',c2_p:'Plündern Sie verlassene Einrichtungen. Verwandeln Sie Rohstoffe in Ausrüstung.',
    c3_h:'Basis bauen',c3_p:'Beanspruchen Sie Territorium. Errichten Sie Mauern. Ihre Basis definiert Sie.',
    c4_h:'Kämpfen & Überwinden',c4_p:'Stellen Sie sich Stardust-Aberrationen und korrumpierten Bossen.',
    c5_h:'Forschen & Aufwerten',c5_p:'Schalten Sie Blaupausen frei und entwickeln Sie Ihre Metahuman-Fähigkeiten.',
    c6_h:'Verbinden oder Besiegen',c6_p:'Schließen Sie sich einem Trupp an oder dominieren Sie als Einzelkämpfer.',
    s1:'Offene Welt zum Erkunden',s2:'Herstellbare Gegenstände',s3:'Koop-Trupps',s4:'Kein Eintrittsbarriere',
    cta1_h:'Der Nebel wartet',cta1_p:'Tausende Überlebende sind bereits drin. Werden Sie vorbereitet eintreten?',cta1_btn:'Welt betreten — Kostenlos',
    world_eye:'Das Setting',world_title:'Eine Welt, die Sie <span class="c">töten will</span>',
    world_lead:'Stardust hat nicht nur die Umwelt verseucht. Es hat die Biologie neu geschrieben.',
    tag_danger:'Gefahrenzone',tag_mystery:'Unbekannte Entität',tag_world:'Weltereignis',
    t1_h:'Die verseuchten Zonen',t1_p:'Dichter Nebel, verzerrte Physik, Mutantendichte die mit der Tiefe steigt.',
    t2_h:'Stardust-Aberrationen',t2_p:'Diese Kreaturen waren nicht immer Monster. Stardust hat sie neu geschrieben.',
    t3_h:'Dynamische Weltereignisse',t3_p:'Anomalie-Stürme kommen ohne Vorwarnung. Keine zwei Nächte sind gleich.',
    why_eye:'Warum Spieler bleiben',why_title:'Diese Welt geht <span class="c">unter die Haut</span>',
    w1_h:'Mysterien die sich auszahlen',w1_p:'Vielschichtiges Lore — Forschungstagebücher, verschlüsselte Transmissionen.',
    w2_h:'Gefahr, die sich echt anfühlt',w2_p:'Ihr Ausrüstungsverlust durch einen Stardust-Sturm verändert Ihren Abend.',
    w3_h:'Progression die sich aufbaut',w3_p:'Jede investierte Stunde verändert das Erlebnis.',
    w4_h:'Eine Karte, in der man sich verlieren kann',w4_p:'Geisterstädte, Bunker, überflutete Niederungen. Jede Ecke belohnt Neugier.',
    w5_h:'Basenbau mit Seele',w5_p:'Ihre Basis ist das physische Protokoll Ihrer Zeit in dieser Welt.',
    w6_h:'Koop der alles verändert',w6_p:'Ein Boss, der Ihren Solo-Versuch vernichtet hat, wird mit Freunden legendär.',
    play_eye:'Ihre Identität',play_title:'Wählen Sie Ihren <span class="c">Spielstil</span>',
    play_lead:'Once Human sperrt Sie nicht in eine Klasse. Ihr Stil wird durch Ihre Ausrüstung und Entscheidungen definiert.',
    tab_lone:'Einzelkämpfer',tab_builder:'Meisterbauer',tab_squad:'Truppenführer',tab_hunter:'Bossjäger',
    lone_h:'Der Geist im Nebel',lone_p:'Sie bewegen sich mit chirurgischer Präzision durch verseuchte Zonen.',
    lone_p1:'Stealth-Routen',lone_p2:'Kompakte Bauten',lone_p3:'Selbstversorgung',lone_p4:'Agile Ausrüstung',
    builder_h:'Architekt der Ruinen',builder_p:'Ihre Basis ist ein Ingenieursausdruck. Bauen ist der eigentliche Kern.',
    builder_p1:'Komplexe Grundrisse',builder_p2:'Stromnetzentwurf',builder_p3:'Maximale Effizienz',builder_p4:'Herstellketten',
    squad_h:'Kraftmultiplikator',squad_p:'Sie verwandeln vier Spieler in etwas Unaufhaltsames.',
    squad_p1:'Fähigkeits-Kombos',squad_p2:'Geteilte Beute',squad_p3:'Boss-Überfälle',squad_p4:'Territoriumshalten',
    hunter_h:'Apex der Nahrungskette',hunter_p:'Bosse sind Ihr Maßstab. Sie bauen speziell für die Begegnung.',
    hunter_p1:'Boss-Muster',hunter_p2:'Min-Max-Builds',hunter_p3:'Elite-Beute',hunter_p4:'Deviant-Kräfte',
    base_eye:'Territoriumssystem',base_title:'Ihre Basis ist Ihre <span class="c">Erklärung</span>',
    base_p1:'Territorium ist nicht nur ein Startpunkt. Es ist die physische Manifestation jeder investierten Stunde.',
    base_p2:'Verwalten Sie Stromleitungen, bauen Sie Werkstätten und befestigen Sie sich.',
    bf1_h:'Modularer Bau',bf1_p:'Hunderte von Strukturteilen. Volle kreative Kontrolle.',
    bf2_h:'Energie & Automatisierung',bf2_p:'Verkabeln Sie Generatoren, Lichter und automatisierte Lagersysteme.',
    bf3_h:'Deviants & Verteidigung',bf3_p:'Setzen Sie Deviants als Basis-Begleiter ein. Bauen Sie Türme und Fallen.',
    craft_eye:'Progressionssystem',craft_title:'Von Schrott zur <span class="c">Legende</span>',
    craft_lead:'Der Herstellungsbaum von Once Human ist ein ganzes Spiel in sich.',
    cr1_h:'Rohe Überlebensfähigkeit',cr1_p:'Steinwerkzeuge, Stoffrüstung, einfache Unterkünfte.',
    cr2_h:'Industriezeitalter',cr2_p:'Metallbänke, Schusswaffen, Strukturverstärkung.',
    cr3_h:'Technologiesynthese',cr3_p:'Elektronik, Fahrzeugteile, automatisierte Systeme.',
    cr4_h:'Stardust-Fusion',cr4_p:'Verseuchte Legierungen, Fähigkeitsverstärker, exotische Waffenmods.',
    cr5_h:'Metahuman-Meisterschaft',cr5_p:'Deviant-geschmiedete Ausrüstung und realitätsverändernde Waffen.',
    wpn_eye:'Arsenal',wpn_title:'Ihre Ausrüstung, <span class="c">Ihre Signatur</span>',
    wpn_lead:'Mods, Blaupausen und Deviant-Verstärker schaffen wirklich einzigartige Builds.',
    wpn1_h:'Präzisionsgewehre',wpn1_p:'Tödlich auf lange Distanz. Für Geduld gebaut.',
    wpn2_h:'Schrotflinten',wpn2_p:'Verheerend auf kurze Distanz. Null Kompromisse.',
    wpn3_h:'Energiewaffen',wpn3_p:'Stardust-betrieben. Statuseffekte, denen verseuchte Einheiten nicht widerstehen können.',
    wpn4_h:'Sprengstoff',wpn4_p:'Wenn Sie wollen, dass ein großer Teil der Karte brennt.',
    mode_eye:'Spielmodi',mode_title:'Ihre Welt, <span class="c">Ihre Regeln</span>',
    pve_badge:'PvE-Fokus',pve_h:'Überlebensmodus',pve_p:'Sie gegen die Welt. Verseuchte Zonen und eine unerbittliche Umgebung.',
    pve_f1:'Vollständige Open-World-Erkundung',pve_f2:'Koop aktiviert, PvP optional',pve_f3:'Progressive Story-Missionen',pve_f4:'Weltereignisse und Boss-Überfälle',pve_f5:'Vollständiger Zugang zu Herstellung und Bau',
    pvp_badge:'PvP Optional',pvp_h:'Territorialkriege',pvp_p:'Wenn die PvE-Welt nicht genug Konflikt bietet. Überfallen Sie Rivalen-Basen.',
    pvp_f1:'Optional — niemals erzwungen',pvp_f2:'Territoriumskontrollmechaniken',pvp_f3:'Allianzkriegsführung',pvp_f4:'Ressourcenknoten-Wettbewerb',
    cta2_h:'Ihre Ausrüstung baut sich nicht von selbst',cta2_p:'Die besten Builds wurden von Spielern entwickelt, die genau dort angefangen haben, wo Sie jetzt sind.',cta2_btn:'Überlebenden aufbauen beginnen',
    coop_eye:'Koop',coop_title:'Manche Momente entstehen <span class="c">nur zusammen</span>',
    coop_lead:'Der Koop von Once Human wurde entwickelt, um einzigartige gemeinsame Momente zu schaffen.',
    cm1_h:'Erster World-Boss-Kill',cm1_p:'Vier Spieler, koordinierte Fähigkeiten. Legendär.',
    cm2_h:'Basis unter Belagerung',cm2_p:'Eine Anomalie trifft um 2 Uhr nachts. Ihr Kamerad loggt sich ein. Sie halten den Perimeter.',
    cm3_h:'Der Tiefzoneneinsatz',cm3_p:'Ein vollständiger Trupp dringt in Zone 5 vor. Alle kommen verändert zurück.',
    cm4_h:'Ressourcenteilung',cm4_p:'Einer fertigt. Einer erkundet. Einer verteidigt. Einer forscht. Wenn es klappt, ist es außerordentlich.',
    guide_eye:'Einstieg',guide_title:'Ihre erste <span class="c">Stunde</span>',
    guide_lead:'Once Human überhäuft Sie nicht mit Tutorials. Hier ist, worauf Sie sich zuerst konzentrieren sollten.',
    gs1_h:'Landen und Durchatmen',gs1_p:'Sammeln Sie grundlegende Ressourcen. Widerstehen Sie dem Drang, sofort zu erkunden.',
    gs2_h:'Territorium beanspruchen',gs2_p:'Verwenden Sie früh Ihren Gebietsmarkierer. Finden Sie erhöhtes Gelände nahe Wasser.',
    gs3_h:'Die vier Kerngebäude bauen',gs3_p:'Werkbank, Ofen, Lager, Schutzraum. Ihre Mindestbasis.',
    gs4_h:'Ihren ersten Deviant finden',gs4_p:'Fangen Sie früh einen Deviant — selbst ein niedrigstufiger macht das Erkunden sicherer.',
    gs5_h:'Die erste verseuchte Zone betreten',gs5_p:'Mit Grundrüstung und einer Fernkampfwaffe, dringen Sie vor.',
    cmp_eye:'Warum Once Human',cmp_title:'Wie es sich <span class="c">abhebt</span>',
    cmp_feature:'Funktion',cmp_oh:'Once Human',cmp_game2:'Typisches Überleben A',cmp_game3:'Typisches Überleben B',
    cmp_r1:'Kostenlos spielen',cmp_r2:'Open-World-Größe',cmp_r3:'Lore & Erzählung',cmp_r4:'PvE-First-Design',
    cmp_r5:'Tiefe des Basisbaues',cmp_r6:'Deviant/Begleitersystem',cmp_r7:'Regelmäßige Updates',
    gal_eye:'Screenshots',gal_title:'Die Welt <span class="c">sehen</span>',
    trail_eye:'Vorschau',trail_title:'Die <span class="c">Kontamination</span> erleben',trail_label:'Offizieller Gameplay-Trailer',
    cta3_h:'Noch unentschlossen?',cta3_p:'Once Human ist kostenlos. Nichts zu verlieren und eine ganze Welt zu gewinnen.',cta3_btn:'Kostenlos spielen — Jetzt starten',cta3_sub:'Kostenlos auf Steam · Windows-PC',

    req_eye:'Vor der Installation',
    req_title:'Kann Ihr PC <span class="c">Es Ausführen?</span>',
    req_lead:'Für Windows gebaut. Am besten mit genug freiem Speicher, stabilem Internet und SSD.',
    req_min:'Minimum',req_min_title:'Was Sie zum Start brauchen',req_rec:'Empfohlen',req_rec_title:'Die beste Art es zu erleben',
    req_os:'OS',req_cpu:'Prozessor',req_ram:'Arbeitsspeicher',req_gpu:'Grafik',req_dx:'DirectX',req_net:'Netzwerk',req_storage:'Speicherplatz',req_notes:'Hinweise',
    req_min_os:'Windows 10 64-Bit-Betriebssystem',req_min_cpu:'Intel Core i5-4460',req_min_ram:'8 GB RAM',req_min_gpu:'Nvidia GTX 750ti 4G / AMD Radeon RX550',req_min_dx:'Version 11',req_min_net:'Breitband-Internetverbindung',req_min_storage:'90 GB verfügbarer Speicherplatz',req_min_notes:'SSD wird dringend empfohlen',
    req_rec_os:'Windows 10 64-Bit-Betriebssystem',req_rec_cpu:'Intel Core i7-7700',req_rec_ram:'16 GB RAM',req_rec_gpu:'Nvidia GTX 1060 6G / AMD Radeon RX 580 2304SP / Intel ARC A380',req_rec_dx:'Version 12',req_rec_net:'Breitband-Internetverbindung',req_rec_storage:'90 GB verfügbarer Speicherplatz',req_rec_notes:'SSD wird dringend empfohlen',
    req_note:'Windows-10/11-Erlebnis • Breitband-Internet erforderlich • 90 GB freier Speicher • SSD dringend empfohlen',
    rev_eye:'Steam Vertrauen',rev_title:'Was Spieler auf <span class="c">Steam</span> Sagen',rev_lead:'Ein kurzer Überblick über die aktuelle Steam-Stimmung plus einige öffentliche Spielerauszüge.',
    rev_recent_label:'Aktuelle Reviews',rev_recent_value:'Sehr positiv',rev_recent_desc:'Die aktuellen Steam-Reviews sind derzeit Sehr positiv.',
    rev_eng_label:'Englische Reviews',rev_eng_value:'Größtenteils positiv',rev_eng_desc:'Die englischen Steam-Reviews sind derzeit Größtenteils positiv.',
    rev_note:'Stimmung und Auszüge basieren auf öffentlichen Steam-Reviews und der offiziellen Steam-Seite.',
    faq_eye:'Fragen',faq_title:'Alles, was Sie <span class="c">wissen wollen</span>',
    faq1_q:'Ist Once Human wirklich kostenlos?',faq1_a:'Ja. Kostenlos herunterladen und spielen. Kein Kern-Inhalt ist gesperrt.',
    faq2_q:'Kann ich solo spielen?',faq2_a:'Solo-Spiel wird vollständig unterstützt und ist bewusst befriedigend gestaltet.',
    faq3_q:'Wird PvP erzwungen?',faq3_a:'Nein. PvP ist optional. Das Standarderlebnis ist PvE-fokussiert.',
    faq4_q:'Was sind Deviants?',faq4_a:'Anomale Entitäten, die Sie fangen und mit denen Sie sich verbinden können.',
    faq5_q:'Wie funktioniert der Basenbau?',faq5_a:'Beanspruchen Sie Territorium und bauen Sie modular — Wände, Böden, Energie, Fallen.',
    faq6_q:'Gibt es eine Geschichte?',faq6_a:'Beides. Eine echte Erzählung und eine Sandbox koexistieren harmonisch.',
    faq7_q:'Welche PC-Anforderungen gibt es?',faq7_a:'Minimum: Windows 10 64-Bit, i5-4460, 8 GB RAM, GTX 750ti 4G / RX550, DirectX 11, Breitband-Internet, 90 GB Speicher. Empfohlen: i7-7700, 16 GB RAM, GTX 1060 6G / RX 580 2304SP / Intel ARC A380, DirectX 12, Breitband-Internet, 90 GB Speicher. SSD wird dringend empfohlen.',
    faq8_q:'Gibt es regelmäßige Updates?',faq8_a:'Steam zeigt Update-Verlauf und zusätzliche Inhalte, aber Umfang und Timing können sich ändern. Prüfe die offizielle Steam-Seite für die neuesten Updates.',
    faq9_q:'Verliere ich Fortschritte, wenn meine Basis zerstört wird?',faq9_a:'Steam hebt Gebietsaufbau und Verlagerung hervor, aber genaue Regeln zu Zerstörung und Persistenz können je nach Modus, Server und Saison variieren.',
    faq10_q:'Wie groß ist die Spielwelt?',faq10_a:'Steam beschreibt eine seltsame postapokalyptische Open World mit mehreren Biomen und unterirdischen Anlagen, nennt aber keine offizielle Kartengröße auf der Store-Seite.',
    faq11_q:'Gibt es In-Game-Käufe?',faq11_a:'Ja. Steam listet In-App Purchases und erwähnt zufallsbasierte In-Game-Käufe, Online-Interaktivität und In-Game-Chat.',
    re1:'Kostenlos spielbar',re2:'MMO-Features',re3:'Online-Koop',re4:'Online-PvP',re5:'In-Game-Käufe',re6:'Windows-PC',
    sticky_label:'Once Human ist Live',sticky_reassure:'Kostenlos · Windows-PC',sticky_btn:'Spielen →',
    footer_brand_p:'Ein Open-World-Überlebenserlebnis in einer verseuchten Zukunft. Kostenlos.',
    footer_col1:'Spielen',footer_play1:'Kostenlos herunterladen',footer_play2:'Spielmodi',footer_play3:'Spielstile',footer_play4:'Einsteigerleitfaden',
    footer_col2:'Erkunden',footer_ex1:'Die Welt',footer_ex2:'Herstellung',footer_ex3:'Waffen',footer_ex4:'Basenbau',
    footer_col3:'Rechtliches',footer_priv:'Datenschutzerklärung',footer_terms:'Nutzungsbedingungen',footer_faq:'FAQ',
    footer_copy:'© 2024 Once Human. Alle Rechte vorbehalten.',footer_priv2:'Datenschutz',footer_terms2:'Bedingungen',
    priv_title:'Datenschutzerklärung',
    priv_p1:'Diese Seite wird von einem unabhängigen Affiliate-Partner betrieben. Wir erfassen nur anonymisierte Analysedaten über Google Analytics 4.',
    priv_h2:'Erfasste Daten',priv_p2:'GA4 erfasst anonymisierte Seitenaufrufe und Interaktionsereignisse.',
    priv_h3:'Cookies',priv_p3:'Wir verwenden localStorage für Sprach-/Themeneinstellungen.',
    priv_h4:'Links Dritter',priv_p4:'Beim Klick auf Once Human-Plattform gelten deren Datenschutzpraktiken.',
    priv_h5:'Ihre Rechte',priv_p5:'Sie können Zugang oder Löschung Ihrer Daten beantragen.',
    terms_title:'Nutzungsbedingungen',
    terms_p1:'Durch den Zugriff auf diese Seite stimmen Sie diesen Bedingungen zu.',
    terms_h2:'Offenlegung der Zugehörigkeit',terms_p2:'Diese Seite enthält Affiliate-Links. Das Spiel bleibt kostenlos.',
    terms_h3:'Genauigkeit',terms_p3:'Wir bemühen uns um genaue Informationen, aber Spielfunktionen können sich ändern.',
    terms_h4:'Verbotene Nutzung',terms_p4:'Die Vervielfältigung oder das Scraping dieses Inhalts ist untersagt.',
    terms_h5:'Haftungsbeschränkung',terms_p5:'Diese Seite ist informativ. Wir haften nicht für auf der Grundlage ihres Inhalts getroffene Entscheidungen.',
    pnum_2:'Offene Welt',pnum_3:'Kostenlos',pnum_4:'Solo & Trupp',pnum_5:'PvE-First',pnum_6:'Windows-PC',stat_coop:'Online-Koop',stat_free:'Kostenlos',cval_massive:'Riesig',cval_medium:'Mittel',cval_small:'Klein',cval_deep:'✓ Tiefgehend',cval_minimal:'Minimal',cval_basic:'Einfach',cval_advanced:'✓ Fortgeschritten',cval_moderate:'Mäßig',cval_unique:'✓ Einzigartig',cval_slow:'Langsam',cval_occasional:'Gelegentlich',
    vp1_h:'Riesige Offene Welt',vp1_p:'Kontaminierte Biome, unterirdische Ruinen und eine Karte, die jede Richtung belohnt.',
    vp2_h:'Tiefes Crafting-System',vp2_p:'Fünf Progressionsstufen. Hunderte von Blueprints. Jedes Freischalten verändert deinen Spielstil.',
    vp3_h:'Co-op Bereit',vp3_p:'Spiele solo oder schließe dich im Online-Koop für Erkundung, Bosskämpfe und Gebietsverteidigung zusammen.',
    vp4_h:'Null Kosten zum Starten',vp4_p:'Kostenlos auf Steam, mit optionalen In-Game-Käufen laut Store-Seite.',
    trail_desc:'Sieh Once Human in Bewegung — die Biome, die Aberrationen, die Basis-Überfälle. Jedes Bild zeigt eine Welt, in der du wirklich überleben wirst.',
    trail_cta:'Jetzt Kostenlos Spielen →',
    close_eye:'Der Nebel Wartet Nicht',
    close_title:'Deine Überlebensgeschichte Beginnt <span class="c">Jetzt</span>',
    close_sub:'Once Human kostet nichts zum Einsteigen. Die Welt ist live — voller Spieler, die Basen bauen und ihr Territorium abstecken. Jeder Tag des Wartens ist ein Rückstand.',
    close_cta:'Territorium Beanspruchen — Kostenlos →',
    close_micro:'Kostenlos · Windows-PC · Optionale In-Game-Käufe',
    fav1_d:'Kostenloser Einstieg auf Steam mit optionalen In-Game-Käufen laut Store-Seite.',
    fav1_vs:'Andere: Kauf erforderlich',
    fav2_d:'Eine weite kontaminierte Landschaft mit unterschiedlichen Biomen, unterirdischen Anlagen und viel Raum für tiefes Erkunden.',
    fav2_vs:'Andere: mittel oder klein',
    fav3_d:'Forschungsprotokolle, verschlüsselte Übertragungen, korrupte KI. Ein tiefes Geheimnis rund um das Stardust.',
    fav3_vs:'Andere: minimal oder basic',
    fav4_d:'Die Welt ist der Feind — kontaminierte Zonen und Aberrationen. PvP ist verfügbar aber nie erzwungen.',
    fav4_vs:'Andere: PvP dominiert',
    fav5_d:'Modulares Bauen mit Stromnetzen, automatisierten Systemen, Türmen und Deviant-Begleitern. Engineering als Gameplay.',
    fav5_vs:'Andere: basic oder moderat',
    fav6_d:'Fange und binde anomale Entitäten, die Kampf, Handwerk und Basisverteidigung beeinflussen.',
    fav6_vs:'Andere: nichts Vergleichbares',
    fav7_d:'Steam zeigt aktiven Update-Verlauf und zusätzliche Inhalte, während sich das Spiel weiter mit neuen Szenarien und Änderungen entwickelt.',
    fav7_vs:'Andere: langsam oder gelegentlich'
  },
  es:{
    site_name:'Once Human',
    hero_eyebrow:'Gratis · Supervivencia en Mundo Abierto',
    hero_title:'Algo en la Niebla',
    hero_title2:'Te Está Observando',
    hero_sub:'La contaminación reescribió todo lo que sabías sobre supervivencia. Las reglas han desaparecido. El mundo es hostil — y lo que acecha ahí fuera tiene una paciencia inquietante.',
    hero_cta:'Entra si Te Atreves — Es Gratis',
    hero_micro:'Gratis en Steam · PC con Windows · Compras integradas opcionales.',
    watch_trailer:'▶ Ver Tráiler',
    proof_1:'Jugadores en el Mundo',proof_2:'Mapa Contaminado Masivo',proof_3:'Sin Paywalls, Pura Habilidad',
    proof_4:'Tus Reglas',proof_5:'PvP Opcional',proof_6:'PC con Windows',
    core_eye:'Lo que harás',
    core_title:'El Bucle que <span class="c">Nunca Envejece</span>',
    core_lead:'Cada sesión en Once Human se construye sobre la anterior. Explorar. Saquear. Construir. Luchar.',
    c1_h:'Explorar la Niebla',c1_p:'Adéntrate en zonas contaminadas. Cada bioma esconde amenazas y botín diferente.',
    c2_h:'Saquear y Fabricar',c2_p:'Saquea instalaciones abandonadas. Convierte materias primas en equipo.',
    c3_h:'Construir tu Base',c3_p:'Reclama territorio. Levanta muros. Tu base te define.',
    c4_h:'Luchar y Superar',c4_p:'Enfréntate a Aberraciones Stardust y jefes corrompidos.',
    c5_h:'Investigar y Mejorar',c5_p:'Desbloquea planos y evoluciona tus habilidades Metahumanas.',
    c6_h:'Aliarse o Conquistar',c6_p:'Únete a un escuadrón o domina como operador solitario.',
    s1:'Mundo abierto para explorar',s2:'Objetos fabricables',s3:'Escuadrones co-op',s4:'Sin barrera de entrada',
    cta1_h:'La Niebla Ha Estado Esperando',cta1_p:'Miles de supervivientes ya están dentro. ¿Entrarás preparado?',cta1_btn:'Entrar al Mundo — Gratis',
    world_eye:'El Escenario',world_title:'Un Mundo que Quiere <span class="c">Matarte</span>',
    world_lead:'El Stardust no solo contaminó el entorno. Reescribió la biología y dio origen a cosas que no siguen ninguna regla.',
    tag_danger:'Zona de Peligro',tag_mystery:'Entidad Desconocida',tag_world:'Evento Mundial',
    t1_h:'Las Zonas Contaminadas',t1_p:'Niebla densa, física distorsionada, densidad de mutantes que escala con la profundidad.',
    t2_h:'Aberraciones Stardust',t2_p:'Estas criaturas no siempre fueron monstruos. El Stardust las reescribió.',
    t3_h:'Eventos Dinámicos',t3_p:'Las tormentas de anomalías llegan sin aviso. No hay dos noches iguales.',
    why_eye:'Por qué los Jugadores se Quedan',why_title:'Este Mundo se te Mete <span class="c">Bajo la Piel</span>',
    w1_h:'Misterio que Vale la Pena',w1_p:'Lore en capas — registros de investigación, transmisiones cifradas, terminales IA.',
    w2_h:'Peligro que se Siente Real',w2_p:'Perder tu equipo en una tormenta Stardust cambia tu sesión.',
    w3_h:'Progresión que se Acumula',w3_p:'Cada hora invertida transforma la experiencia.',
    w4_h:'Un Mapa que Vale Perderse',w4_p:'Pueblos fantasma, búnkeres, tierras bajas inundadas. Cada rincón recompensa la curiosidad.',
    w5_h:'Construcción con Alma',w5_p:'Tu base es el registro físico de tu tiempo en este mundo.',
    w6_h:'Co-op que lo Cambia Todo',w6_p:'Un jefe que destruyó tu partida en solitario se vuelve legendario con amigos.',
    play_eye:'Tu Identidad',play_title:'Elige tu <span class="c">Estilo</span>',
    play_lead:'Once Human no te encierra en una clase. Tu estilo se define por tu equipo y tus decisiones.',
    tab_lone:'Operador Solitario',tab_builder:'Maestro Constructor',tab_squad:'Líder de Escuadrón',tab_hunter:'Cazador de Jefes',
    lone_h:'El Fantasma de la Niebla',lone_p:'Te mueves por zonas contaminadas con precisión quirúrgica.',
    lone_p1:'Rutas Sigilosas',lone_p2:'Construcciones Compactas',lone_p3:'Autosuficiencia',lone_p4:'Equipos Ágiles',
    builder_h:'Arquitecto de las Ruinas',builder_p:'Tu base es una declaración de ingeniería.',
    builder_p1:'Diseños Complejos',builder_p2:'Diseño de Red Eléctrica',builder_p3:'Eficiencia Máxima',builder_p4:'Cadenas de Fabricación',
    squad_h:'Multiplicador de Fuerza',squad_p:'Conviertes cuatro jugadores en algo imparable.',
    squad_p1:'Combos de Habilidades',squad_p2:'Botín Compartido',squad_p3:'Incursiones de Jefes',squad_p4:'Control Territorial',
    hunter_h:'Cima de la Cadena Alimentaria',hunter_p:'Los jefes son tu referencia. Te especializas para el encuentro.',
    hunter_p1:'Patrones de Jefes',hunter_p2:'Builds Optimizados',hunter_p3:'Botín de Élite',hunter_p4:'Poderes Deviant',
    base_eye:'Sistema de Territorio',base_title:'Tu Base es tu <span class="c">Declaración</span>',
    base_p1:'El territorio no es solo un punto de reaparición. Es la manifestación física de cada hora invertida.',
    base_p2:'Gestiona líneas eléctricas, construye talleres y fortifícate contra anomalías.',
    bf1_h:'Construcción Modular',bf1_p:'Cientos de piezas estructurales. Control creativo total.',
    bf2_h:'Energía y Automatización',bf2_p:'Conecta generadores, luces y sistemas de almacenamiento automatizados.',
    bf3_h:'Deviants y Defensa',bf3_p:'Despliega Deviants como compañeros. Construye torretas y trampas.',
    craft_eye:'Sistema de Progresión',craft_title:'De la Chatarra a la <span class="c">Leyenda</span>',
    craft_lead:'El árbol de fabricación de Once Human es un juego completo en sí mismo.',
    cr1_h:'Supervivencia Bruta',cr1_p:'Herramientas de piedra, armadura de tela, refugios básicos.',
    cr2_h:'Era Industrial',cr2_p:'Bancos de metal, armas de fuego, refuerzo estructural.',
    cr3_h:'Síntesis Tecnológica',cr3_p:'Electrónica, piezas de vehículos, sistemas automatizados.',
    cr4_h:'Fusión Stardust',cr4_p:'Aleaciones contaminadas, aumentos de habilidades, mods de armas exóticos.',
    cr5_h:'Maestría Metahumana',cr5_p:'Equipo forjado por Deviants y armamento que dobla la realidad.',
    wpn_eye:'Arsenal',wpn_title:'Tu Equipo, <span class="c">tu Firma</span>',
    wpn_lead:'Mods, planos y aumentos Deviant crean builds genuinamente únicos.',
    wpn1_h:'Rifles de Precisión',wpn1_p:'Letalidad de largo alcance. Construido para la paciencia.',
    wpn2_h:'Escopetas',wpn2_p:'Devastadoras a corta distancia. Cero concesiones.',
    wpn3_h:'Armas de Energía',wpn3_p:'Alimentadas por Stardust. Efectos de estado irresistibles.',
    wpn4_h:'Explosivos',wpn4_p:'Cuando quieres que todo el mapa discrepe con la existencia de algo.',
    mode_eye:'Modos de Juego',mode_title:'Tu Mundo, <span class="c">tus Reglas</span>',
    pve_badge:'Enfoque PvE',pve_h:'Modo Supervivencia',pve_p:'Tú contra el mundo. Zonas contaminadas, aberraciones y amenazas ambientales implacables.',
    pve_f1:'Exploración completa de mundo abierto',pve_f2:'Co-op activado, PvP opcional',pve_f3:'Misiones narrativas progresivas',pve_f4:'Eventos mundiales e incursiones de jefes',pve_f5:'Acceso completo a fabricación y construcción',
    pvp_badge:'PvP Opcional',pvp_h:'Guerras Territoriales',pvp_p:'Cuando el mundo PvE no basta. Controla nodos de recursos y saquea bases rivales.',
    pvp_f1:'Opcional — nunca forzado',pvp_f2:'Mecánicas de control territorial',pvp_f3:'Guerra de alianzas',pvp_f4:'Contención de nodos de recursos',
    cta2_h:'Tu Equipo no se Construirá Solo',cta2_p:'Los mejores builds fueron diseñados por jugadores que empezaron exactamente donde estás ahora.',cta2_btn:'Empieza a Construir tu Superviviente',
    coop_eye:'Co-op',coop_title:'Algunos Momentos Solo Ocurren <span class="c">Juntos</span>',
    coop_lead:'El co-op de Once Human fue diseñado para crear momentos únicos y memorables.',
    cm1_h:'Primer Kill de Jefe Mundial',cm1_p:'Cuatro jugadores, habilidades coordinadas. Legendario.',
    cm2_h:'Base Bajo Asedio',cm2_p:'Una anomalía golpea a las 2am. Tu compañero se conecta. Aguantáis el perímetro.',
    cm3_h:'La Corrida por Zona Profunda',cm3_p:'Un escuadrón completo se adentra en Zona 5. Todos regresan cambiados.',
    cm4_h:'División de Recursos',cm4_p:'Uno fabrica. Uno explora. Uno defiende. Uno investiga. Cuando funciona, es extraordinario.',
    guide_eye:'Empezar',guide_title:'Tu Primera <span class="c">Hora</span>',
    guide_lead:'Once Human no te ahoga en tutoriales. Esto es en lo que debes centrarte primero.',
    gs1_h:'Aterrizar y Respirar',gs1_p:'Recolecta recursos básicos. Resiste el impulso de explorar de inmediato.',
    gs2_h:'Reclamar tu Territorio',gs2_p:'Usa tu Marcador de Territorio pronto. Busca terreno elevado cerca del agua.',
    gs3_h:'Construir los Cuatro Básicos',gs3_p:'Banco de trabajo, Horno, Almacenamiento, Refugio. Tu base mínima viable.',
    gs4_h:'Encontrar tu Primer Deviant',gs4_p:'Captura un Deviant pronto — incluso de bajo nivel hace la exploración más segura.',
    gs5_h:'Entrar en la Primera Zona Contaminada',gs5_p:'Con armadura básica y un arma a distancia, avanza. Lo que encuentres responderá tus primeras preguntas reales.',
    cmp_eye:'Por Qué Once Human',cmp_title:'Cómo se <span class="c">Diferencia</span>',
    cmp_feature:'Característica',cmp_oh:'Once Human',cmp_game2:'Supervivencia Típica A',cmp_game3:'Supervivencia Típica B',
    cmp_r1:'Gratis para Jugar',cmp_r2:'Tamaño del Mundo Abierto',cmp_r3:'Lore y Narrativa',cmp_r4:'Diseño PvE-First',
    cmp_r5:'Profundidad de Construcción de Base',cmp_r6:'Sistema Deviant/Compañero',cmp_r7:'Actualizaciones Regulares',
    gal_eye:'Capturas de Pantalla',gal_title:'Ver el <span class="c">Mundo</span>',
    trail_eye:'Vista Previa',trail_title:'Ver la <span class="c">Contaminación</span>',trail_label:'Tráiler Oficial de Gameplay',
    cta3_h:'¿Aún Dudando?',cta3_p:'Once Human es gratis. Nada que perder y un mundo entero por ganar.',cta3_btn:'Jugar Gratis — Empezar Ahora',cta3_sub:'Gratis en Steam · PC con Windows',

    req_eye:'Antes de instalar',
    req_title:'¿Tu PC Puede <span class="c">Moverlo?</span>',
    req_lead:'Diseñado para Windows. Se disfruta mejor con espacio libre, internet estable y un SSD.',
    req_min:'Mínimo',req_min_title:'Lo que necesitas para empezar',req_rec:'Recomendado',req_rec_title:'La mejor forma de jugarlo',
    req_os:'Sistema',req_cpu:'Procesador',req_ram:'Memoria',req_gpu:'Gráficos',req_dx:'DirectX',req_net:'Red',req_storage:'Almacenamiento',req_notes:'Notas',
    req_min_os:'Sistema operativo Windows 10 de 64 bits',req_min_cpu:'Intel Core i5-4460',req_min_ram:'8 GB de RAM',req_min_gpu:'Nvidia GTX 750ti 4G / AMD Radeon RX550',req_min_dx:'Versión 11',req_min_net:'Conexión a Internet de banda ancha',req_min_storage:'90 GB de espacio disponible',req_min_notes:'SSD muy recomendado',
    req_rec_os:'Sistema operativo Windows 10 de 64 bits',req_rec_cpu:'Intel Core i7-7700',req_rec_ram:'16 GB de RAM',req_rec_gpu:'Nvidia GTX 1060 6G / AMD Radeon RX 580 2304SP / Intel ARC A380',req_rec_dx:'Versión 12',req_rec_net:'Conexión a Internet de banda ancha',req_rec_storage:'90 GB de espacio disponible',req_rec_notes:'SSD muy recomendado',
    req_note:'Experiencia tipo Windows 10/11 • Internet de banda ancha requerido • 90 GB libres • SSD muy recomendado',
    rev_eye:'Confianza Steam',rev_title:'Lo Que Los Jugadores Dicen en <span class="c">Steam</span>',rev_lead:'Un vistazo rápido al sentimiento actual en Steam y a algunos extractos públicos de reseñas de jugadores.',
    rev_recent_label:'Reseñas recientes',rev_recent_value:'Muy positivas',rev_recent_desc:'Las reseñas recientes en Steam están actualmente Muy positivas.',
    rev_eng_label:'Reseñas en inglés',rev_eng_value:'Mayormente positivas',rev_eng_desc:'Las reseñas en inglés en Steam están actualmente Mayormente positivas.',
    rev_note:'Sentimiento y extractos basados en reseñas públicas de Steam y en la página oficial de Steam.',
    faq_eye:'Preguntas',faq_title:'Todo lo que Quieres <span class="c">Saber</span>',
    faq1_q:'¿Es Once Human realmente gratis?',faq1_a:'Sí. Gratis para descargar y jugar. Ningún contenido principal bloqueado.',
    faq2_q:'¿Puedo jugar en solitario?',faq2_a:'El juego en solitario es completamente compatible y diseñado deliberadamente para ser satisfactorio.',
    faq3_q:'¿El PvP es obligatorio?',faq3_a:'No. El PvP es opcional. La experiencia predeterminada está enfocada en PvE.',
    faq4_q:'¿Qué son los Deviants?',faq4_a:'Entidades anómalas que capturas y con las que te vinculas.',
    faq5_q:'¿Cómo funciona la construcción de base?',faq5_a:'Reclama territorio y construye libremente con un sistema modular.',
    faq6_q:'¿Hay una historia?',faq6_a:'Ambas. Una narrativa genuina y un sandbox coexisten armoniosamente.',
    faq7_q:'¿Cuáles son los requisitos del PC?',faq7_a:'Mínimo: Windows 10 de 64 bits, i5-4460, 8 GB de RAM, GTX 750ti 4G / RX550, DirectX 11, internet de banda ancha, 90 GB de almacenamiento. Recomendado: i7-7700, 16 GB de RAM, GTX 1060 6G / RX 580 2304SP / Intel ARC A380, DirectX 12, internet de banda ancha, 90 GB de almacenamiento. SSD muy recomendado.',
    faq8_q:'¿Tiene actualizaciones regulares?',faq8_a:'Steam muestra historial de actualizaciones y contenido añadido, pero el ritmo y el alcance pueden cambiar. Consulta la página oficial de Steam para las novedades más recientes.',
    faq9_q:'¿Perderé progreso si destruyen mi base?',faq9_a:'Steam destaca la construcción y reubicación del territorio, pero las reglas exactas de destrucción y persistencia pueden variar según el modo, el servidor y la temporada.',
    faq10_q:'¿Qué tan grande es el mundo del juego?',faq10_a:'Steam describe un mundo abierto posapocalíptico extraño con varios biomas e instalaciones subterráneas, pero no publica un tamaño oficial del mapa en la página de la tienda.',
    faq11_q:'¿Hay compras dentro del juego?',faq11_a:'Sí. Steam indica In-App Purchases y menciona compras dentro del juego basadas en azar, interactividad en línea y chat dentro del juego.',
    re1:'Gratis para jugar',re2:'Funciones MMO',re3:'Co-op online',re4:'PvP online',re5:'Compras integradas',re6:'PC con Windows',
    sticky_label:'Once Human está en Vivo',sticky_reassure:'Gratis · PC con Windows',sticky_btn:'Jugar →',
    footer_brand_p:'Una experiencia de supervivencia en mundo abierto en un futuro contaminado. Gratis.',
    footer_col1:'Jugar',footer_play1:'Descargar Gratis',footer_play2:'Modos de Juego',footer_play3:'Estilos de Juego',footer_play4:'Guía para Nuevos Jugadores',
    footer_col2:'Explorar',footer_ex1:'El Mundo',footer_ex2:'Fabricación',footer_ex3:'Armas',footer_ex4:'Construcción de Base',
    footer_col3:'Legal',footer_priv:'Política de Privacidad',footer_terms:'Términos de Uso',footer_faq:'Preguntas Frecuentes',
    footer_copy:'© 2024 Once Human. Todos los derechos reservados.',footer_priv2:'Privacidad',footer_terms2:'Términos',
    priv_title:'Política de Privacidad',
    priv_p1:'Esta página es operada por un socio afiliado independiente. Solo recopilamos datos analíticos anonimizados a través de Google Analytics 4.',
    priv_h2:'Datos que Recopilamos',priv_p2:'GA4 recopila vistas de página anonimizadas y eventos de interacción.',
    priv_h3:'Cookies',priv_p3:'Usamos localStorage para preferencias de idioma/tema.',
    priv_h4:'Enlaces de Terceros',priv_p4:'Al hacer clic en la plataforma Once Human, se aplican sus prácticas de privacidad.',
    priv_h5:'Tus Derechos',priv_p5:'Puedes solicitar acceso o eliminación de tus datos.',
    terms_title:'Términos de Uso',
    terms_p1:'Al acceder a esta página, aceptas estos términos.',
    terms_h2:'Divulgación de Afiliados',terms_p2:'Esta página contiene enlaces de afiliados. El juego sigue siendo gratuito.',
    terms_h3:'Precisión',terms_p3:'Mantenemos información precisa, pero las características del juego pueden cambiar.',
    terms_h4:'Uso Prohibido',terms_p4:'La reproducción o scraping de este contenido está prohibido.',
    terms_h5:'Limitación de Responsabilidad',terms_p5:'Esta página es informativa. No somos responsables de las decisiones tomadas basándose en su contenido.',
    pnum_2:'Mundo Abierto',pnum_3:'Gratis',pnum_4:'Solo y Escuadrón',pnum_5:'PvE-Primero',pnum_6:'PC con Windows',stat_coop:'Co-op online',stat_free:'Gratis',cval_massive:'Masivo',cval_medium:'Mediano',cval_small:'Pequeño',cval_deep:'✓ Profundo',cval_minimal:'Mínimo',cval_basic:'Básico',cval_advanced:'✓ Avanzado',cval_moderate:'Moderado',cval_unique:'✓ Único',cval_slow:'Lento',cval_occasional:'Ocasional',
    vp1_h:'Mundo Abierto Masivo',vp1_p:'Biomas contaminados, ruinas subterráneas y un mapa que recompensa cada dirección explorada.',
    vp2_h:'Sistema de Crafteo Profundo',vp2_p:'Cinco niveles de progresión. Cientos de planos. Cada desbloqueo transforma tu estilo de juego.',
    vp3_h:'Listo para Co-op',vp3_p:'Juega en solitario o únete al co-op online para explorar, enfrentarte a jefes y defender tu territorio.',
    vp4_h:'Cero Costo para Empezar',vp4_p:'Gratis en Steam, con compras integradas opcionales indicadas en la página de la tienda.',
    trail_desc:'Mira Once Human en movimiento — los biomas, las aberraciones, las incursiones a bases. Cada imagen es un mundo en el que realmente sobrevivirás.',
    trail_cta:'Jugar Gratis Ahora →',
    close_eye:'La Niebla No Espera',
    close_title:'Tu Historia de Supervivencia Comienza <span class="c">Ahora</span>',
    close_sub:'Once Human no cuesta nada para entrar. El mundo está en vivo — lleno de jugadores construyendo y reclamando territorio. Cada día que esperas es un día de retraso.',
    close_cta:'Reclamar Tu Territorio — Gratis →',
    close_micro:'Gratis · PC con Windows · Compras integradas opcionales',
    fav1_d:'Empieza gratis en Steam, con compras integradas opcionales indicadas en la página de la tienda.',
    fav1_vs:'Otros: requieren pago para entrar',
    fav2_d:'Un vasto paisaje contaminado con biomas distintos, instalaciones subterráneas y mucho espacio para explorar a fondo.',
    fav2_vs:'Otros: mediano o pequeño',
    fav3_d:'Registros de investigación, transmisiones cifradas, IA corrupta. Un misterio profundo sobre el Stardust.',
    fav3_vs:'Otros: mínimo o básico',
    fav4_d:'El mundo es el enemigo — zonas contaminadas y aberraciones. El PvP está disponible pero nunca es forzado.',
    fav4_vs:'Otros: PvP dominante',
    fav5_d:'Construcción modular con redes eléctricas, sistemas automatizados, torretas y compañeros Deviant. Ingeniería como gameplay.',
    fav5_vs:'Otros: básico o moderado',
    fav6_d:'Captura y vincúlate con entidades anómalas que influyen en el combate, la artesanía y la defensa de la base.',
    fav6_vs:'Otros: nada comparable',
    fav7_d:'Steam muestra un historial activo de actualizaciones y contenido adicional mientras el juego sigue evolucionando con nuevos escenarios y cambios.',
    fav7_vs:'Otros: lento u ocasional'
  }
};

/* ---- STATE ---- */
var currentLang='en';
var currentTheme='dark';
window.LP_VARIANT=1;

/* ---- SAFE STORAGE ---- */
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}

/* ---- SAFE HISTORY ---- */
function safeReplaceState(url){try{history.replaceState(null,'',url);}catch(e){}}
function safePushState(url){try{history.pushState(null,'',url);}catch(e){}}

/* ---- SAFE URL PARAMS ---- */
function getParams(){
  try{return new URLSearchParams(window.location.search);}catch(e){return new URLSearchParams('');}
}

/* ---- INIT ---- */
function init(){
  // URL params
  var params=getParams();

  // Language
  var pl=params.get('lang');
  var sl=lsGet('lp_lang');
  var bl=navigator.language?navigator.language.slice(0,2).toLowerCase():'en';
  var lang=pl||sl||(I18N[bl]?bl:'en');
  setLang(lang,true);

  // Theme — dark mode only
  setTheme('dark',true);

  // Modal from URL
  var modal=params.get('modal');
  if(modal==='privacy')openModal('privacy',true);
  else if(modal==='terms')openModal('terms',true);

  // Sticky bar
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  // Lazy images
  setupLazyLoad();

  // Scroll depth
  setupScrollDepth();

  // Hero effects
  spawnParticles();
  initVideoFallback();
}


/* ---- LANGUAGE ---- */
function setLang(lang,silent){
  if(!I18N[lang])lang='en';
  currentLang=lang;
  lsSet('lp_lang',lang);
  document.documentElement.lang=lang;

  // Update URL
  var p=getParams();
  p.set('lang',lang);
  safeReplaceState('?'+p.toString());

  // Re-apply translations
  var t=I18N[lang];
  // Handle plain text keys
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key=el.getAttribute('data-i18n');
    if(t[key]===undefined)return;
    if(el.tagName==='INPUT'){el.value=t[key];}
    else{el.textContent=t[key];}
  });
  // Handle HTML keys (elements with child markup that must be preserved via innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    var key=el.getAttribute('data-i18n-html');
    if(t[key]!==undefined)el.innerHTML=t[key];
  });

  // Update lang button states
  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.classList.toggle('active',btn.getAttribute('data-lang')===lang);
  });

  // Re-apply variant (CTA text may differ per lang, but we keep variant hero)

  if(!silent)trackEvent('language_change',{language:lang});
}

/* ---- THEME ---- */
function setTheme(theme,silent){
  currentTheme=theme;
  lsSet('lp_theme',theme);
  document.documentElement.setAttribute('data-theme',theme);

  var p=getParams();
  p.set('theme',theme);
  safeReplaceState('?'+p.toString());

  var btn=document.getElementById('theme-toggle');
  if(btn)btn.textContent=theme==='dark'?'☀️':'🌙';

  if(!silent)trackEvent('theme_change',{theme:theme});
}

function toggleTheme(){
  setTheme(currentTheme==='dark'?'light':'dark');
}

/* ---- SCROLL ---- */
function onScroll(){
  var y=window.scrollY||window.pageYOffset;
  var sb=document.getElementById('sticky-bar');
  var bt=document.getElementById('back-top');
  if(sb){sb.classList.toggle('visible',y>400);}
  if(bt){bt.classList.toggle('visible',y>600);}
}

/* ---- LAZY LOAD ---- */
function setupLazyLoad(){
  var imgs=document.querySelectorAll('img[data-src]');
  if(!imgs.length)return;
  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var img=e.target;
          var src=img.getAttribute('data-src');
          if(src&&src!=='screenshot_1'&&src!=='screenshot_2'&&src!=='screenshot_3'&&src!=='screenshot_4'&&src!=='screenshot_5'){
            img.src=src;
            img.addEventListener('load',function(){img.classList.add('loaded');});
          }
          obs.unobserve(img);
        }
      });
    },{rootMargin:'200px'});
    imgs.forEach(function(img){obs.observe(img);});
  }
}

/* ---- SCROLL DEPTH ---- */
function setupScrollDepth(){
  var marks=[25,50,75,90];
  var fired={};
  window.addEventListener('scroll',function(){
    var pct=Math.round((window.scrollY+window.innerHeight)/document.body.scrollHeight*100);
    marks.forEach(function(m){
      if(pct>=m&&!fired[m]){
        fired[m]=true;
        trackEvent('scroll_depth',{depth:m});
      }
    });
  },{passive:true});
}

/* ---- FAQ ---- */
function toggleFaq(btn){
  var item=btn.closest('.faq-item');
  var isOpen=item.getAttribute('aria-expanded')==='true';
  // close others
  document.querySelectorAll('.faq-item[aria-expanded="true"]').forEach(function(el){
    el.setAttribute('aria-expanded','false');
    el.querySelector('.faq-question').setAttribute('aria-expanded','false');
  });
  if(!isOpen){
    item.setAttribute('aria-expanded','true');
    btn.setAttribute('aria-expanded','true');
    var key=btn.getAttribute('data-i18n');
    if(key)trackEvent('faq_open',{question:key});
  }
}

/* ---- PLAYSTYLE TABS ---- */
function switchTab(id,btn){
  document.querySelectorAll('.style-content').forEach(function(el){el.classList.remove('active');});
  document.querySelectorAll('.style-tab').forEach(function(el){el.classList.remove('active');el.setAttribute('aria-selected','false');});
  var tab=document.getElementById('tab-'+id);
  if(tab)tab.classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
}

/* ---- MODALS ---- */
var prevModalURL='';
function openModal(type,silent){
  var overlay=document.getElementById('modal-'+type);
  if(!overlay)return;
  prevModalURL=window.location.search;

  var p=getParams();
  p.set('modal',type);
  safePushState('?'+p.toString());

  overlay.classList.add('open');
  document.body.style.overflow='hidden';

  // Focus trap
  var close=overlay.querySelector('.modal-close');
  if(close)setTimeout(function(){close.focus();},100);

  if(!silent)trackEvent('legal_modal_open',{modal_type:type});
}

function closeModal(type){
  var overlay=document.getElementById('modal-'+type);
  if(!overlay)return;
  overlay.classList.remove('open');
  document.body.style.overflow='';

  // Restore URL
  var p=getParams();
  p.delete('modal');
  var qs=p.toString();
  safeReplaceState(qs?'?'+qs:window.location.pathname);
}

// Keyboard close
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    document.querySelectorAll('.modal-overlay.open').forEach(function(el){
      var type=el.id.replace('modal-','');
      closeModal(type);
    });
  }
});

/* ---- TRAILER ---- */
var TRAILER_PLAYLIST = [
  {
    src: 'Once Human 1.mp4',
    poster: 'assets/images/html_08.webp',
    label: 'Gameplay Trailer 1',
    desc: 'Dark atmosphere, world scale, and your first look at the contamination.'
  },
  {
    src: 'Once Human 2.mp4',
    poster: 'assets/images/html_09.webp',
    label: 'Gameplay Trailer 2',
    desc: 'More combat pressure, stronger encounters, and the pace of survival in motion.'
  },
  {
    src: 'Once Human 3.mp4',
    poster: 'assets/images/html_10.webp',
    label: 'Gameplay Trailer 3',
    desc: 'Territory stakes, larger threats, and the scale that makes the world feel alive.'
  }
];
var currentTrailerIndex = 0;

function updateTrailerMeta(){
  var label = document.getElementById('trailer-current-label');
  var desc = document.getElementById('trailer-current-desc');
  var item = TRAILER_PLAYLIST[currentTrailerIndex];
  if(label) label.textContent = item.label;
  if(desc) desc.textContent = item.desc;
}

function syncTrailerButtons(){
  document.querySelectorAll('.trailer-thumb').forEach(function(btn, idx){
    var active = idx === currentTrailerIndex;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function hideTrailerOverlay(){
  var overlay = document.getElementById('trailer-play-overlay');
  if(overlay) overlay.classList.add('is-hidden');
}

function showTrailerOverlay(){
  var overlay = document.getElementById('trailer-play-overlay');
  if(overlay) overlay.classList.remove('is-hidden');
}

function updateTrailerMuteButton(){
  var btn = document.getElementById('trailer-sound-btn');
  var video = document.getElementById('main-trailer-video');
  if(!btn || !video) return;
  btn.textContent = video.muted ? '🔇' : '🔊';
  btn.setAttribute('aria-label', video.muted ? 'Unmute trailer' : 'Mute trailer');
}

function selectTrailer(index, autoplay){
  var video = document.getElementById('main-trailer-video');
  var source = document.getElementById('main-trailer-source');
  if(!video || !source || !TRAILER_PLAYLIST[index]) return;
  currentTrailerIndex = index;
  var item = TRAILER_PLAYLIST[index];
  if(video.getAttribute('poster') !== item.poster){
    video.setAttribute('poster', item.poster);
  }
  if(source.getAttribute('src') !== item.src){
    var wasMuted = video.muted;
    source.setAttribute('src', item.src);
    video.pause();
    video.load();
    video.muted = wasMuted;
  }
  updateTrailerMeta();
  syncTrailerButtons();
  updateTrailerMuteButton();
  if(autoplay){
    video.play().then(function(){
      hideTrailerOverlay();
    }).catch(function(){
      showTrailerOverlay();
    });
  } else {
    showTrailerOverlay();
  }
}

function playTrailer(){
  var video = document.getElementById('main-trailer-video');
  if(!video) return;
  video.play().then(function(){
    hideTrailerOverlay();
  }).catch(function(){});
}

function toggleTrailerMute(){
  var video = document.getElementById('main-trailer-video');
  if(!video) return;
  video.muted = !video.muted;
  updateTrailerMuteButton();
}

function initTrailerPlayer(){
  var video = document.getElementById('main-trailer-video');
  if(!video) return;
  video.muted = true;
  if(TRAILER_PLAYLIST[currentTrailerIndex]){
    video.setAttribute('poster', TRAILER_PLAYLIST[currentTrailerIndex].poster);
  }
  updateTrailerMeta();
  syncTrailerButtons();
  updateTrailerMuteButton();
  showTrailerOverlay();
  video.addEventListener('play', hideTrailerOverlay);
  video.addEventListener('pause', function(){
    if(video.currentTime < video.duration && !video.ended){
      showTrailerOverlay();
    }
  });
  video.addEventListener('ended', showTrailerOverlay);
}

/* ---- EXPOSE TO GLOBAL SCOPE (required for inline onclick attributes) ---- */
window.setLang      = setLang;
window.toggleTheme  = toggleTheme;
window.switchTab    = switchTab;
window.toggleFaq    = toggleFaq;
window.openModal    = openModal;
window.closeModal   = closeModal;
window.playTrailer  = playTrailer;
window.selectTrailer = selectTrailer;
window.toggleTrailerMute = toggleTrailerMute;

/* ---- HERO VIDEO AUDIO / END POSTER ---- */
function updateHeroMuteButton(){
  var vid=document.getElementById('hero-video');
  var btn=document.getElementById('hero-mute-btn');
  if(!vid||!btn)return;
  btn.textContent=vid.muted?'🔇':'🔊';
  btn.setAttribute('aria-label', vid.muted ? 'Unmute video' : 'Mute video');
}

function showHeroEndOverlay(){
  var overlay=document.getElementById('hero-end-overlay');
  if(overlay)overlay.classList.add('is-visible');
}

function hideHeroEndOverlay(){
  var overlay=document.getElementById('hero-end-overlay');
  if(overlay)overlay.classList.remove('is-visible');
}

function toggleHeroMute(){
  var vid=document.getElementById('hero-video');
  if(!vid)return;
  vid.muted=!vid.muted;
  updateHeroMuteButton();
}

function replayHeroVideo(){
  var vid=document.getElementById('hero-video');
  if(!vid)return;
  hideHeroEndOverlay();
  vid.currentTime=0;
  vid.play().catch(function(){});
}

function initHeroVideo(){
  var vid=document.getElementById('hero-video');
  if(!vid)return;
  vid.muted=true;
  updateHeroMuteButton();
  hideHeroEndOverlay();
  vid.addEventListener('play', hideHeroEndOverlay);
  vid.addEventListener('ended', showHeroEndOverlay);
  vid.play().then(function(){
    updateHeroMuteButton();
  }).catch(function(){
    updateHeroMuteButton();
  });
}
window.toggleHeroMute=toggleHeroMute;
window.replayHeroVideo=replayHeroVideo;

/* ---- HERO PARTICLES ---- */
function spawnParticles(){
  var container=document.getElementById('hero-particles');
  if(!container)return;
  var count=22;
  for(var i=0;i<count;i++){
    (function(i){
      var p=document.createElement('span');
      p.className='hero-particle';
      var size=Math.random()*2.5+1;
      var left=Math.random()*100;
      var delay=Math.random()*18;
      var duration=Math.random()*14+10;
      p.style.cssText=[
        'width:'+size+'px',
        'height:'+size+'px',
        'left:'+left+'%',
        'animation-duration:'+duration+'s',
        'animation-delay:'+delay+'s',
        'opacity:0'
      ].join(';');
      container.appendChild(p);
    })(i);
  }
}

/* ---- VIDEO FALLBACK ---- */
function initVideoFallback(){
  var vid=document.getElementById('hero-video');
  var overlay=document.getElementById('hero-end-overlay');
  if(!vid)return;
  // If the video can't load, fall back to the poster overlay instead of leaving an empty hero
  vid.addEventListener('error',function(){
    vid.style.display='none';
    if(overlay)overlay.classList.add('is-visible');
  });
  vid.addEventListener('stalled',function(){
    setTimeout(function(){
      if(vid.readyState===0){
        vid.style.display='none';
        if(overlay)overlay.classList.add('is-visible');
      }
    },4000);
  });
}

init();
initHeroVideo();
initTrailerPlayer();
})();



document.addEventListener('DOMContentLoaded', function () {
  const imageMap = {
    screenshot_1: 'assets/images/js_02.webp',
    screenshot_2: 'assets/images/js_01.webp',
    screenshot_3: 'assets/images/js_03.webp',
    screenshot_4: 'assets/images/js_04.gif',
    screenshot_5: 'assets/images/js_04.gif'
  };

  document.querySelectorAll('img[data-src]').forEach(function (img) {
    const key = img.getAttribute('data-src');
    if (imageMap[key]) {
      img.setAttribute('data-src', imageMap[key]);
    }
  });

  if (typeof setupLazyLoad === 'function') {
    setupLazyLoad();
  }
});



document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('#gallery img[data-src^="data:image/"]').forEach(function(img){
    var src=img.getAttribute('data-src');
    img.src=src;
    img.classList.add('loaded');
    var ph=img.parentElement && img.parentElement.querySelector('.gallery-placeholder');
    if(ph) ph.style.opacity='0';
  });
});
