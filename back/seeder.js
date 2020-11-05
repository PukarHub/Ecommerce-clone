const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/user')
const Product = require('./models/product')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

// To import data to DB
const importData = async () => {
try {
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers =  await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map(product => {
        return {...product, user: adminUser}
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
} catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
}
}

// To Destroy data from DB
const destroyData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()

    
        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
    }


    if(process.argv[2] === '-d'){
        destroyData()
    } else {
        importData()
    }