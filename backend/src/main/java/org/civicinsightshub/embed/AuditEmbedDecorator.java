package org.civicinsightshub.embed;

import java.time.Instant;

public class AuditEmbedDecorator implements EmbedStrategy {
    private final EmbedStrategy delegate;

    public AuditEmbedDecorator(EmbedStrategy delegate) {
        this.delegate = delegate;
    }

    @Override
    public String getSupportedType() {
        return delegate.getSupportedType();
    }

    @Override
    public String generateInlineViewUrl(String resourceId) {
        System.out.println("Audit log [" + Instant.now() + "]: " + getSupportedType() + " -> " + resourceId);
        return delegate.generateInlineViewUrl(resourceId);
    }
}
