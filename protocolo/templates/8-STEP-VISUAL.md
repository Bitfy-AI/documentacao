# Template Visual do Padrão 8-Step ZION

## 🎨 Guia Visual para Implementação no n8n

### Estrutura Visual do Workflow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           WORKFLOW 8-STEP ZION                           │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  🟩 1.RECEBE          🟨 2.RASTREIA         🟧 3.VALIDA                 │
│  ┌──────────┐        ┌──────────┐         ┌──────────┐                 │
│  │ Webhook  │───────▶│  Trace   │────────▶│ Validate │                 │
│  │ Workflow │        │   IDs    │         │  Rules   │                 │
│  │ RabbitMQ │        │ Telemetry│         │ Security │                 │
│  └──────────┘        └──────────┘         └──────────┘                 │
│       │                                          │                       │
│       ▼                                          ▼                       │
│  🟪 4.ROTEIA                          🟦 5.PROCESSA                      │
│  ┌──────────┐                        ┌──────────────┐                   │
│  │  Route   │                        │   Process    │                   │
│  │ Strategy │───────────────────────▶│   Business   │                   │
│  │ Priority │                        │   Logic/AI   │                   │
│  └──────────┘                        └──────────────┘                   │
│                                              │                           │
│                                              ▼                           │
│                          🟨 6.AGREGA                                    │
│                          ┌──────────┐                                   │
│                          │ Aggregate│                                   │
│                          │ Combine  │                                   │
│                          │ Enrich   │                                   │
│                          └──────────┘                                   │
│                                │                                        │
│                                ▼                                        │
│               🟧 7.CONFIRMA                🟩 8.ENTREGA                 │
│               ┌──────────┐                ┌──────────┐                 │
│               │ Quality  │───────────────▶│ Deliver  │                 │
│               │  Gates   │                │  Output  │                 │
│               │Compliance│                │  Update  │                 │
│               └──────────┘                └──────────┘                 │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

## 📍 Configuração de Cores no n8n

### Como configurar as Sticky Notes:

