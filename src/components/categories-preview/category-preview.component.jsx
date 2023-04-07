import { Link } from "react-router-dom";
import ProductCard from "../product-card/product.card.component";
import "./category-preview.style.scss";

const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {product
          .filter((_, id) => id < 4)
          .map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
    </div>
  );
};
export default CategoryPreview;
