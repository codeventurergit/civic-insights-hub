package org.civicinsightshub.embed;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class EmbedService {
    private final Map<String, EmbedStrategy> strategies;

    public EmbedService(List<EmbedStrategy> rawStrategies) {
        this.strategies = rawStrategies.stream()
            .map(AuditEmbedDecorator::new)
            .collect(Collectors.toMap(s -> s.getSupportedType().toUpperCase(), Function.identity()));
    }

    public String getSafeEmbedUrl(String type, String resourceId) {
        EmbedStrategy strategy = strategies.get(type.toUpperCase());
        if (strategy == null) {
            throw new IllegalArgumentException("Unsupported embed type: " + type);
        }
        return strategy.generateInlineViewUrl(resourceId);
    }
}
