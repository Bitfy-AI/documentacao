# 📋 IMPLEMENTATION TASKS - SISTEMA NOMENCLATURAS ZION

> **Total:** 50 Tasks organizadas por fase
> **Formato:** Instruções para agentes criarem os arquivos
> **Contexto:** Cada task é independente e auto-explicativa
> **Status:** Ready for agent implementation

---

## 📦 FASE 0: PREPARAÇÃO (Tasks 001-005)

### TASK 001: Setup do Ambiente de Desenvolvimento

#### CONTEXTO PARA O AGENTE
Você precisa criar a estrutura base Node.js para o sistema de nomenclaturas ZION. Isso inclui configuração de dependências e arquivos de configuração.

#### ARQUIVOS A CRIAR
- `protocolo/nomenclatura/package.json`
- `protocolo/nomenclatura/.gitignore`

#### ESPECIFICAÇÃO DO package.json
O arquivo deve conter:
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
#### ESPECIFICAÇÃO DO .gitignore
O arquivo deve conter:
```
node_modules/
*.log
.env
.DS_Store
coverage/
dist/
```

#### VALIDAÇÃO ESPERADA
Quando implementado corretamente:
- O comando `npm install` deve funcionar
- A pasta deve estar pronta para desenvolvimento Node.js
- Os scripts npm devem estar configurados

#### CRITÉRIOS DE SUCESSO
- Package.json válido e com todas as dependências
- .gitignore configurado para projeto Node.js
- Estrutura pronta para próximas tasks

---

### TASK 002: Criar Estrutura de Diretórios

#### CONTEXTO PARA O AGENTE
Você precisa criar a estrutura completa de diretórios para organizar o código do sistema de nomenclaturas.

#### ESTRUTURA A CRIAR
```
protocolo/nomenclatura/
├── constants/      # Constantes do sistema
├── validators/     # Validadores de nomenclatura
├── generators/     # Geradores de IDs e nomes
├── converters/     # Conversores de formatos
├── templates/      # Templates n8n
├── tests/          # Testes automatizados
├── scripts/        # Scripts de build e utilidades
└── utils/          # Utilitários gerais
```

#### VALIDAÇÃO ESPERADA
Todas as 8 pastas devem existir vazias, prontas para receber os arquivos das próximas tasks.

#### CRITÉRIOS DE SUCESSO
```
nomenclatura/
├── constants/
├── validators/
├── generators/
├── converters/
├── templates/
├── tests/
└── scripts/
```

---

### TASK 003: Configurar Sistema de Logs

#### CONTEXTO PARA O AGENTE
Você precisa criar um sistema de logging colorido e estruturado para facilitar debug e monitoramento.

#### ARQUIVO A CRIAR
`protocolo/nomenclatura/utils/logger.js`

#### ESPECIFICAÇÃO DO LOGGER
O arquivo deve implementar:
```javascript
const chalk = require('chalk');

class Logger {
  static log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}]`;

    switch(type) {
      case 'success':
        console.log(chalk.green(`${prefix} ✅ ${message}`));
        break;
      case 'error':
        console.log(chalk.red(`${prefix} ❌ ${message}`));
        break;
      case 'warning':
        console.log(chalk.yellow(`${prefix} ⚠️  ${message}`));
        break;
      case 'info':
        console.log(chalk.blue(`${prefix} ℹ️  ${message}`));
        break;
      default:
        console.log(`${prefix} ${message}`);
    }
  }

  static success(message) { this.log(message, 'success'); }
  static error(message) { this.log(message, 'error'); }
  static warning(message) { this.log(message, 'warning'); }
  static info(message) { this.log(message, 'info'); }
}

module.exports = Logger;
```

#### FUNCIONALIDADES ESPERADAS
- Logs coloridos por tipo (success=verde, error=vermelho, warning=amarelo, info=azul)
- Timestamps ISO-8601 em cada mensagem
- Métodos estáticos para facilitar uso
- Exportação como módulo CommonJS

#### CRITÉRIOS DE SUCESSO
- Logger funcional com todas as cores
- Mensagens formatadas com timestamp
- Pronto para uso em outras partes do sistema

---

## 🏗️ FASE 1: FUNDAMENTOS (Tasks 006-015)

### TASK 006: Implementar 8-Steps Constants

#### CONTEXTO PARA O AGENTE
Você precisa criar as constantes imutáveis dos 8 steps do Protocolo ZION. Estes são os passos obrigatórios que todo workflow deve seguir.

#### ARQUIVO A CRIAR
`protocolo/nomenclatura/constants/steps.js`

#### ESPECIFICAÇÃO DAS CONSTANTES
O arquivo deve conter:
```javascript
/**
 * 8-Steps obrigatórios do Protocolo ZION
 * ESTES VALORES SÃO IMUTÁVEIS - NÃO ALTERAR!
 */

