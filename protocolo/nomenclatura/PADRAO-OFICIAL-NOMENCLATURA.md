# Padrão Oficial de Nomenclatura - Protocolo Zion

> **Versão:** 1.0.0
> **Baseado em:** INT-CNX-001
> **Status:** Oficial

## 📋 Estrutura de Nomenclatura

### Formato Padrão
```
[PREFIXO]:[CONTEXTO]:[DESCRIÇÃO]
```

### Exemplos
- `A:Recebe dados conexao` - Adaptador que recebe dados de conexão
- `VAL:ParametrosValidos` - Validador de parâmetros
- `ROT:SelecionaEstrategiaQuery` - Roteador que seleciona estratégia baseada em query
- `ERR:Conexao inexistente` - Erro de conexão não encontrada

## 🔷 Mapeamento Octógono Zion

### Step 1 - RECEBE (🟠 Laranja - color: 2)
**Prefixo:** `A:`
**Significado:** Adaptador de entrada
**Exemplos:**
```
A:Recebe dados conexao
A:Webhook entrada
A:RabbitMQ consumer
```

### Step 2 - RASTREIA (⬜ Cinza - color: 7)
**Prefixo:** `RAS:`
**Significado:** Rastreamento e telemetria
**Exemplos:**
```
RAS:Execução tratador
RAS:Trace ID generator
RAS:Session manager
```

### Step 3 - VALIDA (🟢 Verde - color: 4)
**Prefixo:** `VAL:`
**Significado:** Validação de dados e regras
**Exemplos:**
```
VAL:ParametrosValidos
VAL:Agente deve continuar?
VAL:Agente deve processar midia?
VAL:Schema validation
```

### Step 4 - ROTEIA (🔵 Azul - color: 5)
**Prefixo:** `ROT:`
**Significado:** Roteamento e estratégia
**Exemplos:**
```
ROT:SelecionaEstrategiaQuery
ROT:Load balancer
ROT:Priority queue
```

### Step 5 - PROCESSA (🟡 Amarelo - color: 3)
**Prefixos:**
- `B:NOR:` - Normalizador
- `C:` - Core/Componente principal
- `E:` - Executor externo

**Exemplos:**
```
B:NOR:Conexao > sistema
B:NOR:Conexao > funcionalidades
C:CMP:Executa motor de resposta
E:CNV:Converte midia em texto
E:INT:Buscar servicos no banco
```

### Step 6 - AGREGA (⬜ Cinza - color: 7)
**Prefixos:**
- `AGG:` - Agregador simples
- `E:AGG:` - Agregador externo

**Exemplos:**
```
AGG:UnificaMidia
E:AGG:Debouncer
AGG:Merge results
```

### Step 7 - CONFIRMA (🟢 Verde - color: 4)
**Prefixo:** `VAL:`
**Significado:** Validação final e quality gates
**Exemplos:**
```
VAL:Dados Validos Processador
VAL:Quality check
VAL:Compliance verification
```

### Step 8 - ENTREGA (🟠 Laranja - color: 2)
**Prefixo:** `C:` ou resposta direta
**Significado:** Componente de entrega final
**Exemplos:**
```
C:Respond to webhook
C:Send notification
C:Update database
```

## 🚨 Tratamento de Erros

**Prefixo:** `ERR:`
**Uso:** Em qualquer step quando há falha
**Exemplos:**
```
ERR:Parametros
ERR:Conexao inexistente
ERR:Invalido
ERR:Timeout
ERR:Rate limit
```

## 📊 Prefixos Auxiliares

### Normalizadores
**Prefixo:** `B:NOR:`
**Uso:** Transformação e normalização de dados
**Sintaxe:** `B:NOR:[origem] > [destino]`

### Executores Externos
**Prefixo:** `E:`
**Uso:** Chamadas a serviços externos
**Subtipos:**
- `E:INT:` - Integração
- `E:BCO:` - Banco de dados
- `E:CNV:` - Conversão
- `E:AGG:` - Agregação externa

### Componentes Core
**Prefixo:** `C:`
**Uso:** Lógica principal do negócio
**Subtipos:**
- `C:CMP:` - Componente
- `C2:` - Componente secundário (numerado)

## 🎯 Regras de Nomenclatura

1. **Idioma:** Português para ações, Inglês para termos técnicos
2. **Case:** PascalCase para tipos, camelCase para instâncias
3. **Separadores:**
   - `:` entre prefixo e contexto
   - `>` para transformações
   - `?` para perguntas/decisões
4. **Tamanho:** Máximo 50 caracteres
5. **Clareza:** Nome deve ser autoexplicativo

## 📝 Template para Novos Nodes

```javascript
{
  "name": "[PREFIXO]:[Contexto]:[Ação]",
  "type": "n8n-nodes-base.[tipo]",
  "notes": "Descrição clara da função",
  "notesInFlow": true,
  "position": [x, y],
  "id": "uuid-aqui"
}
```

## 🔄 Migração de Nomenclatura Antiga

| Antiga | Nova |
|--------|------|
| `webhook` | `A:Webhook entrada` |
| `validateData` | `VAL:Schema validation` |
| `processAI` | `C:CMP:AI processor` |
| `sendResponse` | `C:Send response` |

## ✅ Checklist de Validação

- [ ] Prefixo corresponde ao step correto do Octógono
- [ ] Nome é autoexplicativo
- [ ] Não ultrapassa 50 caracteres
- [ ] Segue o padrão `[PREFIXO]:[CONTEXTO]:[DESCRIÇÃO]`
- [ ] Sticky Note tem a cor correta do step
- [ ] Node tem `notes` ou `notesInFlow` quando necessário

## 📊 Metadados do Workflow

Todo workflow deve incluir:
```json
{
  "meta": {
    "protocol": "ZION-v1.0",
    "pattern": "INT-CNX-001",
    "version": "1.0.0",
    "octogono": true,
    "instanceId": "uuid"
  }
}
```

---

*Este padrão é baseado em implementação real testada em produção (INT-CNX-001)*