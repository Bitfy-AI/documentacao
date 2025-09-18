# 📚 Sistema de Nomenclaturas - Protocolo ZION

> **Status:** 🚧 Em desenvolvimento (10% completo)
> **Última atualização:** 2024-12-20
> **Próximo checkpoint:** CP-002 (Constantes Core)

## 🎯 O que é este diretório?

Este diretório contém a **implementação completa do sistema de nomenclaturas** do Protocolo de Agentes No-Code Zion (PANZ). Aqui você encontra especificações, implementações, validadores e tudo necessário para padronizar nomenclaturas em projetos no-code.

## 📁 Estrutura dos Arquivos

### 📋 Documentação Core
- **`CATEGORIAS-NOMENCLATURA.md`** - Especificação das 6 categorias principais
- **`CHECKPOINT-SYSTEM.md`** - Sistema de validação e continuidade
- **`EMERGENCY-RECOVERY.md`** - Guia de recuperação rápida
- **`README.md`** - Este arquivo (visão geral)

### 🔧 Implementação (em desenvolvimento)
```
constants/          # Constantes do protocolo
├── steps.js        # 8-steps obrigatórios
├── domains.js      # Domínios de negócio
├── channels.js     # Canais de comunicação
└── index.js        # Exportações principais

validators/         # Funções de validação
├── workflowId.js   # Valida Technical IDs
├── stepName.js     # Valida nomenclatura de steps
├── variableName.js # Valida nomes de variáveis
└── index.js        # Suite de validação

generators/         # Geradores automáticos
├── technicalId.js  # Gera IDs técnicos
├── uuid.js         # Gera UUIDs únicos
├── metadata.js     # Gera metadados obrigatórios
└── index.js        # Utilitários de geração

converters/         # Conversores e adaptadores
├── displayToTechnical.js  # Display → Technical ID
├── legacyToNew.js         # Migração de IDs antigos
└── index.js               # Conversores

templates/          # Templates n8n
├── basic-workflow.json    # Template básico com 8-steps
├── validation-flow.json   # Template de validação
└── README.md              # Documentação dos templates
```

### 🧪 Ferramentas
- **`validate-system.js`** - Validador automático completo
- **`package.json`** - Dependências Node.js (futuro)
- **`tests/`** - Suite de testes (futuro)

## 🚀 Quick Start

### Se você perdeu o contexto
1. **Leia primeiro:** `EMERGENCY-RECOVERY.md`
2. **Execute:** `node validate-system.js`
3. **Continue em:** `CHECKPOINT-SYSTEM.md`

### Se você quer validar o sistema
```bash
cd "C:\Users\Windows Home\Documents\GitHub\documentacao"
node protocolo/nomenclatura/validate-system.js
```

### Se você quer implementar o próximo checkpoint
1. Abra `CHECKPOINT-SYSTEM.md`
2. Encontre o próximo checkpoint com status 🟥
3. Siga as instruções específicas
4. Atualize o status quando completo

## 📊 Progresso Atual

```
CHECKPOINTS COMPLETOS: 1/10 (10%)

✅ CP-001: Estrutura Base
🟥 CP-002: Constantes Core       ← PRÓXIMO
🟥 CP-003: Validadores
🟥 CP-004: Geradores
🟥 CP-005: Conversores
🟥 CP-006: Templates n8n
🟥 CP-007: Testes
🟥 CP-008: Documentação
🟥 CP-009: Integração
🟥 CP-010: Release
```

## 🎯 Conceitos Principais

### Sistema Híbrido de 3 Camadas
```yaml
Display Name: "Atendimento WhatsApp - Suporte Cliente"
Technical ID: "SUP-WA-001"
Search Tags:  ["atendimento", "whatsapp", "suporte"]
```

### 8-Step Pattern (Obrigatório)
```
1.RECEBE → 2.RASTREIA → 3.VALIDA → 4.ROTEIA →
5.PROCESSA → 6.AGREGA → 7.CONFIRMA → 8.ENTREGA
```

### 6 Categorias de Nomenclatura
1. **Entidades de Sistema** (Workflows, Components, Infrastructure)
2. **Elementos de Execução** (Steps, Nodes, Actions)
3. **Dados e Variáveis** (Variables, Metadata, Schemas)
4. **Comunicação e Logs** (Messages, Logs, Errors)
5. **Organização e Governança** (Files, Versions, Documentation)
6. **Identificadores e Relações** (Technical IDs, Display Names, Search Tags)

## 🔍 Como Validar

### Validação Automática
```bash
# Validação completa
node protocolo/nomenclatura/validate-system.js

# Output esperado:
# ✅ Arquivos principais: OK
# ⚠️  Avisos: X (normal em desenvolvimento)
# 🎯 Próximo checkpoint: CP-002
```

