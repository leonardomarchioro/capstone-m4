import express from "express"
import candidateRoutes from "./routes/candidates"

const app = express()

app.use(express.json())

app.use("/candidate", candidateRoutes)

app.get("/", (req, res) => {
  return res.send("Hello world!!!!")
})

export { app }