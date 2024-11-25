import express from 'express';
import { createUser } from './function/login.js';
import  { bp }  from './bp/bp.js';


const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login.ejs', { title: 'index' });
});
router.get('/create-user', function(req, res, next) {
  res.render('create-user.ejs', { title: 'index' });
});

router.post('/create-user', (req, res) => {
  const { ime, prezime, email, lozinka, uloga } = req.body; // Pretpostavlja se da podaci dolaze iz body-ja
  const sql = `INSERT INTO Korisnik (ime, prezime, email, lozinka, uloga) VALUES ($1, $2, $3, $4, $5)`;

  bp.query(sql, [ime, prezime, email, lozinka, uloga])
    .then((result) => {
      console.log('Query result:', result.rows);
      res.json(result.rows[0]); // Vraća novokreiranog korisnika
    })
    .catch((err) => {
      console.error('Error executing query', err);
      res.json({ error: err.message });
    });
});

export default router  ;