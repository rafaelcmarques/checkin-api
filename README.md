# checkin-api
GymPass style app.

##RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x  ] Deve ser possível obter o perfil de usuário logado;
- [ ] Deve ser possivel obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possivel o usuário obter sey histórico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias próximas;
- [ ] Deve ser possivel o usuário buscar academias pelo nome;
- [ ] Deve ser possivel validar o check-in de um usuário;
- [ ] Deve ser possivel cadastrar uma academia;

##RFs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário nao pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

##RNF (Requisitos não funcionais)
- [x] A senha precisa está criptografada;
- [x] Os dados da aplicação precisam estar persistidos ewm banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas cin 20 itens por página;
- [ ] O usuário deve ser identificado or um JWT (json web token)