### Validação Manual
```bash
# Verificar estrutura
ls -la protocolo/nomenclatura/

# Verificar git status
git status

# Verificar progresso
grep -c "✅" protocolo/nomenclatura/CHECKPOINT-SYSTEM.md
```

## 🎭 Roles e Responsabilidades

### 🏗️ Arquiteto de Soluções
- Define Technical IDs dos workflows
- Aprova schemas e estruturas
- Valida integração com n8n

### 👨‍💻 Developer
- Implementa validadores e geradores
- Segue nomenclaturas nos nodes
- Executa testes unitários

### 🔧 DevOps
- Configura infraestrutura
- Monitora logs estruturados
- Gerencia ambientes

### 📋 Product Manager
- Define Display Names amigáveis
- Valida usabilidade das nomenclaturas
- Aprova mensagens de erro

## 📚 Documentação de Referência

### Para Entender o Protocolo
1. `../../PROTOCOLO-ZION.md` - Visão geral
2. `../../BRIEF.md` - Contexto do projeto
3. `../metodologia/NOMENCLATURAS-ZION.md` - Guia completo original

### Para Implementar
1. `CATEGORIAS-NOMENCLATURA.md` - Especificação detalhada
2. `CHECKPOINT-SYSTEM.md` - Sistema de desenvolvimento
3. `EMERGENCY-RECOVERY.md` - Recovery procedures

### Para Usar em Produção
1. `constants/` - Constantes e padrões
2. `validators/` - Funções de validação
3. `generators/` - Utilitários de geração

## ⚠️ Regras Importantes

### ❌ Nunca faça isso
- Alterar os 8-steps (são imutáveis)
- Misturar português e inglês no mesmo nível
- Criar Technical IDs sem padrão [DOM]-[CANAL]-[NUM]
- Mudar Technical IDs após criação

### ✅ Sempre faça isso
- Usar português nos Display Names
- Seguir padrões de cada categoria
- Validar antes de committar
- Atualizar checkpoints quando completo

## 🚨 Troubleshooting

### "O validador falha"
```bash
# Verificar Node.js instalado
node --version

# Verificar permissões
ls -la protocolo/nomenclatura/validate-system.js

# Executar com debug
node --trace-warnings protocolo/nomenclatura/validate-system.js
```

### "Perdi o contexto do que estava fazendo"
1. Execute `node protocolo/nomenclatura/validate-system.js`
2. Leia a seção "⏭️ PRÓXIMAS AÇÕES"
3. Abra `CHECKPOINT-SYSTEM.md` no checkpoint indicado
4. Continue de onde parou

### "Não sei qual arquivo modificar"
1. Consulte `CATEGORIAS-NOMENCLATURA.md` para spec
2. Veja exemplos em `../metodologia/NOMENCLATURAS-ZION.md`
3. Siga o cronograma em `CHECKPOINT-SYSTEM.md`

## 🎯 Próximas Ações

**AGORA MESMO:**
1. Execute `node protocolo/nomenclatura/validate-system.js`
2. Vá para `CHECKPOINT-SYSTEM.md` seção CP-002
3. Implemente o diretório `constants/`
4. Execute validação novamente

**Esta semana:**
- Complete CP-002, CP-003, CP-004
- Implemente validadores básicos
- Teste geração de IDs

**Este mês:**
- Complete todos os 10 checkpoints
- Documentação completa
- Testes de integração com n8n

## 🤝 Como Contribuir

1. **Siga os checkpoints** - Não pule etapas
2. **Valide frequentemente** - Use `validate-system.js`
3. **Documente mudanças** - Atualize checkpoints
4. **Mantenha padrões** - Siga as 6 categorias
5. **Teste tudo** - Cada função deve ter teste

## 📞 Suporte

- **Contexto perdido?** → `EMERGENCY-RECOVERY.md`
- **Dúvida técnica?** → `CATEGORIAS-NOMENCLATURA.md`
- **Status do projeto?** → `CHECKPOINT-SYSTEM.md`
- **Visão geral?** → `../../PROTOCOLO-ZION.md`

---

## 🎉 Meta

**Objetivo:** Criar o sistema de nomenclaturas mais intuitivo e poderoso para no-code, que satisfaça desde iniciantes até arquitetos experientes.

**Princípio:** "No no-code, o nome É a documentação!"

**Resultado esperado:** Qualquer pessoa deve encontrar o que procura no primeiro palpite.

---

*Sistema de Nomenclaturas do Protocolo ZION v1.0.0*
*Para dúvidas: consulte EMERGENCY-RECOVERY.md*