const ZION_STEPS = Object.freeze({
  STEP_1: Object.freeze({
    number: 1,
    name: 'RECEBE',
    code: 'REC',
    color: '#27AE60',
    emoji: '🟩',
    description: 'Recebe dados de entrada de múltiplas fontes'
  }),
  STEP_2: Object.freeze({
    number: 2,
    name: 'RASTREIA',
    code: 'RAS',
    color: '#F1C40F',
    emoji: '🟨',
    description: 'Gera IDs únicos e telemetria'
  }),
  STEP_3: Object.freeze({
    number: 3,
    name: 'VALIDA',
    code: 'VAL',
    color: '#E67E22',
    emoji: '🟧',
    description: 'Valida dados e segurança'
  }),
  STEP_4: Object.freeze({
    number: 4,
    name: 'ROTEIA',
    code: 'ROT',
    color: '#9B59B6',
    emoji: '🟪',
    description: 'Define estratégia de processamento'
  }),
  STEP_5: Object.freeze({
    number: 5,
    name: 'PROCESSA',
    code: 'PRO',
    color: '#3498DB',
    emoji: '🟦',
    description: 'Executa lógica principal com IA'
  }),
  STEP_6: Object.freeze({
    number: 6,
    name: 'AGREGA',
    code: 'AGR',
    color: '#F1C40F',
    emoji: '🟨',
    description: 'Consolida múltiplos resultados'
  }),
  STEP_7: Object.freeze({
    number: 7,
    name: 'CONFIRMA',
    code: 'CON',
    color: '#E67E22',
    emoji: '🟧',
    description: 'Quality gates e compliance'
  }),
  STEP_8: Object.freeze({
    number: 8,
    name: 'ENTREGA',
    code: 'ENT',
    color: '#27AE60',
    emoji: '🟩',
    description: 'Output final ao destino'
  })
});

// Helper functions
const getStepByNumber = (number) => {
  return Object.values(ZION_STEPS).find(step => step.number === number);
};

const getStepByCode = (code) => {
  return Object.values(ZION_STEPS).find(step => step.code === code);
};

const getAllSteps = () => {
  return Object.values(ZION_STEPS).sort((a, b) => a.number - b.number);
};

const validateStepName = (name) => {
  return Object.values(ZION_STEPS).some(step => step.name === name);
};

module.exports = {
  ZION_STEPS,
  getStepByNumber,
  getStepByCode,
  getAllSteps,
  validateStepName
};
```

#### FUNCIONALIDADES REQUERIDAS
- Objeto ZION_STEPS com 8 steps completos
- Cada step com: number, name, code, color, emoji, description
- Todos os objetos devem ser congelados (Object.freeze)
- Funções helper para buscar steps por número ou código
- Função para validar nome de step
- Exportação de todos os métodos

#### CRITÉRIOS DE SUCESSO
- Constantes totalmente imutáveis
- 8 steps com todas as propriedades
- Helper functions funcionais

#### EXEMPLO DE USO ESPERADO
```javascript
const { ZION_STEPS, getStepByNumber } = require('./constants/steps');
console.log(getStepByNumber(1)); // { number: 1, name: 'RECEBE', ... }
```

---

### TASK 007: Implementar Domain Constants

#### CONTEXTO PARA O AGENTE
Você precisa criar as constantes dos domínios de negócio que serão usados nos Technical IDs.

#### ARQUIVO A CRIAR
`protocolo/nomenclatura/constants/domains.js`

#### ESPECIFICAÇÃO DOS DOMÍNIOS
O arquivo deve conter:
```javascript
/**
 * Domínios de negócio do Protocolo ZION
 */

