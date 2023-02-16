import styles from "./Stay.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { LanguageContext } from "../../languageContext";

const titles = {
  en: ["Number of stars: "],
  se: ["Antal stjärnor: "],
};

export default function Hotels() {
  const languageContext = useContext(LanguageContext);
  const listHotels = hotels.map(
    ({
      number,
      name,
      imgSrc,
      text1,
      text2,
      text3,
      stars,
      address,
      href,
      site,
    }) => (
      <Col xs={12} lg={8} class="ps-5 text-start">
        <h1 className={styles.number}>{number}</h1>
        <h2 className={styles.nameHotel}>{name}</h2>
        <img src={imgSrc} width="90%" alt={name} />
        <div class="text-start ps-5 pt-4">
          <p>{text1[languageContext.language]}</p>
          <p>{text2[languageContext.language]}</p>
          <p>{text3[languageContext.language]}</p>
          <b>{titles[languageContext.language][0]}</b>
          <span className={styles.stars}>{stars}</span>
          <br />
          <Row xs={1} lg={2}>
            <Col xs={12} lg={6}>
              <p>
                <i class={`bi bi-geo-alt-fill ${styles.icon}`}> </i> {address}
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <p>
                <i class={`bi bi-house-fill ${styles.icon}`}> </i>
                <a href={href} targen="blank" className={styles.site}>
                  {site}
                </a>
              </p>
            </Col>
          </Row>
          <hr />
        </div>
      </Col>
    )
  );
  return <div>{listHotels}</div>;
}

