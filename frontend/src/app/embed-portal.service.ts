import { Injectable } from '@angular/core';

export interface SampleAiPrompt {
  question: string;
  mode: 'SQL' | 'RAG';
  answer: string;
}

@Injectable({ providedIn: 'root' })
export class EmbedPortalService {
  getEmbedUrl(type: 'TABLEAU' | 'HTML' | 'PDF'): string {
    switch (type) {
      case 'TABLEAU':
        return 'https://public.tableau.com/views/Route_Optimization_CivicDataHackathon/RouteOptimization?:showVizHome=no&:embed=true';
      case 'HTML':
        return '/mock-html-report.html';
      case 'PDF':
        return '/civic-insights-mock-brief.pdf';
    }
  }

  getSamplePrompts(): SampleAiPrompt[] {
    return [
      {
        question: 'Which simulated jurisdictions had unusual provisional ballot spikes?',
        mode: 'SQL',
        answer: 'Simulated EAVS Insight (Spring Boot Text-to-SQL Strategy • 1.2s): District Gamma showed a 14.2% higher provisional ballot rate than the regional baseline, driven by same-day address updates at 3 high-volume precincts.'
      },
      {
        question: 'Summarize the key findings from our latest EAVS PDF & Blog posts.',
        mode: 'RAG',
        answer: 'Simulated Document Summary (Spring Boot RAG Strategy • 0.9s): Across indexed briefs, mail ballot acceptance reached 98.4% (+1.2% YoY) while automated cure notifications reduced uncounted ballots by 22%.'
      }
    ];
  }

  askAiQuestion(prompt: string, mode: 'SQL' | 'RAG'): string {
    return `Simulated Spring Boot ${mode} Strategy Response (1.1s): Analyzed synthetic EAVS dataset for "${prompt}". Pattern detected: 98.4% consistency across precincts with 0 critical anomalies.`;
  }
}
