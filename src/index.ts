import app from './App';

const port = process.env.PORT || 3000;

app.listen(
    port,
    (err): void => {
        if (err) {
            return console.log(err);
        }
        // test
        return console.log(`server is listening on ${port} - http://localhost:${port}`);
    },
);
