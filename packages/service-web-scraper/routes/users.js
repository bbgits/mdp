import express from 'express';

const router = express.Router(); //initializes router

//all routes i nhere are starting with /users
router.get('/', (req, res) => {
    res.send('Hello');
});

router.get('/hi', (req, res) => {
    res.send('hi!!');
});

export default router;