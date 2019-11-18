import gql from 'graphql-tag';

export const QUERY_CATEGORY_LIST = gql`
    query CategoryList {
        categories {
            results {
                id,
                nameAllLocales {
                    locale
                    value
                }
            }
        }
    }
`;