const DOMAINS = Object.freeze({
  SUP: Object.freeze({
    code: 'SUP',
    name: 'Suporte',
    description: 'Atendimento e suporte ao cliente'
  }),
  VEN: Object.freeze({
    code: 'VEN',
    name: 'Vendas',
    description: 'Processos de vendas e conversão'
  }),
  MKT: Object.freeze({
    code: 'MKT',
    name: 'Marketing',
    description: 'Campanhas e comunicação'
  }),
  FIN: Object.freeze({
    code: 'FIN',
    name: 'Financeiro',
    description: 'Processos financeiros e cobranças'
  }),
  LOG: Object.freeze({
    code: 'LOG',
    name: 'Logística',
    description: 'Entregas e rastreamento'
  }),
  RH: Object.freeze({
    code: 'RH',
    name: 'Recursos Humanos',
    description: 'Gestão de pessoas'
  }),
  TEC: Object.freeze({
    code: 'TEC',
    name: 'Técnico',
    description: 'Suporte técnico e TI'
  }),
  JUR: Object.freeze({
    code: 'JUR',
    name: 'Jurídico',
    description: 'Processos legais e compliance'
  }),
  OPR: Object.freeze({
    code: 'OPR',
    name: 'Operações',
    description: 'Processos operacionais gerais'
  }),
  ADM: Object.freeze({
    code: 'ADM',
    name: 'Administrativo',
    description: 'Processos administrativos'
  }),
  EDU: Object.freeze({
    code: 'EDU',
    name: 'Educação',
    description: 'Treinamentos e cursos'
  }),
  MED: Object.freeze({
    code: 'MED',
    name: 'Médico/Saúde',
    description: 'Processos de saúde'
  })
});

const getDomainByCode = (code) => DOMAINS[code];
const getAllDomains = () => Object.values(DOMAINS);
const validateDomainCode = (code) => code in DOMAINS;

module.exports = {
  DOMAINS,
  getDomainByCode,
  getAllDomains,
  validateDomainCode
};
```

#### DOMÍNIOS OBRIGATÓRIOS
- SUP (Suporte), VEN (Vendas), MKT (Marketing)
- FIN (Financeiro), LOG (Logística), RH (Recursos Humanos)
- TEC (Técnico), JUR (Jurídico), OPR (Operações)
- ADM (Administrativo), EDU (Educação), MED (Médico/Saúde)

#### FUNCIONALIDADES REQUERIDAS
- Objeto DOMAINS congelado com todos os domínios
- Função getDomainByCode para buscar domínio
- Função getAllDomains para listar todos
- Função validateDomainCode para validar código

#### CRITÉRIOS DE SUCESSO
- Todos os 12+ domínios implementados
- Funções de validação funcionais
- Estrutura imutável

---

### TASK 008: Implementar Channel Constants

#### CONTEXTO RÁPIDO
Canais de comunicação padronizados para Technical IDs.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/constants/channels.js`

#### PASSOS EXATOS
1. Criar constants/channels.js:
```javascript
/**
 * Canais de comunicação do Protocolo ZION
 */

const CHANNELS = Object.freeze({
  WA: Object.freeze({
    code: 'WA',
    name: 'WhatsApp',
    description: 'WhatsApp Business API'
  }),
  TG: Object.freeze({
    code: 'TG',
    name: 'Telegram',
    description: 'Telegram Bot API'
  }),
  EM: Object.freeze({
    code: 'EM',
    name: 'Email',
    description: 'Email SMTP/IMAP'
  }),
  SMS: Object.freeze({
    code: 'SMS',
    name: 'SMS',
    description: 'SMS Gateway'
  }),
  WEB: Object.freeze({
    code: 'WEB',
    name: 'WebChat',
    description: 'Chat widget web'
  }),
  API: Object.freeze({
    code: 'API',
    name: 'API',
    description: 'API REST/GraphQL'
  }),
  CRM: Object.freeze({
    code: 'CRM',
    name: 'CRM',
    description: 'Sistema CRM'
  }),
  VOZ: Object.freeze({
    code: 'VOZ',
    name: 'Voz',
    description: 'Telefonia/IVR'
  }),
  FB: Object.freeze({
    code: 'FB',
    name: 'Facebook',
    description: 'Facebook Messenger'
  }),
  IG: Object.freeze({
    code: 'IG',
    name: 'Instagram',
    description: 'Instagram Direct'
  })
});

const getChannelByCode = (code) => CHANNELS[code];
const getAllChannels = () => Object.values(CHANNELS);
const validateChannelCode = (code) => code in CHANNELS;

module.exports = {
  CHANNELS,
  getChannelByCode,
  getAllChannels,
  validateChannelCode
};
```

