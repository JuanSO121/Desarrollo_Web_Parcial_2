-- public.palabra definition

-- Drop table

-- DROP TABLE public.palabra;

CREATE TABLE public.palabra (
	id serial PRIMARY KEY,
	texto varchar(250) NOT NULL,
	
);


-- public.categoria definition

-- Drop table

-- DROP TABLE public.categoria;

CREATE TABLE public.categoria (
	id serial  PRIMARY KEY,
	nombre varchar(250) NOT NULL,
	
);

-- public.categoria definition

-- Drop table

-- DROP TABLE public.categoria;

CREATE TABLE public.PalabrasPorCategoria(

	cate_id INTERGER REFERENCES categoria(id),
	pala_id INTERGER REFERENCES palabra(id)

);

-- public.sala definition

-- Drop table

-- DROP TABLE public.sala;

CREATE TABLE public.SaladeJuego(
	id serial  PRIMARY KEY,
	nombre varchar(225) NOT NULL,
    estado varchar(225) NOT NULL,
	cate_id INTERGER REFERENCES categoria(id)

);