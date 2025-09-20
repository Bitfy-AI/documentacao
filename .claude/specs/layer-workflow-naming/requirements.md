# Documento de Requisitos - Sistema de Documentação de Nomenclatura de Camadas e Workflows

## Introdução

Este documento define os requisitos para um sistema completo de documentação das convenções de nomenclatura do Protocolo Zion, focado em camadas arquiteturais e workflows. O sistema visa padronizar e documentar todas as convenções de nomes utilizadas por mais de 130 agências de IA e 400+ profissionais no-code, garantindo consistência e facilidade de aprendizado para usuários não-técnicos. A solução é puramente documental (Markdown estático), sem necessidade de ferramentas ou comandos, servindo como referência definitiva para implementações do protocolo.

## Requisitos

### Requisito 1: Documentação da Estrutura de Repositórios

**História do Usuário:** Como um desenvolvedor no-code, eu quero ter documentação clara sobre como organizar pastas no n8n, para que eu possa estruturar meus projetos de forma consistente com o padrão Zion.

#### Critérios de Aceitação

1. WHEN um usuário consulta a documentação de estrutura de repositórios THEN o sistema SHALL apresentar a hierarquia completa de pastas do n8n com explicações em português
2. IF um usuário precisa criar uma nova pasta no n8n THEN a documentação SHALL fornecer o padrão de nomenclatura exato com exemplos práticos
3. WHERE a documentação menciona camadas arquiteturais (A-F) THEN SHALL incluir descrição detalhada de cada camada com sua função específica
4. WHEN um usuário busca entender a organização de workflows THEN a documentação SHALL mapear cada tipo de workflow para sua camada correspondente
5. IF um usuário não tem conhecimento técnico THEN todos os termos técnicos SHALL ser explicados em linguagem acessível com analogias do mundo real

### Requisito 2: Padrões de Nomenclatura de Nodes

**História do Usuário:** Como um criador de workflows no n8n, eu quero conhecer os padrões de nomenclatura de nodes, para que meus workflows sejam facilmente compreensíveis por outros membros da equipe.

#### Critérios de Aceitação

1. WHEN um usuário precisa nomear um node THEN a documentação SHALL fornecer o formato padrão `[STEP].[TYPE]:[ACTION]` com explicação de cada componente
2. IF um node pertence ao Octógono Zion THEN a documentação SHALL especificar a nomenclatura obrigatória para cada um dos 8 passos
3. WHERE existem tipos diferentes de nodes (HTTP, Database, etc.) THEN SHALL haver exemplos específicos para cada categoria
4. WHEN um usuário cria nodes auxiliares THEN a documentação SHALL definir convenções para nodes de suporte, erro e logging
5. WHILE um usuário está aprendendo THEN SHALL haver uma tabela de referência rápida com os padrões mais comuns

### Requisito 3: Nomenclatura de Entidades de Banco de Dados

**História do Usuário:** Como um usuário do Directus, eu quero entender como nomear coleções e campos, para que meu banco de dados siga os padrões do Protocolo Zion.

#### Critérios de Aceitação

1. WHEN um usuário cria uma coleção no Directus THEN a documentação SHALL especificar o padrão de nomenclatura para coleções (snake_case, prefixos, etc.)
2. IF uma coleção precisa de campos personalizados THEN SHALL haver convenções para nomenclatura de campos incluindo tipos de dados
3. WHERE existem relacionamentos entre coleções THEN a documentação SHALL definir padrões para chaves estrangeiras e tabelas de junção
4. WHEN um usuário precisa criar índices THEN SHALL haver convenções específicas para nomenclatura de índices
5. IF o usuário não conhece conceitos de banco de dados THEN SHALL haver explicações simplificadas com exemplos visuais

### Requisito 4: Sistema de Códigos de Erro

**História do Usuário:** Como um mantenedor de chatbots, eu quero um sistema padronizado de códigos de erro, para que eu possa diagnosticar e resolver problemas rapidamente.

#### Critérios de Aceitação

1. WHEN um erro ocorre em um workflow THEN a documentação SHALL fornecer o padrão `[DOMAIN]-[CATEGORY]-[NUMBER]` para códigos de erro
2. IF um novo tipo de erro é identificado THEN SHALL haver diretrizes para criar novos códigos mantendo consistência
3. WHERE erros são categorizados THEN SHALL existir uma taxonomia completa de categorias de erro (VAL, AUTH, DATA, etc.)
4. WHEN um usuário precisa documentar erros THEN SHALL haver templates para mensagens de erro user-friendly em português
5. WHILE tratando erros THEN a documentação SHALL incluir padrões para logging e rastreamento de erros