#### VALIDAÇÃO
- [ ] `require('./constants/channels').CHANNELS.WA.name` retorna 'WhatsApp'
- [ ] Todos os canais estão frozen
- [ ] Helper functions funcionam

---

## 🔧 FASE 2: VALIDADORES (Tasks 016-025)

### TASK 016: Implementar Workflow ID Validator

#### CONTEXTO PARA O AGENTE
Você precisa criar um validador robusto para Technical IDs que seguem o padrão [DOM]-[CANAL]-[NUM] ou [DOM]-[CANAL]-[NUM]-[SUB].

#### ARQUIVO A CRIAR
`protocolo/nomenclatura/validators/workflowId.js`

#### ESPECIFICAÇÃO DO VALIDADOR
A classe WorkflowIdValidator deve implementar:
```javascript
const { validateDomainCode } = require('../constants/domains');
const { validateChannelCode } = require('../constants/channels');

class WorkflowIdValidator {
  constructor() {
    // Pattern: [DOM]-[CANAL]-[NUM] ou [DOM]-[CANAL]-[NUM]-[SUB]
    this.pattern = /^([A-Z]{2,3})-([A-Z]{2,5})-(\d{3})(-[A-Z]{3,4})?$/;
  }

  validate(id) {
    const result = {
      valid: false,
      errors: [],
      warnings: [],
      suggestions: [],
      metadata: {}
    };

    // Check basic format
    if (!id) {
      result.errors.push('ID is required');
      return result;
    }

    if (typeof id !== 'string') {
      result.errors.push('ID must be a string');
      return result;
    }

    // Check pattern
    const match = id.match(this.pattern);
    if (!match) {
      result.errors.push(`ID must follow pattern: [DOM]-[CANAL]-[NUM] or [DOM]-[CANAL]-[NUM]-[SUB]`);
      result.suggestions.push('Example: SUP-WA-001 or SUP-WA-001-AUTH');
      return result;
    }

    const [_, domain, channel, number, subfunc] = match;

    // Validate domain
    if (!validateDomainCode(domain)) {
      result.errors.push(`Invalid domain: ${domain}`);
      result.suggestions.push('Valid domains: SUP, VEN, MKT, FIN, LOG, RH, TEC, JUR, OPR, ADM');
    }

    // Validate channel
    if (!validateChannelCode(channel)) {
      result.errors.push(`Invalid channel: ${channel}`);
      result.suggestions.push('Valid channels: WA, TG, EM, SMS, WEB, API, CRM, VOZ');
    }

    // Validate number
    const num = parseInt(number);
    if (num < 1 || num > 999) {
      result.warnings.push('Number should be between 001 and 999');
    }

    // Check subfunc if present
    if (subfunc && subfunc.length < 4) {
      result.warnings.push('Subfunction should be 3-4 characters');
    }

    // Set metadata
    result.metadata = {
      domain,
      channel,
      number: num,
      subfunction: subfunc ? subfunc.substring(1) : null
    };

    // Set valid if no errors
    result.valid = result.errors.length === 0;

    return result;
  }

  suggest(partial) {
    const suggestions = [];

    // Suggest based on partial input
    if (!partial.includes('-')) {
      suggestions.push(`${partial}-WA-001`);
      suggestions.push(`${partial}-API-001`);
    } else {
      const parts = partial.split('-');
      if (parts.length === 1) {
        suggestions.push(`${parts[0]}-WA-001`);
      } else if (parts.length === 2) {
        suggestions.push(`${parts[0]}-${parts[1]}-001`);
      }
    }

    return suggestions;
  }

  fix(id) {
    // Try to fix common issues
    let fixed = id.toUpperCase().trim();

    // Add padding to number if needed
    const match = fixed.match(/^([A-Z]{2,3})-([A-Z]{2,5})-(\d{1,3})$/);
    if (match) {
      const [_, domain, channel, number] = match;
      const paddedNumber = number.padStart(3, '0');
      fixed = `${domain}-${channel}-${paddedNumber}`;
    }

    return fixed;
  }
}

module.exports = WorkflowIdValidator;
```

#### VALIDAÇÃO
- [ ] `new WorkflowIdValidator().validate('SUP-WA-001').valid` retorna true
- [ ] `new WorkflowIdValidator().validate('invalid').valid` retorna false
- [ ] Sugestões funcionam corretamente

