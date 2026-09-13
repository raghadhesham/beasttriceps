export const bootstrap = async (app) => {
  app.get("/", (req, res) => {
    res.status(200).json("Welcome to Beast Triceps");
  });
  app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
  });
};
