import { Fragment } from "react";
import CategoryPreview from "../../components/categories-preview/category-preview.component.jsx";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import Spinner from "../../components/spinner/spiner.component.jsx";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector.js";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const product = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={product} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
