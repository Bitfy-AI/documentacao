# 📐 Padrão ZION 8-Step para n8n

> **Versão:** 3.0.0
> **Stack:** n8n + PostgreSQL + Redis + LLMs
> **Última Atualização:** Dezembro 2024
> **Protocolo:** PANZ (Protocolo de Agentes No-Code Zion)


---

## 🎯 Visão Geral

Sistema de padronização para desenvolvimento de workflows n8n seguindo o Protocolo ZION, garantindo consistência, rastreabilidade e manutenibilidade em implementações de agentes conversacionais.

### Princípios Fundamentais

* **Factory Pattern**: Separação clara entre adaptação (fábrica) e execução (core)
* **8-Step Pattern**: Todo workflow de execução segue 8 etapas obrigatórias com cores padronizadas
* **Domain Isolation**: Responsabilidades isoladas por domínio de negócio
* **Observability First**: Rastreamento e monitoramento nativos


---

## 🏗️ Arquitetura

### Modelo de Camadas (Organização de Workflows)

```mermaidjs
graph TB
    classDef l1 fill:#3498DB,color:#fff
    classDef l2 fill:#9B59B6,color:#fff
    classDef l3 fill:#E74C3C,color:#fff
    classDef l4 fill:#F39C12,color:#fff
    classDef l5 fill:#2ECC71,color:#fff
    classDef trigger fill:#E67E22,color:#fff

    T["⚡ TRIGGERS & WEBHOOKS"]:::trigger
    L1["🖥️ C1 - GATILHOS<br/>Iniciam o sistema"]:::l1
    L2["🏭 C2 - FÁBRICAS<br/>Adaptadores e Normalizadores"]:::l2
    L3["⚙️ C3 - EXECUÇÃO<br/>Lógica de negócio (8 Steps)"]:::l3
    L4["🎯 C4 - DOMÍNIO<br/>Responsabilidades específicas"]:::l4
    L5["🔧 C5 - INFRAESTRUTURA<br/>DB, Cache, APIs"]:::l5

    T --> L1
    L1 --> L2
    L2 --> L3
    L3 --> L4
    L3 --> L5
    L4 --> L5
```

### Factory Pattern no n8n

**Conceito**: Workflows fábrica preparam dados, workflows de execução processam.

```yaml
Fábrica (Adaptador):
  - Recebe dados de qualquer fonte
  - Normaliza para formato padrão
  - Valida estrutura básica
  - Passa para execução

Execução:
  - Recebe dados normalizados
  - Aplica 8-Step Pattern
  - Processa lógica de negócio
  - Retorna resultado padronizado
```


---

## 📋 Nomenclatura

### Workflows

```yaml
[TIPO]-[CAMADA]-[DOMÍNIO]-[AÇÃO]-[VERSÃO]

Tipos:
  FAC - Factory/Fábrica
  EXE - Execution/Execução  
  UTL - Utility/Utilitário
  INT - Integration
  WBH - Webhook Handler
  CRN - Cron Job
  EVT - Event Handler

Camadas:
  L1 - Gatilhos
  L2 - Fábrica
  L3 - Execução
  L4 - Domínio
  L5 - Infraestrutura

Exemplos:
  FAC-L2-ADS-NORMALIZAR-V1
  EXE-L3-ADS-ANALISAR-V2
  UTL-L5-CACHE-GERENCIAR-V1
```

### Nodes dentro do Workflow (8 Steps)

```yaml
[STEP].[TYPE]:[ACTION]

Steps (8-Step Pattern):
  1.REC - Recebe
  2.RAS - Rastreia
  3.VAL - Valida
  4.ROT - Roteia
  5.PRO - Processa
  6.AGR - Agrega
  7.CON - Confirma
  8.ENT - Entrega

Types:
  CODE - Code node
  HTTP - HTTP Request
  DB   - Database
  IF   - Conditional
  EXEC - Execute Workflow

Exemplos:
  1.REC:RecebeMensagem
  2.RAS:IniciaRastreamento
  3.VAL:ValidaDados
  4.ROT:DefineRota
  5.PRO:ProcessaLogica
  6.AGR:AgregaResultados
  7.CON:ConfirmaQualidade
  8.ENT:EntregaResposta
```


---

## 🔄 8-Step Pattern

### Padrão Obrigatório para Workflows de Execução

