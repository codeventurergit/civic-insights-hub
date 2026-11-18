package org.civicinsightshub.embed;

public interface EmbedStrategy {
    String getSupportedType();
    String generateInlineViewUrl(String resourceId);
}