### Requisito 5: Documentação de Workflows

**História do Usuário:** Como um arquiteto de soluções no-code, eu quero padrões para documentar workflows, para que outros possam entender e manter minhas implementações.

#### Critérios de Aceitação

1. WHEN um workflow é criado THEN a documentação SHALL definir metadados obrigatórios (displayName, technicalId, version, tags)
2. IF um workflow precisa de documentação inline THEN SHALL haver padrões para comentários e anotações dentro do n8n
3. WHERE workflows são versionados THEN SHALL seguir versionamento semântico com explicação de major.minor.patch
4. WHEN um workflow é publicado THEN SHALL haver template para documentação README específica do workflow
5. IF múltiplos workflows interagem THEN SHALL haver padrões para documentar dependências e integrações

### Requisito 6: Arquitetura de 6 Camadas (A-F)

**História do Usuário:** Como um desenvolvedor iniciante no Protocolo Zion, eu quero entender a arquitetura de 6 camadas, para que eu possa organizar meus workflows corretamente.

#### Critérios de Aceitação

1. WHEN um usuário estuda a arquitetura THEN a documentação SHALL apresentar as 6 camadas (A-Apresentação até F-Fundação) com descrição detalhada
2. IF um workflow precisa ser classificado THEN SHALL haver critérios claros para determinar em qual camada ele pertence
3. WHERE camadas interagem THEN SHALL haver diagramas visuais mostrando o fluxo de dados entre camadas
4. WHEN um usuário implementa uma camada THEN SHALL haver exemplos práticos de workflows para cada camada
5. WHILE aprendendo a arquitetura THEN SHALL haver analogias com arquiteturas conhecidas (MVC, etc.) explicadas para no-coders

### Requisito 7: Trilha de Aprendizagem para Iniciantes

**História do Usuário:** Como um profissional no-code iniciante, eu quero uma trilha de aprendizagem estruturada, para que eu possa dominar as convenções do Protocolo Zion progressivamente.

#### Critérios de Aceitação

1. WHEN um iniciante acessa a documentação THEN SHALL haver um roteiro passo-a-passo começando com conceitos básicos
2. IF um usuário completa uma etapa THEN SHALL haver exercícios práticos com exemplos do mundo real
3. WHERE conceitos técnicos são introduzidos THEN SHALL haver glossário com definições simplificadas
4. WHEN um usuário tem dúvidas THEN SHALL haver seção FAQ com perguntas comuns de iniciantes
5. WHILE progredindo na trilha THEN SHALL haver checkpoints para auto-avaliação de conhecimento

### Requisito 8: Padrões de Preservação de Contexto

**História do Usuário:** Como um desenvolvedor de agentes conversacionais, eu quero padrões para preservação de contexto, para que meus chatbots mantenham conversas coerentes.

#### Critérios de Aceitação

1. WHEN um agente precisa manter contexto THEN a documentação SHALL definir estruturas de dados para armazenamento de contexto
2. IF o contexto atravessa múltiplas sessões THEN SHALL haver padrões para persistência e recuperação de contexto
3. WHERE contexto é compartilhado entre workflows THEN SHALL definir convenções para IDs de correlação e rastreamento
4. WHEN contexto expira THEN SHALL haver políticas de TTL (time-to-live) e limpeza de dados
5. WHILE gerenciando contexto THEN SHALL haver padrões para versionamento de estruturas de contexto

### Requisito 9: Níveis de Maturidade e Conformidade

**História do Usuário:** Como um gestor de equipe no-code, eu quero avaliar a maturidade das implementações, para que eu possa identificar áreas de melhoria.

#### Critérios de Aceitação

1. WHEN uma implementação é avaliada THEN a documentação SHALL definir níveis de maturidade (Inicial, Gerenciado, Definido, Quantificado, Otimizado)
2. IF um workflow precisa ser auditado THEN SHALL haver checklist de conformidade com o Protocolo Zion
3. WHERE melhorias são necessárias THEN SHALL haver roadmap de evolução entre níveis de maturidade
4. WHEN uma equipe adota o protocolo THEN SHALL haver métricas para medir aderência às convenções
5. WHILE evoluindo maturidade THEN SHALL haver guias de boas práticas para cada nível

### Requisito 10: Exemplos de Implementação Real

