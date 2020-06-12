import express from 'express';
import refresh from "../controllers/authorization/refresh";
import signin from "../controllers/authorization/signin";
import signup from "../controllers/authorization/signup";
import confirm from "../controllers/authorization/confirmEmail";

const init = (): express.Router => {
    const router = express.Router();
    router.post('/refresh', refresh);
    router.post('/signin', signin);
    router.post('/signup', signup);
    router.get('/confirm', confirm);
    return router;
};

export default init;

