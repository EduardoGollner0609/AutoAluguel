INSERT INTO tb_brand(name) VALUES ('Chevrolet');
INSERT INTO tb_brand(name) VALUES ('Ford');
INSERT INTO tb_brand(name) VALUES ('Fiat');
INSERT INTO tb_brand(name) VALUES ('Volkswagen');
INSERT INTO tb_brand(name) VALUES ('Byd');

INSERT INTO tb_model(name, brand_id) VALUES('Spin', 1);
INSERT INTO tb_model(name, brand_id) VALUES('Dolphin Mini', 5);
INSERT INTO tb_model(name, brand_id) VALUES('Prisma', 1);
INSERT INTO tb_model(name, brand_id) VALUES('Seal', 5);
INSERT INTO tb_model(name, brand_id) VALUES('Zafira', 1);
INSERT INTO tb_model(name, brand_id) VALUES('Mustang', 2);
INSERT INTO tb_model(name, brand_id) VALUES('Palio', 3);
INSERT INTO tb_model(name, brand_id) VALUES('Jetta', 4);
INSERT INTO tb_model(name, brand_id) VALUES('Saveiro Cross', 4);
INSERT INTO tb_model(name, brand_id) VALUES('Ranger', 2);



INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2025, true, 200.00, 2000, 1, 'Azul', 'https://cdn.autopapo.com.br/box/uploads/2024/03/21140435/chevrolet-spin-premier-2025-azul-boreal-traseira-parado-2.jpg', 'LSN4I49');
INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2020, true, 700.00, 12000, 6, 'Vermelho', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBSZ68Y.img', 'DAI6L59');
INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2015, true, 400.00, 92000, 8, 'Branco', 'https://www.comprecar.com.br/storage/news/featured/a1m9_1VI9i424Wi.jpg', 'ASC8M50');
INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2022, true, 350.00, 88000, 10, 'Preto', 'https://media.autoexpress.co.uk/image/private/s--h55FmtJ0--/v1562245180/autoexpress/2017/09/ford-ranger-black-edtition.jpg', 'MSA8Y12');
INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2012, true, 120.00, 150000, 5, 'Cinza', 'http://img.estadao.com.br/wp/jornal-do-carro/files/2011/05/zafira.jpg', 'ACF3J93');
INSERT INTO tb_automobile (model_year, returned, value_per_day, km, model_id, color, img_url, plate) VALUES (2024, true, 250.00, 5000, 2, 'Branco', 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/BYD-Dolphin-Mini-foto-Thiago-Ventura.jpg', 'MCA9J75');


INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1990-05-15', 'Rua das Palmeiras, 123 - São Paulo, SP', '123.456.789-00', 'joao.silva@email.com', 'João Silva', '(11) 98765-4321');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1985-09-22', 'Av. Paulista, 900 - São Paulo, SP', '987.654.321-00', 'maria.oliveira@email.com', 'Maria Oliveira', '(11) 98877-6543');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1993-12-10', 'Rua XV de Novembro, 450 - Curitiba, PR', '321.654.987-00', 'carlos.santos@email.com', 'Carlos Santos', '(41) 99988-1122');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1978-07-08', 'Rua dos Pinheiros, 77 - Belo Horizonte, MG', '159.357.258-00', 'ana.costa@email.com', 'Ana Costa', '(31) 99654-7788');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('2000-02-25', 'Av. Atlântica, 1000 - Rio de Janeiro, RJ', '753.951.456-00', 'lucas.martins@email.com', 'Lucas Martins', '(21) 99542-3658');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1982-11-30', 'Rua das Acácias, 210 - Porto Alegre, RS', '258.147.369-00', 'patricia.fernandes@email.com', 'Patrícia Fernandes', '(51) 99874-5123');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1995-06-17', 'Av. Brasil, 520 - Brasília, DF', '654.321.987-00', 'ricardo.almeida@email.com', 'Ricardo Almeida', '(61) 98765-2147');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1989-04-05', 'Rua Independência, 85 - Salvador, BA', '369.258.147-00', 'juliana.rocha@email.com', 'Juliana Rocha', '(71) 99632-7845');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1975-01-20', 'Av. das Nações, 130 - Recife, PE', '741.852.963-00', 'fernando.lima@email.com', 'Fernando Lima', '(81) 99452-3698');
INSERT INTO tb_client (birthdate, address, cpf, email, name, phone) VALUES ('1998-08-12', 'Rua do Comércio, 405 - Manaus, AM', '852.963.741-00', 'beatriz.souza@email.com', 'Beatriz Souza', '(92) 99147-8563');


INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (150.00, 1, 1, '2024-01-10T08:30:00Z', '2024-01-15T18:45:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (700.00, 2, 2, '2024-02-05T14:15:00Z', '2024-02-12T09:00:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (400.00, 3, 3, '2024-03-01T10:45:00Z', '2024-03-10T16:30:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (350.00, 4, 4, '2024-04-15T07:00:00Z', '2024-04-22T22:15:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (120.00, 5, 5, '2024-05-01T13:20:00Z', '2024-05-05T20:10:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (250.00, 6, 6, '2024-06-10T09:40:00Z', '2024-06-18T17:00:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (500.00, 1, 7, '2024-07-20T11:50:00Z', '2024-07-25T19:55:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (300.00, 3, 8, '2024-08-05T15:10:00Z', '2024-08-12T07:45:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (450.00, 5, 9, '2024-09-01T06:30:00Z', '2024-09-07T23:15:00Z');
INSERT INTO tb_location (location_value, automobile_id, client_id, rental_date, return_date) VALUES (200.00, 2, 10, '2024-10-15T12:45:00Z', '2024-10-20T08:30:00Z');
