import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-quiz',
  imports: [NgClass,NgIf,NgFor],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  currentIndex = 0;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  score = 0;
  showFeedback = false;
  isCorrect = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadQuestions();
  }
  getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  shuffleArray(array: any[]): any[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
  loadQuestions() {
   const allQuestions: Question[] = [
      {
        id:1,
        question: 'Quel langage est utilisé avec Angular ?',
        options: ['Java', 'TypeScript', 'Python', 'PHP'],
        answer: 'TypeScript'
      },
      {
        id:2,
        question: 'Quel est le framework CSS le plus populaire ?',
        options: ['Bootstrap', 'Bulma', 'Tailwind', 'Materialize'],
        answer: 'Bootstrap'
      },
      {
    id: 3,
    question: 'Quel est le rôle principal de HTML ?',
    options: ['Styliser les éléments', 'Structurer la page', 'Ajouter des animations', 'Gérer la base de données'],
    answer: 'Structurer la page'
  },
  {
    id: 4,
    question: 'Quel langage est exécuté côté client dans le navigateur ?',
    options: ['Java', 'PHP', 'JavaScript', 'Python'],
    answer: 'JavaScript'
  },
  {
    id: 5,
    question: 'Quel framework front-end est basé sur TypeScript ?',
    options: ['React', 'Angular', 'Vue.js', 'jQuery'],
    answer: 'Angular'
  },
  {
    id: 6,
    question: 'Quelle balise HTML est utilisée pour insérer une image ?',
    options: ['<image>', '<pic>', '<img>', '<src>'],
    answer: '<img>'
  },
  {
    id: 7,
    question: 'Quel langage est souvent utilisé pour le back-end avec MySQL ?',
    options: ['CSS', 'PHP', 'TypeScript', 'HTML'],
    answer: 'PHP'
  },
  {
    id: 8,
    question: 'Quel mot-clé est utilisé en JavaScript pour définir une fonction ?',
    options: ['def', 'function', 'fun', 'define'],
    answer: 'function'
  },
  {
    id: 9,
    question: 'Quel framework back-end utilise Express ?',
    options: ['Laravel', 'Spring', 'Node.js', 'Django'],
    answer: 'Node.js'
  },
  {
    id: 10,
    question: 'En CSS, que fait la propriété `display: flex;` ?',
    options: ['Ajoute une animation', 'Aligne les éléments en colonne ou en ligne', 'Ajoute un effet 3D', 'Crée une image'],
    answer: 'Aligne les éléments en colonne ou en ligne'
  },
  {
    id: 11,
    question: 'Quel fichier contient les dépendances d’un projet Node.js ?',
    options: ['package.json', 'index.js', 'main.js', 'server.js'],
    answer: 'package.json'
  },
  {
    id: 12,
    question: 'Quel framework PHP suit le modèle MVC ?',
    options: ['Laravel', 'jQuery', 'Bootstrap', 'React'],
    answer: 'Laravel'
  }
  ];
   const shuffled = this.shuffleArray(allQuestions);

  // Choisis un nombre aléatoire entre 3 et 12
  const count = this.getRandomInt(3, 12);

  // Coupe le tableau pour ne garder que "count" questions
  this.questions = shuffled.slice(0, count);
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
    const current = this.questions[this.currentQuestionIndex];
    this.isCorrect = option === current.answer;

    if (this.isCorrect) {
      this.score++;
    }

    this.showFeedback = true;

    setTimeout(() => {
      this.showFeedback = false;
      this.nextQuestion();
    }, 1000);
  }

  nextQuestion() {
    this.selectedAnswer = null;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.router.navigate(['/results'], {
        queryParams: {
          score: this.score,
          total: this.questions.length
        }
      });
    }
  }
  selectOption(option: string) {
    this.selectedAnswer = option;
    console.log('Réponse sélectionnée :', option);
    // Tu pourras ensuite ajouter une logique pour valider ou passer à la question suivante
  }
  quitGame() {
  if (confirm('Es-tu sûr de vouloir quitter le jeu ?')) {
    this.router.navigate(['/home']);
  }
}
}
