# 🤖 AGENT TASKS - IMPLEMENTAÇÃO NOMENCLATURAS ZION

> **Formato:** Instruções detalhadas para agentes criarem cada arquivo
> **Contexto:** Cada task é independente e completa
> **Total:** 50 arquivos organizados em 8 fases

---

## 📋 COMO USAR ESTE DOCUMENTO

### Para o Usuário
1. Escolha uma task
2. Copie a instrução completa
3. Peça ao agente: "Crie este arquivo seguindo estas especificações"
4. Valide o resultado com os critérios fornecidos

### Para o Agente
- Cada task contém TODAS as informações necessárias
- Não modifique as especificações
- Implemente exatamente como descrito
- Inclua todos os comentários explicativos

---

## 🎯 FASE 0: PREPARAÇÃO (5 arquivos)

### ARQUIVO 001: package.json

**Caminho:** `protocolo/nomenclatura/package.json`

**Instrução para o agente:**
```
Crie um arquivo package.json para o sistema de nomenclaturas ZION com:
- Nome: zion-nomenclature-system
- Versão: 0.1.0
- Scripts: test, validate, lint, build
- Dependências: uuid v9+, chalk v4+, joi v17+
- DevDependencies: jest v29+, eslint v8+
- Licença MIT
- Keywords: zion, nomenclature, n8n, no-code
```

**Estrutura esperada:**
```json
{
  "name": "zion-nomenclature-system",
  "version": "0.1.0",
  "description": "Sistema de nomenclaturas do Protocolo ZION",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "validate": "node validate-system.js",
    "lint": "eslint .",
    "build": "node scripts/build.js"
  },
  "keywords": ["zion", "nomenclature", "n8n", "no-code"],
  "author": "Protocolo ZION Team",
  "license": "MIT",
  "dependencies": {
    "uuid": "^9.0.0",
    "chalk": "^4.1.2",
    "joi": "^17.9.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "eslint": "^8.0.0"
  }
}
```

---

### ARQUIVO 002: Sistema de Logging

**Caminho:** `protocolo/nomenclatura/utils/logger.js`

**Instrução para o agente:**
```
Crie uma classe Logger com:
- Método log com tipos: success (verde), error (vermelho), warning (amarelo), info (azul)
- Timestamps ISO-8601 em cada mensagem
- Uso da biblioteca chalk para cores
- Métodos estáticos para cada tipo
- Prefixo com emoji para cada tipo
- Export CommonJS
```

**Funcionalidades requeridas:**
- `Logger.success(msg)` - Mensagem verde com ✅
- `Logger.error(msg)` - Mensagem vermelha com ❌
- `Logger.warning(msg)` - Mensagem amarela com ⚠️
- `Logger.info(msg)` - Mensagem azul com ℹ️

---

### ARQUIVO 003: Configuração ESLint

**Caminho:** `protocolo/nomenclatura/.eslintrc.json`

**Instrução para o agente:**
```
Crie configuração ESLint para Node.js com:
- Extends: eslint:recommended
- Environment: node, es2021, jest
- ECMA Version: 2021
- Regras para indent (2 espaços), quotes (single), semi (always)
```

---

### ARQUIVO 004: Git Ignore

**Caminho:** `protocolo/nomenclatura/.gitignore`

**Instrução para o agente:**
```
Crie .gitignore com:
- node_modules/
- Arquivos de log (*.log)
- Variáveis de ambiente (.env)
- Coverage de testes
- Build output (dist/)
- OS files (.DS_Store, Thumbs.db)
```

---

### ARQUIVO 005: README do Sistema

**Caminho:** `protocolo/nomenclatura/README-SYSTEM.md`

**Instrução para o agente:**
```
Crie um README técnico explicando:
- Visão geral do sistema de nomenclaturas
- Como instalar (npm install)
- Como usar cada módulo
- Exemplos de código
- API reference básica
```

---

## 🏗️ FASE 1: CONSTANTES (8 arquivos)

