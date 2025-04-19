# Kings in Jeremiah's Narrative - Relationship Diagram

## Political and Prophetic Relationships

```mermaid
flowchart TB
    classDef righteous fill:#d4f1d4,stroke:#333,stroke-width:1px
    classDef wicked fill:#ffcccc,stroke:#333,stroke-width:1px
    classDef foreign fill:#e6e6ff,stroke:#333,stroke-width:1px
    classDef prophet fill:#ffffcc,stroke:#333,stroke-width:1px
    
    %% Kings and Prophet
    Jeremiah["Jeremiah<br/>(Prophet 627-post 586 BC)"]:::prophet
    
    Josiah["Josiah<br/>(640-609 BC)"]:::righteous
    Jehoahaz["Jehoahaz/Shallum<br/>(609 BC)"]:::wicked
    Jehoiakim["Jehoiakim/Eliakim<br/>(609-598 BC)"]:::wicked
    Jehoiachin["Jehoiachin/Coniah<br/>(598-597 BC)"]:::wicked
    Zedekiah["Zedekiah/Mattaniah<br/>(597-586 BC)"]:::wicked
    
    %% Foreign Kings
    PharaohNecho["Pharaoh Necho II<br/>(Egypt)"]:::foreign
    Nebuchadnezzar["Nebuchadnezzar II<br/>(Babylon)"]:::foreign
    
    %% Relationships - succession (Solid lines)
    Josiah -->|succeeded by| Jehoahaz
    Jehoahaz -->|succeeded by| Jehoiakim
    Jehoiakim -->|succeeded by| Jehoiachin
    Jehoiachin -->|succeeded by| Zedekiah
    
    %% Foreign interventions (Solid lines)
    PharaohNecho -->|killed| Josiah
    PharaohNecho -->|deposed, exiled to Egypt| Jehoahaz
    PharaohNecho -->|installed| Jehoiakim
    Nebuchadnezzar -->|defeated at Carchemish| PharaohNecho
    Nebuchadnezzar -->|made vassal| Jehoiakim
    Nebuchadnezzar -->|exiled to Babylon| Jehoiachin
    Nebuchadnezzar -->|installed as puppet| Zedekiah
    Nebuchadnezzar -->|blinded, exiled| Zedekiah
    
    %% Jeremiah's relationships (Solid lines)
    Jeremiah -->|began ministry<br/>during reign of| Josiah
    Jeremiah -->|prophesied exile| Jehoahaz
    Jeremiah -->|opposed by,<br/>scroll burned| Jehoiakim
    Jeremiah -->|prophesied against<br/>as &quot;broken pot&quot;| Jehoiachin
    Jeremiah -->|advised surrender,<br/>imprisoned by| Zedekiah
    Jeremiah -->|called him<br/>&quot;God's servant&quot;| Nebuchadnezzar
    
    %% Legend
    Legend[("Legend")]
    RighteousKing["Righteous King"]:::righteous
    WickedKing["Wicked King"]:::wicked
    ForeignRuler["Foreign Ruler"]:::foreign
    ProphetNode["Prophet"]:::prophet
    
    Legend --- RighteousKing
    Legend --- WickedKing
    Legend --- ForeignRuler
    Legend --- ProphetNode
```

## Family Relationships

```mermaid
flowchart TB
    classDef king fill:#f9f9f9,stroke:#333,stroke-width:1px
    classDef familyLink stroke:#006400,stroke-width:2px,stroke-dasharray: 5 5

    Josiah["Josiah"]:::king
    Jehoahaz["Jehoahaz/Shallum"]:::king
    Jehoiakim["Jehoiakim/Eliakim"]:::king
    Jehoiachin["Jehoiachin/Coniah"]:::king
    Zedekiah["Zedekiah/Mattaniah"]:::king

    %% Family Relationships (Dashed green lines)
    Josiah -.->|father of| Jehoahaz
    Josiah -.->|father of| Jehoiakim
    Josiah -.->|father of| Zedekiah
    Jehoiakim -.->|father of| Jehoiachin
    Zedekiah -.->|uncle of| Jehoiachin
    linkStyle 0,1,2,3,4 stroke:#006400,stroke-width:2px,stroke-dasharray: 5 5

    %% Legend
    Legend[("Legend")]
    KingNode["King"]:::king
    FamilyRel["--- Family Tie"]:::familyLink

    Legend --- KingNode
    Legend --- FamilyRel
```

## Timeline Overview

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f9f9f9', 'primaryBorderColor': '#ccc'}}}%%
gantt
    title Kings During Jeremiah's Prophetic Ministry
    dateFormat YYYY
    axisFormat %Y BC
    
    section Kings of Judah
    Josiah (640-609 BC)           : josiah, -640, -609
    Jehoahaz (609 BC)             : jehoahaz, -609, -609
    Jehoiakim (609-598 BC)        : jehoiakim, -609, -598
    Jehoiachin (598-597 BC)       : jehoiachin, -598, -597
    Zedekiah (597-586 BC)         : zedekiah, -597, -586
    
    section Foreign Powers
    Egyptian Control      : egypt, -609, -605
    Babylonian Control    : babylon, -605, -586
    
    section Jeremiah's Ministry
    Prophetic Call (627 BC)     : milestone, call, -627, 0
    Scroll Written (604 BC)     : milestone, scroll, -604, 0
    Scroll Burned (604 BC)      : milestone, burned, -604, 0
    Cistern Incident (587 BC)   : milestone, cistern, -587, 0
    Jerusalem Falls (586 BC)    : milestone, fall, -586, 0
    Taken to Egypt (581 BC)     : milestone, egypt2, -581, 0
```

## Key Relationships in Jeremiah's Ministry

1. **Jeremiah and Josiah**: Compatible relationship - both working toward religious reform
2. **Jeremiah and Jehoiakim**: Antagonistic relationship - direct opposition and persecution
3. **Jeremiah and Zedekiah**: Complex relationship - Zedekiah sought counsel but lacked courage to follow it
4. **Jeremiah and Nebuchadnezzar**: Theological relationship - interpreted Babylon as God's instrument of judgment

## Impact on Jeremiah's Message

The succession of kings significantly influenced Jeremiah's prophetic message:

- Under **Josiah**: Messages focused on hope for reform and averting judgment
- Under **Jehoiakim**: Warnings intensified, focus on coming judgment
- Under **Jehoiachin**: Brief but severe pronouncements about dynastic termination
- Under **Zedekiah**: Emphasis on surrender to Babylon as God's will, followed by future restoration