# 🆘 EMERGENCY RECOVERY - PROTOCOLO ZION

> **⚠️ CONSULTE ESTE ARQUIVO IMEDIATAMENTE EM CASO DE PERDA DE CONTEXTO**

## 🎯 SITUAÇÃO ATUAL

```yaml
Projeto: Protocolo de Agentes No-Code Zion (PANZ)
Tarefa: Sistema de Nomenclaturas
Pasta: C:\Users\Windows Home\Documents\GitHub\documentacao
Branch: master
Status: Implementação de sistema de checkpoints
```

## 📍 ONDE ESTOU?

**ÚLTIMO CHECKPOINT COMPLETO:** CP-001 (Estrutura Base) ✅
**PRÓXIMO CHECKPOINT:** CP-002 (Constantes Core) 🟥
**PROGRESSO GERAL:** 10% (1/10 checkpoints)

## 🔍 QUICK STATUS CHECK

Execute imediatamente:
```bash
cd "C:\Users\Windows Home\Documents\GitHub\documentacao"
pwd
ls -la protocolo/nomenclatura/
git status
```

**Output esperado:**
```
📁 protocolo/nomenclatura/
  ├── CATEGORIAS-NOMENCLATURA.md     ✅ (13.7KB)
  ├── CHECKPOINT-SYSTEM.md           ✅ (criado agora)
  └── EMERGENCY-RECOVERY.md          ✅ (este arquivo)
```

## 📋 O QUE PRECISA SER FEITO

### Tarefa IMEDIATA: CP-002 (Constantes Core)
**Tempo estimado:** 45 minutos
**Prioridade:** ALTA

#### Arquivos para criar:
1. `protocolo/nomenclatura/constants/steps.js`
2. `protocolo/nomenclatura/constants/domains.js`
3. `protocolo/nomenclatura/constants/channels.js`
4. `protocolo/nomenclatura/constants/index.js`

#### Conteúdo esperado (steps.js):
```javascript
// 8-Step Pattern do Protocolo ZION
const STEPS = {
  1: { name: "RECEBE", abbrev: "REC", color: "🟩" },
  2: { name: "RASTREIA", abbrev: "RAS", color: "🟨" },
  3: { name: "VALIDA", abbrev: "VAL", color: "🟧" },
  4: { name: "ROTEIA", abbrev: "ROT", color: "🟪" },
  5: { name: "PROCESSA", abbrev: "PRO", color: "🟦" },
  6: { name: "AGREGA", abbrev: "AGR", color: "🟨" },
  7: { name: "CONFIRMA", abbrev: "CON", color: "🟧" },
  8: { name: "ENTREGA", abbrev: "ENT", color: "🟩" }
};
```

## 📚 DOCUMENTOS DE REFERÊNCIA

| Documento | Localização | Propósito |
|-----------|-------------|-----------|
| **CATEGORIAS-NOMENCLATURA.md** | `protocolo/nomenclatura/` | Especificação completa das 6 categorias |
| **NOMENCLATURAS-ZION.md** | `protocolo/metodologia/` | Guia completo original |
| **CHECKPOINT-SYSTEM.md** | `protocolo/nomenclatura/` | Sistema de validação e continuidade |
| **PROTOCOLO-ZION.md** | raiz | Visão geral do protocolo |
| **BRIEF.md** | raiz | Contexto do projeto |

## 🔄 RECOVERY STEPS

### Se perdeu contexto totalmente:
1. **Ler este arquivo primeiro** (você está fazendo isso ✅)
2. **Executar Quick Status Check** (acima)
3. **Abrir CHECKPOINT-SYSTEM.md** e verificar CP-002
4. **Continuar implementação das constantes**

### Se algo quebrou:
1. **Git status para verificar mudanças**
2. **Git stash se necessário**
3. **Voltar para último checkpoint conhecido**
4. **Re-aplicar mudanças incrementalmente**