const hotels = [
  {
    number: "01",
    name: "Grand Hôtel",
    imgSrc: "images/grandHotel.jpg",
    text1: {
      en: "The magnificent Grand Hôtel is the hotel of all hotels in the capital of Sweden. If you want to stay in a five-star hotel in Stockholm, few others can compete with Grand. Since 1874 it has been located at a perfect spot by the water with a magnificent view of Stockholm's Royal Palace and Old Town, and over the years, both celebrities, royalties, and everyday bon-vivants have enjoyed first-class stays here. Book everything from single rooms to gigantic multi-room suites – no matter what you choose, you’ll always get a Grand Experience.",
      se: "Det magnifika Grand Hôtel hotellens hotell i Sveriges huvudstad. Vill du bo på ett femstjärnigt hotell i Stockholm finns det få andra som kan mäta sig med Grand. Det har legat i bästa tänkbara läge vid vattnet med storslagen utsikt mot Stockholms slott och Gamla stan sedan 1874, och under åren har både kändisar, kungligheter och helt vanliga livsnjutare haft förstklassiga vistelser här. Boka alltifrån enkelrum till gigantiska sviter med flera rum – oavsett vad du väljer får du alltid en Grand Experience.",
    },
    text2: {
      en: "Grand Hôtel not only offers super-luxury accommodation close to everything. Here are also several of Stockholm's best restaurants (including room service). Classic The Veranda offers both breakfast, lunch, and dinner plus smorgasbord and fantastic Christmas and New Year's buffets. The well-known restaurateur Mathias Dahlgren also has two award-winning restaurants within the hotel – Matbaren and Rutabaga. In The Cadier Bar, some of Sweden's best bartenders mix delicious cocktails, and they also offer afternoon tea. To name just a few of the hotel's many opportunities to enjoy life.",
      se: "Grand Hôtel erbjuder inte bara ett superlyxigt boende med nära till allt. Här finns även flera av Stockholms bästa restauranger (och självklart room service). Klassiska Verandan erbjuder både frukost, lunch och middag plus smörgåsbord och fantastiska jul- och nyårsbufféer. Den kände krögaren Mathias Dahlgren har också två prisbelönta restauranger innanför hotellets väggar – Matbaren och Rutabaga. I Cadierbaren blandar några av Sveriges bästa bartenders delikata cocktails och här finns även afternoon tea. För att bara nämna några av hotellets alla möjligheter att njuta av livet.",
    },
    text3: {
      en: "If you're looking for relaxing recreation, there's also a spa, Nordic Spa & Fitness, with pools, saunas, and much more. If you want to enjoy maximum relaxation with pleasant spa treatments in a private environment, you and your party can also book wonderful suite experiences. Grand Hôtel offers some of the world's most exclusive and unique suites with stunning views. Perfect for a super luxurious date, bachelorette party, or wedding day celebration.",
      se: "För dig som söker avkopplande rekreation finns också ett spa, Nordic Spa & Fitness, med bassänger, bastu och mycket mer. Vill du njuta av maximal avkoppling med sköna behandlingar i en privat miljö kan du och ditt sällskap även boka härliga svitupplevelser. Grand Hôtel erbjuder några av världens mest exklusiva och unika sviter med fantastisk utsikt. Perfekt för en superlyxig dejt, möhippa eller bröllopsdag.",
    },
    stars: "★★★★★",
    address: "Södra Blasieholmshamnen 8, Norrmalm/City",
    href: "https://grandhotel.se",
    site: "grandhotel.se",
  },
  {
    number: "02",
    name: "Ett Hem",
    imgSrc: "images/Ett_Hem.jpg",
    text1: {
      en: "If you're looking for a cozy and personal luxury hotel in Stockholm, you will enjoy Ett Hem in Östermalm. This small design hotel is in an old building in the beautiful Lärkstaden and is a lovely oasis in the middle of town for those looking for a perfect hotel experience and privacy. Everything from interior design to food is thought out to the smallest detail and is world-class. And with the homely atmosphere, this boutique hotel lives up to its name – it really feels like a home (the name means “a home” in English).",
      se: "Du som söker ett mysigt och personligt lyxhotell i Stockholm kommer trivas på Ett Hem på Östermalm. Detta lilla designhotell ligger i ett gammalt sekelskifteshus i den vackra Lärkstaden och är en härlig oas mitt i stan för dig som söker en fulländad hotellupplevelse och avskildhet. Alltifrån inredning till mat är genomtänkt in i minsta detalj och håller absolut världsklass. Och med den hemtrevliga atmosfären lever boutiquehotellet upp till sitt namn – det känns verkligen som ett hem.",
    },
    text2: {
      en: "The hotel has only twelve rooms, and in the elegant rooms, you can have a superb stay with everything you could ever wish for – from comfortable beds and lovely bathroom products to Wi-Fi, flat-screen TV, and minibar. If you choose a suite, you get, among other things, a marble bathroom and a separate living room area. Some of the suites also have a fireplace.",
      se: "Hotellet har endast tolv rum och i de eleganta rummen bor du storstilat med allt du kan önska dig – från sköna sängar och härliga badrumsprodukter till wifi, platt-tv och minibar. Väljer du en svit kan får du bland annat marmorbadrum och en separat vardagsrumsdel. Vissa av sviterna har även öppen spis.",
    },
    text3: {
      en: "Ett Hem also has every imaginable convenience for a complete hotel stay – a fine dining restaurant, bar, lounge, gym, sauna, spa, 24-hour reception, a lush garden, library, and more. The super professional staff delivers impeccable service and ensures you're happy with everything.",
      se: "Ett Hem har dessutom alla tänkbara bekvämligheter för en komplett hotellvistelse – lyxrestaurang, bar, lounge, gym, bastu, spa, dygnet-runt-öppen reception, en lummig trädgård, bibliotek med mera. Den superproffsiga personalen levererar oklanderlig service och ser till att du har det bra på alla sätt.",
    },
    stars: "★★★★★",
    address: "Sköldungagatan 2, Östermalm",
    href: "https://www.etthem.se",
    site: "etthem.se",
  },
  {
    number: "03",
    name: "Villa Dagmar",
    imgSrc: "images/VILLA_DAGMAR.jpg",
    text1: {
      en: "Villa Dagmar is a luxurious and personal hotel in Östermalm, located on the vibrant Nybrogatan. Here you are close to shopping, restaurants (including Östermalmshallen), and Stureplan, with its plethora of bars and nightclubs. The beautiful building offers a top-class hotel experience that will satisfy even the pickiest traveler. Book a hotel package and really pamper yourself and your companion.",
      se: "Villa Dagmar är ett lyxigt och personligt hotell på Östermalm som ligger mitt i stadspulsen på livliga Nybrogatan. Här har du nära till shopping, restauranger (bland annat Östermalmshallen) och Stureplan med sitt utbud av barer och nattklubbar. Den vackra byggnaden bjuder på en hotellupplevelse i absolut toppklass som gör även den mest kräsna resenären mer än nöjd. Boka ett hotellpaket och skäm bort dig själv och ditt sällskap ordentligt.",
    },
    text2: {
      en: "Villa Dagmar delivers quality right through and is furnished with carefully selected furniture from Scandinavian and Italian designers that creates a warm and traditional atmosphere. The elegant rooms have a lovely home feeling, and you can stay in everything from smaller double rooms to fine suites. Regardless of room type, you have free access to Dagmar Spirit & Retreat, where you can get wonderful treatments, and the gym if you want to work out.",
      se: "Villa Dagmar andas kvalitet rakt igenom och är inrett med noggrant utvalda möbler från skandinaviska och italienska designers som bidrar till en varm och klassisk atmosfär. Den smakfulla rummen har en härlig hemmakänsla och du kan bo i alltifrån mindre dubbelrum till fina sviter. Oavsett vilken rumstyp du väljer har du fri tillgång till Dagmar Spirit & Retreat där du kan få härliga behandlingar och gymmet om du vill köra ett träningspass.",
    },
    text3: {
      en: "Those who want food and drinks can have a fine gastronomic experience in the hotel restaurant run by award-winning chefs with high ambitions. The hotel also has a popular wine bar, Dagges, with the best of the Mediterranean wine cultures. And don't miss the heart of Villa Dagmar – the lovely courtyard where they serve cocktails, breakfast, brunch, and more, as well as have live music and DJs. The premises also offers inspiring environments for meetings, conferences, events, and private dinners. And if you appreciate high-class contemporary art, the hotel's art exhibitions are also recommended.",
      se: "Du som vill äta och dricka kan få en förnämlig gastronomisk upplevelse i hotellrestaurangen som drivs av prisbelönta kockar med höga ambitioner. Hotellet har även en populär vinbar, Dagges, med det bästa från medelhavsländernas vinkulturer. Och missa inte Villa Dagmars hjärta – den härliga innergården där det bland annat serveras cocktails, frukost och brunch samt livemusik och DJ's. Lokalerna erbjuder även inspirerande miljöer för möten, konferenser, event och privata middagar. Och uppskattar du högklassig samtida konst rekommenderas också hotellets konstutställningar.",
    },
    stars: "★★★★★",
    address: "Nybrogatan 25–27, Östermalm",
    href: "https://hotelvilladagmar.com",
    site: "hotelvilladagmar.com",
  },
  {
    number: "04",
    name: "Elite Marina Tower",
    imgSrc: "images/Elite_Marina_Tower.jpg",
    text1: {
      en: "How about staying in stylishly decorated hotel rooms in a cultural heritage-listed historic mill building with one of Stockholm's best views over the water, Djurgården and Waldemarsudde? Plus, close to downtown? Then you should go for Elite Marina Tower, located at Saltsjöqvarn, near Danvikstull on the border to Nacka. The location at Stockholm's inlet – where the city and archipelago meet – provides a unique and inspiring experience in a relaxing environment.",
      se: "Vad sägs om att bo i smakfullt inredda hotellrum i en kulturminnesmärkt historisk kvarnbyggnad med en av Stockholms bästa utsikter över vattnet, Djurgården och Waldemarsudde? Plus nära till centrum? Då ska du satsa på Elite Marina Tower som ligger vid Saltsjöqvarn, nära Danvikstull på gränsen till Nacka. Läget vid Stockholms inlopp – där stad och skärgård möts – ger en unik och inspirerande upplevelse i en avkopplande miljö.",
    },
    text2: {
      en: "Stay in cozy twin or double rooms in several sizes, spacious family rooms, or elegant suites. Regardless of choice, you'll get an unforgettable hotel experience with top service and all imaginable conveniences. ",
      se: "Bo i trivsamma dubbelrum i flera storlekar, rymliga familjerum eller eleganta sviter. Oavsett vad du väljer får du en oförglömlig hotellupplevelse med hög service och alla tänkbara bekvämligheter.",
    },
    text3: {
      en: "In addition to accommodation, Elite Marina Tower also offers an excellent restaurant where you're served a delicious hotel breakfast, a hotel bar, large, fine conference facilities, and party and event rooms. And last but not least, Sturebadet Marina Tower Spa – an exclusive spa and training facility with a pool, jacuzzi, sauna, and Turkish Hamam. The hotel also has a professional and fully equipped TV studio if you need that.",
      se: "Förutom boende erbjuder Elite Marina Tower även en förträfflig restaurang där du serveras en härlig hotellfrukost, hotellbar, stora fina konferensrum, fest- och eventlokaler och inte minst Sturebadet Marina Tower Spa – en exklusiv spa- och träningsanläggning med pool, jacuzzi, bastu och turkiskt hamam. Hotellet har dessutom en professionell och komplett utrustad tv-studio om du skulle behöva det.",
    },
    stars: "★★★★☆",
    address: "Saltsjöqvarns kaj 25, Nacka",
    href: "https://elite.se",
    site: "elite.se",
  },
  {
    number: "05",
    name: "Hotel Diplomat",
    imgSrc: "images/hotelDiplomat.jpg",
    text1: {
      en: "With timeless exclusive settings, excellent service, a top location on fashionable Strandvägen, and views of Nybroviken, Hotel Diplomat is one of Stockholm's best hotels – and one of the most popular among both celebrities, couples, business travelers, and common people. The fact that Diplomat has been named one of Northern Europe's top hotels for several years is proof of that. And when you enter the doors of the stunning Art Nouveau palace from 1911, you'll understand why.",
      se: "Med tidlösa exklusiva miljöer, förstklassig service, toppläge på fashionabla Strandvägen och utsikt över Nybroviken är Hotel Diplomat ett av Stockholms bästa hotell – och ett av de absolut mest populära bland både celebriteter, par, affärsresenärer och helt vanligt folk. Ett bevis på det är att Diplomat flera år i rad blivit utnämnda till ett av norra Europas främsta hotell. När du kommer innanför dörrarna på det fantastiska jugendpalatset från 1911 förstår du varför.",
    },
    text2: {
      en: "Hotel Diplomat has 130 rooms and suites in various sizes. What they all have in common is that they offer quality, design, and convenience. Beds, bedding, furniture, bathrooms – nothing has been left to chance. Many of the rooms also have a balcony. In addition to accommodation, there's also a popular restaurant serving breakfast, lunch, and dinner, several bars with cocktails, champagne, after-work, and DJs, a shop, and a classic afternoon tea that has been served since the 1960s. In other words, it's a lovely meeting place for all occasions.",
      se: "Hotel Diplomat har 130 rum och sviter i olika storlekar. Gemensamt för dem alla är att de erbjuder kvalitet, design och bekvämlighet. Sängar, sängkläder, möbler, badrum – ingenting har lämnats åt slumpen. Många av rummen har dessutom balkong. Förutom boende finns här även en populär restaurang som serverar frukost, lunch och middag, barer med cocktails, champagne, after work och DJ:s, en butik och inte minst en klassisk afternoon tea som serverats sedan 1960-talet. Det är med andra ord en härlig mötesplats för alla tillfällen.",
    },
    text3: {
      en: "Hotel Diplomat is perfect if you're looking for a hotel in central Stockholm. You are close to most of the best that Stockholm offers – whether you're in the mood for sightseeing, museums, shopping, restaurants, or something else. Stureplan, Norrmalmstorg, and scenic Djurgården are just some of the highlights nearby.",
      se: "Söker du ett hotell i centrala Stockholm är Hotel Diplomat perfekt. Du har nära till det mesta av det bästa som Stockholm har att erbjuda – oavsett om du är på humör för sightseeing, museer, shopping, restaurangbesök eller något annat. Stureplan, Norrmalmstorg och natursköna Djurgården är bara några av höjdpunkterna i närheten.",
    },
    stars: "★★★★★",
    address: "Strandvägen 7C, Östermalm",
    href: "https://www.diplomathotel.com",
    site: "diplomathotel.com",
  },
  {
    number: "06",
    name: "Backstage Hotel",
    imgSrc: "images/Backstage_Hotel.jpg",
    text1: {
      en: "Backstage Hotel is a four-star hotel in Djurgården that opened in 2022 and is located in the same building as ABBA The Museum. With strong ties to Stockholm's entertainment world, this boutique hotel allows you to come backstage – behind the scenes – and get a glimpse of the artists' vibrant and creative world. The old building dating back to 1880, has been carefully restored, and details such as ceiling joists and tile stoves are preserved. There are 57 luxurious rooms, and the different room types offer things like a private veranda, terrace, or penthouse. Why not stay in the ABBA Gold Suite, ambitiously dedicated to ABBA's successful 1992 album?",
      se: "Backstage Hotel är ett fyrstjärnigt hotell på Djurgården som öppnade 2022 och ligger i samma byggnad som ABBA The Museum. Med de starka banden till Stockholms nöjesvärld detta ger detta botiquehotell dig en möjlighet att få komma backstage – bakom kulisserna – och få känsla av artisternas pulserande och kreativa värld. Den gamla byggnaden med anor från 1880 har restaurerats varsamt och detaljer som takbjälkar och kakelugnar har bevarats. Här finns 57 flotta rum där de olika rumstyperna erbjuder bland annat egen veranda, terrass eller takvåning. Varför inte bo i ABBA Gold-sviten, ambitiöst dedikerad till ABBA:s framgångsrika album från 1992?",
    },
    text2: {
      en: "The location in Djurgården is fabulous. In addition to the unbeatable proximity to the ABBA museum, you live just a stone's throw from attractions such as Gröna Lund, Skansen, the Vasa Museum, the Nordic Museum, Circus, and everything else that the city's royal green island offers. Including the fantastic nature. You can also get to the city's other areas quickly and easily, either by foot, tram, or boat.",
      se: "Läget på Djurgården är fantastiskt. Förutom den oslagbara närheten till ABBA-museet bor du bara ett stenkast från attraktioner som Gröna Lund, Skansen, Vasamuseet, Nordiska museet, Cirkus och allt annat som stadens kungliga gröna ö har att erbjuda. Inte minst den fantastiska naturen. Du tar dig också snabbt och lätt till de övriga delarna av city, antingen till fots, med spårvagn eller båt.",
    },
    text3: {
      en: "On the first floor, there's an art gallery with a shop that also serves as the hotel's restaurant and dining room for breakfast, lunch, and dinner, plus a bakery. If you want something to drink, there's the bar Backstage Rider which offers champagne, cocktails, European craft beer, and much more.",
      se: "På första våningen finns en konsthall med butik som även tjänstgör som hotellets restaurang och matsal för frukost, lunch och middag plus bageri. Vill du ha något att dricka finns baren Backstage Rider med champagne, drinkar, europeisk hantverksöl och mycket annat gott.",
    },
    stars: "★★★★☆",
    address: "Djurgårdsvägen 68, Djurgården",
    href: "https://backstagehotelsthlm.com",
    site: "backstagehotelsthlm.com",
  },
  {
    number: "07",
    name: "Story Hotel Riddargatan",
    imgSrc: "images/Story_Hotel.jpg",
    text1: {
      en: "Story Hotel on Riddargatan is a modern boutique hotel with a perfect Östermalm location in the middle of vibrant city life. Here you live in an environment inspired by art, music, and design – with Stockholm's nightlife, culture, and shopping around the corner. The hotel has 83 fine and spacious rooms in various sizes, from single rooms to suites, where one of the highlights is The Attic, a 60-square-meter suite with a view of Stockholm's rooftops.",
      se: "Story Hotel på Riddargatan är ett modernt boutiquehotell med ett perfekt läge på Östermalm mitt i det pulserande stadslivet. Här bor du i en miljö inspirerad av konst, musik och design – med Stockholms nattliv, kultur och shopping runt hörnet. Hotellet har 83 fina och rymliga rum i olika storlekar, från enkelrum till sviter där en av höjdpunkterna är The Attic, en 60 kvadrat stor svit med utsikt över Stockholms takåsar.",
    },
    text2: {
      en: "All rooms are modernly furnished with all the comforts you could wish for – comfortable beds, WiFi, technology, and bathrooms with rain showers and high-quality products. Especially the beautiful sinks are something extraordinary. Story Hotel Riddargatan, which is part of the American hotel chain Hyatt, is simply the opposite of a hotel where you only book a room to have a place to sleep. Here, the staying is an experience where everything is carefully thought out to give you an exceptional visit with excellent service. The guests are mainly couples, groups of friends, and international tourists.",
      se: "Alla rum är modernt inredda med alla bekvämligheter du kan önska – sköna sängar, wifi, teknik, och badrum med regndusch och högkvalitativa produkter. Speciellt de vackra handfaten är något alldeles extra. Story Hotel Riddargatan, som är en del av den amerikanska hotellkedjan Hyatt, är helt enkelt motsatsen till ett hotell där du bara tar in för att sova. Här är boendet en hel upplevelse där allt är noga uttänkt för att du ska få ett förstklassigt besök med hög service. Gästerna är framför allt par, kompisgäng och internationella turister.",
    },
    text3: {
      en: "Adjacent to Story Hotel is the popular restaurant Ling Long with a friendly and relaxed atmosphere. Here you can enjoy delicious small dishes from Asian cuisine. In addition, there is a nice bar that serves everything from cocktails to beer and sparkling wine. And in summer, don't miss the favored outdoor seating, The Backyard.",
      se: "I anslutning till Story Hotel finns den populära restaurangen Ling Long med skön och avslappnad stämning. Här kan du njuta av goda smårätter från det asiatiska köket. Dessutom finns en trevlig bar som serverar alltifrån cocktails till öl och bubbel. Och sommartid ska du inte missa den välbesökta uteserveringen The Backyard.",
    },
    stars: "★★★★☆",
    address: "Riddargatan 6, Östermalm",
    href: "https://storyhotels.com/riddargatan",
    site: "storyhotels.com",
  },
  {
    number: "08",
    name: "Bank Hotel",
    imgSrc: "images/bank_hotel.jpg",
    text1: {
      en: "If you want to stay in a hotel in Stockholm city, the intimate Bank Hotel is an excellent choice. This luxury hotel is located in the heart of the town between Nybrokajen and Kungsträdgården, close to everything – the water, shopping, nightlife, and culture. The impressive and historic Art Nouveau building was completed in 1910, and over the years, it has housed several banks, hence the name. Many of the beautiful details from bygone times have been preserved. The hotel offers a total of eleven different room types, six of which are suite categories, so there's something for all preferences. All rooms are stylish and modernly furnished in light, natural colors and equipped with all amenities.",
      se: "Vill du bo på ett hotell i Stockholm city är det intima Bank Hotel ett utmärkt val. Detta lyxhotell ligger i stadens hjärta mellan Nybrokajen och Kungsträdgården med nära till allt – vattnet, shopping, nattliv och kulturutbud. Den imponerande och anrika jugendbyggnaden stod klar 1910 och har under åren huserat flera banker, därav namnet. Många av de vackra detaljerna från svunna tider har bevarats. Hotellet erbjuder hela elva olika rumstyper, varav sex svitkategorier, så här finns något för alla preferenser. Samtliga rum är stilrent och modernt inredda i ljusa, naturliga färger och utrustade med alla bekvämligheter.",
    },
    text2: {
      en: "Besides first-class accommodation, Bank Hotel has a fantastic range of food and drinks. The restaurant Bonnie's is housed in the old bank hall, and with a six-meter ceiling height and a beautiful glass ceiling, it's something extraordinary. Here you are offered high-class culinary experiences and can eat breakfast, lunch, and dinner. A guest favorite is their Lazy Breakfast and Bubbles brunch served on weekends.",
      se: "Förutom ett förstklassigt boende har Bank Hotel ett fantastiskt utbud av mat och dryck. Restaurangen Bonnie's är inrymd i den gamla bankhallen och är med sex meters takhöjd och ett vackert glastak något utöver det vanliga. Här bjuds du på högklassiga kulinariska upplevelser och kan både äta frukost, lunch och middag. En gästfavorit är deras brunch Lazy Breakfast and Bubbles som serveras på helgerna.",
    },
    text3: {
      en: "On the hotel's top floor, you'll find elegant Le Hibou, a rooftop bar with amazing views that's perfect for drinking magical drinks, mingling, socializing, and living la dolce vita. The indoor bar with a lounge is inspired by an exclusive Parisian floor, and during the warmer seasons of the year, there's also a lovely outdoor terrace. In addition, Bank Hotel offers the intimate cocktail bar Papillon, the slightly louder bar Sophie's, and the private meeting and dining rooms BooBook and La Cour.",
      se: "På hotellets översta våningsplan hittar du eleganta Le Hibou, en takbar med magnifik utsikt som gjord för att dricka magiska drinkar, mingla, umgås och leva la dolce vita. Inomhusbaren med tillhörande lounge är inspierad av en exklusiv Paris-våning och under årets varmare årstider finns även en härlig utomhusterrass. Dessutom bjuder Banl Hotel på den intima cocktailbaren Papillon, den lite mer högljudda baren Sophie's och de privata mötes- och middagsrummen BooBook och La Cour.",
    },
    stars: "★★★★★",
    address: "Arsenalsgatan 6, Norrmalm/City",
    href: "https://bankhotel.se",
    site: "bankhotel.se",
  },
  {
    number: "09",
    name: "Hotel Frantz",
    imgSrc: "images/Hotel_Frantz.jpg",
    text1: {
      en: "Hotel Frantz is a family-owned and newly renovated hotel in Södermalm, housed in a historic brick house from 1647 on a narrow cross-street to Götgatan near Slussen. The house was built by the master tailor Frantz Bock, and the hotel's name comes from this gentleman. Today's hotel owners have put their souls into taking care of Frantz's home in the best way. The old has been preserved, but it's combined with modern influences. Together with a cozy atmosphere and top-class service, it contributes to a perfect hotel experience.",
      se: "Hotel Frantz är ett familjeägt och nyrenoverat hotell på Södermalm, inhyst i ett anrikt tegelhus från 1647 på en smal tvärgata till Götgatan nära Slussen. Huset byggdes av skräddarmästaren Frantz Bock och det är denne herre som har fått ge namn åt hotellet. Dagens hotellägare har lagt ner sin själ i att förvalta Frantz hem på bästa sätt. Det gamla har bevarats, men samsas moderna influenser. Tillsammans med en mysig atmosfär och service i toppklass bidrar det till en helgjuten hotellupplevelse.",
    },
    text2: {
      en: "Each room is unique to reflect the house's character, and the details have been carefully selected. Luxurious beds, fluffy duvets, and in some rooms also, magnificent tile stoves and bathtubs with lion's paws. The rooms offer everything from spacious double rooms and family rooms to space-efficient rooms with bunk beds. Hotel Frantz also has an excellent restaurant and bar where you can enjoy both a tasty hotel breakfast (with cream cake and non-alcoholic bubbles!) and a great dinner focusing on locally produced ingredients and sustainability. In addition, there are nice conference and meeting rooms for up to 20 people.",
      se: "För att spegla husets karaktär är varje rum unikt och detaljerna har valts ut med omsorg. Lyxiga sängar, fluffiga täcken och i vissa rum även praktfulla kakelugnar och badkar med lejontassar. Bo i alltifrån rymliga dubbelrum och familjerum till yteffektiva rum med våningssäng. Hotel Frantz har även en utmärkt restaurang och bar där du kan njuta av både en smarrig hotellfrukost (med gräddtårta och alkoholfritt bubbel!) och en god middag med fokus på närproducerat och hållbarhet. Dessutom finns det fina konferens- och mötesrum för upp till 20 personer.",
    },
    text3: {
      en: "Many who have stayed at Hotel Frantz rate it as one of Stockholm's best hotels. The fact that you're also close to many of the city's highlights for tourists makes your stay even better. From the ideal location at Slussen, you can immediately start exploring Södermalm's cozy neighborhoods full of restaurants, cafes, and shops or stroll around the historic Old Town with its cobbled streets and must-see attractions.",
      se: "Många som bott på Hotel Frantz rankar det som ett av Stockholms bästa hotell. Att du dessutom har nära till många av stadens höjdpunkter för turister gör inte saken sämre. Från det ideala läget vid Slussen kan du direkt börja utforska söders mysiga kvarter fulla av restauranger, kaféer och butiker eller strosa runt i historiska Gamla stan med sina kullerstensgator och sevärdheter.",
    },
    stars: "★★★★☆",
    address: "Peter Myndes backe 5, Södermalm",
    href: "https://www.hotelfrantz.se",
    site: "hotelfrantz.com",
  },
  {
    number: "10",
    name: "Hotel Reisen",
    imgSrc: "images/Hotel_Reisen.jpg",
    text1: {
      en: "Living in the city's fantastic historic quarters is special, and if you're looking for an excellent hotel in Stockholm's Old Town (Gamla stan), Hotel Reisen is an obvious option. This five-star hotel is located in picturesque surroundings by Skeppsbron, with proximity to everything and an outstanding view of the water as a bonus. The hotel building has a long and rich past. It was built back in 1617, and entering the premises is like traveling back in time. History is deeply rooted in the walls.",
      se: "Att bo i stadens fantastiska historiska kvarter är något speciellt och om du letar efter ett riktigt bra hotell i Stockholms Gamla stan är Hotel Reisen ett givet alternativ. Detta femstjärniga hotell ligger i pittoreska omgivningar vid Skeppsbron med närhet till det mesta och en enastående utsikt över vattnet som extra bonus. Hotellbyggnaden har en långt och anrikt förflutet. Den byggdes redan 1617, och att kliva in här är som att resa bakåt i tiden. Historien sitter verkligen i väggarna.",
    },
    text2: {
      en: "All hotel rooms are newly renovated in sober colors, maintain a high standard, and combine historical elegance with today's modernity. In many rooms, the beautiful handmade brick walls from the 17th century remain. The hotel offers 12 different room types, and if you choose a Nordic suite, you also get your own private spa with a sauna, separate shower, and bathtub.",
      se: "Alla hotellrum är nyrenoverade i sobra färger, håller hög standard och kombinerar historisk elegans med dagens moderniteter. I många av rummen finns även de vackra handgjorda tegelväggarna från 1600-talet kvar. Hotellet erbjuder 12 olika rumstyper och väljer du en svit (Nordic suite) får du dessutom ett eget privat spa med bastu, separat dusch och badkar.",
    },
    text3: {
      en: "Hotel Reisen has all the imaginable facilities for a complete hotel stay – from luxury bathroom items, Wi-Fi, and minibar to 24-hour reception, concierge services, and parking. You eat the breakfast buffet in restaurant Reiss, which also serves high-class food from Scandinavian cuisine for lunch and dinner. In addition, there are two nice bars for those who want to have a drink. If you're looking for pleasant relaxation, there's a spa with pools, sauna, and treatments, and those who want to work out can exercise in the 24-hour well-equipped gym.",
      se: "Hotell Reisen har alla tänkbara faciliteter för en komplett hotellvistelse – från lyxiga badrumsartiklar, wifi och minibar till dygnet-runt-öppen reception, conciergetjänster och parkering. Frukostbuffén äter du i restaurang Reiss som även serverar högklassig mat från det skandinaviska köket till lunch och middag. Dessutom finns det två trevliga barer för dig som vill ta dig ett glas. Söker du skön avkoppling finns ett spa med pooler, bastu och behandlingar och den träningssugna kan svettas i det välutrustade och dygnet-runt-öppna gymmet.",
    },
    stars: "★★★★★",
    address: "Skeppsbron 12, Old Town",
    href: "https://www.hyatt.com/en-US/hotel/sweden/hotel-reisen/arnub",
    site: "hyatt.com",
  },
];