### ARQUIVO 006: Constantes do Octógono

**Caminho:** `protocolo/nomenclatura/constants/passos.js`

**Instrução para o agente:**
```
Crie constantes IMUTÁVEIS dos 8 passos do Octógono Zion:
1. RECEBE (REC) - Verde #27AE60 🟩
2. RASTREIA (RAS) - Amarelo #F1C40F 🟨
3. VALIDA (VAL) - Laranja #E67E22 🟧
4. ROTEIA (ROT) - Roxo #9B59B6 🟪
5. PROCESSA (PRO) - Azul #3498DB 🟦
6. AGREGA (AGR) - Amarelo #F1C40F 🟨
7. CONFIRMA (CON) - Laranja #E67E22 🟧
8. ENTREGA (ENT) - Verde #27AE60 🟩

Cada passo deve ter: number, name, code, color, emoji, description
Use Object.freeze para imutabilidade
Crie funções helper: getPassoByNumber, getPassoByCode, getAllPassos, validatePassoName
```

**Estrutura do objeto:**
```javascript
PASSO_1: {
  number: 1,
  name: 'RECEBE',
  code: 'REC',
  color: '#27AE60',
  emoji: '🟩',
  description: 'Recebe dados de entrada de múltiplas fontes'
}
```

---

### ARQUIVO 007: Constantes de Domínios

**Caminho:** `protocolo/nomenclatura/constants/domains.js`

**Instrução para o agente:**
```
Crie constantes de domínios de negócio:
- SUP: Suporte
- VEN: Vendas
- MKT: Marketing
- FIN: Financeiro
- LOG: Logística
- RH: Recursos Humanos
- TEC: Técnico
- JUR: Jurídico
- OPR: Operações
- ADM: Administrativo
- EDU: Educação
- MED: Médico/Saúde

Cada domínio com: code, name, description
Object.freeze para imutabilidade
Funções: getDomainByCode, getAllDomains, validateDomainCode
```

---

### ARQUIVO 008: Constantes de Canais

**Caminho:** `protocolo/nomenclatura/constants/channels.js`

**Instrução para o agente:**
```
Crie constantes de canais de comunicação:
- WA: WhatsApp
- TG: Telegram
- EM: Email
- SMS: SMS
- WEB: WebChat
- API: API
- CRM: CRM
- VOZ: Voz/Telefonia
- FB: Facebook
- IG: Instagram

Estrutura igual aos domínios
Funções: getChannelByCode, getAllChannels, validateChannelCode
```

---

### ARQUIVO 009: Constantes de Variáveis

**Caminho:** `protocolo/nomenclatura/constants/variables.js`

**Instrução para o agente:**
```
Crie constantes para prefixos de variáveis:
- str_: String
- num_: Number
- bool_: Boolean
- arr_: Array
- obj_: Object
- dt_: DateTime
- fn_: Function

Contextos de variáveis:
- user_: Dados do usuário
- sys_: Sistema
- temp_: Temporário
- config_: Configuração
```

---

### ARQUIVO 010: Constantes de Erros

**Caminho:** `protocolo/nomenclatura/constants/errors.js`

**Instrução para o agente:**
```
Crie constantes de categorias de erro:
- VAL: Validação
- AUTH: Autenticação
- API: Integração/API
- DB: Database
- SYS: Sistema
- NET: Network
- PERM: Permissão

Padrão: [DOMAIN]-[CATEGORY]-[NUMBER]
Exemplo: SUP-VAL-001
```

---

### ARQUIVO 011: Índice de Constantes

**Caminho:** `protocolo/nomenclatura/constants/index.js`

**Instrução para o agente:**
```
Crie arquivo index.js que exporta todas as constantes:
- Importar passos, domains, channels, variables, errors
- Re-exportar tudo em um objeto organizado
- Adicionar versão do sistema de constantes
```

---

## 🔧 FASE 2: VALIDADORES (8 arquivos)

### ARQUIVO 012: Validador de Workflow ID

