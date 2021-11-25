use sensio;
db.createCollection("companies");
db.companies.createIndex({cnpj:1},{unique:true});
