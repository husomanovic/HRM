import { bp } from '../bp/bp.js';

const createUser = (req, res, next) => {
    const sql = `INSERT INTO Korisnik (ime, prezime, email, lozinka, uloga) VALUES (asd, asd, asd, asd, 1);`;
    bp.connect()
	.then(() => {
        console.log('Connected to PostgreSQL database');
		client.query(sql, (err, result) => {
			if (err) {
				console.error('Error executing query', err);
			} else {
				console.log('Query result:', result.rows);
			}
		});
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);

	});
    
    return result;

};


export  {createUser};