**Caminho:** `protocolo/nomenclatura/validators/workflowId.js`

**Instrução para o agente:**
```
Crie classe WorkflowIdValidator que:
- Valida padrão [DOM]-[CANAL]-[NUM] ou [DOM]-[CANAL]-[NUM]-[SUB]
- Verifica se domínio existe nas constantes
- Verifica se canal existe nas constantes
- Valida número com 3 dígitos (001-999)
- Valida subfunção opcional (3-4 letras)

Métodos:
- validate(id): Retorna {valid, errors, warnings, suggestions}
- suggest(partial): Sugere completions
- fix(id): Tenta corrigir problemas comuns
```

---

### ARQUIVO 013: Validador de Nome de Passo

**Caminho:** `protocolo/nomenclatura/validators/passoName.js`

**Instrução para o agente:**
```
Crie classe PassoNameValidator que:
- Valida padrão [NUM].[CODE]:[ACTION]
- Verifica se número está entre 1-8
- Verifica se código corresponde ao passo correto
- Valida nome da ação (mínimo 3 caracteres)

Exemplo válido: 1.REC:RecebeMensagem
```

---

### ARQUIVO 014: Validador de Nome de Variável

**Caminho:** `protocolo/nomenclatura/validators/variableName.js`

**Instrução para o agente:**
```
Crie classe VariableNameValidator que:
- Valida prefixo de tipo (str_, num_, bool_, etc)
- Valida contexto (user_, sys_, temp_, config_)
- Verifica snake_case
- Sugere correções

Exemplo válido: str_user_name
```

---

### ARQUIVO 015: Validador de Display Name

**Caminho:** `protocolo/nomenclatura/validators/displayName.js`

**Instrução para o agente:**
```
Crie classe DisplayNameValidator que:
- Valida mínimo 15 caracteres
- Verifica se está em português
- Sem jargões técnicos
- Descreve função claramente

Exemplo válido: "Atendimento WhatsApp - Suporte Cliente"
```

---

### ARQUIVO 016: Validador de Código de Erro

**Caminho:** `protocolo/nomenclatura/validators/errorCode.js`

**Instrução para o agente:**
```
Crie classe ErrorCodeValidator que:
- Valida padrão [DOM]-[CAT]-[NUM]
- Verifica domínio válido
- Verifica categoria válida (VAL, AUTH, API, DB, SYS)
- Número com 3 dígitos

Exemplo válido: SUP-VAL-001
```

---

### ARQUIVO 017: Validador de Metadata

**Caminho:** `protocolo/nomenclatura/validators/metadata.js`

**Instrução para o agente:**
```
Crie classe MetadataValidator que valida:
- trace_id: UUID v4
- correlation_id: UUID v4
- session_id: UUID v4
- timestamp: ISO-8601 com timezone
- workflow_id: Technical ID válido
```

---

### ARQUIVO 018: Suite de Validação

**Caminho:** `protocolo/nomenclatura/validators/index.js`

**Instrução para o agente:**
```
Crie classe ValidatorSuite que:
- Importa todos os validadores
- Método validateAll(data) que roda todos aplicáveis
- Método getValidator(type) que retorna validador específico
- Relatório consolidado de validação
```

---

## 🚀 FASE 3: GERADORES (8 arquivos)

### ARQUIVO 019: Gerador de Technical ID

**Caminho:** `protocolo/nomenclatura/generators/technicalId.js`

**Instrução para o agente:**
```
Crie classe TechnicalIdGenerator que:
- Gera IDs únicos no formato [DOM]-[CANAL]-[NUM]
- Auto-incrementa números
- Mantém registro de IDs usados (em memória)
- Método generate(domain, channel, subfunction?)
- Método generateBatch(domain, channel, count)
- Método reserve(id) para reservar ID específico
```

---

### ARQUIVO 020: Gerador de UUID

**Caminho:** `protocolo/nomenclatura/generators/uuid.js`

