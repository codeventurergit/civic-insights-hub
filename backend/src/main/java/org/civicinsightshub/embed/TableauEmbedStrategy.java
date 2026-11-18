package org.civicinsightshub.embed;

public class TableauEmbedStrategy implements EmbedStrategy {
    @Override
    public String getSupportedType() {
        return "TABLEAU";
    }

    @Override
    public String generateInlineViewUrl(String resourceId) {
        return "https://tableau.com" + resourceId + "?:showVizHome=no&:embed=true";
    }
}
