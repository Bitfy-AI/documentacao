# 📝 Nomenclaturas do Protocolo ZION - Guia Completo

> **Versão:** 1.0.0
> **Última Atualização:** Dezembro 2024
> **Filosofia:** Sistema Híbrido - Acessível para iniciantes, Padronizado para desenvolvedores

## 📌 Sumário

1. [Filosofia e Princípios](#filosofia-e-princípios)
2. [Sistema Híbrido de 3 Camadas](#sistema-híbrido-de-3-camadas)
3. [Nomenclatura de Workflows](#nomenclatura-de-workflows)
4. [Nomenclatura dos 8-Steps](#nomenclatura-dos-8-steps)
5. [Tipos de Nodes](#tipos-de-nodes)
6. [Variáveis e Dados](#variáveis-e-dados)
7. [Metadados e Rastreamento](#metadados-e-rastreamento)
8. [Organização de Arquivos](#organização-de-arquivos)
9. [Mensagens e Logs](#mensagens-e-logs)
10. [Códigos de Erro](#códigos-de-erro)
11. [Exemplos Completos](#exemplos-completos)
12. [Quick Reference](#quick-reference)
13. [Migração de Projetos](#migração-de-projetos)
14. [Validação e Checklist](#validação-e-checklist)
15. [Ferramentas e Utilitários](#ferramentas-e-utilitários)

---

## 🎯 Filosofia e Princípios

### Por que Nomenclatura é Crítica no No-Code?

No desenvolvimento tradicional, o código documenta a si mesmo. No no-code, **o nome É a documentação**. Um workflow mal nomeado é um workflow perdido.

### Nossos Princípios

1. **Clareza sobre Cleverness**: Preferimos nomes óbvios a abreviações espertas
2. **Função sobre Forma**: O que faz é mais importante que como está arquitetado
3. **Descoberta Natural**: Você deve encontrar o que procura no primeiro palpite
4. **Sem Barreira de Entrada**: Um iniciante entende em 5 minutos
5. **Rastreabilidade Garantida**: Um dev consegue debugar em produção

### O Dilema No-Code

```
Iniciante quer: "Atendimento WhatsApp Cliente"
Developer quer: "WBH-L1-CRM-RECV-v3.2.1"
DevOps quer:    "webhook_crm_receive_321"

Nossa solução:  TODOS GANHAM! 🎉
```

---

## 🔄 Sistema Híbrido de 3 Camadas

Nossa solução revolucionária que satisfaz todos os stakeholders:

### 📊 As 3 Camadas

```yaml
┌─────────────────────────────────────────────────────────┐
│                    CAMADA 1: DISPLAY                     │
│         "Atendimento WhatsApp - Suporte Cliente"         │
│     Totalmente em português, claro e descritivo          │
└─────────────────────────────────────────────────────────┘
                            ↕️
┌─────────────────────────────────────────────────────────┐
│                  CAMADA 2: TECHNICAL ID                  │
│                      "SUP-WA-001"                        │
│          Padronizado, conciso, versionável               │
└─────────────────────────────────────────────────────────┘
                            ↕️
┌─────────────────────────────────────────────────────────┐
│                   CAMADA 3: SEARCH TAGS                  │
│    ["atendimento", "whatsapp", "suporte", "cliente"]     │
│            Indexável, buscável, categorizável            │
└─────────────────────────────────────────────────────────┘
```

### Como Funciona na Prática

**Interface n8n (o que usuário vê):**
```
📱 Atendimento WhatsApp - Suporte Cliente
   ID: SUP-WA-001 | v2.1.0 | ⭐⭐⭐⭐⭐
```

**Arquivo no sistema:**
```
sup-wa-001.workflow.json
```

**Logs em produção:**
```
[2024-01-20T10:30:15Z] [SUP-WA-001] [3.VAL] [INFO] Message processed
```

**Busca no n8n:**
```
Usuário digita: "whats"
Sistema retorna: ✅ Atendimento WhatsApp - Suporte Cliente (SUP-WA-001)
```

---

## 📦 Nomenclatura de Workflows

### Estrutura do Technical ID

```
[DOMÍNIO]-[CANAL]-[SEQUENCIAL]

Exemplo: SUP-WA-001
         ↑   ↑   ↑
         │   │   └── Número sequencial (3 dígitos)
         │   └────── Canal de comunicação (2-3 letras)
         └────────── Domínio do negócio (3 letras)
```

### 🏢 Domínios Padronizados

| Código | Domínio | Descrição | Exemplos de Uso |
|--------|---------|-----------|-----------------|
| **SUP** | Suporte | Atendimento ao cliente | Dúvidas, reclamações, ajuda |
| **VEN** | Vendas | Processos comerciais | Leads, propostas, fechamento |
| **MKT** | Marketing | Campanhas e comunicação | Email mkt, broadcast, social |
| **FIN** | Financeiro | Processos financeiros | Pagamentos, cobranças, DRE |
| **LOG** | Logística | Entregas e estoque | Rastreio, inventário, rotas |
| **RH** | Recursos Humanos | Gestão de pessoas | Onboarding, férias, feedback |
| **TEC** | Técnico/TI | Processos tecnológicos | Deploy, backup, monitoring |
| **JUR** | Jurídico | Processos legais | Contratos, compliance, LGPD |
| **OPR** | Operações | Processos operacionais | Produção, qualidade, SLA |
| **ADM** | Administrativo | Processos admin | Compras, facilities, docs |

### 📱 Canais Padronizados

| Código | Canal | Descrição | Quando Usar |
|--------|-------|-----------|-------------|
| **WA** | WhatsApp | WhatsApp Business API | Conversas via WhatsApp |
| **TG** | Telegram | Telegram Bot | Bots do Telegram |
| **EM** | Email | Email SMTP/IMAP | Comunicação por email |
| **SMS** | SMS | SMS/Text | Mensagens de texto |
| **WEB** | WebChat | Chat no site | Widget de chat |
| **API** | API/Sistema | Integrações | Sistema para sistema |
| **CRM** | CRM | CRM direto | Salesforce, HubSpot |
| **VOZ** | Voz/Telefone | Ligações | IVR, URA, CallCenter |
| **FB** | Facebook | Messenger | Facebook Messenger |
| **IG** | Instagram | Instagram DM | Direct do Instagram |
| **INT** | Interno | Processos internos | Sem canal externo |


---

## 🔢 Nomenclatura dos 8-Steps

### Padrão Visual (Interface)

```
┌──────────────────────────────────┐
│ 1️⃣ RECEBE                        │  ← Número + Nome completo
│ Entrada de dados via WhatsApp     │  ← Descrição clara
│ tech: 1.REC:WA_MSG               │  ← ID técnico discreto
└──────────────────────────────────┘
```

### Padrão Técnico (Sistema)

```
[NÚMERO].[ABREVIAÇÃO]:[CONTEXTO]

Exemplo: 3.VAL:CHECK_LEAD
         ↑  ↑    ↑
         │  │    └── Contexto específico
         │  └──────── Abreviação do step (3 letras)
         └─────────── Número do step (1-8)
```

### 📊 Os 8 Steps Completos

| # | Nome Completo | Abrev | Descrição | Cor n8n | Exemplo Technical |
|---|---------------|-------|-----------|---------|-------------------|
| **1** | **RECEBE** | REC | Entrada de dados | 🟩 Verde | `1.REC:WA_MSG` |
| **2** | **RASTREIA** | RAS | Telemetria e IDs | 🟨 Amarelo | `2.RAS:INIT_TRACK` |
| **3** | **VALIDA** | VAL | Verificações | 🟧 Laranja | `3.VAL:CHECK_DATA` |
| **4** | **ROTEIA** | ROT | Estratégia | 🟪 Roxo | `4.ROT:DEFINE_PATH` |
| **5** | **PROCESSA** | PRO | Lógica principal | 🟦 Azul | `5.PRO:EXEC_LOGIC` |
| **6** | **AGREGA** | AGR | Consolidação | 🟨 Amarelo | `6.AGR:MERGE_DATA` |
| **7** | **CONFIRMA** | CON | Quality gates | 🟧 Laranja | `7.CON:QA_CHECK` |
| **8** | **ENTREGA** | ENT | Saída final | 🟩 Verde | `8.ENT:SEND_RESP` |

### Exemplos Detalhados por Step

#### 1️⃣ RECEBE
```yaml
Display: "RECEBE - Mensagem WhatsApp do Cliente"
Technical: "1.REC:WA_CUSTOMER"
Descrição: "Recebe e prepara mensagem inicial do WhatsApp"
Tipos comuns:
  - 1.REC:WA_MSG     # WhatsApp message
  - 1.REC:API_CALL   # API call
  - 1.REC:WF_EXEC    # Workflow execution
  - 1.REC:SCHEDULE   # Scheduled trigger
```

#### 2️⃣ RASTREIA
```yaml
Display: "RASTREIA - Gera IDs e Inicia Telemetria"
Technical: "2.RAS:INIT_TELEMETRY"
Descrição: "Cria trace_id, correlation_id e inicia logs"
Tipos comuns:
  - 2.RAS:GEN_IDS    # Generate IDs
  - 2.RAS:LOG_START  # Start logging
  - 2.RAS:SAVE_STATE # Save initial state
```

#### 3️⃣ VALIDA
```yaml
Display: "VALIDA - Verifica Formato e Permissões"
Technical: "3.VAL:CHECK_PERMS"
Descrição: "Valida estrutura de dados e autorização"
Tipos comuns:
  - 3.VAL:SCHEMA     # Schema validation
  - 3.VAL:AUTH       # Authorization
  - 3.VAL:BUSINESS   # Business rules
```

#### 4️⃣ ROTEIA
```yaml
Display: "ROTEIA - Define Estratégia de Processamento"
Technical: "4.ROT:STRATEGY"
Descrição: "Decide qual caminho seguir baseado em regras"
Tipos comuns:
  - 4.ROT:BY_TYPE    # Route by type
  - 4.ROT:BY_PRIORITY # Route by priority
  - 4.ROT:LOAD_BALANCE # Load balancing
```

#### 5️⃣ PROCESSA
```yaml
Display: "PROCESSA - Executa Lógica de Negócio com IA"
Technical: "5.PRO:AI_LOGIC"
Descrição: "Processamento principal usando GPT-4"
Tipos comuns:
  - 5.PRO:AI_CHAT    # AI conversation
  - 5.PRO:CALCULATE  # Calculations
  - 5.PRO:TRANSFORM  # Data transformation
  - 5.PRO:API_CALLS  # External APIs
```

#### 6️⃣ AGREGA
```yaml
Display: "AGREGA - Consolida Resultados Múltiplos"
Technical: "6.AGR:MERGE_ALL"
Descrição: "Une dados de diferentes fontes"
Tipos comuns:
  - 6.AGR:MERGE      # Merge data
  - 6.AGR:SUMMARIZE  # Summarize results
  - 6.AGR:ENRICH     # Enrich with metadata
```

#### 7️⃣ CONFIRMA
```yaml
Display: "CONFIRMA - Quality Gates e Compliance"
Technical: "7.CON:QUALITY"
Descrição: "Validações finais de qualidade"
Tipos comuns:
  - 7.CON:QA         # Quality assurance
  - 7.CON:COMPLIANCE # Compliance check
  - 7.CON:APPROVAL   # Final approval
```

#### 8️⃣ ENTREGA
```yaml
Display: "ENTREGA - Envia Resposta ao Cliente"
Technical: "8.ENT:CUSTOMER_RESP"
Descrição: "Formata e envia resposta final"
Tipos comuns:
  - 8.ENT:WA_REPLY   # WhatsApp reply
  - 8.ENT:UPDATE_DB  # Update database
  - 8.ENT:NOTIFY     # Send notifications
  - 8.ENT:NEXT_WF    # Trigger next workflow
```

---

## 🔧 Tipos de Nodes

### Convenções por Tipo de Node n8n

| Tipo | Código | Quando Usar | Exemplo |
|------|--------|-------------|---------|
| **Code** | CODE | Lógica customizada | `5.PRO:CODE:CalcDiscount` |
| **HTTP Request** | HTTP | APIs externas | `5.PRO:HTTP:GetCEP` |
| **Database** | DB | Operações BD | `5.PRO:DB:GetClient` |
| **IF** | IF | Condicionais | `4.ROT:IF:CheckValue` |
| **Switch** | SW | Múltiplas rotas | `4.ROT:SW:ByType` |
| **Loop** | LOOP | Iterações | `5.PRO:LOOP:Items` |
| **Execute Workflow** | EXEC | Outro workflow | `8.ENT:EXEC:NextFlow` |
| **Merge** | MERGE | União de dados | `6.AGR:MERGE:Results` |
| **Split In Batches** | SPLIT | Dividir dados | `5.PRO:SPLIT:Batch100` |
| **Wait** | WAIT | Aguardar | `5.PRO:WAIT:5sec` |
| **Set** | SET | Definir valores | `1.REC:SET:InitVars` |
| **Function** | FN | Função JS | `5.PRO:FN:Transform` |
| **Webhook** | WH | Receber webhook | `1.REC:WH:Receive` |
| **Schedule** | CRON | Agendamento | `1.REC:CRON:Daily` |

### Padrão Completo para Nodes

```
[STEP].[ABREV]:[TIPO]:[AÇÃO]

Exemplo: 5.PRO:HTTP:CEP_API
         ↑  ↑    ↑     ↑
         │  │    │     └── Ação específica
         │  │    └──────── Tipo de node
         │  └───────────── Step abreviado
         └──────────────── Número do step
```

---

## 💾 Variáveis e Dados

### Convenções de Nomenclatura

#### Prefixos por Tipo de Dado

```javascript
// Strings
str_nomeCliente = "João Silva"
str_mensagem = "Olá, preciso de ajuda"

// Números
int_quantidade = 10
float_preco = 29.90
num_total = 100.50

// Booleanos
bool_ativo = true
bool_processado = false
is_valid = true      // Alternativa com 'is_'
has_permission = true // Alternativa com 'has_'

// Arrays
arr_produtos = ["A", "B", "C"]
list_clientes = []   // Alternativa com 'list_'

// Objetos
obj_pedido = {id: 1, total: 100}
doc_cliente = {}     // Para documentos
rec_venda = {}       // Para records

// Datas
date_criacao = "2024-01-20T10:00:00Z"
dt_modificacao = "2024-01-20T10:00:00Z"
ts_evento = 1705743600  // Timestamp
```

#### Convenções Especiais

```javascript
// Entrada e Saída
input_mensagemUsuario   // Dados de entrada
output_respostaBot      // Dados de saída

// Temporários
tmp_calculo            // Variável temporária
tmp_buffer             // Buffer temporário
cache_resultado        // Cache

// Constantes (UPPERCASE)
CONST_API_KEY = "sk-..."
CONST_MAX_RETRY = 3
CONST_TIMEOUT = 5000

// Configurações
config_ambiente = "production"
cfg_debug = false

// Contexto
ctx_usuario = {id: 1, nome: "João"}
context_sessao = {}

// Estado
state_workflow = "processing"
status_pedido = "approved"
```

### Estrutura de Dados Padronizada

#### Objeto de Resposta

```javascript
{
  // Sempre incluir
  success: true,
  timestamp: "2024-01-20T10:00:00Z",

  // Sucesso
  data: {
    // Dados da resposta
  },

  // Erro
  error: {
    code: "SUP-VAL-001",
    message: "Erro de validação",
    details: {}
  },

  // Metadados
  metadata: {
    trace_id: "uuid-v4",
    duration_ms: 234,
    step: "5.PRO"
  }
}
```

---

## 🔍 Metadados e Rastreamento

### IDs Obrigatórios

```javascript
{
  // IDs únicos (UUID v4)
  "trace_id": "550e8400-e29b-41d4-a716-446655440000",      // Por execução
  "correlation_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8", // Por grupo
  "session_id": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",    // Por sessão

  // IDs do sistema
  "workflow_id": "SUP-WA-001",                             // Technical ID
  "execution_id": "exec_123456789",                        // n8n execution
  "user_id": "user_987654321",                            // ID do usuário

  // Versionamento
  "version": "2.1.0",                                     // Semver
  "schema_version": "1.0"                                 // Versão do schema
}
```

### Timestamps Padronizados

```javascript
// SEMPRE usar ISO-8601 com timezone
{
  "created_at": "2024-01-20T10:00:00Z",       // UTC
  "updated_at": "2024-01-20T10:30:00Z",       // UTC
  "processed_at": "2024-01-20T10:30:15.123Z", // Com milissegundos

  // Com timezone local (quando necessário)
  "local_time": "2024-01-20T07:00:00-03:00",  // Brasília

  // Duração
  "duration_ms": 15123,                       // Milissegundos
  "duration_human": "15.1 seconds"            // Legível
}
```

### Estados e Status

```javascript
// Estados do Workflow
const WORKFLOW_STATES = {
  IDLE: "idle",
  RECEIVING: "receiving",
  PROCESSING: "processing",
  COMPLETING: "completing",
  COMPLETED: "completed",
  ERROR: "error",
  RETRY: "retry",
  TIMEOUT: "timeout"
}

// Status de Processamento
const PROCESS_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  SUCCESS: "success",
  FAILED: "failed",
  PARTIAL: "partial",
  CANCELLED: "cancelled"
}

// Níveis de Prioridade
const PRIORITY = {
  CRITICAL: 1,  // < 1 min
  HIGH: 2,      // < 5 min
  MEDIUM: 3,    // < 30 min
  LOW: 4,       // < 2 hours
  BATCH: 5      // Quando possível
}
```

---

## 📁 Organização de Arquivos

### Estrutura de Diretórios

```
/workflows
├── /suporte                    # Domínio
│   ├── /whatsapp               # Canal
│   │   ├── /sup-wa-001         # Technical ID
│   │   │   ├── workflow.json   # Definição do workflow
│   │   │   ├── config.json     # Configurações
│   │   │   ├── README.md       # Documentação
│   │   │   ├── CHANGELOG.md    # Histórico de mudanças
│   │   │   ├── /tests          # Testes
│   │   │   │   ├── unit.test.js
│   │   │   │   └── e2e.test.js
│   │   │   ├── /templates      # Templates
│   │   │   │   └── response.json
│   │   │   └── /assets         # Recursos
│   │   │       └── logo.png
│   │   └── /sup-wa-002
│   └── /telegram
│       └── /sup-tg-001
├── /vendas
│   └── /whatsapp
│       ├── /ven-wa-001
│       └── /ven-wa-002
└── /marketing
    └── /email
        └── /mkt-em-001
```

### Arquivo de Configuração

```json
// config.json
{
  "workflow": {
    "displayName": "Atendimento WhatsApp - Suporte Cliente",
    "technicalId": "SUP-WA-001",
    "version": "2.1.0",
    "description": "Workflow principal de atendimento ao cliente via WhatsApp"
  },

  "environment": {
    "production": {
      "active": true,
      "webhook_url": "https://api.empresa.com/webhooks/whatsapp",
      "api_key": "${PROD_API_KEY}"
    },
    "staging": {
      "active": true,
      "webhook_url": "https://staging-api.empresa.com/webhooks/whatsapp",
      "api_key": "${STAGING_API_KEY}"
    },
    "development": {
      "active": false,
      "webhook_url": "http://localhost:3000/webhooks/whatsapp",
      "api_key": "${DEV_API_KEY}"
    }
  },

  "settings": {
    "timeout_ms": 30000,
    "max_retries": 3,
    "retry_delay_ms": 5000,
    "rate_limit": "100/minute",
    "sla_minutes": 5
  },

  "notifications": {
    "on_error": ["devops@empresa.com"],
    "on_timeout": ["suporte@empresa.com"],
    "on_success": []
  }
}
```

---

## 📝 Mensagens e Logs

### Formato de Log Estruturado

```
[TIMESTAMP] [WORKFLOW_ID] [STEP] [LEVEL] [TRACE_ID] [MESSAGE] [EXTRA]

Exemplo:
[2024-01-20T10:30:15.123Z] [SUP-WA-001] [3.VAL] [INFO] [550e8400-e29b] "Validation successful" {"user_id":"123","duration_ms":45}
```

### Níveis de Log

| Nível | Código | Quando Usar | Exemplo |
|-------|--------|-------------|---------|
| **DEBUG** | DBG | Desenvolvimento apenas | Valores de variáveis |
| **INFO** | INF | Operação normal | Mensagem processada |
| **WARN** | WRN | Atenção necessária | Rate limit próximo |
| **ERROR** | ERR | Erro recuperável | API timeout, retry |
| **FATAL** | FTL | Erro crítico | Database down |

### Exemplos de Mensagens

```javascript
// DEBUG - Desenvolvimento
logger.debug("[SUP-WA-001] [5.PRO] Variable state", {
  str_message: "Hello",
  obj_user: {id: 1, name: "João"}
});

// INFO - Operação Normal
logger.info("[SUP-WA-001] [1.REC] Message received", {
  from: "+5511999999999",
  type: "text",
  length: 150
});

// WARN - Atenção
logger.warn("[SUP-WA-001] [5.PRO] API slow response", {
  api: "openai",
  response_time_ms: 4500,
  threshold_ms: 3000
});

// ERROR - Erro Recuperável
logger.error("[SUP-WA-001] [5.PRO] API call failed, retrying", {
  api: "payment_gateway",
  error: "timeout",
  retry: 1,
  max_retries: 3
});

// FATAL - Crítico
logger.fatal("[SUP-WA-001] [2.RAS] Database connection lost", {
  database: "postgresql",
  host: "db.empresa.com",
  error: "ECONNREFUSED"
});
```

### Mensagens para Usuário

```javascript
// Padrão de mensagens amigáveis
const USER_MESSAGES = {
  // Sucesso
  WELCOME: "Olá! Bem-vindo ao nosso atendimento. Como posso ajudar?",
  SUCCESS: "✅ Sua solicitação foi processada com sucesso!",
  COMPLETED: "Concluído! Seu protocolo é: {protocol}",

  // Aguardando
  PROCESSING: "⏳ Processando sua solicitação...",
  WAIT: "Por favor, aguarde um momento...",
  QUEUE: "Você é o {position}º da fila. Tempo estimado: {time}",

  // Erros (sempre amigáveis)
  ERROR_GENERIC: "😔 Ops! Algo deu errado. Vamos tentar novamente?",
  ERROR_VALIDATION: "Por favor, verifique os dados informados.",
  ERROR_TIMEOUT: "A operação demorou mais que o esperado. Tente novamente.",

  // Confirmações
  CONFIRM_YES_NO: "Por favor, responda com SIM ou NÃO",
  CONFIRM_CONTINUE: "Deseja continuar? Digite 1 para SIM ou 2 para NÃO"
}
```

---

## ❌ Códigos de Erro

### Estrutura do Código

```
[DOMÍNIO]-[CATEGORIA]-[NÚMERO]

Exemplo: SUP-VAL-001
         ↑    ↑   ↑
         │    │   └── Número sequencial (3 dígitos)
         │    └────── Categoria do erro (3 letras)
         └─────────── Domínio (3 letras)
```

### Categorias de Erro

| Código | Categoria | Descrição |
|--------|-----------|-----------|
| **VAL** | Validação | Erros de validação de dados |
| **AUTH** | Autorização | Problemas de permissão |
| **API** | API Externa | Falhas em APIs |
| **DB** | Database | Erros de banco de dados |
| **NET** | Network | Problemas de rede |
| **BIZ** | Business | Regras de negócio |
| **SYS** | Sistema | Erros do sistema |
| **CFG** | Configuração | Config incorreta |
| **LIM** | Limites | Rate limit, quotas |
| **FMT** | Formato | Formato incorreto |

### Exemplos de Códigos

```javascript
const ERROR_CODES = {
  // Suporte - Validação
  "SUP-VAL-001": "Mensagem vazia ou inválida",
  "SUP-VAL-002": "Número de telefone inválido",
  "SUP-VAL-003": "Sessão expirada",

  // Suporte - Autorização
  "SUP-AUTH-001": "Usuário não autorizado",
  "SUP-AUTH-002": "Token expirado",

  // Vendas - Business
  "VEN-BIZ-001": "Lead já existe no sistema",
  "VEN-BIZ-002": "Produto fora de estoque",
  "VEN-BIZ-003": "Desconto maior que permitido",

  // Vendas - API
  "VEN-API-001": "CRM indisponível",
  "VEN-API-002": "Timeout na API de pagamento",

  // Marketing - Limites
  "MKT-LIM-001": "Limite de envios diários excedido",
  "MKT-LIM-002": "Quota de mensagens esgotada",

  // Sistema - Geral
  "SYS-SYS-001": "Erro interno do servidor",
  "SYS-SYS-002": "Serviço em manutenção"
}
```

### Resposta de Erro Padronizada

```javascript
{
  "success": false,
  "error": {
    "code": "SUP-VAL-001",
    "message": "Mensagem vazia ou inválida",
    "user_message": "Por favor, digite uma mensagem válida",
    "details": {
      "field": "message",
      "value": "",
      "expected": "string with length > 0"
    },
    "timestamp": "2024-01-20T10:30:15Z",
    "trace_id": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```

---

## 📚 Exemplos Completos

### Exemplo 1: Workflow de Atendimento ao Cliente

```javascript
// Metadados do Workflow
{
  "displayName": "Atendimento WhatsApp - Suporte Técnico",
  "technicalId": "SUP-WA-003",
  "version": "1.2.0",
  "tags": ["suporte", "whatsapp", "tecnico", "atendimento"]
}

// 8 Steps implementados
"nodes": [
  {
    "name": "1.REC:WA_WEBHOOK",
    "displayName": "RECEBE - Webhook WhatsApp",
    "type": "webhook",
    "position": [250, 300]
  },
  {
    "name": "2.RAS:INIT_TRACKING",
    "displayName": "RASTREIA - Inicia Rastreamento",
    "type": "code",
    "code": "// Gera IDs\nconst trace_id = generateUUID();\nconst correlation_id = generateUUID();"
  },
  {
    "name": "3.VAL:CHECK_MESSAGE",
    "displayName": "VALIDA - Verifica Mensagem",
    "type": "if",
    "conditions": "{{$json.message.length > 0}}"
  },
  {
    "name": "4.ROT:DEFINE_CATEGORY",
    "displayName": "ROTEIA - Define Categoria",
    "type": "switch",
    "rules": [
      {"output": 0, "condition": "contains 'problema'"},
      {"output": 1, "condition": "contains 'dúvida'"},
      {"output": 2, "condition": "default"}
    ]
  },
  {
    "name": "5.PRO:AI_ANALYSIS",
    "displayName": "PROCESSA - Análise com IA",
    "type": "openai",
    "model": "gpt-4",
    "prompt": "Analise e responda: {{$json.message}}"
  },
  {
    "name": "6.AGR:COMBINE_DATA",
    "displayName": "AGREGA - Combina Dados",
    "type": "merge",
    "mode": "combine"
  },
  {
    "name": "7.CON:QUALITY_CHECK",
    "displayName": "CONFIRMA - Verifica Qualidade",
    "type": "code",
    "code": "// Quality gate\nif (response.quality_score < 0.8) throw new Error('Quality too low');"
  },
  {
    "name": "8.ENT:SEND_RESPONSE",
    "displayName": "ENTREGA - Envia Resposta",
    "type": "whatsapp",
    "action": "sendMessage"
  }
]
```

### Exemplo 2: Workflow de Qualificação de Leads

```javascript
// Metadados
{
  "displayName": "Qualificação Automática de Leads - WhatsApp",
  "technicalId": "VEN-WA-005",
  "version": "2.0.1",
  "tags": ["vendas", "leads", "qualificacao", "ia", "whatsapp"]
}

// Implementação dos Steps
const workflow = {
  "1.REC:LEAD_ENTRY": {
    display: "RECEBE - Novo Lead WhatsApp",
    action: "Captura dados iniciais do lead"
  },

  "2.RAS:CREATE_LEAD_ID": {
    display: "RASTREIA - Cria ID do Lead",
    action: "Gera lead_id único e inicia tracking"
  },

  "3.VAL:LEAD_VALIDATION": {
    display: "VALIDA - Verifica Dados do Lead",
    action: "Valida telefone, email e dados básicos"
  },

  "4.ROT:LEAD_ROUTING": {
    display: "ROTEIA - Define Vendedor",
    action: "Roteia para SDR disponível baseado em critérios"
  },

  "5.PRO:AI_QUALIFICATION": {
    display: "PROCESSA - Qualifica com IA",
    action: "GPT-4 analisa fit e scoring do lead"
  },

  "6.AGR:ENRICH_LEAD": {
    display: "AGREGA - Enriquece Dados",
    action: "Adiciona dados de APIs externas"
  },

  "7.CON:APPROVE_LEAD": {
    display: "CONFIRMA - Aprova Qualificação",
    action: "Verifica score mínimo e critérios"
  },

  "8.ENT:CRM_UPLOAD": {
    display: "ENTREGA - Envia para CRM",
    action: "Cria lead no Salesforce/HubSpot"
  }
}
```

### Exemplo 3: Workflow de Integração

```javascript
{
  "displayName": "Sincronização de Pedidos - ERP para E-commerce",
  "technicalId": "INT-API-010",
  "version": "3.1.0",
  "tags": ["integracao", "erp", "ecommerce", "pedidos", "sync"],

  "steps": {
    "1.REC:CRON_TRIGGER": "RECEBE - Trigger Agendado (30 min)",
    "2.RAS:SYNC_ID": "RASTREIA - ID de Sincronização",
    "3.VAL:CHECK_LAST_SYNC": "VALIDA - Última Sincronização",
    "4.ROT:SYNC_STRATEGY": "ROTEIA - Estratégia (Full/Delta)",
    "5.PRO:FETCH_ORDERS": "PROCESSA - Busca Pedidos do ERP",
    "6.AGR:MERGE_UPDATES": "AGREGA - Consolida Atualizações",
    "7.CON:VERIFY_SYNC": "CONFIRMA - Verifica Integridade",
    "8.ENT:UPDATE_ECOMMERCE": "ENTREGA - Atualiza E-commerce"
  }
}
```

---

## 🚀 Quick Reference

### 📊 Tabela Rápida - Domínios

```
SUP = Suporte     | VEN = Vendas      | MKT = Marketing
FIN = Financeiro  | LOG = Logística   | RH  = RH
TEC = Técnico     | JUR = Jurídico    | OPR = Operações
ADM = Admin       | INT = Integração  | ANA = Analytics
```

### 📱 Tabela Rápida - Canais

```
WA  = WhatsApp    | TG  = Telegram    | EM  = Email
SMS = SMS         | WEB = WebChat     | API = API/Sistema
CRM = CRM         | VOZ = Voz         | FB  = Facebook
IG  = Instagram   | INT = Interno     | SLK = Slack
```

### 🔢 Tabela Rápida - 8 Steps

```
1.REC = RECEBE    🟩 | 2.RAS = RASTREIA  🟨
3.VAL = VALIDA    🟧 | 4.ROT = ROTEIA    🟪
5.PRO = PROCESSA  🟦 | 6.AGR = AGREGA    🟨
7.CON = CONFIRMA  🟧 | 8.ENT = ENTREGA   🟩
```

### 🔧 Tabela Rápida - Tipos de Nodes

```
CODE  = Código     | HTTP = Request   | DB    = Database
IF    = Condicional| SW   = Switch    | LOOP  = Loop
EXEC  = Workflow   | MERGE = Merge    | SPLIT = Split
WAIT  = Aguardar   | SET   = Definir  | FN    = Function
WH    = Webhook    | CRON  = Schedule | MSG   = Message
```

### 💾 Tabela Rápida - Prefixos de Variáveis

```
str_  = String     | int_  = Integer  | float_ = Float
bool_ = Boolean    | arr_  = Array    | obj_   = Object
date_ = Date       | tmp_  = Temp     | cache_ = Cache
input_ = Entrada   | output_ = Saída  | ctx_   = Context
CONST_ = Constante | config_ = Config | state_ = Estado
```

### ❌ Tabela Rápida - Categorias de Erro

```
VAL  = Validação   | AUTH = Auth      | API  = API Externa
DB   = Database    | NET  = Network   | BIZ  = Business
SYS  = Sistema     | CFG  = Config    | LIM  = Limites
FMT  = Formato     | SEC  = Security  | PERM = Permission
```

---

## 🔄 Migração de Projetos

### De Nomenclatura Antiga para Nova

#### Mapeamento de Workflows

```javascript
// ANTES (complexo)
"WBH-L1-CRM-RECV-V3"
"FAC-L2-ADS-NORM-V1"
"EXE-L3-FIN-PROC-V2"

// DEPOIS (híbrido)
{
  displayName: "Webhook CRM - Recebe Leads",
  technicalId: "CRM-WH-001",
  oldId: "WBH-L1-CRM-RECV-V3"  // Manter referência
}
```

#### Script de Conversão

```javascript
// converter-nomenclatura.js
const oldToNew = {
  // Domínios
  "CRM": "VEN",  // CRM agora é Vendas
  "ADS": "MKT",  // Ads agora é Marketing
  "FIN": "FIN",  // Mantém

  // Tipos para canais
  "WBH": "WH",   // Webhook
  "FAC": "INT",  // Factory vira Integration
  "EXE": "PRO",  // Execution vira Process

  // Ações removidas (agora no display name)
  "RECV": "",
  "NORM": "",
  "PROC": ""
};

function convertWorkflowId(oldId) {
  // WBH-L1-CRM-RECV-V3 → VEN-WH-001
  const parts = oldId.split('-');
  const domain = oldToNew[parts[2]] || parts[2];
  const channel = oldToNew[parts[0]] || "INT";
  const number = getNextNumber(domain, channel);

  return `${domain}-${channel}-${number}`;
}
```

### Período de Transição

```yaml
Fase 1 (Mês 1-2): Preparação
- Mapear todos workflows existentes
- Criar tabela de conversão
- Treinar equipe

Fase 2 (Mês 3-4): Implementação
- Adicionar novos metadados
- Manter IDs antigos como alias
- Atualizar interface gradualmente

Fase 3 (Mês 5-6): Migração
- Converter workflows principais
- Atualizar documentação
- Ajustar automações

Fase 4 (Mês 7): Conclusão
- Remover referências antigas
- Validar toda base
- Celebrar! 🎉
```

---

## ✅ Validação e Checklist

### Checklist para Novo Workflow

```markdown
## Workflow Checklist

### Nomenclatura
- [ ] Display name em português claro e descritivo
- [ ] Technical ID segue padrão [DOM]-[CANAL]-[NUM]
- [ ] Versão no formato semver (X.Y.Z)
- [ ] Tags relevantes incluídas (mínimo 3)
- [ ] Descrição completa no config.json

### 8-Steps
- [ ] Todos os 8 steps presentes (mesmo que vazios)
- [ ] Nomenclatura: [N].[ABC]:[CONTEXTO]
- [ ] Cores corretas no n8n
- [ ] Display names descritivos em cada step
- [ ] Ordem lógica mantida (1-8)

### Variáveis
- [ ] Prefixos corretos (str_, int_, bool_, etc)
- [ ] Nomes descritivos (não usar x, temp, data)
- [ ] Constantes em UPPERCASE
- [ ] Input/output claramente marcados

### Rastreamento
- [ ] trace_id gerado no step 2
- [ ] correlation_id quando apropriado
- [ ] Timestamps em ISO-8601
- [ ] Logs em todos os steps críticos

### Documentação
- [ ] README.md no diretório do workflow
- [ ] Exemplos de uso incluídos
- [ ] Dependências listadas
- [ ] SLA e prioridade definidos

### Qualidade
- [ ] Tratamento de erro em todos steps
- [ ] Validações no step 3
- [ ] Quality gates no step 7
- [ ] Mensagens de erro amigáveis
```

### Validador Automático

```javascript
// validar-workflow.js
function validateWorkflow(workflow) {
  const errors = [];
  const warnings = [];

  // Validar Technical ID
  if (!/^[A-Z]{3}-[A-Z]{2,3}-\d{3}$/.test(workflow.technicalId)) {
    errors.push("Technical ID fora do padrão");
  }

  // Validar Display Name
  if (!workflow.displayName || workflow.displayName.length < 10) {
    errors.push("Display name muito curto ou ausente");
  }

  // Validar Tags
  if (!workflow.tags || workflow.tags.length < 3) {
    warnings.push("Recomendado mínimo 3 tags");
  }

  // Validar 8-Steps
  const steps = ["REC", "RAS", "VAL", "ROT", "PRO", "AGR", "CON", "ENT"];
  steps.forEach((step, index) => {
    const stepNum = index + 1;
    const stepNode = workflow.nodes.find(n =>
      n.name.startsWith(`${stepNum}.${step}`)
    );
    if (!stepNode) {
      errors.push(`Step ${stepNum}.${step} não encontrado`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
```

---

## 🛠️ Ferramentas e Utilitários

### Gerador de Technical ID

```javascript
// gerar-id.js
function generateTechnicalId(domain, channel) {
  // Busca último número usado
  const lastNumber = getLastNumber(domain, channel);
  const nextNumber = (lastNumber + 1).toString().padStart(3, '0');

  return `${domain}-${channel}-${nextNumber}`;
}

// Exemplo de uso
const newId = generateTechnicalId("SUP", "WA");
console.log(newId); // SUP-WA-042
```

### Gerador de UUID

```javascript
// uuid.js
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Uso
const trace_id = generateUUID();
// "550e8400-e29b-41d4-a716-446655440000"
```

### Template de Workflow

```json
// template-workflow.json
{
  "name": "TEMPLATE_WORKFLOW",
  "displayName": "[PREENCHER] Nome Descritivo",
  "technicalId": "[DOM]-[CANAL]-[000]",
  "version": "1.0.0",
  "description": "[PREENCHER] Descrição completa",
  "tags": [],
  "nodes": [
    {
      "name": "1.REC:INPUT",
      "displayName": "RECEBE - [Descrever entrada]",
      "type": "webhook",
      "position": [250, 300]
    },
    {
      "name": "2.RAS:TRACKING",
      "displayName": "RASTREIA - Gera IDs e Telemetria",
      "type": "code",
      "position": [450, 300]
    },
    {
      "name": "3.VAL:VALIDATE",
      "displayName": "VALIDA - [Descrever validação]",
      "type": "if",
      "position": [650, 300]
    },
    {
      "name": "4.ROT:ROUTE",
      "displayName": "ROTEIA - [Descrever roteamento]",
      "type": "switch",
      "position": [850, 300]
    },
    {
      "name": "5.PRO:PROCESS",
      "displayName": "PROCESSA - [Descrever processamento]",
      "type": "code",
      "position": [1050, 300]
    },
    {
      "name": "6.AGR:AGGREGATE",
      "displayName": "AGREGA - [Descrever agregação]",
      "type": "merge",
      "position": [1250, 300]
    },
    {
      "name": "7.CON:CONFIRM",
      "displayName": "CONFIRMA - [Descrever confirmação]",
      "type": "code",
      "position": [1450, 300]
    },
    {
      "name": "8.ENT:DELIVER",
      "displayName": "ENTREGA - [Descrever entrega]",
      "type": "code",
      "position": [1650, 300]
    }
  ]
}
```

### Conversor de Display Name para Technical ID

```javascript
// converter.js
function displayToTechnical(displayName) {
  // "Atendimento WhatsApp - Suporte Cliente" → "SUP-WA-XXX"

  const mappings = {
    // Domínios
    "atendimento": "SUP",
    "suporte": "SUP",
    "vendas": "VEN",
    "marketing": "MKT",
    "financeiro": "FIN",

    // Canais
    "whatsapp": "WA",
    "telegram": "TG",
    "email": "EM"
  };

  const lower = displayName.toLowerCase();
  let domain = "GEN"; // Generic default
  let channel = "INT"; // Internal default

  // Encontrar domínio
  for (const [key, value] of Object.entries(mappings)) {
    if (lower.includes(key)) {
      if (["SUP", "VEN", "MKT", "FIN"].includes(value)) {
        domain = value;
      } else {
        channel = value;
      }
    }
  }

  return generateTechnicalId(domain, channel);
}
```

---

## 📖 Conclusão

Este documento estabelece o padrão definitivo de nomenclaturas para o Protocolo ZION. O sistema híbrido de 3 camadas garante que:

1. ✅ **Iniciantes** encontram e entendem workflows em segundos
2. ✅ **Desenvolvedores** mantêm padrões técnicos rigorosos
3. ✅ **DevOps** conseguem debugar e monitorar eficientemente
4. ✅ **Gestores** têm visibilidade clara do sistema

### Lembre-se sempre:

> **"No no-code, o nome é a documentação!"**

### Princípio de Ouro:

```yaml
Se está difícil de nomear,
está difícil de entender.

Se está difícil de encontrar,
está mal nomeado.

Se precisa explicar o nome,
escolha outro nome.
```

### Evolução Contínua

Este documento é vivo e evolui com o projeto. Sugestões e melhorias são sempre bem-vindas. A nomenclatura deve servir ao projeto, não o contrário.

---

**Protocolo ZION - Nomenclaturas v1.0.0**
*Tornando o no-code verdadeiramente acessível*

---

## 📎 Anexos

### Links Úteis

- [n8n Documentation](https://docs.n8n.io)
- [UUID Generator](https://www.uuidgenerator.net)
- [Semver Calculator](https://semver.org)
- [ISO-8601 Reference](https://en.wikipedia.org/wiki/ISO_8601)

### Contato

Para dúvidas sobre nomenclaturas:
- Slack: #protocolo-zion
- Email: zion@empresa.com
- Docs: /protocolo/nomenclaturas

---

*Fim do documento*