# Banco Central :moneybag:

## Propósito
Esta API serve como um centralizador de requisições http entre outras cinco APIs. 

## Rotas
### Depósito
| URL       | Verbo HTTP | Descrição                              |
|-----------|------------|----------------------------------------|
| /deposito | POST       | Deposita dinheiro em determinada conta |

```json
{
  "usuario": "felipe",
  "banco": "oxente-bank",
  "valor": 100.0
}
```

### Saque
| URL    | Verbo HTTP | Descrição                          |
|--------|------------|------------------------------------|
| /saque | POST       | Saca dinheiro em determinada conta |

```json
{
  "usuario": "felipe",
  "banco": "oxente-bank",
  "valor": 100.0
}
```

### Transferência
| URL            | Verbo HTTP | Descrição                            |
|----------------|------------|--------------------------------------|
| /transferencia | POST       | Transfere dinheiro entre duas contas |

```json
{
  "usuario_debito": "felipe",
  "usuario_credito": "uelberte",
  "banco_debito": "oxente-bank",
  "banco_credito": "well-bank",
  "valor": 100.0
}
```

### Movimentação
| URL                        | Verbo HTTP | Descrição                                               |
|----------------------------|------------|---------------------------------------------------------|
| /movimento/:banco/:usuario | GET        | Retornar todo o histórico de movimentação de um usuário |

### Usuario
| URL             | Verbo HTTP | Descrição                  |
|-----------------|------------|----------------------------|
| /usuario/:banco | GET        | Retornar todos os usuários |

**?usuario=uelberte**: Retornar um usuário específico 

### Banco
| URL    | Verbo HTTP | Descrição                |
|--------|------------|--------------------------|
| /banco | GET        | Retornar todos os bancos |

