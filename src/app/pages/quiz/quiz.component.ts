import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { questions } from '../../models/mock-list.component';
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
  listeQuestions!:Question[];
  constructor(private router: Router) {
    this.listeQuestions = questions;
  }

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
   const allQuestions: Question[] = this.listeQuestions;
   const shuffled = this.shuffleArray(allQuestions);

  // Choisis un nombre aléatoire entre 3 et 12
  const count = this.getRandomInt(8, 20);

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
