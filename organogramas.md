# Organograma - Protocolo Zion com Octógono

## 🏗️ Arquitetura em Camadas - Padrão INT-CNX-001

```mermaid
graph TB
    %% Estilos baseados nas cores do n8n
    classDef interfaceClass fill:#FF9800,stroke:#E65100,color:#FFF,stroke-width:3px
    classDef normalizacaoClass fill:#FFEB3B,stroke:#F9A825,color:#000,stroke-width:3px
    classDef processamentoClass fill:#FFEB3B,stroke:#F9A825,color:#000,stroke-width:3px
    classDef inteligenciaClass fill:#2196F3,stroke:#1565C0,color:#FFF,stroke-width:3px
    classDef integracaoClass fill:#9E9E9E,stroke:#616161,color:#FFF,stroke-width:3px
    classDef observabilidadeClass fill:#4CAF50,stroke:#2E7D32,color:#FFF,stroke-width:3px
    classDef octagonoClass fill:#673AB7,stroke:#4527A0,color:#FFF,stroke-width:4px
    classDef team fill:#34495E,stroke:#fff,stroke-width:2px,color:#fff
    classDef resp fill:#95A5A6,stroke:#333,stroke-width:1px,color:#333
    classDef tech fill:#E8DAEF,stroke:#333,stroke-width:1px,color:#333

    %% TÍTULO
    TITLE["🔷 GOVERNANÇA PROTOCOLO ZION - OCTÓGONO 🔷<br/>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"]:::octagonoClass

    %% OCTÓGONO CENTRAL
    subgraph OCTOGONO["🔷 OCTÓGONO ZION - 8 PASSOS OBRIGATÓRIOS"]
        direction TB
        OCT_TITLE["Padrão Mandatório de Workflow"]:::octagonoClass

        subgraph STEPS["Steps com Mapeamento de Cores n8n"]
            S1["1️⃣ RECEBE - 🟠 color:2 - Webhook/Trigger"]:::interfaceClass
            S2["2️⃣ RASTREIA - ⬜ color:7 - Trace/Telemetry"]:::integracaoClass
            S3["3️⃣ VALIDA - 🟢 color:4 - Rules/Security"]:::observabilidadeClass
            S4["4️⃣ ROTEIA - 🔵 color:5 - Strategy/Router"]:::inteligenciaClass
            S5["5️⃣ PROCESSA - 🟡 color:3 - Core/Business"]:::processamentoClass
            S6["6️⃣ AGREGA - ⬜ color:7 - Merge/Combine"]:::integracaoClass
            S7["7️⃣ CONFIRMA - 🟢 color:4 - Quality/Compliance"]:::observabilidadeClass
            S8["8️⃣ ENTREGA - 🟠 color:2 - Response/Output"]:::interfaceClass

            S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8
        end
    end

    %% (A) INTERFACE - color:2 🟠
    subgraph CAMADA_A["(A) INTERFACE - 🟠 Laranja"]
        A_TITLE["📡 INTERFACE DE ENTRADA/SAÍDA"]:::interfaceClass

        subgraph A_NODES["Nomenclatura: A:"]
            A_N1["A:Recebe dados conexao"]:::resp
            A_N2["A:Webhook entrada"]:::resp
            A_N3["A:RabbitMQ consumer"]:::resp
            A_N4["A:REST API handler"]:::resp
        end

        subgraph A_TECH["Tecnologias"]
            A_T1["n8n Webhooks"]:::tech
            A_T2["HTTP Request"]:::tech
            A_T3["RabbitMQ Trigger"]:::tech
        end

        A_TEAM["👥 Time: Frontend/API Team"]:::team
        A_STICKY["📌 Sticky Note: color:2 (Laranja)"]:::interfaceClass
    end

    %% (B) NORMALIZAÇÃO - color:3 🟡
    subgraph CAMADA_B["(B) NORMALIZAÇÃO - 🟡 Amarelo"]
        B_TITLE["🔄 TRANSFORMAÇÃO DE DADOS"]:::normalizacaoClass

        subgraph B_NODES["Nomenclatura: B:NOR:"]
            B_N1["B:NOR:Conexao > sistema"]:::resp
            B_N2["B:NOR:Conexao > funcionalidades"]:::resp
            B_N3["B:NOR:Body > formato interno"]:::resp
            B_N4["B:NOR:Response > cliente"]:::resp
        end

        subgraph B_TECH["Tecnologias"]
            B_T1["Function Nodes"]:::tech
            B_T2["Set Nodes"]:::tech
            B_T3["Code Nodes"]:::tech
        end

        B_TEAM["👥 Time: Tech Lead"]:::team
        B_STICKY["📌 Sticky Note: color:3 (Amarelo)"]:::normalizacaoClass
    end

    %% (C) PROCESSAMENTO - color:3 🟡
    subgraph CAMADA_C["(C) PROCESSAMENTO - 🟡 Amarelo"]
        C_TITLE["⚙️ MOTOR DE NEGÓCIO"]:::processamentoClass

        subgraph C_NODES["Nomenclatura: C:CMP:"]
            C_N1["C:CMP:Executa motor de resposta"]:::resp
            C_N2["C:Core business logic"]:::resp
            C_N3["C2:Componente secundário"]:::resp
            C_N4["C:Process engine"]:::resp
        end

        subgraph C_TECH["Tecnologias"]
            C_T1["Execute Workflow"]:::tech
            C_T2["Code Nodes"]:::tech
            C_T3["Business Rules"]:::tech
        end

        C_TEAM["👥 Time: Dev Team"]:::team
        C_STICKY["📌 Sticky Note: color:3 (Amarelo)"]:::processamentoClass
    end

    %% (D) INTELIGÊNCIA - color:5 🔵
    subgraph CAMADA_D["(D) INTELIGÊNCIA - 🔵 Azul"]
        D_TITLE["🤖 IA & MACHINE LEARNING"]:::inteligenciaClass

        subgraph D_NODES["Nomenclatura: D:"]
            D_N1["D:LLM:GPT4 processing"]:::resp
            D_N2["D:AI:Claude analysis"]:::resp
            D_N3["D:ML:Pattern recognition"]:::resp
            D_N4["D:NLP:Text understanding"]:::resp
        end

        subgraph D_TECH["Tecnologias"]
            D_T1["OpenAI Nodes"]:::tech
            D_T2["Anthropic Claude"]:::tech
            D_T3["Llama Models"]:::tech
        end

        D_TEAM["👥 Time: AI Team"]:::team
        D_STICKY["📌 Sticky Note: color:5 (Azul)"]:::inteligenciaClass
    end

    %% (E) INTEGRAÇÃO - color:7 ⬜
    subgraph CAMADA_E["(E) INTEGRAÇÃO - ⬜ Cinza"]
        E_TITLE["🔌 SERVIÇOS EXTERNOS"]:::integracaoClass

        subgraph E_NODES["Nomenclatura: E:"]
            E_N1["E:INT:Buscar servicos no banco"]:::resp
            E_N2["E:BCO:Busca entidade agente"]:::resp
            E_N3["E:CNV:Converte midia em texto"]:::resp
            E_N4["E:AGG:Debouncer"]:::resp
        end

        subgraph E_TECH["Tecnologias"]
            E_T1["Supabase"]:::tech
            E_T2["PostgreSQL"]:::tech
            E_T3["Redis Cache"]:::tech
        end

        E_TEAM["👥 Time: DevOps"]:::team
        E_STICKY["📌 Sticky Note: color:7 (Cinza)"]:::integracaoClass
    end

    %% (F) OBSERVABILIDADE - color:4 🟢
    subgraph CAMADA_F["(F) OBSERVABILIDADE - 🟢 Verde"]
        F_TITLE["📊 MONITORAMENTO & LOGS"]:::observabilidadeClass

        subgraph F_NODES["Nomenclatura: F:"]
            F_N1["F:LOG:Eventos sistema"]:::resp
            F_N2["F:MET:Performance metrics"]:::resp
            F_N3["F:TRC:Distributed tracing"]:::resp
            F_N4["F:ALT:Alert management"]:::resp
        end

        subgraph F_TECH["Tecnologias"]
            F_T1["Grafana"]:::tech
            F_T2["ElasticSearch"]:::tech
            F_T3["Prometheus"]:::tech
        end

        F_TEAM["👥 Time: SRE/DevOps"]:::team
        F_STICKY["📌 Sticky Note: color:4 (Verde)"]:::observabilidadeClass
    end

    %% OPERAÇÕES INTERNAS (SEM LETRA)
    subgraph INTERNAL_OPS["🔄 OPERAÇÕES INTERNAS - Mesma Camada"]
        IO_TITLE["Nodes sem letra - Operam localmente"]:::resp

        subgraph IO_TYPES["Tipos de Operação"]
            VAL["VAL: Validações<br/>VAL:ParametrosValidos<br/>VAL:Agente deve continuar?"]:::observabilidadeClass
            ROT["ROT: Roteamento<br/>ROT:SelecionaEstrategiaQuery<br/>ROT:Priority queue"]:::inteligenciaClass
            RAS["RAS: Rastreamento<br/>RAS:Execução tratador<br/>RAS:Session manager"]:::integracaoClass
            AGG["AGG: Agregação<br/>AGG:UnificaMidia<br/>AGG:Merge results"]:::integracaoClass
            ERR["ERR: Erros<br/>ERR:Parametros<br/>ERR:Conexao inexistente"]:::resp
        end
    end

    %% MATRIZ DE RESPONSABILIDADES
    subgraph RACI["📊 MATRIZ RACI - Protocolo Zion"]
        subgraph RACI_HEADER["Camada | Responsible | Accountable | Consulted | Informed"]
            R1["(A) Interface | Frontend Team | UX Lead | Arquiteto | Product"]:::resp
            R2["(B) Normalização | Tech Lead | Arquiteto | Dev Team | DevOps"]:::resp
            R3["(C) Processamento | Dev Team | Tech Lead | Domain Expert | Product"]:::resp
            R4["(D) Inteligência | AI Team | AI Lead | Data Scientists | CTO"]:::resp
            R5["(E) Integração | DevOps | Tech Lead | Arquiteto | Dev Team"]:::resp
            R6["(F) Observabilidade | SRE Team | DevOps Lead | Tech Lead | CTO"]:::resp
        end
    end

    %% FLUXO DE IMPLEMENTAÇÃO
    subgraph WORKFLOW_FLOW["📋 FLUXO DE IMPLEMENTAÇÃO INT-CNX-001"]
        WF1["Criar workflow seguindo Octógono"]
        WF2["Nomear nodes com prefixos corretos"]
        WF3["Adicionar Sticky Notes com cores"]
        WF4["Configurar executeWorkflow para camadas"]
        WF5["5mplementar validações e erros"]
        WF6["Testar fluxo completo"]
        WF7["Deploy com versionamento"]

        WF1 --> WF2 --> WF3 --> WF4 --> WF5 --> WF6 --> WF7
    end

    %% CONEXÕES PRINCIPAIS
    TITLE --> OCTOGONO
    OCTOGONO --> CAMADA_A
    OCTOGONO --> CAMADA_B
    OCTOGONO --> CAMADA_C
    OCTOGONO --> CAMADA_D
    OCTOGONO --> CAMADA_E
    OCTOGONO --> CAMADA_F

    CAMADA_A -.->|"executeWorkflow"| CAMADA_B
    CAMADA_B -.->|"executeWorkflow"| CAMADA_C
    CAMADA_C -.->|"executeWorkflow"| CAMADA_D
    CAMADA_C -.->|"executeWorkflow"| CAMADA_E
    CAMADA_E -.->|"logs/metrics"| CAMADA_F

    INTERNAL_OPS --> RACI
    RACI --> WORKFLOW_FLOW
```

