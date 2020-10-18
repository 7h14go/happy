const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    //inserir dados na tabela
/*     await saveOrphanage(db, {
        lat: "-20.3629347",
        lng: "-40.3098321",
        name: "Lar das meninos",
        about:"Presta assistência a criança de 06 e 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "99999999",
        images:[
            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horários de visitas das 05h até 16h",
        open_on_weekends: "0"
    }) */
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consulta por ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    //deletar dado da tabela
    //await db.run('DELETE FROM orphanages WHERE id = "4"')
})