**Instrução para o agente:**
```
Crie classe UUIDGenerator que:
- generateTraceId(): Retorna trace_[uuid]
- generateCorrelationId(): Retorna corr_[uuid]
- generateSessionId(): Retorna sess_[uuid]
- generateMetadata(workflowId): Retorna objeto completo
```

---

### ARQUIVO 021: Gerador de Display Names

**Caminho:** `protocolo/nomenclatura/generators/displayName.js`

**Instrução para o agente:**
```
Crie classe DisplayNameGenerator que:
- Gera nomes em português baseado em domínio e canal
- Templates por combinação
- Método generate(domain, channel, context)
- Sugestões baseadas em padrões comuns
```

---

### ARQUIVO 022: Gerador de Search Tags

**Caminho:** `protocolo/nomenclatura/generators/searchTags.js`

**Instrução para o agente:**
```
Crie classe SearchTagsGenerator que:
- Gera tags baseadas em display name e technical ID
- Mínimo 3, máximo 8 tags
- Tags em português, lowercase
- Remove stopwords
- Método generate(displayName, technicalId, context)
```

---

### ARQUIVO 023: Gerador de Nomes de Variáveis

**Caminho:** `protocolo/nomenclatura/generators/variableName.js`

**Instrução para o agente:**
```
Crie classe VariableNameGenerator que:
- Gera nomes seguindo padrão [prefix]_[context]_[name]
- Converte para snake_case
- Método generate(type, context, description)
- Sugestões baseadas em uso comum
```

---

## 🔄 FASE 4: CONVERSORES (5 arquivos)

### ARQUIVO 024: Conversor Legacy

**Caminho:** `protocolo/nomenclatura/converters/legacy.js`

**Instrução para o agente:**
```
Crie classe LegacyConverter que:
- Converte IDs antigos para novo padrão
- Mapeamento de padrões conhecidos
- Detecção inteligente de domínio/canal
- Método convert(legacyId)
- Método convertBatch(legacyIds[])
```

---

### ARQUIVO 025: Conversor Display para Technical

**Caminho:** `protocolo/nomenclatura/converters/displayToTechnical.js`

**Instrução para o agente:**
```
Crie classe DisplayToTechnicalConverter que:
- Analisa display name em português
- Identifica domínio e canal prováveis
- Sugere Technical ID apropriado
- Método convert(displayName)
```

---

### ARQUIVO 026: Conversor de Case

**Caminho:** `protocolo/nomenclatura/converters/caseConverter.js`

**Instrução para o agente:**
```
Crie classe CaseConverter com métodos:
- toCamelCase(str)
- toSnakeCase(str)
- toPascalCase(str)
- toKebabCase(str)
- toUpperSnake(str)
```

---

## 📝 FASE 5: TEMPLATES (5 arquivos)

### ARQUIVO 027: Template Workflow Básico

**Caminho:** `protocolo/nomenclatura/templates/basic-workflow.json`

**Instrução para o agente:**
```
Crie template JSON de workflow n8n com:
- 8 nodes representando os 8 passos do Octógono
- Nomes seguindo padrão [NUM].[CODE]:[ACTION]
- Conexões entre os nodes
- Webhook como entrada (passo 1)
- Response como saída (passo 8)
- Posicionamento visual dos nodes
```

---

### ARQUIVO 028: Template de Validação

**Caminho:** `protocolo/nomenclatura/templates/validation-workflow.json`

**Instrução para o agente:**
```
Crie template focado em validação com:
- Múltiplas validações no passo 3
- Roteamento baseado em validação
- Error handling
- Logs estruturados
```

---

### ARQUIVO 029: Template de Configuração

**Caminho:** `protocolo/nomenclatura/templates/config-template.yaml`

**Instrução para o agente:**
```
Crie template YAML de configuração com:
- Metadata do workflow
- Display name, technical ID, tags
- Configurações de timeout
- SLA definitions
- Quality gates
```

---

## 🧪 FASE 6: TESTES (8 arquivos)