## 📍 Legenda de Cores n8n

| Cor n8n | Código | Hexadecimal | Uso no Octógono | Camadas |
|---------|--------|-------------|-----------------|---------|
| 🟠 Laranja | color:2 | #FF9800 | Steps 1 & 8 (RECEBE/ENTREGA) | (A) Interface |
| 🟡 Amarelo | color:3 | #FFEB3B | Step 5 (PROCESSA) | (B) Normalização, (C) Processamento |
| 🟢 Verde | color:4 | #4CAF50 | Steps 3 & 7 (VALIDA/CONFIRMA) | (F) Observabilidade |
| 🔵 Azul | color:5 | #2196F3 | Step 4 (ROTEIA) | (D) Inteligência |
| ⬜ Cinza | color:7 | #9E9E9E | Steps 2 & 6 (RASTREIA/AGREGA) | (E) Integração |

## 🎯 Regras de Nomenclatura

### Com Letra (executeWorkflow - Entre Camadas)
- `A:` - Interface (webhooks, APIs)
- `B:` - Normalização (transformações)
- `C:` - Processamento (motor principal)
- `D:` - Inteligência (IA/LLMs)
- `E:` - Integração (serviços externos)
- `F:` - Observabilidade (logs, métricas)

### Sem Letra (Operações Internas - Mesma Camada)
- `VAL:` - Validações
- `ROT:` - Roteamento
- `RAS:` - Rastreamento
- `AGG:` - Agregação
- `ERR:` - Tratamento de erros

## 📂 Estrutura de Pastas no n8n

```
Personal / Sandro Borges / Jana - Aprendizado /
  ├── (A) Interface         # 🟠 color:2
  ├── (B) Normalização      # 🟡 color:3
  ├── (C) Processamento     # 🟡 color:3
  ├── (D) Inteligência      # 🔵 color:5
  ├── (E) Integração        # ⬜ color:7
  └── (F) Observabilidade   # 🟢 color:4
```

## ✅ Checklist de Implementação

- [ ] Workflow segue os 8 passos do Octógono
- [ ] Cores das Sticky Notes correspondem ao mapeamento
- [ ] Nomenclatura com letra para executeWorkflow
- [ ] Nomenclatura sem letra para operações internas
- [ ] Metadados com protocol: "ZION-v1.0"
- [ ] Pattern identificado (ex: INT-CNX-001)
- [ ] Versionamento semântico aplicado

---

*Baseado no padrão INT-CNX-001 - Implementação de referência do Protocolo Zion*