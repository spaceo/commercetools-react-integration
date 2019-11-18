import * as React from 'react';
import {useCategoryListQuery } from '../../generated/graphql';
import CategoryList from './CategoryList';

const Categories = (props) => {
    const { data, error, loading } = useCategoryListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <CategoryList data={data} {...props} />;
};

export default Categories;
