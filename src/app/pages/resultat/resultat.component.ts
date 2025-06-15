import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';Router
@Component({
  selector: 'app-resultat',
  imports: [RouterLink],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.scss'
})
export class ResultatComponent {
  score: number =0;
  total: number =0;
  message!:string;
  constructor(private route: ActivatedRoute,
    private router: Router
  ) {}
   ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.score = +params['score'] || 0;
      this.total = +params['total'] || 0;
    });
    this.setMessage();
  }
  setMessage(): void {
    if (this.score === this.total) {
      this.message = "🎉 Félicitations ! Vous avez répondu correctement à toutes les questions !";
    } else if (this.score >= this.total / 2) {
      this.message = "👍 Bien joué ! Vous avez eu plus de la moitié des réponses correctes.";
    } else if (this.score > 0) {
      this.message = "🙂 Vous avez répondu correctement à quelques questions. Continuez à pratiquer !";
    } else {
      this.message = "😢 Aucune bonne réponse cette fois... Réessayez, vous pouvez le faire !";
    }
  }
  quitGame() {
    if (confirm('Es-tu sûr de vouloir quitter le jeu ?')) {
      this.router.navigate(['/home']);
    }
  }
}