1. **Step 1 - RECEBE** 🟩
   - Cor: Verde (#27AE60)
   - Posição: Início do fluxo (esquerda)
   - Altura: 1120px (cobrindo nodes verticalmente)

2. **Step 2 - RASTREIA** 🟨
   - Cor: Amarelo (#F1C40F)
   - Posição: Após RECEBE
   - Altura: 1120px

3. **Step 3 - VALIDA** 🟧
   - Cor: Laranja (#E67E22)
   - Posição: Após RASTREIA
   - Altura: 1120px

4. **Step 4 - ROTEIA** 🟪
   - Cor: Roxo (#9B59B6)
   - Posição: Início da área de processamento
   - Altura: 1536px (área maior)

5. **Step 5 - PROCESSA** 🟦
   - Cor: Azul (#3498DB)
   - Posição: Centro do workflow
   - Altura: 1536px
   - Largura: 1824px (área principal)

6. **Step 6 - AGREGA** 🟨
   - Cor: Amarelo (#F1C40F)
   - Posição: Após PROCESSA
   - Altura: 1536px

7. **Step 7 - CONFIRMA** 🟧
   - Cor: Laranja (#E67E22)
   - Posição: Pré-finalização
   - Altura: 1536px

8. **Step 8 - ENTREGA** 🟩
   - Cor: Verde (#27AE60)
   - Posição: Final do fluxo (direita)
   - Altura: 1536px

## 🔧 Nomenclatura dos Nodes

### Padrão de Nomenclatura
```
[STEP].[TIPO]:[AÇÃO]
```

### Exemplos por Step:

#### 1. RECEBE
- `1.WBH:RecebeWhatsApp`
- `1.WFL:RecebeWorkflow`
- `1.RBT:RecebeRabbitMQ`

#### 2. RASTREIA
- `2.CODE:GeraTraceID`
- `2.CODE:IniciaMetricas`
- `2.DB:SalvaRastreamento`

#### 3. VALIDA
- `3.IF:ValidaEstrutura`
- `3.CODE:ValidaPermissoes`
- `3.CODE:SanitizaDados`

#### 4. ROTEIA
- `4.SWITCH:DefineRota`
- `4.CODE:AnalisaIntencao`
- `4.CODE:DefinePrioridade`

#### 5. PROCESSA
- `5.AI:ProcessaLLM`
- `5.CODE:ExecutaLogica`
- `5.HTTP:ChamaAPI`
- `5.DB:ConsultaDados`

#### 6. AGREGA
- `6.CODE:CombinaResultados`
- `6.MERGE:UneDados`
- `6.CODE:EnriqueceDados`

#### 7. CONFIRMA
- `7.CODE:ValidaQualidade`
- `7.IF:VerificaCompliance`
- `7.CODE:AplicaFiltros`

#### 8. ENTREGA
- `8.CODE:FormataResposta`
- `8.DB:AtualizaEstado`
- `8.HTTP:EnviaDestino`
- `8.WBH:RespondeCanal`

## 📊 Metadados Obrigatórios

### Em cada Step, garantir:

```javascript
// Step 2 - RASTREIA
{
  trace_id: "uuid-v4",
  correlation_id: "uuid-v4",
  session_id: "uuid-v4",
  timestamp: "ISO-8601",
  workflow_name: "nome-do-workflow",
  step: 2,
  step_name: "RASTREIA"
}

// Step 8 - ENTREGA
{
  trace_id: "uuid-v4",
  correlation_id: "uuid-v4",
  status: "SUCCESS|ERROR|PARTIAL",
  duration_ms: 1234,
  quality_score: 0.95,
  steps_completed: 8,
  timestamp_end: "ISO-8601"
}
```

## 🎯 Checklist de Implementação

### Para cada novo workflow:

- [ ] **Estrutura Visual**
  - [ ] 8 Sticky Notes com cores corretas
  - [ ] Posicionamento sequencial claro
  - [ ] Áreas de tamanho apropriado

- [ ] **Step 1 - RECEBE** 🟩
  - [ ] Configurado trigger/webhook
  - [ ] Identifica origem
  - [ ] Prepara contexto inicial

- [ ] **Step 2 - RASTREIA** 🟨
  - [ ] Gera todos os IDs únicos
  - [ ] Inicia telemetria
  - [ ] Salva estado inicial

- [ ] **Step 3 - VALIDA** 🟧
  - [ ] Valida estrutura de dados
  - [ ] Verifica permissões
  - [ ] Trata erros de validação

- [ ] **Step 4 - ROTEIA** 🟪
  - [ ] Define estratégia
  - [ ] Seleciona processador
  - [ ] Define prioridade

- [ ] **Step 5 - PROCESSA** 🟦
  - [ ] Implementa lógica principal
  - [ ] Integra com IA se necessário
  - [ ] Acessa sistemas externos

- [ ] **Step 6 - AGREGA** 🟨
  - [ ] Consolida múltiplos resultados
  - [ ] Combina dados
  - [ ] Adiciona metadados

- [ ] **Step 7 - CONFIRMA** 🟧
  - [ ] Quality gates implementados
  - [ ] Validações finais
  - [ ] Compliance verificado

- [ ] **Step 8 - ENTREGA** 🟩
  - [ ] Formato de saída padronizado
  - [ ] Estado atualizado
  - [ ] Confirmação de entrega

## 💡 Dicas de Implementação

### Organização Visual
1. Use as Sticky Notes como "containers" visuais
2. Agrupe nodes relacionados dentro de cada step
3. Mantenha fluxo da esquerda para direita
4. Use comentários para documentar decisões

### Performance
1. Steps 1-3: Devem ser rápidos (< 100ms)
2. Step 5: Pode ser mais demorado (procesamento)
3. Step 6-8: Otimizar para finalização rápida

### Error Handling
1. Cada step deve ter tratamento de erro
2. Erros devem preservar trace_id
3. Falhas devem gerar logs estruturados
4. Consider retry logic onde apropriado

## 📐 Template JSON Base

```json
{
  "name": "WORKFLOW-8STEP-TEMPLATE",
  "nodes": [
    {
      "parameters": {
        "content": "### 1. RECEBE",
        "height": 1120,
        "width": 192,
        "color": 2
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [864, 224],
      "name": "Step 1 - RECEBE"
    },
    {
      "parameters": {
        "content": "### 2. RASTREIA",
        "height": 1120,
        "width": 192,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [1088, 224],
      "name": "Step 2 - RASTREIA"
    },
    {
      "parameters": {
        "content": "### 3. VALIDA",
        "height": 1120,
        "width": 192,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [1312, 224],
      "name": "Step 3 - VALIDA"
    },
    {
      "parameters": {
        "content": "### 4. ROTEIA",
        "height": 1536,
        "width": 176,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [1536, -192],
      "name": "Step 4 - ROTEIA"
    },
    {
      "parameters": {
        "content": "### 5. PROCESSA",
        "height": 1536,
        "width": 1824,
        "color": 3
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [1744, -192],
      "name": "Step 5 - PROCESSA"
    },
    {
      "parameters": {
        "content": "### 6. AGREGA",
        "height": 1536,
        "width": 192,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [3584, -192],
      "name": "Step 6 - AGREGA"
    },
    {
      "parameters": {
        "content": "### 7. CONFIRMA",
        "height": 1536,
        "width": 208,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [3792, -192],
      "name": "Step 7 - CONFIRMA"
    },
    {
      "parameters": {
        "content": "### 8. ENTREGA",
        "height": 1536,
        "color": 2
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [4016, -192],
      "name": "Step 8 - ENTREGA"
    }
  ]
}
```

---

*Template Visual - Protocolo ZION 8-Step v3.0*