```mermaidjs
graph LR
    1[1.RECEBE] --> 2[2.RASTREIA]
    2 --> 3[3.VALIDA]
    3 --> 4[4.ROTEIA]
    4 --> 5[5.PROCESSA]
    5 --> 6[6.AGREGA]
    6 --> 7[7.CONFIRMA]
    7 --> 8[8.ENTREGA]

    style 1 fill:#27AE60,color:#fff
    style 2 fill:#F1C40F,color:#000
    style 3 fill:#E67E22,color:#fff
    style 4 fill:#9B59B6,color:#fff
    style 5 fill:#3498DB,color:#fff
    style 6 fill:#F1C40F,color:#000
    style 7 fill:#E67E22,color:#fff
    style 8 fill:#27AE60,color:#fff
```

#### **1. ENTRADA (ENT)**

* Recebe dados da fábrica ou trigger
* Adiciona metadata básica
* Prepara contexto

#### **2. RASTREAMENTO (RAS)** 🆕

* Captura evidência ANTES de modificar
* Gera hash do conteúdo original
* Cria correlation_id e trace_id
* Armazena payload original

#### **3. VALIDAÇÃO (VAL)**

* Valida schema/estrutura
* Aplica regras de negócio
* Para execução se inválido

#### **4. ROTEAMENTO/ESTRATÉGIA (ROT)**

* Avalia condições
* Define estratégia de processamento
* Roteia para processador correto

#### **5. LÓGICA (LOG)**

* Core business
* Processamento principal
* Transformações de dados

#### **6. REVALIDAÇÃO (REV)**

* Valida output
* Calcula métricas de qualidade
* Quality gate final

#### **7. OUTPUT PADRONIZADO (OUT)** 🆕

* Formata resposta padrão
* Estrutura para persistência
* Prepara para próximo workflow


---

## 📁 Estrutura de Pastas

```
/PADRAO/
│
├── /1-GATILHOS/
│   ├── /ADAPTERS/        # Adaptadores de entrada
│   ├── /NORMALIZERS/     # Normalizadores
│   └── /VALIDATORS/      # Validadores básicos
│
├── /2-EXECUTION/
│   ├── /ADS/            # Domínio de anúncios
│   ├── /AI/             # Domínio de IA
│   ├── /AUTOMATION/     # Automações
│   └── /BUSINESS/       # Processos de negócio
│
├── /3-UTILITIES/
│   ├── CACHE/           # Gerenciamento de cache
│   ├── LOGGING/         # Sistema de logs
│   └── METRICS/         # Coleta de métricas
│
├── /4-INTEGRATIONS/
│   ├── SUPABASE/        # Integração DB
│   ├── REDIS/           # Integração Cache
│   └── APIS/            # APIs externas
│
└── /5-TEMPLATES/
    ├── TEMPLATE-7STEP/   # Template padrão
    └── TEMPLATE-FACTORY/ # Template fábrica
```


---

## 📤 Step 7: Output Padronizado

### Estrutura para Banco de Dados

```yaml
{
  table: "nome_da_tabela",
  status: "SUCCESS" | "ERROR" | "PARTIAL",
  data: {
    // campos específicos
  },
  metadata: {
    trace_id: "uuid",
    correlation_id: "uuid",
    timestamp: "ISO-8601"
  }
}
```

### Estrutura para RAG/Vector Store

```yaml
{
  collection: "nome_colecao",
  response: {
    content: "texto principal",
    metadata: {},
    chunks: []
  }
}
```

### Estrutura para Cache

```yaml
{
  key: "cache_key",
  value: {},
  ttl: 3600
}
```


---

## 🔍 Observabilidade

### Rastreamento (Step 2)

Todo workflow DEVE ter no Step 2:

```yaml
trace_data:
  trace_id: UUID único da execução
  correlation_id: UUID da transação completa  
  span_id: UUID do node atual
  content_hash: SHA-256 do payload original
  timestamp: ISO-8601
  original_payload: dados não modificados (armazenado)
```

### Logging Estruturado

```yaml
Formato padrão:
  timestamp: ISO 8601
  level: INFO|WARN|ERROR|DEBUG
  step: 1-7 (qual step)
  event: NOME_DO_EVENTO
  correlation_id: UUID único
  trace_id: ID de rastreamento
  workflow: Nome do workflow
  data: Dados específicos do evento
```

### Métricas Essenciais

* **Tempo de execução** por step
* **Taxa de sucesso/erro** por step
* **Quality score** do output (step 6)
* **Volume processado**


