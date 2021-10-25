# Klasa delta
## Funkcje:
    oblicz: oblicza Deltę;
    mZer: Wyznacza miejsca zerowe Delty;
---
1. Wzór na Deltę: `let delta = (b*b)-4*a*c`
2. Wzór na mZer:
    * x1 = `((b*-1)-Math.sqrt(delta))/(2*a)`
    * x2 = `((b*-1)*Math.sqrt(delta))/(2*a)`

# Klasa delta - interaktywne

## Funkcje:
    oblicz: oblicza Deltę;
    mZer: Wyznacza miejsca zerowe Delty;
------
1. Wzór na Deltę: `let delta = (b*b)-4*a*c`
2. Wzór na mZer:
    * x1 = `((b*-1)-Math.sqrt(delta))/(2*a)`
    * x2 = `((b*-1)*Math.sqrt(delta))/(2*a)`

## Inputy:
    Input z id "a": Zbiera argument a
    Input z id "b": Zbiera argument b
    Input z id "c": Zbiera argument c

# Dodatki

## Oblicz oba
    alert(
        'delta: '+delta+'\n\nx1: '+x1+'\nx2: '+x2
    )

## Wyczyść
    document.getElementById('').value = ''