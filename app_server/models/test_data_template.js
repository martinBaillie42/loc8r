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

{
        "_id" : ObjectId("5784e8e0d2dc9a66fb094991"),
        "name" : "Starcups",
        "address" : "125 High Street, Reading, RG6 1PS",
        "rating" : 3,
        "facilities" : [
                "Hot drinks",
                "Food",
                "Premium wifi"
        ],
        "coords" : {
                "lat" : 51.455041,
                "lng" : -0.9690884
        },
        "openingTimes" : [
                {
                        "days" : "Monday - Friday",
                        "opening" : "7:00am",
                        "closing" : "7:00pm",
                        "closed" : false
                },
                {
                        "days" : "Saturday",
                        "opening" : "8:00am",
                        "closing" : "5:00pm",
                        "closed" : false
                },
                {
                        "days" : "Sunday",
                        "closed" : true
                }
        ],
        "reviews" : [
                {
                        "author" : "Simon Holmes",
                        "rating" : 5,
                        "timestamp" : ISODate("2013-07-16T00:00:00Z"),
                        "reviewText" : "What a great place. I can't say enough good things about it."
                },
                {
                        "author" : "Charlie Chaplin",
                        "rating" : 3,
                        "timestamp" : ISODate("2013-07-16T00:00:00Z"),
                        "reviewText" : "It was okay. Coffee wasn't great, but the wifi was fast."
                }
        ]
}
{
        "_id" : ObjectId("5784edabd2dc9a66fb094992"),
        "name" : "Pantry",
        "address" : "7 Park Parade Centre, Hazlemere, HP15 7AA",
        "rating" : 4,
        "facilities" : [
                "Hot drinks",
                "Food",
                "Premium wifi"
        ],
        "coords" : {
                "lat" : 51.6578833,
                "lng" : -0.7117882
        },
        "openingTimes" : [
                {
                        "days" : "Monday - Friday",
                        "opening" : "10:00am",
                        "closing" : "4:00pm",
                        "closed" : false
                },
                {
                        "days" : "Saturday",
                        "opening" : "11:00am",
                        "closing" : "3:00pm",
                        "closed" : false
                },
                {
                        "days" : "Sunday",
                        "closed" : true
                }
        ],
        "reviews" : [
                {
                        "author" : "Martin Baillie",
                        "rating" : 5,
                        "timestamp" : ISODate("2016-05-16T00:00:00Z"),
                        "reviewText" : "CAKE!"
                },
                {
                        "author" : "Joanna Tate",
                        "rating" : 4,
                        "timestamp" : ISODate("2016-04-10T00:00:00Z"),
                        "reviewText" : "No jacket potatos"
                }
        ]
}
{
        "_id" : ObjectId("5784f49dd2dc9a66fb094993"),
        "name" : "The Falcon",
        "address" : "9 Cornmarket, High Wycombe HP11 2AX",
        "rating" : 4,
        "facilities" : [
                "Hot drinks",
                "Food"
        ],
        "coords" : {
                "lat" : 51.6292382,
                "lng" : -0.7534652
        },
        "openingTimes" : [
                {
                        "days" : "Monday - Friday",
                        "opening" : "7:00am",
                        "closing" : "12:00pm",
                        "closed" : false
                },
                {
                        "days" : "Saturday",
                        "opening" : "7:00am",
                        "closing" : "12:00pm",
                        "closed" : false
                },
                {
                        "days" : "Sunday",
                        "opening" : "10:00am",
                        "closing" : "11:00pm",
                        "closed" : false
                }
        ],
        "reviews" : [
                {
                        "author" : "Martin Baillie",
                        "rating" : 5,
                        "timestamp" : ISODate("2016-03-16T00:00:00Z"),
                        "reviewText" : "Not good"
                },
                {
                        "author" : "Joanna Tate",
                        "rating" : 4,
                        "timestamp" : ISODate("2016-03-10T00:00:00Z"),
                        "reviewText" : "They do Jacket Potatoes."
                }
        ]
}