import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"
class CreateMassegeController {

    async handle(request: Request, response: Response) {

        const { message } = request.body;

        try {

            const service = new AuthenticateUserService();
            const result = await service.execute(message);

            return response.json(result)
        } catch (err) {
            return response.json({error:err.message});
        }

    }

}

export { CreateMassegeController }