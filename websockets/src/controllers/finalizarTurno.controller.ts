// Definición de la clase SalaDeJuego

class SalaDeJuego {
  private jugadores: string[];
  private turnoActual: number;

  constructor() {
      this.jugadores = [];
      this.turnoActual = -1;
  }

  // Método para agregar jugadores a la sala
  agregarJugador(jugador: string) {
      this.jugadores.push(jugador);
  }

  // Método para asignar el turno
  asignarTurno() {
      this.turnoActual = (this.turnoActual + 1) % this.jugadores.length;
      return this.jugadores[this.turnoActual];
  }

  // Método para finalizar el turno
  finalizarTurno() {
      this.turnoActual = -1;
  }

  // Método para obtener el turno actual
  obtenerTurnoActual() {
      return this.jugadores[this.turnoActual];
  }
}

// Uso de la clase SalaDeJuego
const sala = new SalaDeJuego();
sala.agregarJugador("Jugador 1");
sala.agregarJugador("Jugador 2");
sala.agregarJugador("Jugador 3");

// Asignar y finalizar turnos
console.log("Turno de:", sala.asignarTurno());
console.log("Turno de:", sala.asignarTurno());
console.log("Turno de:", sala.asignarTurno());
sala.finalizarTurno();
console.log("Turno de:", sala.asignarTurno());