**História do Usuário:** Como um implementador prático, eu quero exemplos reais de implementação, para que eu possa aprender com casos de sucesso.

#### Critérios de Aceitação

1. WHEN um padrão é documentado THEN SHALL incluir pelo menos 3 exemplos reais de implementação
2. IF um exemplo usa código técnico (INT-CNX-001) THEN SHALL haver explicação detalhada de cada componente
3. WHERE exemplos são complexos THEN SHALL haver versões simplificadas para iniciantes e avançadas para experts
4. WHEN exemplos incluem integrações THEN SHALL mostrar casos com WhatsApp, Telegram, Email e outras plataformas
5. WHILE estudando exemplos THEN SHALL haver análise de casos de erro comuns e como evitá-los

### Requisito 11: Compatibilidade com Ferramentas Educacionais

**História do Usuário:** Como um aluno dos cursos Zion, eu quero que a documentação se alinhe com o material dos treinamentos, para que eu possa aplicar o que aprendo.

#### Critérios de Aceitação

1. WHEN a documentação referencia conceitos THEN SHALL usar a mesma terminologia dos cursos (Saia da Matrix, Expert em IA, etc.)
2. IF um conceito é ensinado diferentemente nos cursos THEN SHALL haver nota explicando a evolução ou variação
3. WHERE exercícios práticos existem THEN SHALL alinhar com atividades dos treinamentos oficiais
4. WHEN novos recursos são documentados THEN SHALL haver indicação de em qual curso/módulo são cobertos
5. WHILE mantendo consistência THEN SHALL haver versionamento sincronizado com atualizações dos cursos

### Requisito 12: Suporte Multilíngue para Display e Technical IDs

**História do Usuário:** Como um desenvolvedor em equipe internacional, eu quero clareza sobre quando usar português vs inglês, para que não haja confusão na nomenclatura.

#### Critérios de Aceitação

1. WHEN nomes são exibidos para usuários THEN SHALL usar português claro e descritivo
2. IF identificadores técnicos são criados THEN SHALL usar inglês seguindo padrões internacionais
3. WHERE ambos coexistem THEN SHALL haver mapeamento claro entre display names e technical IDs
4. WHEN documentando em português THEN termos técnicos universais SHALL permanecer em inglês com tradução
5. WHILE criando novos padrões THEN SHALL manter separação estrita entre camadas de idioma

## Requisitos Não-Funcionais

### Requisito 13: Acessibilidade e Clareza

**História do Usuário:** Como um usuário sem formação técnica, eu quero documentação que eu consiga entender, para que eu possa implementar o protocolo sem ajuda externa.

#### Critérios de Aceitação

1. WHEN termos técnicos são usados THEN SHALL haver definição imediata ou link para glossário
2. IF um conceito requer conhecimento prévio THEN SHALL haver seção de pré-requisitos claramente marcada
3. WHERE diagramas são utilizados THEN SHALL haver descrição textual alternativa
4. WHEN exemplos são fornecidos THEN SHALL começar do mais simples para o mais complexo
5. WHILE mantendo precisão técnica THEN linguagem SHALL ser acessível para público no-code

### Requisito 14: Manutenibilidade e Versionamento

**História do Usuário:** Como um mantenedor da documentação, eu quero um sistema que seja fácil de atualizar, para que a documentação permaneça sempre atual.

#### Critérios de Aceitação

1. WHEN a documentação é atualizada THEN SHALL seguir versionamento semântico com changelog
2. IF uma convenção muda THEN SHALL haver período de deprecação com avisos claros
3. WHERE múltiplas versões coexistem THEN SHALL haver tabela de compatibilidade
4. WHEN novos padrões são introduzidos THEN SHALL haver guia de migração de versões anteriores
5. WHILE evoluindo THEN SHALL manter retrocompatibilidade quando possível

### Requisito 15: Formato e Estrutura da Documentação

**História do Usuário:** Como um usuário da documentação, eu quero uma estrutura consistente e navegável, para que eu encontre rapidamente a informação que preciso.

#### Critérios de Aceitação

1. WHEN documentação é criada THEN SHALL ser em Markdown puro sem dependências externas
2. IF navegação é necessária THEN SHALL haver índice com links internos
3. WHERE seções se relacionam THEN SHALL haver cross-references apropriadas
4. WHEN tabelas são usadas THEN SHALL ser formatadas para legibilidade em texto puro
5. WHILE mantendo simplicidade THEN SHALL usar recursos Markdown padrão (não extended)

