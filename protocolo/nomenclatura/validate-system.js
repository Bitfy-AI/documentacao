#!/usr/bin/env node
/**
 * 🔍 SISTEMA DE VALIDAÇÃO AUTOMÁTICA - PROTOCOLO ZION
 *
 * Execute: node protocolo/nomenclatura/validate-system.js
 *
 * Verifica o estado atual da implementação das nomenclaturas
 * e fornece diagnóstico detalhado para recovery/continuidade.
 */

const fs = require('fs');
const path = require('path');

// Cores para output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bright: '\x1b[1m'
};

class ZionValidator {
  constructor() {
    this.baseDir = path.resolve(__dirname, '../..');
    this.nomenclaturaDir = path.join(this.baseDir, 'protocolo', 'nomenclatura');
    this.errors = [];
    this.warnings = [];
    this.info = [];
    this.checkpoints = {};
  }

  log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const entry = { timestamp, level, message, data };

    switch(level) {
      case 'ERROR':
        this.errors.push(entry);
        console.log(`${colors.red}❌ ${message}${colors.reset}`);
        break;
      case 'WARN':
        this.warnings.push(entry);
        console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
        break;
      case 'INFO':
        this.info.push(entry);
        console.log(`${colors.green}ℹ️  ${message}${colors.reset}`);
        break;
      case 'SUCCESS':
        console.log(`${colors.green}✅ ${message}${colors.reset}`);
        break;
    }
  }

  checkFileExists(filePath, required = true) {
    const fullPath = path.join(this.baseDir, filePath);
    const exists = fs.existsSync(fullPath);

    if (!exists && required) {
      this.log('ERROR', `Arquivo obrigatório não encontrado: ${filePath}`);
      return false;
    } else if (!exists) {
      this.log('WARN', `Arquivo opcional não encontrado: ${filePath}`);
      return false;
    } else {
      const stats = fs.statSync(fullPath);
      this.log('SUCCESS', `${filePath} (${this.formatBytes(stats.size)})`);
      return true;
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  checkDirectoryStructure() {
    console.log(`\n${colors.cyan}${colors.bright}📁 ESTRUTURA DE DIRETÓRIOS${colors.reset}`);

    const requiredDirs = [
      'protocolo',
      'protocolo/nomenclatura',
      'protocolo/metodologia',
      'protocolo/componentes'
    ];

    const optionalDirs = [
      'protocolo/nomenclatura/constants',
      'protocolo/nomenclatura/validators',
      'protocolo/nomenclatura/generators',
      'protocolo/nomenclatura/converters',
      'protocolo/nomenclatura/templates'
    ];

    requiredDirs.forEach(dir => {
      const fullPath = path.join(this.baseDir, dir);
      if (fs.existsSync(fullPath)) {
        this.log('SUCCESS', `${dir}/`);
      } else {
        this.log('ERROR', `Diretório obrigatório não encontrado: ${dir}/`);
      }
    });

    optionalDirs.forEach(dir => {
      const fullPath = path.join(this.baseDir, dir);
      if (fs.existsSync(fullPath)) {
        this.log('SUCCESS', `${dir}/`);
      } else {
        this.log('WARN', `Diretório opcional não encontrado: ${dir}/`);
      }
    });
  }

  checkCoreFiles() {
    console.log(`\n${colors.cyan}${colors.bright}📄 ARQUIVOS PRINCIPAIS${colors.reset}`);

    const coreFiles = [
      'PROTOCOLO-ZION.md',
      'README.md',
      'BRIEF.md',
      'CLAUDE.md',
      'protocolo/metodologia/NOMENCLATURAS-ZION.md',
      'protocolo/nomenclatura/CATEGORIAS-NOMENCLATURA.md',
      'protocolo/nomenclatura/CHECKPOINT-SYSTEM.md',
      'protocolo/nomenclatura/EMERGENCY-RECOVERY.md'
    ];

    coreFiles.forEach(file => this.checkFileExists(file, true));
  }

  checkImplementationFiles() {
    console.log(`\n${colors.cyan}${colors.bright}⚙️ ARQUIVOS DE IMPLEMENTAÇÃO${colors.reset}`);

    const implFiles = [
      'protocolo/nomenclatura/constants/steps.js',
      'protocolo/nomenclatura/constants/domains.js',
      'protocolo/nomenclatura/constants/channels.js',
      'protocolo/nomenclatura/constants/index.js',
      'protocolo/nomenclatura/validators/workflowId.js',
      'protocolo/nomenclatura/validators/stepName.js',
      'protocolo/nomenclatura/validators/variableName.js',
      'protocolo/nomenclatura/validators/index.js',
      'protocolo/nomenclatura/generators/technicalId.js',
      'protocolo/nomenclatura/generators/uuid.js',
      'protocolo/nomenclatura/generators/metadata.js'
    ];

    implFiles.forEach(file => this.checkFileExists(file, false));
  }

  parseCheckpointStatus() {
    console.log(`\n${colors.cyan}${colors.bright}🚦 STATUS DOS CHECKPOINTS${colors.reset}`);

    const checkpointFile = path.join(this.nomenclaturaDir, 'CHECKPOINT-SYSTEM.md');

    if (!fs.existsSync(checkpointFile)) {
      this.log('ERROR', 'Arquivo CHECKPOINT-SYSTEM.md não encontrado');
      return;
    }

    const content = fs.readFileSync(checkpointFile, 'utf8');
    const checkpointPattern = /### (CP-\d+): (.+?)\n\*\*Status:\*\* (.+?)$/gm;
    let match;

    while ((match = checkpointPattern.exec(content)) !== null) {
      const [, id, name, status] = match;
      this.checkpoints[id] = { name, status };

      const statusIcon = this.getStatusIcon(status);
      console.log(`${statusIcon} ${id}: ${name}`);
    }

    // Calcular progresso
    const total = Object.keys(this.checkpoints).length;
    const completed = Object.values(this.checkpoints).filter(cp =>
      cp.status.includes('COMPLETO') || cp.status.includes('✅')
    ).length;

    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    console.log(`\n📊 Progresso geral: ${progress}% (${completed}/${total} checkpoints)`);
  }

  getStatusIcon(status) {
    if (status.includes('COMPLETO') || status.includes('✅')) return '✅';
    if (status.includes('PROGRESSO') || status.includes('🟨')) return '🟨';
    if (status.includes('NÃO INICIADO') || status.includes('🟥')) return '🟥';
    return '❓';
  }

  checkNodeJSIntegration() {
    console.log(`\n${colors.cyan}${colors.bright}🔧 INTEGRAÇÃO NODE.JS${colors.reset}`);

    const constantsIndex = path.join(this.nomenclaturaDir, 'constants', 'index.js');

    if (fs.existsSync(constantsIndex)) {
      try {
        require(constantsIndex);
        this.log('SUCCESS', 'Constants importáveis corretamente');
      } catch (error) {
        this.log('ERROR', `Erro ao importar constants: ${error.message}`);
      }
    } else {
      this.log('WARN', 'Arquivo constants/index.js não existe ainda');
    }
  }

  checkGitStatus() {
    console.log(`\n${colors.cyan}${colors.bright}📦 STATUS GIT${colors.reset}`);

    const { execSync } = require('child_process');

    try {
      const gitStatus = execSync('git status --porcelain', {
        cwd: this.baseDir,
        encoding: 'utf8'
      });

      if (gitStatus.trim()) {
        this.log('INFO', 'Existem mudanças não commitadas');
        const lines = gitStatus.trim().split('\n');
        lines.slice(0, 5).forEach(line => {
          console.log(`   ${line}`);
        });
        if (lines.length > 5) {
          console.log(`   ... e mais ${lines.length - 5} arquivos`);
        }
      } else {
        this.log('SUCCESS', 'Working directory limpo');
      }

      const currentBranch = execSync('git branch --show-current', {
        cwd: this.baseDir,
        encoding: 'utf8'
      }).trim();

      this.log('INFO', `Branch atual: ${currentBranch}`);

    } catch (error) {
      this.log('WARN', 'Não foi possível verificar status do Git');
    }
  }

  generateNextActions() {
    console.log(`\n${colors.cyan}${colors.bright}⏭️ PRÓXIMAS AÇÕES${colors.reset}`);

    // Encontrar próximo checkpoint
    const checkpointIds = Object.keys(this.checkpoints).sort();
    const nextCheckpoint = checkpointIds.find(id => {
      const status = this.checkpoints[id].status;
      return status.includes('NÃO INICIADO') || status.includes('🟥');
    });

    if (nextCheckpoint) {
      const cp = this.checkpoints[nextCheckpoint];
      console.log(`🎯 Próximo checkpoint: ${nextCheckpoint} - ${cp.name}`);
      console.log(`📍 Status: ${cp.status}`);

      // Sugestões específicas por checkpoint
      this.suggestActions(nextCheckpoint);
    } else {
      console.log('🎉 Todos os checkpoints foram completados!');
    }
  }

  suggestActions(checkpointId) {
    const suggestions = {
      'CP-002': [
        '1. Criar diretório protocolo/nomenclatura/constants/',
        '2. Implementar steps.js com os 8 steps do protocolo',
        '3. Implementar domains.js e channels.js',
        '4. Criar index.js para exportar tudo',
        '5. Testar com: node -e "console.log(require(\'./protocolo/nomenclatura/constants\'))"'
      ],
      'CP-003': [
        '1. Criar diretório protocolo/nomenclatura/validators/',
        '2. Implementar workflowId.js',
        '3. Implementar stepName.js e variableName.js',
        '4. Criar testes unitários',
        '5. Atualizar checkpoint CP-003'
      ]
    };

    const actions = suggestions[checkpointId] || ['Consultar CHECKPOINT-SYSTEM.md para detalhes'];

    console.log('\n📋 Ações sugeridas:');
    actions.forEach(action => console.log(`   ${action}`));
  }

  generateReport() {
    console.log(`\n${colors.magenta}${colors.bright}📊 RELATÓRIO FINAL${colors.reset}`);

    const totalIssues = this.errors.length + this.warnings.length;

    if (this.errors.length > 0) {
      console.log(`${colors.red}❌ Erros: ${this.errors.length}${colors.reset}`);
    }

    if (this.warnings.length > 0) {
      console.log(`${colors.yellow}⚠️  Avisos: ${this.warnings.length}${colors.reset}`);
    }

    if (totalIssues === 0) {
      console.log(`${colors.green}✅ Sistema OK - sem erros ou avisos${colors.reset}`);
    }

    // Status geral
    const completedCPs = Object.values(this.checkpoints).filter(cp =>
      cp.status.includes('COMPLETO') || cp.status.includes('✅')
    ).length;

    console.log(`\n🎯 Status geral:`);
    console.log(`   Checkpoints completos: ${completedCPs}/${Object.keys(this.checkpoints).length}`);
    console.log(`   Arquivos principais: ${this.errors.length === 0 ? 'OK' : 'ISSUES'}`);
    console.log(`   Pronto para desenvolvimento: ${completedCPs > 0 ? 'SIM' : 'NÃO'}`);
  }

  run() {
    console.log(`${colors.bright}${colors.blue}`);
    console.log('🔍 ZION VALIDATOR - Sistema de Validação do Protocolo ZION');
    console.log('================================================');
    console.log(`Pasta base: ${this.baseDir}`);
    console.log(`Data/hora: ${new Date().toLocaleString()}`);
    console.log(`${colors.reset}\n`);

    this.checkDirectoryStructure();
    this.checkCoreFiles();
    this.checkImplementationFiles();
    this.parseCheckpointStatus();
    this.checkNodeJSIntegration();
    this.checkGitStatus();
    this.generateNextActions();
    this.generateReport();

    console.log(`\n${colors.bright}Validação concluída!${colors.reset}`);

    // Exit code baseado em erros
    process.exit(this.errors.length > 0 ? 1 : 0);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  const validator = new ZionValidator();
  validator.run();
}

module.exports = ZionValidator;