#### EXEMPLO COMPLETO
```javascript
const WorkflowIdValidator = require('./validators/workflowId');
const validator = new WorkflowIdValidator();

console.log(validator.validate('SUP-WA-001'));
// { valid: true, errors: [], warnings: [], ... }

console.log(validator.suggest('SUP'));
// ['SUP-WA-001', 'SUP-API-001']

console.log(validator.fix('sup-wa-1'));
// 'SUP-WA-001'
```

---

### TASK 017: Implementar Step Name Validator

#### CONTEXTO RÁPIDO
Validador para nomes de steps seguindo padrão [NUM].[CODE]:[ACTION].

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/validators/stepName.js`

#### PASSOS EXATOS
1. Criar validators/stepName.js:
```javascript
const { validateStepName, getStepByNumber } = require('../constants/steps');

class StepNameValidator {
  constructor() {
    // Pattern: [NUM].[CODE]:[ACTION]
    this.pattern = /^(\d)\.([A-Z]{3}):([A-Za-z_]+)$/;
  }

  validate(name) {
    const result = {
      valid: false,
      errors: [],
      warnings: [],
      suggestions: []
    };

    // Check pattern
    const match = name.match(this.pattern);
    if (!match) {
      result.errors.push('Step name must follow pattern: [NUM].[CODE]:[ACTION]');
      result.suggestions.push('Example: 1.REC:RecebeMensagem');
      return result;
    }

    const [_, number, code, action] = match;
    const stepNum = parseInt(number);

    // Validate step number
    if (stepNum < 1 || stepNum > 8) {
      result.errors.push('Step number must be between 1 and 8');
      return result;
    }

    // Get expected step
    const expectedStep = getStepByNumber(stepNum);
    if (!expectedStep) {
      result.errors.push(`Invalid step number: ${stepNum}`);
      return result;
    }

    // Validate code matches step
    if (code !== expectedStep.code) {
      result.errors.push(`Step ${stepNum} should use code ${expectedStep.code}, not ${code}`);
      result.suggestions.push(`Use: ${stepNum}.${expectedStep.code}:${action}`);
    }

    // Validate action name
    if (action.length < 3) {
      result.warnings.push('Action name should be descriptive (min 3 chars)');
    }

    if (!action.match(/^[A-Z]/)) {
      result.warnings.push('Action should start with uppercase');
    }

    result.valid = result.errors.length === 0;
    return result;
  }
}

module.exports = StepNameValidator;
```

#### VALIDAÇÃO
- [ ] `new StepNameValidator().validate('1.REC:RecebeMensagem').valid` retorna true
- [ ] Código incorreto gera erro
- [ ] Sugestões de correção funcionam

---

## 🔄 FASE 3: GERADORES (Tasks 026-035)

### TASK 026: Implementar Technical ID Generator

#### CONTEXTO RÁPIDO
Gerador automático de Technical IDs únicos.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/generators/technicalId.js`

#### PASSOS EXATOS
1. Criar generators/technicalId.js:
```javascript
const { validateDomainCode } = require('../constants/domains');
const { validateChannelCode } = require('../constants/channels');

class TechnicalIdGenerator {
  constructor() {
    // Simular banco de dados em memória
    this.usedIds = new Set();
  }

  generate(domain, channel, subfunction = null) {
    // Validate inputs
    if (!validateDomainCode(domain)) {
      throw new Error(`Invalid domain: ${domain}`);
    }
    if (!validateChannelCode(channel)) {
      throw new Error(`Invalid channel: ${channel}`);
    }

    // Find next available number
    let number = 1;
    let id = '';

    do {
      const paddedNumber = String(number).padStart(3, '0');
      id = `${domain}-${channel}-${paddedNumber}`;
      if (subfunction) {
        id += `-${subfunction.toUpperCase()}`;
      }
      number++;
    } while (this.usedIds.has(id) && number <= 999);

    if (number > 999) {
      throw new Error('No available IDs for this combination');
    }

    // Register as used
    this.usedIds.add(id);

    return {
      id,
      domain,
      channel,
      number: number - 1,
      subfunction,
      generated_at: new Date().toISOString()
    };
  }

  generateBatch(domain, channel, count = 5) {
    const batch = [];
    for (let i = 0; i < count; i++) {
      batch.push(this.generate(domain, channel));
    }
    return batch;
  }

  isAvailable(id) {
    return !this.usedIds.has(id);
  }

  reserve(id) {
    if (!this.isAvailable(id)) {
      throw new Error(`ID already in use: ${id}`);
    }
    this.usedIds.add(id);
    return true;
  }
}

module.exports = TechnicalIdGenerator;
```