### Requisito 16: Padrão Obrigatório Octógono Zion

**História do Usuário:** Como um criador de workflows no n8n, eu quero implementar corretamente o padrão Octógono Zion de 8 passos, para que meus workflows sigam o núcleo mandatório do protocolo.

#### Critérios de Aceitação

1. WHEN um workflow é criado no n8n THEN SHALL implementar obrigatoriamente os 8 passos do Octógono na sequência exata: RECEBE, RASTREIA, VALIDA, ROTEIA, PROCESSA, AGREGA, CONFIRMA, ENTREGA
2. IF um passo do Octógono é implementado THEN SHALL usar o código de cor específico no n8n (verde=2, amarelo=3, laranja=4, roxo=5, azul=7) conforme mapeamento definido
3. WHERE cada passo é documentado THEN SHALL incluir sua função específica, inputs esperados, outputs produzidos e responsabilidades dentro do fluxo
4. WHEN um usuário precisa pular um passo THEN SHALL implementar um node placeholder explicando porque aquele passo não é necessário naquele contexto específico
5. WHILE implementando o Octógono THEN SHALL haver templates visuais em Mermaid e JSON do n8n para cada tipo de caso de uso (suporte, vendas, etc.)
6. IF um workflow não segue o Octógono THEN SHALL ser claramente marcado como "não-conformante" com justificativa documentada

### Requisito 17: Arquitetura de Times e Governança

**História do Usuário:** Como um gestor de equipe de IA, eu quero entender a estrutura de times e responsabilidades por camada, para que eu possa organizar minha equipe segundo o modelo de governança do Protocolo Zion.

#### Critérios de Aceitação

1. WHEN a arquitetura de 6 camadas (A-F) é documentada THEN SHALL incluir matriz RACI completa definindo responsabilidades de cada time por camada
2. IF uma camada precisa de manutenção THEN SHALL estar claro qual time é responsável: Frontend (Camada A), Tech Lead (Camadas B-C), Dev Team (Camada D), AI Team (Camada E), DevOps/SRE (Camada F)
3. WHERE times colaboram THEN SHALL haver fluxo documentado de implementação em 7 etapas: criação, revisão, teste, aprovação, deploy, monitoramento, otimização
4. WHEN decisões arquiteturais são tomadas THEN SHALL seguir modelo de governança com comitês por camada e processo de aprovação definido
5. WHILE gerenciando workflows THEN SHALL haver checklist de conformidade por time incluindo critérios de qualidade específicos de cada camada
6. IF conflitos entre times surgem THEN SHALL haver processo de escalonamento e resolução baseado na matriz de responsabilidades

### Requisito 18: Templates Visuais e Guias de Implementação

**História do Usuário:** Como um designer de workflows visuais, eu quero templates prontos e guias visuais, para que eu possa criar workflows visualmente consistentes e profissionais.

#### Critérios de Aceitação

1. WHEN um template visual é fornecido THEN SHALL incluir diagrama Mermaid completo do Octógono com cores, ícones e anotações
2. IF um template n8n é criado THEN SHALL incluir estrutura JSON com Sticky Notes configurados com as cores corretas (2,3,4,5,7) e textos padrão
3. WHERE templates são categorizados THEN SHALL haver versões específicas por domínio (SUP, VEN, MKT, etc.) com exemplos contextualizados
4. WHEN guias de implementação são criados THEN SHALL incluir screenshots do n8n mostrando o resultado visual esperado
5. WHILE usando templates THEN SHALL haver variações para diferentes complexidades: básico (8 nodes), intermediário (com sub-workflows), avançado (com paralelismo e agregação)
6. IF um usuário personaliza um template THEN SHALL haver diretrizes sobre o que pode ser modificado mantendo conformidade com o Octógono

## Conclusão

Este documento estabelece os requisitos fundamentais para criar um sistema completo de documentação das convenções de nomenclatura do Protocolo Zion. A implementação destes requisitos garantirá que as 130+ agências e 400+ profissionais tenham uma referência única, clara e acessível para padronizar suas implementações no-code.

Com a adição dos requisitos do padrão Octógono Zion (núcleo mandatório do protocolo), estrutura de governança com times especializados, e templates visuais padronizados, o sistema de documentação abrange todos os aspectos críticos necessários para implementações consistentes e de alta qualidade, preservando a qualidade e consistência do protocolo enquanto mantém baixa a barreira de entrada para novos usuários.