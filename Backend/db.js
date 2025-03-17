const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('');

    const userSchema = new mongoose.Schema({
        username : {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
            maxLength: 30
        },
        firstName : {
            type: String,
            required : true,
            trim : true,
            maxLength: 50
        },
        lastName : {
            type: String,
            required : true,
            trim: true,
            maxLength: 50
        },

        password : {
            type: String,
            required: true,
            minLength: 6
        }
    });

    const User = mongoose.model('User', userSchema);

}

module.exports = {
    User
}
