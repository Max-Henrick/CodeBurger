import * as Yup from 'yup'
import User from '../models/User'

class LoginController {
    async store(request, response) {
        const schema = Yup.object().shape({
            email: Yup.string().required().email(),
            password: Yup.string().required()
        })

        const isValidEmailAndPassword = () => {
            return response.status(401).json('Error: Email ou senha incorreto')
        }

        if (!(await schema.isValid(request.body))){
            isValidEmailAndPassword()
        }

        const { email, password} = request.body

        const user = await User.findOne({
            where:{ email }
        })

        if (! user) {
            isValidEmailAndPassword()
        }

        if (!(await user.checkPassword(password))) {
            isValidEmailAndPassword()
        }

        return response.json({id: user.id, email, name: user.name, admin: user.admin})
    }
}

export default new LoginController