---

## ✅ Checklist de Implementação

### Novo Workflow de Execução

- [ ] Nome segue padrão de nomenclatura
- [ ] Está na pasta correta (camada)
- [ ] Implementa 7-Step Pattern
- [ ] Step 2: Rastreamento ANTES de validar
- [ ] Step 7: Output padronizado
- [ ] Tem error handling configurado
- [ ] Gera logs estruturados
- [ ] Tem correlation_id propagado
- [ ] Documentado no README da pasta

### Review de Código

- [ ] Nomenclatura correta?
- [ ] 7 steps presentes e na ordem?
- [ ] Rastreamento no step 2?
- [ ] Output padronizado no step 7?
- [ ] Error workflow configurado?
- [ ] Timeout definido?
- [ ] Logs em cada step?


---

## 📚 Exemplo de Implementação

### Workflow de Execução com 7 Steps

```yaml
Nome: EXE-L3-PEDIDOS-PROCESSAR-V1
Tipo: Execution
Camada: L3 (Execução)

Steps:
  1.ENT:CODE:RecebePedido
    - Recebe dados normalizados da fábrica
    - Adiciona metadata inicial
    
  2.RAS:CODE:CapturaEvidencia  
    - Gera hash SHA-256 do pedido original
    - Cria trace_id e correlation_id
    - Salva payload original no Supabase
    
  3.VAL:IF:ValidaPedido
    - Valida campos obrigatórios
    - Verifica regras de negócio
    - Quality score >= 80%
    
  4.ROT:CODE:DefineProcessamento
    - Avalia tipo de pedido
    - Define prioridade
    - Escolhe estratégia
    
  5.LOG:CODE:ProcessaPedido
    - Calcula valores
    - Aplica descontos
    - Gera cobrança
    
  6.REV:CODE:ValidaResultado
    - Verifica cálculos
    - Valida totais
    - Quality gate
    
  7.OUT:CODE:FormataResposta
    - Format: {table: "pedidos", status: "SUCCESS", data: {...}}
    - Prepara para persistência
    - Notifica próximo workflow
```


---

## 🚀 Quick Start

### 1. Criar Novo Workflow de Execução


1. Copie template `TEMPLATE-7STEP`
2. Renomeie seguindo padrão
3. Configure cada step na ordem
4. Implemente lógica no step 5
5. Teste cada step isoladamente
6. Configure output padronizado no step 7

### 2. Criar Nova Fábrica


1. Copie template `TEMPLATE-FACTORY`
2. Configure adaptador de entrada
3. Implemente normalização
4. Teste com dados reais
5. Conecte com workflow de execução

### 3. Configurar Observabilidade


1. Step 2: Adicione rastreamento
2. Configure logs em cada step
3. Step 6: Adicione métricas de qualidade
4. Configure error handler global


---

## 🔄 Versionamento

```
MAJOR.MINOR.PATCH

MAJOR: Mudanças incompatíveis
MINOR: Novas funcionalidades
PATCH: Correções

Exemplo: EXE-L3-PEDIDOS-PROCESSAR-V2.1.3
```


---

## 📊 Governança

### Responsabilidades por Camada

| Camada | Responsável | Revisão |
|----|----|----|
| L1 - Apresentação | Frontend Team | UX Lead |
| L2 - Factories | Tech Lead | Arquiteto |
| L3 - Execution | Dev Team | Tech Lead |
| L4 - Domain | Domain Expert | Product Owner |
| L5 - Infrastructure | DevOps | Tech Lead |

### Processo de Mudança


1. **Proposta** em issue/ticket
2. **Review** técnico
3. **Teste** em staging
4. **Deploy** com tag de versão
5. **Documentação** atualizada


---

## 🎯 Benefícios do Padrão

✅ **Consistência**: Todos workflows seguem mesma estrutura\n✅ **Rastreabilidade**: Evidência preservada no step 2\n✅ **Manutenibilidade**: Fácil localizar problemas por step\n✅ **Escalabilidade**: Novos workflows seguem mesmo padrão\n✅ **Observabilidade**: Métricas e logs por step\n✅ **Reusabilidade**: Output padronizado no step 7


---

## 📞 Suporte

* **Documentação**: `/docs` no repositório
* **Templates**: `/5-TEMPLATES`
* **Exemplos**: Workflows com sufixo `-EXEMPLO`
* **Canal Slack**: #n8n-development