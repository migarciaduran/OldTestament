# Kings of Judah: Timeline, Family, and High Priests (Jeremiah's Era)

This diagram shows the chronological order of the last five kings of Judah, their family relationships, and the High Priests serving during their reigns, corresponding to the time of the prophet Jeremiah.

```mermaid
flowchart TD
    classDef king fill:#lightblue,stroke:#333,stroke-width:1px
    classDef priest fill:#lightgoldenrodyellow,stroke:#333,stroke-width:1px
    classDef successionLink stroke:#000,stroke-width:2px
    classDef familyLink stroke:#006400,stroke-width:1.5px,stroke-dasharray: 5 5

    subgraph Josiah_Era [Josiah's Reign]
        direction TB
        Josiah["<b>Josiah</b><br/>(640-609 BC)<br/><i>Righteous King</i>"]:::king
        Hilkiah["<i>High Priest:</i><br/><b>Hilkiah</b><br/>(Found Book of Law)"]:::priest
        Josiah -- Associated Priest --- Hilkiah
    end

    subgraph Post_Josiah [Successors]
        direction TB
        Jehoahaz["<b>Jehoahaz / Shallum</b><br/>(609 BC - 3 months)<br/><i>Son of Josiah</i>"]:::king
        Jehoiakim["<b>Jehoiakim / Eliakim</b><br/>(609-598 BC)<br/><i>Son of Josiah</i>"]:::king
        Jehoiachin["<b>Jehoiachin / Coniah</b><br/>(598-597 BC - 3 months)<br/><i>Son of Jehoiakim</i>"]:::king
        Zedekiah["<b>Zedekiah / Mattaniah</b><br/>(597-586 BC)<br/><i>Son of Josiah</i>"]:::king
        Seraiah["<i>High Priest:</i><br/><b>Seraiah</b><br/>(Executed 586 BC)"]:::priest
        
        %% Link Seraiah to later kings (approximate)
        Jehoiakim -- Associated Priest --- Seraiah
        Jehoiachin -- Associated Priest --- Seraiah
        Zedekiah -- Associated Priest --- Seraiah
    end

    %% Succession Links
    Josiah -->|Succeeded by Son| Jehoahaz
    Jehoahaz -->|Succeeded by Brother| Jehoiakim
    Jehoiakim -->|Succeeded by Son| Jehoiachin
    Jehoiachin -->|Succeeded by Uncle| Zedekiah
    linkStyle 0,1,2,3 stroke:#000,stroke-width:2px

    %% Family Links (Implicit in labels, could add explicit dashed lines if needed)
    %% Josiah -.-> Jehoahaz
    %% Josiah -.-> Jehoiakim
    %% Josiah -.-> Zedekiah
    %% Jehoiakim -.-> Jehoiachin
    %% Zedekiah -.-> Jehoiachin

    %% Styling for Priest links
    linkStyle 4,5,6 stroke:#aaa,stroke-width:1px,stroke-dasharray: 2 2

```

**Key Points:**

*   **Succession:** Note the non-linear succession after Josiah: son -> brother -> nephew -> uncle.
*   **High Priests:** Hilkiah is strongly associated with Josiah's reforms. Seraiah was the High Priest during the final turbulent years and the fall of Jerusalem.
*   **Family:** All the last four kings were related: three were sons of Josiah, and one was his grandson.