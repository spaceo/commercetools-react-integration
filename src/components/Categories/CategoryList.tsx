import * as React from 'react';
import { CategoryListQuery } from '../../generated/graphql';

interface Props {
    data: CategoryListQuery;
}
const className = 'CategoryList';

const CategoryList: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <h3>Categories:</h3>
        <ul className={`${className}__list`}>
            {!!data.categories && !!data.categories.results &&
            data.categories.results.map(
                (category, i) =>
                    !!category && (
                        <li key={i}>
                            {category.nameAllLocales[0].value}
                        </li>
                    ),
            )}
        </ul>
    </div>
);

export default CategoryList;
