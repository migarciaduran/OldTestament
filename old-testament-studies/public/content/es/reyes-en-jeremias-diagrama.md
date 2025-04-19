# Reyes en la Narrativa de Jeremías - Diagrama de Relaciones

## Relaciones Políticas y Proféticas

```mermaid
flowchart TB
    classDef justo fill:#d4f1d4,stroke:#333,stroke-width:1px
    classDef malvado fill:#ffcccc,stroke:#333,stroke-width:1px
    classDef extranjero fill:#e6e6ff,stroke:#333,stroke-width:1px
    classDef profeta fill:#ffffcc,stroke:#333,stroke-width:1px
    
    %% Reyes y Profeta
    Jeremias["Jeremías<br/>(Profeta 627-post 586 a.C.)"]:::profeta
    
    Josias["Josías<br/>(640-609 a.C.)"]:::justo
    Joacaz["Joacaz / Salum<br/>(609 a.C.)"]:::malvado
    Joacim["Joacim / Eliaquim<br/>(609-598 a.C.)"]:::malvado
    Joaquin["Joaquín / Jeconías / Conías<br/>(598-597 a.C.)"]:::malvado
    Sedequias["Sedequías / Matanías<br/>(597-586 a.C.)"]:::malvado
    
    %% Reyes Extranjeros
    FaraonNecao["Faraón Necao II<br/>(Egipto)"]:::extranjero
    Nabucodonosor["Nabucodonosor II<br/>(Babilonia)"]:::extranjero
    
    %% Relaciones - sucesión (Líneas sólidas)
    Josias -->|sucedido por| Joacaz
    Joacaz -->|sucedido por| Joacim
    Joacim -->|sucedido por| Joaquin
    Joaquin -->|sucedido por| Sedequias
    
    %% Intervenciones extranjeras (Líneas sólidas)
    FaraonNecao -->|mató a| Josias
    FaraonNecao -->|depuso, exilió a Egipto| Joacaz
    FaraonNecao -->|instaló a| Joacim
    Nabucodonosor -->|derrotó en Carquemis| FaraonNecao
    Nabucodonosor -->|hizo vasallo a| Joacim
    Nabucodonosor -->|exilió a Babilonia| Joaquin
    Nabucodonosor -->|instaló como títere| Sedequias
    Nabucodonosor -->|cegó, exilió| Sedequias
    
    %% Relaciones de Jeremías (Líneas sólidas)
    Jeremias -->|inició ministerio<br/>durante reinado de| Josias
    Jeremias -->|profetizó exilio| Joacaz
    Jeremias -->|opuesto por,<br/>rollo quemado| Joacim
    Jeremias -->|profetizó contra él<br/>como &quot;vasija quebrada&quot;| Joaquin
    Jeremias -->|aconsejó rendición,<br/>encarcelado por| Sedequias
    Jeremias -->|lo llamó<br/>&quot;siervo de Dios&quot;| Nabucodonosor
    
    %% Leyenda
    Leyenda[("Leyenda")]
    ReyJusto["Rey Justo"]:::justo
    ReyMalvado["Rey Malvado"]:::malvado
    GobernanteExtranjero["Gobernante Extranjero"]:::extranjero
    NodoProfeta["Profeta"]:::profeta
    
    Leyenda --- ReyJusto
    Leyenda --- ReyMalvado
    Leyenda --- GobernanteExtranjero
    Leyenda --- NodoProfeta
```

## Relaciones Familiares

```mermaid
flowchart TB
    classDef rey fill:#f9f9f9,stroke:#333,stroke-width:1px
    classDef familyLink stroke:#006400,stroke-width:2px,stroke-dasharray: 5 5

    Josias["Josías"]:::rey
    Joacaz["Joacaz / Salum"]:::rey
    Joacim["Joacim / Eliaquim"]:::rey
    Joaquin["Joaquín / Jeconías / Conías"]:::rey
    Sedequias["Sedequías / Matanías"]:::rey

    %% Relaciones Familiares (Líneas verdes discontinuas)
    Josias -.->|padre de| Joacaz
    Josias -.->|padre de| Joacim
    Josias -.->|padre de| Sedequias
    Joacim -.->|padre de| Joaquin
    Sedequias -.->|tío de| Joaquin
    linkStyle 0,1,2,3,4 stroke:#006400,stroke-width:2px,stroke-dasharray: 5 5

    %% Leyenda
    Leyenda[("Leyenda")]
    NodoRey["Rey"]:::rey
    LazoFamiliar["--- Lazo Familiar"]:::familyLink

    Leyenda --- NodoRey
    Leyenda --- LazoFamiliar
```

## Panorama Cronológico

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f9f9f9', 'primaryBorderColor': '#ccc'}}}%%
gantt
    title Reyes Durante el Ministerio Profético de Jeremías
    dateFormat YYYY
    axisFormat %Y a.C.
    
    section Reyes de Judá
    Josías (640-609 a.C.)           : josias, -640, -609
    Joacaz / Salum (609 a.C.)       : joacaz, -609, -609
    Joacim / Eliaquim (609-598 a.C.): joacim, -609, -598
    Joaquín / Jeconías (598-597 a.C.): joaquin, -598, -597
    Sedequías / Matanías (597-586 a.C.): sedequias, -597, -586
    
    section Potencias Extranjeras
    Control Egipcio      : egipto, -609, -605
    Control Babilónico   : babilonia, -605, -586
    
    section Ministerio de Jeremías
    Llamado Profético (627 a.C.)   : milestone, llamado, -627, 0
    Rollo Escrito (604 a.C.)       : milestone, rollo, -604, 0
    Rollo Quemado (604 a.C.)       : milestone, quemado, -604, 0
    Incidente Cisterna (587 a.C.)  : milestone, cisterna, -587, 0
    Caída de Jerusalén (586 a.C.)  : milestone, caida, -586, 0
    Llevado a Egipto (581 a.C.)    : milestone, egipto2, -581, 0
```

## Relaciones Clave en el Ministerio de Jeremías

1.  **Jeremías y Josías**: Relación compatible - ambos trabajaban por la reforma religiosa
2.  **Jeremías y Joacim**: Relación antagónica - oposición directa y persecución
3.  **Jeremías y Sedequías**: Relación compleja - Sedequías buscó consejo pero careció de valor para seguirlo
4.  **Jeremías y Nabucodonosor**: Relación teológica - interpretó a Babilonia como instrumento de juicio de Dios

## Impacto en el Mensaje de Jeremías

La sucesión de reyes influyó significativamente en el mensaje profético de Jeremías:

-   Bajo **Josías**: Mensajes centrados en la esperanza de reforma y evitar el juicio
-   Bajo **Joacim**: Advertencias intensificadas, enfoque en el juicio venidero
-   Bajo **Joaquín**: Pronunciamientos breves pero severos sobre la terminación dinástica
-   Bajo **Sedequías**: Énfasis en la rendición a Babilonia como voluntad de Dios, seguido de restauración futura