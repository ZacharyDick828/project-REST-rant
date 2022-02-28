const db = require('../models')


async function seed() {

    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Meh, might go again'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()