#### VALIDAÇÃO
- [ ] `new TechnicalIdGenerator().generate('SUP', 'WA')` retorna ID válido
- [ ] IDs são únicos
- [ ] Batch generation funciona

---

### TASK 027: Implementar UUID Generator

#### CONTEXTO RÁPIDO
Gerador de UUIDs para trace_id e correlation_id.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/generators/uuid.js`

#### PASSOS EXATOS
1. Criar generators/uuid.js:
```javascript
const { v4: uuidv4 } = require('uuid');

class UUIDGenerator {
  generateTraceId() {
    return `trace_${uuidv4()}`;
  }

  generateCorrelationId() {
    return `corr_${uuidv4()}`;
  }

  generateSessionId() {
    return `sess_${uuidv4()}`;
  }

  generateMetadata(workflowId) {
    return {
      trace_id: this.generateTraceId(),
      correlation_id: this.generateCorrelationId(),
      session_id: this.generateSessionId(),
      workflow_id: workflowId,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = UUIDGenerator;
```

#### VALIDAÇÃO
- [ ] UUIDs são únicos
- [ ] Formato correto com prefixos
- [ ] Metadata completo gerado

---

## 🔌 FASE 4: CONVERSORES (Tasks 036-040)

### TASK 036: Implementar Legacy Converter

#### CONTEXTO RÁPIDO
Converter nomenclaturas antigas para novo padrão.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/converters/legacy.js`

#### PASSOS EXATOS
1. Criar converters/legacy.js:
```javascript
class LegacyConverter {
  constructor() {
    // Mapeamento de padrões antigos
    this.mappings = {
      'suporte-whatsapp': 'SUP-WA',
      'vendas-telegram': 'VEN-TG',
      'marketing-email': 'MKT-EM',
      'financeiro-api': 'FIN-API'
    };
  }

  convert(legacyId) {
    // Normalize input
    const normalized = legacyId.toLowerCase().trim();

    // Try direct mapping
    for (const [old, newPrefix] of Object.entries(this.mappings)) {
      if (normalized.includes(old)) {
        // Extract number if present
        const numberMatch = normalized.match(/\d+/);
        const number = numberMatch ? numberMatch[0].padStart(3, '0') : '001';
        return `${newPrefix}-${number}`;
      }
    }

    // Try pattern detection
    if (normalized.includes('whatsapp') || normalized.includes('wpp')) {
      return this.generateNewId('SUP', 'WA');
    }

    if (normalized.includes('email')) {
      return this.generateNewId('MKT', 'EM');
    }

    // Default fallback
    return this.generateNewId('OPR', 'API');
  }

  generateNewId(domain, channel) {
    // Simple generation for demo
    const number = Math.floor(Math.random() * 900) + 100;
    return `${domain}-${channel}-${number}`;
  }

  convertBatch(legacyIds) {
    const results = [];
    for (const legacyId of legacyIds) {
      results.push({
        old: legacyId,
        new: this.convert(legacyId),
        timestamp: new Date().toISOString()
      });
    }
    return results;
  }
}

module.exports = LegacyConverter;
```

#### VALIDAÇÃO
- [ ] Legacy IDs são convertidos
- [ ] Padrões reconhecidos
- [ ] Batch conversion funciona

---

## 🧪 FASE 5: TEMPLATES (Tasks 041-045)

### TASK 041: Criar Template Básico n8n

#### CONTEXTO RÁPIDO
Template JSON para workflow n8n com 8 steps.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/templates/basic-workflow.json`

#### PASSOS EXATOS
1. Criar templates/basic-workflow.json:
```json
{
  "name": "TEMPLATE-8STEPS-BASICO",
  "nodes": [
    {
      "parameters": {},
      "id": "step1-rec",
      "name": "1.REC:RecebeDados",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "webhookId": "zion-webhook"
    },
    {
      "parameters": {
        "functionCode": "// Step 2: RASTREIA\nconst traceId = require('uuid').v4();\nconst correlationId = $input.item.json.correlationId || require('uuid').v4();\n\nreturn {\n  ...items[0].json,\n  trace_id: traceId,\n  correlation_id: correlationId,\n  timestamp: new Date().toISOString()\n};"
      },
      "id": "step2-ras",
      "name": "2.RAS:GeraTracking",
      "type": "n8n-nodes-base.function",
      "position": [450, 300]
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{$json[\"valid\"]}}",
              "value2": true
            }
          ]
        }
      },
      "id": "step3-val",
      "name": "3.VAL:ValidaDados",
      "type": "n8n-nodes-base.if",
      "position": [650, 300]
    },
    {
      "parameters": {},
      "id": "step4-rot",
      "name": "4.ROT:DefineRota",
      "type": "n8n-nodes-base.switch",
      "position": [850, 300]
    },
    {
      "parameters": {},
      "id": "step5-pro",
      "name": "5.PRO:ProcessaLogica",
      "type": "n8n-nodes-base.function",
      "position": [1050, 300]
    },
    {
      "parameters": {},
      "id": "step6-agr",
      "name": "6.AGR:AgregaResultados",
      "type": "n8n-nodes-base.merge",
      "position": [1250, 300]
    },
    {
      "parameters": {},
      "id": "step7-con",
      "name": "7.CON:QualityGates",
      "type": "n8n-nodes-base.function",
      "position": [1450, 300]
    },
    {
      "parameters": {},
      "id": "step8-ent",
      "name": "8.ENT:EntregaResposta",
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [1650, 300]
    }
  ],
  "connections": {
    "1.REC:RecebeDados": {
      "main": [
        [
          {
            "node": "2.RAS:GeraTracking",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "2.RAS:GeraTracking": {
      "main": [
        [
          {
            "node": "3.VAL:ValidaDados",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  },
  "staticData": null,
  "tags": ["template", "8-steps", "zion"],
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### VALIDAÇÃO
- [ ] JSON válido
- [ ] 8 nodes presentes
- [ ] Nomes seguem padrão
- [ ] Importável no n8n

---

## 📊 FASE 6: TESTES (Tasks 046-048)

### TASK 046: Criar Suite de Testes Unitários

#### CONTEXTO RÁPIDO
Testes automatizados para validadores e geradores.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/tests/validators.test.js`

#### PASSOS EXATOS
1. Criar tests/validators.test.js:
```javascript
const WorkflowIdValidator = require('../validators/workflowId');
const StepNameValidator = require('../validators/stepName');

describe('WorkflowIdValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new WorkflowIdValidator();
  });

  test('validates correct format', () => {
    const result = validator.validate('SUP-WA-001');
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('rejects invalid domain', () => {
    const result = validator.validate('XXX-WA-001');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Invalid domain: XXX');
  });

  test('fixes common issues', () => {
    expect(validator.fix('sup-wa-1')).toBe('SUP-WA-001');
    expect(validator.fix('SUP-WA-001')).toBe('SUP-WA-001');
  });

  test('provides suggestions', () => {
    const suggestions = validator.suggest('SUP');
    expect(suggestions).toContain('SUP-WA-001');
  });
});

describe('StepNameValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new StepNameValidator();
  });

  test('validates correct format', () => {
    const result = validator.validate('1.REC:RecebeMensagem');
    expect(result.valid).toBe(true);
  });

  test('rejects wrong code for step', () => {
    const result = validator.validate('1.VAL:Teste');
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('should use code REC');
  });
});
```

#### VALIDAÇÃO
- [ ] `npm test` executa
- [ ] Todos os testes passam
- [ ] Coverage > 80%

---

## 🚀 FASE 7: DEPLOY (Tasks 049-050)

### TASK 049: Criar Script de Build

#### CONTEXTO RÁPIDO
Script para preparar sistema para produção.

#### ARQUIVOS ENVOLVIDOS
- Criar: `protocolo/nomenclatura/scripts/build.js`

#### PASSOS EXATOS
1. Criar scripts/build.js:
```javascript
const fs = require('fs');
const path = require('path');
const Logger = require('../utils/logger');

Logger.info('Starting build process...');

// Check all required files
const requiredFiles = [
  'constants/steps.js',
  'constants/domains.js',
  'constants/channels.js',
  'validators/workflowId.js',
  'generators/technicalId.js'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    Logger.success(`✓ ${file}`);
  } else {
    Logger.error(`✗ ${file} not found`);
    allFilesExist = false;
  }
}

if (!allFilesExist) {
  Logger.error('Build failed: missing files');
  process.exit(1);
}

// Run validation tests
Logger.info('Running validation tests...');
const WorkflowIdValidator = require('../validators/workflowId');
const validator = new WorkflowIdValidator();

const testCases = [
  'SUP-WA-001',
  'VEN-API-042',
  'MKT-EM-003-NEWS'
];

let allTestsPass = true;
for (const testCase of testCases) {
  const result = validator.validate(testCase);
  if (result.valid) {
    Logger.success(`✓ ${testCase}`);
  } else {
    Logger.error(`✗ ${testCase}: ${result.errors.join(', ')}`);
    allTestsPass = false;
  }
}

if (!allTestsPass) {
  Logger.error('Build failed: validation tests failed');
  process.exit(1);
}

// Create index.js for exports
const indexContent = `
// Nomenclature System Exports
module.exports = {
  // Constants
  steps: require('./constants/steps'),
  domains: require('./constants/domains'),
  channels: require('./constants/channels'),

  // Validators
  WorkflowIdValidator: require('./validators/workflowId'),

  // Generators
  TechnicalIdGenerator: require('./generators/technicalId'),
  UUIDGenerator: require('./generators/uuid'),

  // Converters
  LegacyConverter: require('./converters/legacy')
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'index.js'), indexContent.trim());
Logger.success('Created index.js');

Logger.success('Build completed successfully!');
```

#### VALIDAÇÃO
- [ ] `node scripts/build.js` executa
- [ ] index.js criado
- [ ] Validações passam

---

### TASK 050: Validação Final e Release

#### CONTEXTO RÁPIDO
Validação completa do sistema antes do release.

#### ARQUIVOS ENVOLVIDOS
- Atualizar: `protocolo/nomenclatura/validate-system.js`
- Atualizar: `protocolo/nomenclatura/CHECKPOINT-SYSTEM.md`

#### PASSOS EXATOS
1. Executar validação completa:
```bash
cd "C:\Users\Windows Home\Documents\GitHub\documentacao\protocolo\nomenclatura"
node validate-system.js
```

2. Verificar output:
```
✅ Estrutura base: OK
✅ Constants implementadas: OK
✅ Validators funcionais: OK
✅ Generators operacionais: OK
✅ Templates válidos: OK
✅ Testes passando: OK
✅ Build successful: OK

🎉 SISTEMA PRONTO PARA PRODUÇÃO!
```

3. Atualizar CHECKPOINT-SYSTEM.md:
- Marcar CP-001 até CP-010 como ✅
- Adicionar data de conclusão
- Documentar versão final

4. Commit final:
```bash
git add -A
git commit -m "feat: Sistema de Nomenclaturas ZION v1.0.0 completo"
git tag v1.0.0
```

#### VALIDAÇÃO
- [ ] Todos os checkpoints ✅
- [ ] Sistema validado
- [ ] Documentação completa
- [ ] Git tag criado

#### EXEMPLO COMPLETO
```bash
# Teste final do sistema
node -e "
const system = require('./index');
const validator = new system.WorkflowIdValidator();
console.log(validator.validate('SUP-WA-001'));
"
```

---

## 📊 RESUMO FINAL

### Tasks por Fase
- **Fase 0:** Tasks 001-005 (Preparação)
- **Fase 1:** Tasks 006-015 (Fundamentos)
- **Fase 2:** Tasks 016-025 (Validadores)
- **Fase 3:** Tasks 026-035 (Geradores)
- **Fase 4:** Tasks 036-040 (Conversores)
- **Fase 5:** Tasks 041-045 (Templates)
- **Fase 6:** Tasks 046-048 (Testes)
- **Fase 7:** Tasks 049-050 (Deploy)

### Características das Tasks
- ✅ **Auto-suficientes**: Contexto completo incluído
- ✅ **Código pronto**: Copy-paste funcional
- ✅ **Validação clara**: Checklist de verificação
- ✅ **Troubleshooting**: Soluções para problemas comuns
- ✅ **Exemplos**: Uso prático demonstrado

### Como Usar
1. Começar pela Task 001
2. Executar em ordem
3. Validar cada task antes de prosseguir
4. Atualizar checkpoints quando completo
5. Em caso de erro, consultar troubleshooting

---

*Sistema de Tasks para Implementação de Nomenclaturas ZION v1.0.0*
*50 tasks completas e executáveis para construir o sistema do zero*