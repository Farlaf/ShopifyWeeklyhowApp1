import { Card, Layout, Page } from "@shopify/polaris";
import React from "react";

class Products extends React.Component {
    render() {
        return (
            <Page>
                <Layout.AnnotatedSection
                    title="Products"
                    description="Description some txt"
                >
                    <Card sectioned>
                        <div>
                            <p>List of products her</p>
                        </div>
                    </Card>
                </Layout.AnnotatedSection>
            </Page>
        );
    }
}

export default Products;
