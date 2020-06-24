import express from 'express';
import refresh from "./controllers/refresh";
import signin from "./controllers/signin";
import signup from "./controllers/signup";
import confirm from "./controllers/confirmEmail";
import validate from "./controllers/validate";
import addAdmin from "./controllers/addAdmin";

const init = (): express.Router => {
    const router = express.Router();
    router.post('/refresh', refresh);
    router.post('/signin', signin);
    router.post('/signup', signup);
    router.get('/confirm', confirm);
    router.get('/validate', validate);
    router.post('/addAdmin', addAdmin);
    return router;
};

export default init;

