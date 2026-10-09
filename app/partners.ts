type Brand = { name: string; file: string };
export const partnerGroups: { name: string; brands: Brand[] }[] = [
  { name: "Saúde empresarial", brands: [
    { name: "Porto", file: "porto.svg" }, { name: "Bradesco Saúde", file: "bradesco.png" },
    { name: "Amil", file: "amil.png" }, { name: "SulAmérica", file: "sulamerica.png" },
    { name: "NotreDame Intermédica", file: "notredame.png" }, { name: "Hapvida", file: "hapvida.png" },
    { name: "Omint", file: "omint.webp" }, { name: "Care Plus", file: "careplus.svg" },
    { name: "Seguros Unimed", file: "seguros-unimed.png" }, { name: "Alice Saúde", file: "alice.svg" },
    { name: "Unimed Jundiaí", file: "unimed-jundiai.png" }, { name: "Unimed Campinas", file: "unimed-campinas.png" },
  ] },
  { name: "Saúde para pessoas", brands: [
    { name: "Prevent Senior", file: "prevent-senior.svg" }, { name: "Trasmontano", file: "trasmontano.png" },
    { name: "MedSênior", file: "medsenior.png" }, { name: "NotreLife — NotreDame Intermédica", file: "notredame.png" },
    { name: "SulAmérica Adesão", file: "sulamerica.png" }, { name: "Amil Adesão", file: "amil.png" },
    { name: "Unimed Adesão", file: "unimed.png" },
  ] },
  { name: "Seguradoras", brands: [
    { name: "Bradesco Seguros", file: "bradesco.png" }, { name: "Porto", file: "porto.svg" },
    { name: "Tokio Marine", file: "tokio.png" }, { name: "Suhai", file: "suhai.svg" },
    { name: "MAPFRE", file: "mapfre.png" }, { name: "MetLife", file: "metlife.png" },
    { name: "Azul Seguros", file: "azul.svg" }, { name: "Yelum", file: "yelum.svg" },
    { name: "HDI", file: "hdi.png" }, { name: "Allianz", file: "allianz.png" },
    { name: "Akad Seguros", file: "akad.svg" },
  ] },
];
