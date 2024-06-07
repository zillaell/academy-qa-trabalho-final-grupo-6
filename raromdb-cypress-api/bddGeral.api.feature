#CADASTRO DE USUARIO
Funcionalidade: Cadastro de usuário

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que acessei a funcionalidade de cadastro

Cenário: Registrar Usuário com sucesso
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo nome
  Quando informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo email
  Quando informar um novo nome
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo senha
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário com email já cadastrado
  Quando informar um novo nome
  E informar um e-mail já em uso
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: validar o tipo de usuário criado
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
# Cenário: tentativa de registrar usuário com formato inválido sem nome utilizador
#   Quando informar um nome nulo
#   E informar um novo e-mail 
#   E informar uma nova senha
#   E confirmar operação
#   Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário com emoji no nome 
  Quando informar um novo nome contendo emoji
  E informar um novo e-mail 
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com emoji na senha  
  Quando informar um novo nome 
  E informar um novo e-mail 
  E informar uma nova senha contendo emoji
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com alfabeto alternativo no nome, email e senha   
  Quando informar um novo nome contendo alfabeto alternativo
  E informar um novo e-mail contendo alfabeto alternativo
  E informar uma nova senha contendo alfabeto alternativo
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com fonte alternativa no nome e senha  
  Quando informar um novo nome contendo fonte alternativa
  E informar um novo e-mail 
  E informar uma nova senha contendo fonte alternativa
  E confirmar operação
  Então o usuário deverá ser cadastrado

Cenário: tentativa de registrar usuário com formato inválido com emoji no email 
  Quando informar um nome nulo
  E informar um novo e-mail contendo emoji
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido com fonte alternativa no email 
  Quando informar um nome nulo
  E informar um novo e-mail contendo fonte alternativa
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
  ###########################
Cenário: tentativa de registrar usuário com formato inválido sem @
  Quando informar um novo nome
  E informar um novo e-mail sem @
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido sem domínio
  Quando informar um novo nome
  E informar um novo e-mail sem dominio
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido sem .com
  Quando informar um novo nome
  E informar um novo e-mail sem .com
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com email com 4 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 4 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
#Cenário: tentativa de registrar usuário com email com mais de 4 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 5 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com email com 60 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 60 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com email com mais de 60 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com mais de 60 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 1 dígito
  Quando informar um novo nome com 1 digito
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 100 dígitos
  Quando informar um novo nome com 100 digitos
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 101 dígitos
  Quando informar um novo nome com 1 digito
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 5 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 5 digitos
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 6 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 6 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 12 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 12 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 13 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 13 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado

#CENARIOS ADICIONAIS:
# 悲しみ - funciona no nome, email e senha
# ♞👽 - funciona no nome e senha
# ♞👽 - não funciona no email.
# 🅒🅐🅝🅘🅑🅐🅛 - funciona no nome e senha
# 🅒🅐🅝🅘🅑🅐🅛 - não funciona no email.