### ARQUIVO 030: Testes de Validadores

**Caminho:** `protocolo/nomenclatura/tests/validators.test.js`

**Instrução para o agente:**
```
Crie suite de testes Jest para validadores:
- Testes para WorkflowIdValidator
- Testes para PassoNameValidator
- Testes para VariableNameValidator
- Casos válidos e inválidos
- Edge cases
```

---

### ARQUIVO 031: Testes de Geradores

**Caminho:** `protocolo/nomenclatura/tests/generators.test.js`

**Instrução para o agente:**
```
Crie testes para geradores:
- Unicidade de IDs
- Formato correto
- Incremento automático
- Batch generation
```

---

### ARQUIVO 032: Testes de Constantes

**Caminho:** `protocolo/nomenclatura/tests/constants.test.js`

**Instrução para o agente:**
```
Crie testes verificando:
- Imutabilidade das constantes
- Presença de todos os valores esperados
- Funções helper funcionam
```

---

### ARQUIVO 033: Testes de Integração

**Caminho:** `protocolo/nomenclatura/tests/integration.test.js`

**Instrução para o agente:**
```
Crie testes end-to-end:
- Fluxo completo de criação de workflow
- Validação → Geração → Conversão
- Cenários reais de uso
```

---

## 🛠️ FASE 7: SCRIPTS (5 arquivos)

### ARQUIVO 034: Script de Build

**Caminho:** `protocolo/nomenclatura/scripts/build.js`

**Instrução para o agente:**
```
Crie script que:
- Verifica todos os arquivos necessários
- Roda validações básicas
- Cria index.js principal
- Prepara para publicação
```

---

### ARQUIVO 035: Script de Validação

**Caminho:** `protocolo/nomenclatura/scripts/validate.js`

**Instrução para o agente:**
```
Crie script que:
- Valida estrutura de diretórios
- Testa imports de todos os módulos
- Roda smoke tests
- Gera relatório de saúde
```

---

### ARQUIVO 036: Script de Migração

**Caminho:** `protocolo/nomenclatura/scripts/migrate.js`

**Instrução para o agente:**
```
Crie script para migração que:
- Lê workflows existentes
- Converte para novo padrão
- Gera relatório de mudanças
- Permite rollback
```

---

## 📚 FASE 8: DOCUMENTAÇÃO (5 arquivos)

### ARQUIVO 037: API Reference

**Caminho:** `protocolo/nomenclatura/docs/API.md`

**Instrução para o agente:**
```
Crie documentação de API com:
- Todas as classes e métodos
- Parâmetros e retornos
- Exemplos de uso
- Códigos de erro
```

---

### ARQUIVO 038: Guia de Migração

**Caminho:** `protocolo/nomenclatura/docs/MIGRATION.md`

**Instrução para o agente:**
```
Crie guia explicando:
- Como migrar do sistema antigo
- Mapeamento de nomenclaturas
- Scripts disponíveis
- Troubleshooting
```

---

### ARQUIVO 039: Exemplos Práticos

**Caminho:** `protocolo/nomenclatura/docs/EXAMPLES.md`

**Instrução para o agente:**
```
Crie documento com exemplos:
- Criar novo workflow
- Validar nomenclatura existente
- Gerar IDs em batch
- Converter legacy IDs
```

---

### ARQUIVO 040: FAQ

**Caminho:** `protocolo/nomenclatura/docs/FAQ.md`

**Instrução para o agente:**
```
Crie FAQ respondendo:
- Por que 8 passos do Octógono são obrigatórios?
- Como escolher domínio correto?
- Quando usar subfunção?
- Como debugar validações?
```

---

## 🔧 ARQUIVOS DE CONFIGURAÇÃO (5 arquivos)

### ARQUIVO 041: Jest Config

**Caminho:** `protocolo/nomenclatura/jest.config.js`

**Instrução para o agente:**
```
Crie configuração Jest com:
- Test environment: node
- Coverage thresholds: 80%
- Test match patterns
- Coverage reporters
```

