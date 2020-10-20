const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // // inserir os dados na tabela de
    // await saveOrphanage(db, {
    //     lat: "-23.644602",
    //     lng: "-46.5619968",
    //     name: "Núcleo Convivência Meninas", 
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", 
    //     whatsapp: "(11) 99999-9999",
    //     images: [
    //         "https://images.unsplash.com/photo-1595295413110-3304e36b564f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),

    //     instrucions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "1"
    // })

    // consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages)

    // //consultar somenteum orphanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "7"')
    // console.log(orphanage)

    // // deletar dados da tabela 
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "7"'))
    //console.log(await db.run('UPDATE orphanages SET name = "Núcleo Convivência Meninos" WHERE id = "11" '))
})