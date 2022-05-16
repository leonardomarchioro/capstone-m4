import { app } from "./app"
import { conectDatabase } from "./data-source"

const PORT = process.env.PORT || 3000

async function bootstrap() {
  await conectDatabase()

  app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`))
}

bootstrap()