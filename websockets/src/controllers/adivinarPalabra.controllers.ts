import { getRepository } from 'typeorm';
import { Palabra } from '../entity/Palabra.entity';
import { Categoria } from '../entity/Categoria.entity';
import  {SaladeJuego} from '../entity/SaladeJuego.entity';


//POSTMAN
//Crea una solicitud POST a http://localhost:3000/juego/iniciar/1 (reemplaza 1 con el ID de la sala correcto) para iniciar un juego.


//    Crea una solicitud POST a http://localhost:3000/juego/iniciar/1 para iniciar un juego con ID de sala igual a 1.
//Crea una solicitud POST a http://localhost:3000/juego/procesar-letra/A para procesar la letra "A".
//Crea una solicitud POST a http://localhost:3000/juego/pasar-turno para pasar el turno.
export class JuegoAdivinarPalabra {
  private palabraActual: string = '';
  //private palabraActualDivs: HTMLDivElement[] = [];
  private letrasIngresadas: string[] = [];
  private intentosRestantes: number = 5;
  private puntajesJugadores: Map<string, number> = new Map();
  private turnoJugador: string = '';
  private tiempoRestante: number = 60; // Tiempo en segundos
  private tiempoTurno: number = 30; // Tiempo en segundos por turno
  private SaladeJuego: SaladeJuego | null = null;

  constructor(private salaId: number) {}

  public async iniciarJuego(): Promise<void> {
    // Obtener la sala de juego actual
    const salaRepo = getRepository(SaladeJuego);
    this.SaladeJuego = await salaRepo.findOne(this.salaId, { relations: ['categoria'] });

    // Obtener palabras de la categoría de la sala
    if (this.SaladeJuego && this.SaladeJuego.cate_id) {
      const categoriaId = this.SaladeJuego.cate_id.id;
      const palabraRepo = getRepository(Palabra);
      const palabras = await palabraRepo.createQueryBuilder('palabra')
        .innerJoin('palabra.categorias', 'categoria')
        .where('categoria.id = :id', { id: categoriaId })
        .getMany();

      // Seleccionar una palabra al azar
      const palabraIndex = Math.floor(Math.random() * palabras.length);
      this.palabraActual = palabras[palabraIndex].texto.toUpperCase();

      // Inicializar divs de palabra actual
     // this.palabraActualDivs = [];
      const palabraDiv = document.getElementById('palabra');
      if (palabraDiv) {
        palabraDiv.innerHTML = '';
        for (let i = 0; i < this.palabraActual.length; i++) {
          const divLetra = document.createElement('div');
          divLetra.className = 'letra';
          palabraDiv.appendChild(divLetra);
     //     this.palabraActualDivs.push(divLetra);
        }
      }

      // Inicializar intentos restantes y letras ingresadas
      this.intentosRestantes = 5;
      this.letrasIngresadas = [];
      this.actualizarInfoJuego();

      // Iniciar temporizador
      this.tiempoRestante = this.tiempoTurno;
      this.actualizarTiempo();

      // Iniciar turno de jugador
      this.turnoJugador = 'Jugador1';
      this.actualizarTurno();

      // Notificar inicio de juego a jugadores
      this.notificarInicioJuego();
    }
}

  // Métodos restantes...

  private actualizarInfoJuego(): void {
    // Actualizar la interfaz de usuario con la información actual del juego
}

  private actualizarTiempo(): void {
    // Actualizar la interfaz de usuario con el tiempo restante
}

  private actualizarTurno(): void {
    // Actualizar la interfaz de usuario con el turno actual
 }

  private async notificarInicioJuego(): Promise<void> {
    // Implementar notificación a los jugadores de que el juego ha iniciado
}

}
