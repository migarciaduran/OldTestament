# Reyes de Judá: Cronología, Familia y Sumos Sacerdotes (Era de Jeremías)

Este diagrama muestra el orden cronológico de los últimos cinco reyes de Judá, sus relaciones familiares y los Sumos Sacerdotes que sirvieron durante sus reinados, correspondientes a la época del profeta Jeremías.

```mermaid
flowchart TD
    classDef rey fill:#lightblue,stroke:#333,stroke-width:1px
    classDef sacerdote fill:#lightgoldenrodyellow,stroke:#333,stroke-width:1px
    classDef successionLink stroke:#000,stroke-width:2px
    classDef familyLink stroke:#006400,stroke-width:1.5px,stroke-dasharray: 5 5

    subgraph Era_Josias [Reinado de Josías]
        direction TB
        Josias["<b>Josías</b><br/>(640-609 a.C.)<br/><i>Rey Justo</i>"]:::rey
        Hilcias["<i>Sumo Sacerdote:</i><br/><b>Hilcías</b><br/>(Encontró Libro de la Ley)"]:::sacerdote
        Josias -- Sacerdote Asociado --- Hilcias
    end

    subgraph Post_Josias [Sucesores]
        direction TB
        Joacaz["<b>Joacaz / Salum</b><br/>(609 a.C. - 3 meses)<br/><i>Hijo de Josías</i>"]:::rey
        Joacim["<b>Joacim / Eliaquim</b><br/>(609-598 a.C.)<br/><i>Hijo de Josías</i>"]:::rey
        Joaquin["<b>Joaquín / Jeconías</b><br/>(598-597 a.C. - 3 meses)<br/><i>Hijo de Joacim</i>"]:::rey
        Sedequias["<b>Sedequías / Matanías</b><br/>(597-586 a.C.)<br/><i>Hijo de Josías</i>"]:::rey
        Seraias["<i>Sumo Sacerdote:</i><br/><b>Seraías</b><br/>(Ejecutado 586 a.C.)"]:::sacerdote
        
        %% Vincular a Seraías con reyes posteriores (aproximado)
        Joacim -- Sacerdote Asociado --- Seraias
        Joaquin -- Sacerdote Asociado --- Seraias
        Sedequias -- Sacerdote Asociado --- Seraias
    end

    %% Enlaces de Sucesión
    Josias -->|Sucedido por Hijo| Joacaz
    Joacaz -->|Sucedido por Hermano| Joacim
    Joacim -->|Sucedido por Hijo| Joaquin
    Joaquin -->|Sucedido por Tío| Sedequias
    linkStyle 0,1,2,3 stroke:#000,stroke-width:2px

    %% Enlaces Familiares (Implícitos en etiquetas)

    %% Estilo para enlaces de Sacerdotes
    linkStyle 4,5,6 stroke:#aaa,stroke-width:1px,stroke-dasharray: 2 2

```

**Puntos Clave:**

*   **Sucesión:** Nótese la sucesión no lineal después de Josías: hijo -> hermano -> sobrino -> tío.
*   **Sumos Sacerdotes:** Hilcías está fuertemente asociado con las reformas de Josías. Seraías fue el Sumo Sacerdote durante los turbulentos años finales y la caída de Jerusalén.
*   **Familia:** Los últimos cuatro reyes estaban emparentados: tres eran hijos de Josías y uno era su nieto.