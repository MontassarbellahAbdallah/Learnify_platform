import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage: string = '';
  messages: Array<{ sender: string, text: string }> = []; // Liste des messages affichés dans la conversation

  constructor(private http: HttpClient) {}

  // Fonction pour envoyer le message de l'utilisateur au chatbot
  sendMessage() {
    if (this.userMessage.trim()) {
      // Ajouter le message de l'utilisateur à la conversation
      this.messages.push({ sender: 'user', text: this.userMessage });
  
      // Envoyer le message à l'API FastAPI
      this.http.post('http://127.0.0.1:8000/chat', { question: this.userMessage })  // Assurez-vous que vous envoyez 'question'
        .subscribe((response: any) => {
          // Ajouter la réponse du chatbot à la conversation
          this.messages.push({ sender: 'bot', text: response.response });
  
          // Réinitialiser le champ de message
          this.userMessage = '';
          console.log({ question: this.userMessage });
        }, error => {
          console.error('Erreur lors de l\'envoi du message:', error);
          alert(`Erreur: ${error.statusText || 'Une erreur est survenue'}`);
          
        });
    }
  }
  
}
