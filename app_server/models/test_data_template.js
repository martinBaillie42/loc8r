db.locations.save({
            name: 'The Falcon',
            address: '9 Cornmarket, High Wycombe HP11 2AX',
            rating: 4,
            facilities: ['Hot drinks', 'Food'],
            coords: {lat: 51.6292382, lng: -0.7534652},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '12:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '7:00am',
                closing: '12:00pm',
                closed: false
            },{
                days: 'Sunday',
                opening: '10:00am',
                closing: '11:00pm',
                closed: false
            }],
            reviews: [{
                author: 'Martin Baillie',
                rating: 5,
                timestamp: new Date('Mar 16, 2016'),
                reviewText: 'Not good'
            },{
                author: 'Joanna Tate',
                rating: 4,
                timestamp: new Date('Mar 10, 2016'),
                reviewText: 'They do Jacket Potatoes.'
            }]
        }
    )

db.locations.updateOne(
    { name: 'Starcups' },
    {
        $set: {
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: new Date ('16 July 2013'),
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            },{
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: new Date('16 July 2013'),
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    }
)