const User = require('../model/user');
const bcrypt = require('bcrypt');

const findUserByEmail = async ({ email }) => await User.findOne({ email }); 

exports.create = async (request, response) => {
    const { user: userData } = request.body;

    try {
        const passwordHash = await bcrypt.hash(userData.password, 10);
        const existsEmail = await findUserByEmail(userData);

        if (!existsEmail || existsEmail.length > 0) {
            return response.status(401).json({ message: 'USER_EMAIL_EXISTS' });
        }

        const user = new User({
            ...userData,
            password: passwordHash,
        });
        await user.save();   

        response.status(200).json({ message: 'ok' });
    } catch (error) {
        response.status(500).json({ message: error.message });  
    }
};

exports.login = async (request, response) => {
    const { email, password } = request.body;
    
    try {
        const user = await findUserByEmail({ email });

        if (!user || user.length <= 0) {
            return response.status(404).json({ message: 'USER_NOT_FOUND'});
        }


        const compareHash = await bcrypt.compareSync(password, user.password);
        if (!compareHash) {
            return response.status(401).json({ message: 'EMAIL_OR_PASSWORD_INVALID' });
        }

        response.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};