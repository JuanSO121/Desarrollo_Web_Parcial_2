// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import { Palabra } from '../entity/Palabra.entity';

// export async function adivinarPalabra(req: Request, res: Response) {
//   try {
//     const { id } = req.params;
//     const { intento } = req.body;

//     const palabraRepository = getRepository(Palabra);
//     const palabra = await palabraRepository.findOne({ where: { id } });

//     if (!palabra) {
//       return res.status(404).json({ message: 'Palabra no encontrada' });
//     }

//     if (intento === palabra.texto) {
//       return res.status(200).json({ message: '¡Adivinaste la palabra correctamente!' });
//     } else {
//       return res.status(200).json({ message: 'Inténtalo de nuevo, la palabra no es correcta' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error al adivinar la palabra' });
//   }
// }