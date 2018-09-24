import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'campus-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  cursos: any;

  constructor() { }

  ngOnInit() { 

    this.cursos = [
      {
        nome: 'Desenvolvimento NodeJS',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'Core Universal',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        nome: 'Fundamentos de Front-End',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'RT Digital Foundation',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        nome: 'Fundamentos de Front-End',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'RT Digital Foundation',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        nome: 'Fundamentos de Front-End',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'RT Digital Foundation',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        nome: 'Fundamentos de Front-End',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'RT Digital Foundation',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      },
      {
        nome: 'Fundamentos de Front-End',
        descricao: 'Normal The Normal type is the most basic type of Pokémon. They are very common and ...',
        aulas: 20,
        avaliacao: 4.8,
        instrutor: 'RT Digital Foundation',
        imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg',
        link: '/curso-detalhe/'
      }
    ];

  }

}
