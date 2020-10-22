const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-21.7756534",
    lng: "-43.3904398",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
    whatsapp: "99999999",
    images: [
      "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1925&q=80",
      "https://images.unsplash.com/photo-1534806391029-791d2695c38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1588519502240-29b56dd591cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1588519502269-729ab7a10697?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours: "Hórario de visitas das 18h até as 8h",
    open_on_weekends: "0",
  });

  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanage
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  //deletar dado da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"));
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
});
