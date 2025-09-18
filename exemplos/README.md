# Exemplos de Implementação

> **Versão:** 1.0.0
> **Última Atualização:** Dezembro 2024

Esta pasta contém exemplos práticos de implementação do Protocolo ZION.

## Estrutura

```
exemplos/
├── basic-agent/                 # Agente básico para iniciantes
├── support-agent/               # Agente de suporte completo
├── sales-agent/                 # Agente de vendas/leads
├── workflows/                   # Workflows n8n prontos
│   ├── exemplo-padronizador-n8n-trocar-nomenclatura.json
└── README.md                    # Este arquivo
```

## Categorias de Exemplos

### 🚀 Básicos (Iniciantes)
- **basic-agent/**: Primeiro chatbot seguindo o 8-Step Pattern
- **webhook-simple/**: Webhook básico com validação

### 💼 Casos de Uso Reais
- **support-agent/**: Atendimento ao cliente completo
- **sales-agent/**: Qualificação e nutrição de leads
- **ecommerce-bot/**: Vendas e suporte e-commerce

### 🔧 Integrações
- **crm-integration/**: Sincronização com CRMs
- **payment-gateway/**: Processamento de pagamentos
- **api-middleware/**: Middleware para APIs externas

## Como Usar

1. Navegue até o exemplo desejado
2. Leia o README.md específico
3. Importe o workflow no n8n
4. Configure as credenciais necessárias
5. Ative e teste

## Padrão de Documentação

Cada exemplo deve conter:
- `README.md`: Documentação completa
- `workflow.json`: Definição do n8n
- `config.json`: Configurações
- `CHANGELOG.md`: Histórico de versões
- `/screenshots`: Capturas de tela
- `/tests`: Testes automatizados (quando aplicável)