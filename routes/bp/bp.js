import pkg from 'pg';
import fs from 'fs';
const { Pool } = pkg;

const bp = new Pool({
	user: 'avnadmin',
	password: 'AVNS_PkpmRcgstCPkJ2VW7wH',
	host: 'pg-15ac7e6f-node-project.f.aivencloud.com',
	port: 21791,
	database: 'defaultdb',  
	ssl: {
		rejectUnauthorized: false, // Proverava validnost sertifikata
		ca: fs.readFileSync('routes/bp/Ca_certificate.crt').toString() // Dodaj CA sertifikat
	}

});

export {bp};