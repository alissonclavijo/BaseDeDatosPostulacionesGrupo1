PGDMP     (    
                {            SistemaPostulacion    15.0    15.0 c    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    57790    SistemaPostulacion    DATABASE     �   CREATE DATABASE "SistemaPostulacion" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 $   DROP DATABASE "SistemaPostulacion";
                postgres    false            �            1259    57791 	   actividad    TABLE     �   CREATE TABLE public.actividad (
    act_id integer NOT NULL,
    act_nombre character varying(50) NOT NULL,
    act_descripcion character varying(250) NOT NULL
);
    DROP TABLE public.actividad;
       public         heap    postgres    false            �            1259    57794    actividad_act_id_seq    SEQUENCE     �   ALTER TABLE public.actividad ALTER COLUMN act_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.actividad_act_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    57795    campo_amplio    TABLE     �   CREATE TABLE public.campo_amplio (
    ca_id integer NOT NULL,
    ca_nombre character varying(50) NOT NULL,
    ca_descripcion character varying(250) NOT NULL
);
     DROP TABLE public.campo_amplio;
       public         heap    postgres    false            �            1259    57798    campo_amplio_ca_id_seq    SEQUENCE     �   ALTER TABLE public.campo_amplio ALTER COLUMN ca_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.campo_amplio_ca_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    57799    campo_especifico    TABLE     �   CREATE TABLE public.campo_especifico (
    ce_id integer NOT NULL,
    ce_nombre character varying(50) NOT NULL,
    ce_descripcion character varying(250) NOT NULL,
    ca_id integer
);
 $   DROP TABLE public.campo_especifico;
       public         heap    postgres    false            �            1259    57802    campo_especifico_ce_id_seq    SEQUENCE     �   ALTER TABLE public.campo_especifico ALTER COLUMN ce_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.campo_especifico_ce_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    57803 	   candidato    TABLE     k  CREATE TABLE public.candidato (
    cand_tipo_identificacion character varying(20) NOT NULL,
    cand_num_identificacion character varying(20) NOT NULL,
    cand_sexo character varying(10) NOT NULL,
    cand_titulo character varying(20) NOT NULL,
    cand_fecha_nacimiento date NOT NULL,
    cand_id integer NOT NULL,
    cand_correo character varying(50) NOT NULL,
    cand_password character varying(100) NOT NULL,
    cand_nombre1 character varying(30) NOT NULL,
    cand_nombre2 character varying(30) NOT NULL,
    cand_apellido1 character varying(30) NOT NULL,
    cand_apellido2 character varying(30) NOT NULL
);
    DROP TABLE public.candidato;
       public         heap    postgres    false            �            1259    57806    candidato_cand_id_seq    SEQUENCE     �   ALTER TABLE public.candidato ALTER COLUMN cand_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.candidato_cand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    57960    candidato_id_seq    SEQUENCE     y   CREATE SEQUENCE public.candidato_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.candidato_id_seq;
       public          postgres    false            �            1259    57807    contratacion    TABLE     r   CREATE TABLE public.contratacion (
    con_id integer NOT NULL,
    con_nombre character varying(150) NOT NULL
);
     DROP TABLE public.contratacion;
       public         heap    postgres    false            �            1259    57810    contratacion_con_id_seq    SEQUENCE     �   ALTER TABLE public.contratacion ALTER COLUMN con_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contratacion_con_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    57811    departamento    TABLE     �   CREATE TABLE public.departamento (
    dept_id integer NOT NULL,
    dept_nombre character varying(50) NOT NULL,
    dept_descripcion character varying(250) NOT NULL
);
     DROP TABLE public.departamento;
       public         heap    postgres    false            �            1259    57814    departamento_dept_id_seq    SEQUENCE     �   ALTER TABLE public.departamento ALTER COLUMN dept_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.departamento_dept_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    57815    item    TABLE     z   CREATE TABLE public.item (
    it_id integer NOT NULL,
    pa_id integer,
    it_nombre character varying(50) NOT NULL
);
    DROP TABLE public.item;
       public         heap    postgres    false            �            1259    57818    item_it_id_seq    SEQUENCE     �   ALTER TABLE public.item ALTER COLUMN it_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.item_it_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            �            1259    57819    oferta    TABLE       CREATE TABLE public.oferta (
    ofe_id integer NOT NULL,
    post_id integer,
    con_id integer,
    ce_id integer,
    ca_id integer,
    sede_id integer,
    dept_id integer,
    pa_id integer,
    act_id integer,
    ofe_vacantes integer,
    ofe_horas integer
);
    DROP TABLE public.oferta;
       public         heap    postgres    false            �            1259    57822    oferta_ofe_id_seq    SEQUENCE     �   ALTER TABLE public.oferta ALTER COLUMN ofe_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.oferta_ofe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    57823    personal_academico    TABLE     �   CREATE TABLE public.personal_academico (
    pa_id integer NOT NULL,
    pa_nombre character varying(50) NOT NULL,
    pa_descripcion character varying(250) NOT NULL
);
 &   DROP TABLE public.personal_academico;
       public         heap    postgres    false            �            1259    57826    personal_academico_pa_id_seq    SEQUENCE     �   ALTER TABLE public.personal_academico ALTER COLUMN pa_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.personal_academico_pa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    57827    postulacion    TABLE     s   CREATE TABLE public.postulacion (
    post_id integer NOT NULL,
    post_periodo character varying(10) NOT NULL
);
    DROP TABLE public.postulacion;
       public         heap    postgres    false            �            1259    57830    postulacion_post_id_seq    SEQUENCE     �   ALTER TABLE public.postulacion ALTER COLUMN post_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.postulacion_post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    232            �            1259    57831    rechum    TABLE     �  CREATE TABLE public.rechum (
    rh_cargo character varying(20) NOT NULL,
    rh_id integer NOT NULL,
    rh_correo character varying(50) NOT NULL,
    rh_password character varying(100) NOT NULL,
    rh_nombre1 character varying(30) NOT NULL,
    rh_nombre2 character varying(30) NOT NULL,
    rh_apellido1 character varying(30) NOT NULL,
    rh_apellido2 character varying(30) NOT NULL
);
    DROP TABLE public.rechum;
       public         heap    postgres    false            �            1259    57834    rechum_rh_id_seq    SEQUENCE     �   ALTER TABLE public.rechum ALTER COLUMN rh_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.rechum_rh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    234            �            1259    57835 	   requisito    TABLE     �   CREATE TABLE public.requisito (
    rq_id integer NOT NULL,
    it_id integer,
    rq_descripcion character varying(750) NOT NULL
);
    DROP TABLE public.requisito;
       public         heap    postgres    false            �            1259    57840    requisito_rq_id_seq    SEQUENCE     �   ALTER TABLE public.requisito ALTER COLUMN rq_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.requisito_rq_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    236            �            1259    57841    sede    TABLE     �   CREATE TABLE public.sede (
    sede_id integer NOT NULL,
    sede_nombre character varying(50) NOT NULL,
    sede_descripcion character varying(250) NOT NULL
);
    DROP TABLE public.sede;
       public         heap    postgres    false            �            1259    57844    sede_sede_id_seq    SEQUENCE     �   ALTER TABLE public.sede ALTER COLUMN sede_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sede_sede_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    238            �            1259    57845 	   solicitud    TABLE     �   CREATE TABLE public.solicitud (
    cand_id integer NOT NULL,
    sol_id integer NOT NULL,
    rh_id integer NOT NULL,
    sol_aprobacion boolean NOT NULL
);
    DROP TABLE public.solicitud;
       public         heap    postgres    false            �            1259    57848    solicitud_cand_id_seq    SEQUENCE     �   ALTER TABLE public.solicitud ALTER COLUMN cand_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.solicitud_cand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    240            �            1259    57849    solicitud_rh_id_seq    SEQUENCE     �   ALTER TABLE public.solicitud ALTER COLUMN rh_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.solicitud_rh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    240            �            1259    57850    solicitud_sol_id_seq    SEQUENCE     �   ALTER TABLE public.solicitud ALTER COLUMN sol_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.solicitud_sol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    240            �            1259    57851 
   titulo_exp    TABLE     m  CREATE TABLE public.titulo_exp (
    tx_id integer NOT NULL,
    rq_id integer,
    tx_descripcion character varying(250) NOT NULL,
    tx_detalle character varying(500) NOT NULL,
    tx_puntaje_min numeric(4,2) NOT NULL,
    tx_puntaje_max numeric(4,2) NOT NULL,
    tx_puntaje_asignado numeric(4,2) NOT NULL,
    tx_observacion character varying(500) NOT NULL
);
    DROP TABLE public.titulo_exp;
       public         heap    postgres    false            �            1259    57856    titulo_exp_tx_id_seq    SEQUENCE     �   ALTER TABLE public.titulo_exp ALTER COLUMN tx_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.titulo_exp_tx_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    244            h          0    57791 	   actividad 
   TABLE DATA           H   COPY public.actividad (act_id, act_nombre, act_descripcion) FROM stdin;
    public          postgres    false    214    z       j          0    57795    campo_amplio 
   TABLE DATA           H   COPY public.campo_amplio (ca_id, ca_nombre, ca_descripcion) FROM stdin;
    public          postgres    false    216   �z       l          0    57799    campo_especifico 
   TABLE DATA           S   COPY public.campo_especifico (ce_id, ce_nombre, ce_descripcion, ca_id) FROM stdin;
    public          postgres    false    218   {       n          0    57803 	   candidato 
   TABLE DATA           �   COPY public.candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_id, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) FROM stdin;
    public          postgres    false    220   ^{       p          0    57807    contratacion 
   TABLE DATA           :   COPY public.contratacion (con_id, con_nombre) FROM stdin;
    public          postgres    false    222   �|       r          0    57811    departamento 
   TABLE DATA           N   COPY public.departamento (dept_id, dept_nombre, dept_descripcion) FROM stdin;
    public          postgres    false    224   �}       t          0    57815    item 
   TABLE DATA           7   COPY public.item (it_id, pa_id, it_nombre) FROM stdin;
    public          postgres    false    226   �~       v          0    57819    oferta 
   TABLE DATA           �   COPY public.oferta (ofe_id, post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas) FROM stdin;
    public          postgres    false    228   c       x          0    57823    personal_academico 
   TABLE DATA           N   COPY public.personal_academico (pa_id, pa_nombre, pa_descripcion) FROM stdin;
    public          postgres    false    230   �       z          0    57827    postulacion 
   TABLE DATA           <   COPY public.postulacion (post_id, post_periodo) FROM stdin;
    public          postgres    false    232   ��       |          0    57831    rechum 
   TABLE DATA           }   COPY public.rechum (rh_cargo, rh_id, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2) FROM stdin;
    public          postgres    false    234   ��       ~          0    57835 	   requisito 
   TABLE DATA           A   COPY public.requisito (rq_id, it_id, rq_descripcion) FROM stdin;
    public          postgres    false    236   �       �          0    57841    sede 
   TABLE DATA           F   COPY public.sede (sede_id, sede_nombre, sede_descripcion) FROM stdin;
    public          postgres    false    238   Z�       �          0    57845 	   solicitud 
   TABLE DATA           K   COPY public.solicitud (cand_id, sol_id, rh_id, sol_aprobacion) FROM stdin;
    public          postgres    false    240   ą       �          0    57851 
   titulo_exp 
   TABLE DATA           �   COPY public.titulo_exp (tx_id, rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion) FROM stdin;
    public          postgres    false    244   �       �           0    0    actividad_act_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.actividad_act_id_seq', 8, true);
          public          postgres    false    215            �           0    0    campo_amplio_ca_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.campo_amplio_ca_id_seq', 3, true);
          public          postgres    false    217            �           0    0    campo_especifico_ce_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.campo_especifico_ce_id_seq', 6, true);
          public          postgres    false    219            �           0    0    candidato_cand_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.candidato_cand_id_seq', 23, true);
          public          postgres    false    221            �           0    0    candidato_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.candidato_id_seq', 1, false);
          public          postgres    false    246            �           0    0    contratacion_con_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.contratacion_con_id_seq', 4, true);
          public          postgres    false    223            �           0    0    departamento_dept_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.departamento_dept_id_seq', 14, true);
          public          postgres    false    225            �           0    0    item_it_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.item_it_id_seq', 5, true);
          public          postgres    false    227            �           0    0    oferta_ofe_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.oferta_ofe_id_seq', 11, true);
          public          postgres    false    229            �           0    0    personal_academico_pa_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.personal_academico_pa_id_seq', 7, true);
          public          postgres    false    231            �           0    0    postulacion_post_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.postulacion_post_id_seq', 2, true);
          public          postgres    false    233            �           0    0    rechum_rh_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.rechum_rh_id_seq', 1, true);
          public          postgres    false    235            �           0    0    requisito_rq_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.requisito_rq_id_seq', 8, true);
          public          postgres    false    237            �           0    0    sede_sede_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sede_sede_id_seq', 4, true);
          public          postgres    false    239            �           0    0    solicitud_cand_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.solicitud_cand_id_seq', 16, true);
          public          postgres    false    241            �           0    0    solicitud_rh_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.solicitud_rh_id_seq', 16, true);
          public          postgres    false    242            �           0    0    solicitud_sol_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.solicitud_sol_id_seq', 16, true);
          public          postgres    false    243            �           0    0    titulo_exp_tx_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.titulo_exp_tx_id_seq', 15, true);
          public          postgres    false    245            �           2606    57858    actividad actividad_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.actividad
    ADD CONSTRAINT actividad_pkey PRIMARY KEY (act_id);
 B   ALTER TABLE ONLY public.actividad DROP CONSTRAINT actividad_pkey;
       public            postgres    false    214            �           2606    57860    campo_amplio campo_amplio_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.campo_amplio
    ADD CONSTRAINT campo_amplio_pkey PRIMARY KEY (ca_id);
 H   ALTER TABLE ONLY public.campo_amplio DROP CONSTRAINT campo_amplio_pkey;
       public            postgres    false    216            �           2606    57862 &   campo_especifico campo_especifico_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.campo_especifico
    ADD CONSTRAINT campo_especifico_pkey PRIMARY KEY (ce_id);
 P   ALTER TABLE ONLY public.campo_especifico DROP CONSTRAINT campo_especifico_pkey;
       public            postgres    false    218            �           2606    57864    candidato candidato_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_pkey PRIMARY KEY (cand_id);
 B   ALTER TABLE ONLY public.candidato DROP CONSTRAINT candidato_pkey;
       public            postgres    false    220            �           2606    57866    contratacion contratacion_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.contratacion
    ADD CONSTRAINT contratacion_pkey PRIMARY KEY (con_id);
 H   ALTER TABLE ONLY public.contratacion DROP CONSTRAINT contratacion_pkey;
       public            postgres    false    222            �           2606    57868    departamento departamento_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT departamento_pkey PRIMARY KEY (dept_id);
 H   ALTER TABLE ONLY public.departamento DROP CONSTRAINT departamento_pkey;
       public            postgres    false    224            �           2606    57870    item item_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (it_id);
 8   ALTER TABLE ONLY public.item DROP CONSTRAINT item_pkey;
       public            postgres    false    226            �           2606    57872    oferta oferta_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT oferta_pkey PRIMARY KEY (ofe_id);
 <   ALTER TABLE ONLY public.oferta DROP CONSTRAINT oferta_pkey;
       public            postgres    false    228            �           2606    57874 *   personal_academico personal_academico_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.personal_academico
    ADD CONSTRAINT personal_academico_pkey PRIMARY KEY (pa_id);
 T   ALTER TABLE ONLY public.personal_academico DROP CONSTRAINT personal_academico_pkey;
       public            postgres    false    230            �           2606    57876    postulacion postulacion_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.postulacion
    ADD CONSTRAINT postulacion_pkey PRIMARY KEY (post_id);
 F   ALTER TABLE ONLY public.postulacion DROP CONSTRAINT postulacion_pkey;
       public            postgres    false    232            �           2606    57878    rechum rechum_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.rechum
    ADD CONSTRAINT rechum_pkey PRIMARY KEY (rh_id);
 <   ALTER TABLE ONLY public.rechum DROP CONSTRAINT rechum_pkey;
       public            postgres    false    234            �           2606    57880    requisito requisito_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.requisito
    ADD CONSTRAINT requisito_pkey PRIMARY KEY (rq_id);
 B   ALTER TABLE ONLY public.requisito DROP CONSTRAINT requisito_pkey;
       public            postgres    false    236            �           2606    57882    sede sede_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.sede
    ADD CONSTRAINT sede_pkey PRIMARY KEY (sede_id);
 8   ALTER TABLE ONLY public.sede DROP CONSTRAINT sede_pkey;
       public            postgres    false    238            �           2606    57884    solicitud solicitud_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_pkey PRIMARY KEY (cand_id, sol_id);
 B   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_pkey;
       public            postgres    false    240    240            �           2606    57886    titulo_exp titulo_exp_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.titulo_exp
    ADD CONSTRAINT titulo_exp_pkey PRIMARY KEY (tx_id);
 D   ALTER TABLE ONLY public.titulo_exp DROP CONSTRAINT titulo_exp_pkey;
       public            postgres    false    244            �           2606    57887    solicitud fk_relationship_13    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT fk_relationship_13 FOREIGN KEY (rh_id) REFERENCES public.rechum(rh_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT fk_relationship_13;
       public          postgres    false    3267    234    240            �           2606    57892    oferta fk_relationship_15    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_15 FOREIGN KEY (post_id) REFERENCES public.postulacion(post_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_15;
       public          postgres    false    3265    228    232            �           2606    57897    oferta fk_relationship_16    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_16 FOREIGN KEY (con_id) REFERENCES public.contratacion(con_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_16;
       public          postgres    false    222    228    3255            �           2606    57902    oferta fk_relationship_17    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_17 FOREIGN KEY (ce_id) REFERENCES public.campo_especifico(ce_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_17;
       public          postgres    false    228    3251    218            �           2606    57907    oferta fk_relationship_18    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_18 FOREIGN KEY (ca_id) REFERENCES public.campo_amplio(ca_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_18;
       public          postgres    false    3249    228    216            �           2606    57912    oferta fk_relationship_19    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_19 FOREIGN KEY (sede_id) REFERENCES public.sede(sede_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_19;
       public          postgres    false    3271    228    238            �           2606    57917    solicitud fk_relationship_2    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT fk_relationship_2 FOREIGN KEY (cand_id) REFERENCES public.candidato(cand_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 E   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT fk_relationship_2;
       public          postgres    false    3253    240    220            �           2606    57922    oferta fk_relationship_20    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_20 FOREIGN KEY (dept_id) REFERENCES public.departamento(dept_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_20;
       public          postgres    false    3257    228    224            �           2606    57927    oferta fk_relationship_21    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_21 FOREIGN KEY (pa_id) REFERENCES public.personal_academico(pa_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_21;
       public          postgres    false    228    3263    230            �           2606    57932    oferta fk_relationship_22    FK CONSTRAINT     �   ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_22 FOREIGN KEY (act_id) REFERENCES public.actividad(act_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 C   ALTER TABLE ONLY public.oferta DROP CONSTRAINT fk_relationship_22;
       public          postgres    false    214    3247    228            �           2606    57937 #   campo_especifico fk_relationship_23    FK CONSTRAINT     �   ALTER TABLE ONLY public.campo_especifico
    ADD CONSTRAINT fk_relationship_23 FOREIGN KEY (ca_id) REFERENCES public.campo_amplio(ca_id) NOT VALID;
 M   ALTER TABLE ONLY public.campo_especifico DROP CONSTRAINT fk_relationship_23;
       public          postgres    false    3249    218    216            �           2606    57942    item fk_relationship_5    FK CONSTRAINT     �   ALTER TABLE ONLY public.item
    ADD CONSTRAINT fk_relationship_5 FOREIGN KEY (pa_id) REFERENCES public.personal_academico(pa_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 @   ALTER TABLE ONLY public.item DROP CONSTRAINT fk_relationship_5;
       public          postgres    false    3263    230    226            �           2606    57947    requisito fk_relationship_6    FK CONSTRAINT     �   ALTER TABLE ONLY public.requisito
    ADD CONSTRAINT fk_relationship_6 FOREIGN KEY (it_id) REFERENCES public.item(it_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 E   ALTER TABLE ONLY public.requisito DROP CONSTRAINT fk_relationship_6;
       public          postgres    false    226    3259    236            �           2606    57952    titulo_exp fk_relationship_7    FK CONSTRAINT     �   ALTER TABLE ONLY public.titulo_exp
    ADD CONSTRAINT fk_relationship_7 FOREIGN KEY (rq_id) REFERENCES public.requisito(rq_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public.titulo_exp DROP CONSTRAINT fk_relationship_7;
       public          postgres    false    3269    236    244            h   �   x�3�t�ON�K�L�3��8=��R�K2��3o�C�*qs�e�%��@�9
�\&�RЌ�)�`�e���T@� ���)����t�U0�2����� n �N��˂�1�$�,3%1E���%�8�(� "�������������� �ɒ�      j   G   x�3�IM����O?�6��L�2����M*JUHI�QHN�-�W 9���.���E�ə�7�a�r��qqq V�      l   5   x�3�tJ,NUHIUpI,�/�trq�4�2�OMRp,K̫JLIs��qqq A�6      n   �  x���Mn�0FןN�X�x�T@�H�AW݌��ʂ"��En�e�E����v�:A�mA�B�yC�\���VZ�s�Ը�%�V:��EQL�>(ЦnȺ܄��UV�Pz6_,Wg�"վ�u�^����/ܴ.lL��á��E�Q*���<��#���������=�����Y���#��7���?k�c3����5	�!v<����n�[P��0��w�R��M��T+,!��#�K�y�ـd�7ӻגW�L��fG/��D�E��A�)	��fx0ޚ0��-G�/N��:�Pɭ�VIcۑ��p�����#��K����G�ml��ż����H�#�<=���lr��>�F���х:�ΐ����bG�=�0F<��Oy�e��i:u      p   �   x�m�K�0D��^������RSEJ��"�Ě#�b8BEb癱���ő5KB$x4�^�zcj8CUb�%%��YfSa�������V�=�ߠE>��}���^2oX���MFϩp^��c�8����ʞ���4p.���+����=��h�ٜ �<�I��jM��/���� �Q[�\�݄;m�so�:v&      r   %  x�mQ;j�0��S� K���Oid-ۘl�J3ȳF`K�>!>N�-R�t���H��F�y�)�Z
Y�x`B,��Fi�\��
��MQ�����1��ְ���Y��A7�O�3oP������%�N�s��\TJ��a�yiig����jpZ�1D�iqT�S�ʚt�ȅ�𪟴ѤA�叙ǜ�b�u�ص)vqCͼ��Ԉ��%�ze��!:r�����B�\/�tR��Æ�HOJM�vH��bs�Y�r�����t�sHV�/ն����o6��>_���1��$�v      t   f   x�3���t�/�ML�<�9���w�ON�K�L�2���SJ���
�ɉ)�W�f&'r���\+
R�2�����R�3��s�LA��ye��%��)�E\1z\\\ ;$�      v   c   x�m�[
�0��Ô�yػ���J X�e�0q��Τd���ޭ����{Qh�aV��d�E�ip�*�x=X�#tp���9���E�n���� �A      x   �   x�}�=
�@F�S�	�lA,R��A���J�9��Pc��W|�����jS���h1��ĥR����� ;�)�5�IZ,�7סw���D��&y�aF��؊�,����9tԴ\������?�T�\iT��H	��a1�՘���\��	n x�}      z      x�3�420265�23t��	W� 9�      |   M   x�sO-J�+I�4�L��R+srR���s9���J��SoL442����M*J5��F���99�)��p�W� :�      ~   4  x��U=oG�y�b�0%�R)��)+�����{���=����/p�BE�N����ٽ�,Jp#��̼7�ޜM�&��Ȫ���j���4�����^լ�B�@*���k����V���9�޳N�іԭ��C2��ǅ����4i�u�k9���d�Դ֠n���R�1�Wk�tgs_*v�%�65�%����6��2n�Vͪ�����RY���Ԍ�3��ά9DI�j
��^r()IY��f�Ƣ�ǎUbĊj��wd�[b������¢���q97��� �!J<��Z���
�$-�Y5Ǹ�u��$
xܴ�J�R)�_� �?vfM�4�T� ]w����}�'&�����i�E��������6$Z�+eTK�C�ݼ^�ZS�f�,	ˑ1�<-���J���W��ȡu�S�bsѭ+d�>ɳ�G�L���@�
�s�{Y��l4��3M��a�ٸd�����l~u��}��ĚZ�=�Gbٻ��&$��BQ�����J��D�dZD�S�����L�E�Q.��z���:9��#qN��� ,��̷E�U�u�%���b2���c~�,�D�-f ���7�e	��&�WQcӻ�d`
�q���E��n����#���n���d�9 �?�/�CH!,��ΪK����R�9��З��/N�S,�ş�	�n��%�l*%m�/�|3�9Sw<�q^���k�H�����#:� ���;�g�ϓ�����.{���J$	��ؚ����&&Lڸ�?Q�O���@SA}fC�7)�bPB`�)�U����2&Z�|E���<�z�+K�h����1�DM��e��I�>p9��2��q����0iA�������w��힂I��G�>@Y4��FX���v�'����k4��A�{gd;�B˸�SYc6�����:}r[A�gH/�ɚ�������H2��:��ș�g(W��7�y����9��N.��@;>��"�"ymF���3l�j�IdxW�􈸧i��� J�o����A�F��{��^'����{�TW�˗an����y*'LɆ�Ϊ�fUU����      �   Z   x�3��M,)ʬ�N�K��),��2��I,IL.�KOD���A*J�\�s3�*Qy\&pcRJ�2�R�r�3KSSRR���qqq ��'�      �      x������ � �      �     x��W�r�6���@�N#�����k�pa{'�&�4	��!.@j���?�EfS�,��DZ�N�<
��4	^�{����؅�����`?ʵ¥H�^^.�O�̢�h<f�~�_ג�ҪUu/5���JD.u)y̋J���!dv�ῲ~,��9�J��{�RI�H7J�T�<1��k�Fp�62�ح@lWȤ~�Q�����$���C�����*.�Vj#2�v03���p^��\x��"X�!mw;�E?����:�sr��'�n��
ךg�^ߘD ���y��*QF��ee���n�#�_M@4��Uv�>�	;�HT��������~�J��b�E��qC�~D�M�p��YY�K�㺐�X��ְ�C��3ou�$��©��W��-� ��z��+i�n��ԯXYXSV�C$]?��z�o�NC~+\)��v�kP�x^?jE�-���"?� h.��������Yܺ[�J#$��1��%P5�)��
^�T:����>���Oy�U�]xH�/�?�شY��� tw���9XEPP��z-�c�Ď�q4ST2l�Y�6�g��2�׉x	:��;$��W]�@r!l�l��b�8����]���tElƖwd�:Q>�t!2r�L����u�Nf["���t{⾟��2�	|AU�g8�]��6��"<~���Y�.}�S�	���*�3(9��7�.sU*�z�!���+�JiW����+��<��&�*�O�k]�	H���x�*\7J8��d���PJ�$�~�I� �� +QgL�r�ө�Z�GA���8Ƴ`��`��mʫ� ]��"1����}�F����A$���M	�U�ܭ���> >oA���BrH鋮�a��4���$�{��� |�SH�Y�&����gh�o��w?t��/'��k��{�PU[{��M[���7X,���5��Y� ��?z�P?H}λ޸���?�_h���3�}����F���]�%���$Tk��!��j�Ĥ��y7ܠ��9�Ƭ��� �*�䁶�	�pp�q�;��|���/��b6g'c]B�<1y�I(Ϯ�G�j� �2CcN4&��J)�ki7�_6�V�I�[h|��3������v+ 6���.9=���B��a،��d�瑌���[�8R���v�wjMFw�3F$�NSw��X5aǽ! �r�_BOF�KI3@S�M���J����I�?����MY���wS�ؙ,E���3ޮ�B��0�,��j�`oَ�����Yc���ě+5���.���l;g�7ۅ�a��h0�	e�N     