const Delta = {
    oblicz: ()=>{
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value; // pobiera z inputów wartości i przekształca na zmienne

        let delta = (b*b)-4*a*c;

        if(delta>0) // jeśli delta jest dodatnia, to ją wyrzuca na ekran
        {
            alert(delta)
        }else if (a == null || a == "", b == null || b == "", c == null || c == "") // sprawdza, czy input nie jest pusty
        {
            alert('Wypełnij najpierw pola')
        }else{alert('B.M.Z lub Delta = 0')} // błąd, gdy delta nie ma miejsc zerowych lub jest równa 0
    },

    mZer: ()=>
    {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value; // pobiera z inputów wartości i przekształca na zmienne
        let delta = (b*b)-4*a*c;

        if (delta>0) // jeśli delta jest dodatnia, to podaje miejsca zerowe
        {
            let x1 = ((b*-1)+Math.sqrt(delta))/(2*a)
            x1 = x1.toPrecision(3);
            let x2 = ((b*-1)-Math.sqrt(delta))/(2*a)
            x2 = x2.toPrecision(3);
            
            alert('x1: '+x1+'\nx2: '+x2)

            
        }else if (a == null || a == "", b == null || b == "", c == null || c == "") // sprawdza, czy input nie jest pusty
        {
            alert('Wypełnij najpierw pola')
        }else{
            alert("Delta na pewno wyszła dodatnio?")
        }
    },

    both: ()=>
    {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value; // pobiera z inputów wartości i przekształca na zmienne

        let delta = (b*b)-4*a*c;

        let x1 = ((b*-1)+Math.sqrt(delta))/(2*a)
        x1 = x1.toPrecision(3);
        let x2 = ((b*-1)-Math.sqrt(delta))/(2*a)
        x2 = x2.toPrecision(3);


        if(delta>0) // jeśli delta jest dodatnia, to ją wyrzuca na ekran
        {
            alert(
            'delta: '+delta+'\n\nx1: '+x1+'\nx2: '+x2
            )
        }else if (a == null || a == "", b == null || b == "", c == null || c == "") // sprawdza, czy input nie jest pusty
        {
            alert('Wypełnij najpierw pola')
        }else{alert('B.M.Z lub Delta = 0')} // błąd, gdy delta nie ma miejsc zerowych lub jest równa 0
    },
    clear: ()=>{
        if(a == null || a == "", b == null || b == "", c == null || c == "")
        {
            alert("nie ma co czyścić")
        }else{
            document.getElementById('a').value = ''
            document.getElementById('b').value = ''
            document.getElementById('c').value = ''
        }
    }
}
