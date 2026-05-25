const productDatabase = {
    "3b": {
        name: "Pascal Box 3B",
        category: "Magánjátékosoknak / Amateur kategória",
        image: "img/Vaso-Pascalbox-3b-nuevo.png",
        description: "Az egyetlen labdanyomás-megőrző rendszer, amely napról napra, meccsről meccsre garantálja a labdák eredeti gyári nyomását. Spórolj a labdákon és kerüld el a sérüléseket!",
        features: [
            "Kapacitás: 3 padel- vagy teniszlabda (illetve 4 frontenis labda)",
            "Maximális precizitású nyomásmérő óra",
            "Kiváló minőségű, tartós anyagok (üvegszál és polikarbonát tartály)",
            "Könnyű használat, garantált tökéletes pattanás minden meccsen"
        ],
        manualLink: "#"
    },
    "4b": {
        name: "Pascal Box 4B",
        category: "Magánjátékosoknak / Amateur kategória",
        image: "img/Pascal-Box-4B-300x300.png",
        description: "A megnövelt, 4 labdás Pascal Box modell. Az egyetlen rendszer, amely megbízhatóan garantálja a labdák eredeti nyomását minden játék során, ideális páros játékhoz.",
        features: [
            "Kapacitás: 4 padel-, tenisz- vagy frontenis labda",
            "Maximális precizitású nyomásmérő óra",
            "Masszív, ellenálló tető és polikarbonát tartály",
            "Könnyen nyitható és zárható rendszer"
        ],
        manualLink: "#"
    },
    "switch": {
        name: "Pascal Box Switch",
        category: "Magánjátékosoknak / Amateur kategória",
        image: "img/producto-switch-1.jpg",
        description: "ÚJ PASCAL BOX SWITCH! A kényelmes, automata labdanyomás-szabályozó, amely gombnyomásra, automatikusan elvégzi a nyomásbeállítást.",
        features: [
            "Automatikus nyomásszabályozás",
            "Beépített akkumulátor, egyszerű USB-C töltés",
            "Tökéletesen kompatibilis a meglévő Pascal Box 3B és 4B modellekkel is",
            "Maximális kényelem és precizitás kompromisszumok nélkül"
        ],
        manualLink: "#"
    },
    "pro-75b": {
        name: "Pascal Box PRO / 75B",
        category: "Kluboknak, edzőknek és professzionális kategória",
        image: "img/pro-2-1.jpg",
        description: "A végleges labdanyomás-megőrző megoldás padel- és teniszklubok, illetve edzők számára. Óriási megtakarítás a labdaköltségeken anélkül, hogy a minőségből engedni kellene.",
        features: [
            "Kapacitás: akár 75 padel- vagy teniszlabda egyidejűleg",
            "100% robusztus rozsdamentes acél kialakítás",
            "Szabadalmaztatott, nagynyomású precíziós zárórendszer",
            "Nagy forgalmú, professzionális használatra és maximális élettartamra tervezve"
        ],
        manualLink: "#"
    },
    "pro-troli": {
        name: "Pascal Box PRO Troli",
        category: "Kluboknak, edzőknek és professzionális kategória",
        image: "img/Pascal-Box-Pro-Trolley-scaled.jpg",
        description: "Praktikus kiegészítő állvány, amelyet kifejezetten a Pascal Box PRO rendszerhez terveztek, hogy megkönnyítse a pályán történő kényelmes mozgatást az edzések közben.",
        features: [
            "Tökéletesen illeszkedik a Pascal Box PRO (75B) tartályhoz",
            "Robusztus, strapabíró fémszerkezet",
            "Kerekes kialakítás a kényelmes és gyors pályák közötti mozgatáshoz",
            "Megszünteti a labdák hagyományos edzőkosarakba való átpakolásának szükségességét"
        ],
        manualLink: "#"
    },
    "salki": {
        name: "Salki Elektromos Kompresszor",
        category: "Kluboknak, edzőknek és professzionális kategória",
        image: "img/bomba-inflado-pascalbox.jpg",
        description: "Kompakt, könnyen hordozható elektromos kompresszor, amelyet a Pascal Box PRO rendszer gyors és hatékony feltöltéséhez ajánlunk.",
        features: [
            "Kapacitás: 150 PSI maximális nyomás",
            "Kettős csatlakozás: 220-230 V hálózati és DC 12 V autós szivargyújtó csatlakozó",
            "Légáramlás: 20 liter / perc sebesség",
            "Figyelem: Ez a gép nem Pascal Box gyártmány, a termék a SALKI hivatalos gyártói garanciájával rendelkezik"
        ],
        manualLink: "#"
    },
    "nuair": {
        name: "NUAIR Silent Kompresszor",
        category: "Kluboknak, edzőknek és professzionális kategória",
        image: "img/compresor-nuair-3-1-768x979.jpg",
        description: "Rendkívül gyors és ultracsendes professzionális kompresszor. A leghatékonyabb választás a Pascal Box PRO folyamatos, klubszintű üzemeltetéséhez.",
        features: [
            "Extrém halk működés: nagyon alacsony, 20 dB alatti zajszint",
            "Nagyobb légáramlás a rendkívül gyors töltésért",
            "A Pascal Box PRO (75 labdás) teljes feltöltési ideje csupán kb. 40 másodperc",
            "Ideális fedett klubokba és olyan helyekre, ahol a folyamatos kompresszorzaj zavaró lenne"
        ],
        manualLink: "#"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productDatabase[productId]) {
        const product = productDatabase[productId];

        document.getElementById('dyn-category').textContent = product.category;
        document.getElementById('dyn-name').textContent = product.name;
        document.getElementById('dyn-image').src = product.image;
        document.getElementById('dyn-description').textContent = product.description;
        document.getElementById('dyn-manual').href = product.manualLink;

        const featuresList = document.getElementById('dyn-features');
        if (featuresList) {
            featuresList.innerHTML = ''; 
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }

        const contactBtn = document.getElementById('dyn-contact');
        if (contactBtn) {
            contactBtn.href = `#kapcsolat`;
        }
    } else {
        const dynName = document.getElementById('dyn-name');
        if (dynName) {
            dynName.textContent = "Termék nem található";
            document.getElementById('dyn-description').textContent = "Kérjük, térjen vissza a termékek oldalra.";
            document.getElementById('dyn-features').innerHTML = '';
            document.getElementById('dyn-image').style.display = 'none';
            document.getElementById('dyn-contact').style.display = 'none';
            document.getElementById('dyn-manual').style.display = 'none';
        }
    }
});