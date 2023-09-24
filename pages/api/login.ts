import type {NextApiRequest, NextApiResponse} from 'next';

export default (
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if(req.method === 'Post'){
        const {login,senha} = req.body;

        if(login === 'admin@admin.com' &&
            senha === 'admin@123'){
                 res.status(200).json ({msg : 'usuario autenticado com sucesso'});
        }
        return res.status(405).json({erro : 'Usuario nao encontrado'});
    }
    return res.status(405).json({erro : 'Metodo informado nao e valido'});       
}