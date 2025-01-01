import React from 'react';

const ProductHuntBadge: React.FC = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/your-product-name?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-your-product-name"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=POST_ID&theme=light"
        alt="Product Hunt Badge"
        style={{ width: '250px', height: '54px' }}
      />
    </a>
  );
};

export default ProductHuntBadge;
