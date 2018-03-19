
// App manages the storage server logic. Construct an App instance
// using a literal with DB and FS objects and call RegisterOnMux to
// connect it with an HTTP server.
type App struct {
	DB *db.DB
	FS fs.FS

	// ...
}

// RegisterOnMux registers the app's URLs on mux.
func (a *App) RegisterOnMux(mux *http.ServeMux) {
	// ...
}