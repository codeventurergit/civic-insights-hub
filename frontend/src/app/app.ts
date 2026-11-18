import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmbedPortalService, SampleAiPrompt } from './embed-portal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private sanitizer = inject(DomSanitizer);
  private portalService = inject(EmbedPortalService);

  activeTab: 'tableau' | 'html' | 'pdf' | 'blog' | 'ai' | 'architecture' = 'tableau';

  tableauUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.portalService.getEmbedUrl('TABLEAU')
  );
  htmlUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.portalService.getEmbedUrl('HTML')
  );
  pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.portalService.getEmbedUrl('PDF')
  );

  samplePrompts: SampleAiPrompt[] = this.portalService.getSamplePrompts();
  aiPrompt = this.samplePrompts[0].question;
  aiMode: 'SQL' | 'RAG' = this.samplePrompts[0].mode;
  aiResponse = this.samplePrompts[0].answer;

  setTab(tab: 'tableau' | 'html' | 'pdf' | 'blog' | 'ai' | 'architecture') {
    this.activeTab = tab;
  }

  runMockAi(item?: SampleAiPrompt) {
    if (item) {
      this.aiPrompt = item.question;
      this.aiMode = item.mode;
      this.aiResponse = item.answer;
    } else {
      this.aiResponse = this.portalService.askAiQuestion(this.aiPrompt, this.aiMode);
    }
  }
}
