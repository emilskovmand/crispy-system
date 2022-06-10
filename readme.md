# Crispy-system

### Opsætning til udvikling

For at opsætte systemet til at kunne blive udviklet på. Skal man have opsat **node/npm** på sin udvikler maskine. [Link til npm.](https://nodejs.org/en/download/)

Derefter skal man eksekvere følgende kommando i roden af projektet, som sørger for at installere de nødvendige dependencies for både back-end og front-end delene af applikationen.

```
npm install && cd client && npm install
```

Derefter er du klar!

### Hvordan tester man systemet?

For at teste systemet skal man først have opsat systemet til udvikling. Derefter skal man køre npm test i roden af projektet.

Som strukturvalg skal unittests ligges under **`__tests__`** mappen, og hver fil skal ende med **.test.js**, som vores unittests libraries kan forstå.

I øjeblikket bliver følgende libraries brugt til at unitteste systemet:

-   jest (Det primære test library, som gør brug af vores andre test libraries. jest er hvad der bliver brugt når man kører `npm test`)
-   supertest (Til at mock http requests)

Når din maskine er sat op til udvikling kan følgende kommando blive kørt til at teste alle vores unittests:

```
npm test
```

jest vil derefter udskrive mængden af unittests som bestod og fejlede, samt eksekveringstid i sekunder. Nedenunder er en liste af nuværende unittests (10/06 - 2022):

-   Addition Test
-   Subtraction Test
-   Multiplication Test
-   Division Test
