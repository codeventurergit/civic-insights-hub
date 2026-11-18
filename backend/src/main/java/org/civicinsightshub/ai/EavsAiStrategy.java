package org.civicinsightshub.ai;

public interface EavsAiStrategy {
    String getMode();
    String answerQuestion(String prompt);
}
