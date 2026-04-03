app.get("/lire-config", async (req, res, next) => {
  try {
    const data = await fs.readFile("./config.json");
    res.send(data);
  } catch (error) {
    // ??? Comment envoyer l'erreur au middleware global ?
    res.status(500).json({
      message:
        "Hé, j'ai une erreur, occupe-toi s'en avec le gestionnaire global",
      error: error.message,
    });
  }
});
