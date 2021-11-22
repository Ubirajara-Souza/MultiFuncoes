import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private JogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.JogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this.JogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se a tabuleiro deve ser exibido.
   *
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.JogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   *
   * @return boolean
   */
  get showFinal(): boolean {
    return this.JogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   *
   * @return void
   */
   iniciarJogo($event: any): void {
    $event.preventDefault();
    this.JogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.JogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.JogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.JogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.JogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   *
   * @return number
   */
  get jogador(): number {
    return this.JogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   *
   * @return void
   */
   novoJogo($event): void {
    $event.preventDefault();
    this.JogoDaVelhaService.novoJogo();
  }

}
