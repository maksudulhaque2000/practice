import app from "./app.js";
const port = 3000;
const bootstrap = async () => {
    let Server = app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map