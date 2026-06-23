import { createApp } from "./app.js"
import { config } from "./config.js"

const app = createApp()
app.listen(config.port, () => {
	console.log(
		`Base Capital listening on :${config.port} [${config.mode}] -> ${config.network}`,
	)
})