---

### ARQUIVO 042: TypeScript Definitions

**Caminho:** `protocolo/nomenclatura/types/index.d.ts`

**Instrução para o agente:**
```
Crie definições TypeScript para:
- Interfaces principais
- Types para constantes
- Generics úteis
- Melhor IDE support
```

---

### ARQUIVO 043: Configuração VS Code

**Caminho:** `protocolo/nomenclatura/.vscode/settings.json`

**Instrução para o agente:**
```
Crie settings para VS Code:
- Format on save
- ESLint auto-fix
- Exclude node_modules
- Snippets customizados
```

---

### ARQUIVO 044: Docker Compose

**Caminho:** `protocolo/nomenclatura/docker-compose.yml`

**Instrução para o agente:**
```
Crie Docker Compose com:
- Serviço Node.js
- PostgreSQL para testes
- Redis para cache
- Volumes para desenvolvimento
```

---

### ARQUIVO 045: Makefile

**Caminho:** `protocolo/nomenclatura/Makefile`

**Instrução para o agente:**
```
Crie Makefile com comandos:
- install: npm install
- test: run tests
- build: build system
- validate: run validation
- clean: cleanup
```

---

## 🎯 ARQUIVOS FINAIS (5 arquivos)

### ARQUIVO 046: Index Principal

**Caminho:** `protocolo/nomenclatura/index.js`

**Instrução para o agente:**
```
Crie index.js que exporta:
- Todas as constantes
- Todos os validadores
- Todos os geradores
- Todos os conversores
- Versão do sistema
```

---

### ARQUIVO 047: CLI Interface

**Caminho:** `protocolo/nomenclatura/cli.js`

**Instrução para o agente:**
```
Crie CLI com comandos:
- validate [id]: Valida nomenclatura
- generate [type]: Gera novo ID
- convert [legacy]: Converte ID antigo
- list [type]: Lista constantes
```

---

### ARQUIVO 048: Changelog

**Caminho:** `protocolo/nomenclatura/CHANGELOG.md`

**Instrução para o agente:**
```
Crie CHANGELOG seguindo:
- Keep a Changelog format
- Semantic versioning
- Unreleased section
- v0.1.0 initial release
```

---

### ARQUIVO 049: License

**Caminho:** `protocolo/nomenclatura/LICENSE`

**Instrução para o agente:**
```
Crie arquivo LICENSE:
- MIT License
- Copyright 2024 Protocolo ZION
- Permissões padrão MIT
```

---

### ARQUIVO 050: Sistema de Validação Final

**Caminho:** `protocolo/nomenclatura/validate-system-final.js`

**Instrução para o agente:**
```
Crie validador final que:
- Verifica todos os 49 arquivos anteriores
- Testa cada funcionalidade
- Gera relatório completo
- Indica se sistema está pronto para produção
- Mostra checkpoints completos
```

---

## 📊 RESUMO DE IMPLEMENTAÇÃO

### Total de Arquivos por Categoria
- **Preparação:** 5 arquivos
- **Constantes:** 6 arquivos
- **Validadores:** 7 arquivos
- **Geradores:** 5 arquivos
- **Conversores:** 3 arquivos
- **Templates:** 3 arquivos
- **Testes:** 4 arquivos
- **Scripts:** 3 arquivos
- **Documentação:** 4 arquivos
- **Configuração:** 5 arquivos
- **Finais:** 5 arquivos

### Como Proceder
1. Comece pelos arquivos de preparação (001-005)
2. Implemente constantes (006-011)
3. Continue com validadores (012-018)
4. Siga a ordem numérica
5. Teste cada fase antes de prosseguir

### Validação de Progresso
Após cada fase, execute:
```bash
node protocolo/nomenclatura/validate-system.js
```

---

*Sistema de Tasks para Agentes - Protocolo ZION v1.0.0*
*50 arquivos com instruções completas para implementação*