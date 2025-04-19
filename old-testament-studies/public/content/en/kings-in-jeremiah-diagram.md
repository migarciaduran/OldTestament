# Kings in Jeremiah's Narrative - Relationship Diagram

## Political and Prophetic Relationships

```mermaid
flowchart TB
    classDef righteous fill:#d4f1d4,stroke:#333,stroke-width:1px
    classDef wicked fill:#ffcccc,stroke:#333,stroke-width:1px
    classDef foreign fill:#e6e6ff,stroke:#333,stroke-width:1px
    classDef prophet fill:#ffffcc,stroke:#333,stroke-width:1px
    
    %% Kings and Prophet
    Jeremiah["Jeremiah\n(Prophet 627-post 586 BC)"]:::prophet
    
    Josiah["Josiah\n(640-609 BC)"]:::righteous
    Jehoahaz["Jehoahaz/Shallum\n(609 BC)"]:::wicked
    Jehoiakim["Jehoiakim\n(609-598 BC)"]:::wicked
    Jehoiachin["Jehoiachin/Coniah\n(598-597 BC)"]:::wicked
    Zedekiah["Zedekiah\n(597-586 BC)"]:::wicked
    
    %% Foreign Kings
    PharaohNecho["Pharaoh Necho II\n(Egypt)"]:::foreign
    Nebuchadnezzar["Nebuchadnezzar II\n(Babylon)"]:::foreign
    
    %% Relationships - succession
    Josiah -->|succeeded by| Jehoahaz
    Jehoahaz -->|succeeded by| Jehoiakim
    Jehoiakim -->|succeeded by| Jehoiachin
    Jehoiachin -->|succeeded by| Zedekiah
    
    %% Foreign interventions
    PharaohNecho -->|killed| Josiah
    PharaohNecho -->|deposed, exiled to Egypt| Jehoahaz
    PharaohNecho -->|installed| Jehoiakim
    Nebuchadnezzar -->|defeated at Carchemish| PharaohNecho
    Nebuchadnezzar -->|made vassal| Jehoiakim
    Nebuchadnezzar -->|exiled to Babylon| Jehoiachin
    Nebuchadnezzar -->|installed as puppet| Zedekiah
    Nebuchadnezzar -->|blinded, exiled| Zedekiah
    
    %% Jeremiah's relationships
    Jeremiah -->|began ministry\nduring reign of| Josiah
    Jeremiah -->|prophesied exile| Jehoahaz
    Jeremiah -->|opposed by,\nscroll burned| Jehoiakim
    Jeremiah -->|prophesied against\nas "broken pot"| Jehoiachin
    Jeremiah -->|advised surrender,\nimprisoned by| Zedekiah
    Jeremiah -->|called him\n"God's servant"| Nebuchadnezzar
    
    %% Legend
    Legend["Legend"]
    RighteousKing["Righteous King"]:::righteous
    WickedKing["Wicked King"]:::wicked
    ForeignRuler["Foreign Ruler"]:::foreign
    ProphetNode["Prophet"]:::prophet
    
    Legend --- RighteousKing
    Legend --- WickedKing
    Legend --- ForeignRuler
    Legend --- ProphetNode
```

## Timeline Overview

```mermaid
gantt
    title Kings During Jeremiah's Prophetic Ministry
    dateFormat YYYY
    axisFormat %Y BC
    
    section Kings of Judah
    Josiah           : done, jos, -640, -609
    Jehoahaz         : done, jez, -609, -609
    Jehoiakim        : done, jkm, -609, -598
    Jehoiachin       : done, jcn, -598, -597
    Zedekiah         : done, zed, -597, -586
    
    section Foreign Powers
    Egyptian Control : egypt, -609, -605
    Babylonian Control : babylon, -605, -586
    
    section Jeremiah's Ministry
    Prophetic Call   : active, call, -627, -627
    Scroll Written   : milestone, scroll, -604
    Scroll Burned    : milestone, burned, -604
    Cistern Incident : milestone, cistern, -587
    Jerusalem Falls  : milestone, fall, -586
    Taken to Egypt   : milestone, egypt2, -581
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