### Se precisa começar do zero:
1. **Clone do repositório**
2. **Seguir CHECKPOINT-SYSTEM.md CP-001 → CP-010**
3. **Validar cada checkpoint antes do próximo**

## 🎯 CONTEXTO DO PROTOCOLO ZION

### O que é:
Sistema de nomenclaturas para agentes conversacionais no-code usando n8n

### Problema que resolve:
- No no-code, "o nome É a documentação"
- Precisa satisfazer iniciantes E desenvolvedores
- Sistema híbrido de 3 camadas: Display Name + Technical ID + Search Tags

### 8-Step Pattern (obrigatório):
```
1.RECEBE → 2.RASTREIA → 3.VALIDA → 4.ROTEIA →
5.PROCESSA → 6.AGREGA → 7.CONFIRMA → 8.ENTREGA
```

### Exemplo de nomenclatura:
```yaml
Display: "Atendimento WhatsApp - Suporte Cliente"
Technical: "SUP-WA-001"
Tags: ["atendimento", "whatsapp", "suporte"]
```

## 🚨 RED FLAGS - PARE SE VIR ISSO

❌ **Nomes em inglês nos Display Names**
❌ **Technical IDs sem padrão [DOM]-[CANAL]-[NUM]**
❌ **Steps fora do 8-pattern obrigatório**
❌ **Mistura de português e inglês no mesmo nível**
❌ **IDs mutáveis (Technical IDs devem ser únicos e permanentes)**

## ✅ GREEN FLAGS - CONTINUE SE VIR ISSO

✅ **Display Names em português claro**
✅ **Technical IDs seguindo [DOM]-[CANAL]-[NUM]**
✅ **8 steps implementados corretamente**
✅ **Sistema híbrido funcionando**
✅ **Checkpoints sendo validados antes de prosseguir**

## 🔧 COMANDOS ÚTEIS

```bash
# Verificar estrutura
find protocolo/nomenclatura -name "*.md" -o -name "*.js" | sort

# Contar progresso
grep -c "✅" protocolo/nomenclatura/CHECKPOINT-SYSTEM.md

# Ver último commit
git log -1 --format="%h %s %cd"

# Testar Node.js (quando tiver constants/)
node -e "console.log(require('./protocolo/nomenclatura/constants/index.js'))"

# Ver status de todos checkpoints
grep -A 1 "Status:" protocolo/nomenclatura/CHECKPOINT-SYSTEM.md
```

## 🎯 OBJETIVO FINAL

Implementar sistema completo de nomenclaturas que:
1. **Satisfaça iniciantes** (português claro)
2. **Satisfaça desenvolvedores** (padrões técnicos)
3. **Permita descoberta fácil** (search tags)
4. **Seja escalável** (categorização clara)
5. **Tenha rastreabilidade** (metadados obrigatórios)

## 📞 PRÓXIMA AÇÃO

**AGORA MESMO:**
1. Fechar este arquivo
2. Abrir `protocolo/nomenclatura/CHECKPOINT-SYSTEM.md`
3. Ir para seção "CP-002: CONSTANTES CORE"
4. Implementar os arquivos de constantes
5. Atualizar checkpoint quando completo

---

## 🎪 LEMBRETES IMPORTANTES

- **Este é um protocolo REAL sendo implementado**
- **A nomenclatura vai ser usada em produção**
- **Cada decisão impacta desenvolvedores no-code**
- **Sistema híbrido é inovação para resolver dilema real**
- **8-steps são OBRIGATÓRIOS e IMUTÁVEIS**

---

*Se ainda está confuso, leia PROTOCOLO-ZION.md para contexto geral*
*Em caso de dúvida técnica, consulte CATEGORIAS-NOMENCLATURA.md*
*Para status detalhado, sempre use CHECKPOINT-SYSTEM.md*

**🚀 VAMOS CONTINUAR! O PROTOCOLO ZION PRECISA DE VOCÊ!**