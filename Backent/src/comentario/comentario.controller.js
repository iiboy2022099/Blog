import Comentario from './comentario.model.js';
import Publicacion from '../Publicacion/publicacion.model.js';

export const comentarioPost = async (req, res) => {
    try {
        const { contenido, autor, publicacionId } = req.body;

        const publicacion = await Publicacion.findById(publicacionId);
        if (!publicacion) {
            return res.status(404).json({
                msg: "La publicación no existe"
            });
        }

        const nuevoComentario = new Comentario({ contenido, autor });

        publicacion.comentario.push(nuevoComentario);

        await Promise.all([publicacion.save(), nuevoComentario.save()]);

        res.status(200).json({
            comentario: nuevoComentario,
            publicacion
        });
    } catch (error) {
        console.error("Error al añadir comentario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};



export const getComentarios = async (req, res) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    try {
      
        const [total, publicaciones] = await Promise.all([
      
            Publicacion.countDocuments(query),
            Publicacion.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        res.status(200).json({
            total,
            publicaciones
      
        });

    } 
    catch (error) {
        console.error('Error al obtener publicaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
