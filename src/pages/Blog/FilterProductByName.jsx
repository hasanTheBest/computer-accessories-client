import React from "react";

const FilterProductByName = () => {
  return (
    <article className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title capitalize">
          Filter item from product array by category
        </h2>
        <p className>
          We have an array of objects, products. Each product has a title,
          price, category. We need to filter out product whose name are match
          with our filter category. We can do this using default filter method
          of array in JavaScript.
        </p>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>
              {`
                const products =  [
                  {
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    category: "men's clothing",
                  },
                  {
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    category: "men's clothing",
                  },
                  {
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    category: "men's clothing",
                  },
                  {
                    title: "Mens Casual Slim Fit",
                    price: 15.99,
                    category: "men's clothing",
                  },
                  {
                    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                    price: 695,
                    category: "jewelery",
                  },
                  {
                    title: "Solid Gold Petite Micropave ",
                    price: 168,
                    category: "jewelery",
                  },
                  {
                    title: "White Gold Plated Princess",
                    price: 9.99,
                    category: "jewelery",
                  },
                  {
                    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                    price: 10.99,
                    category: "jewelery",
                  },
                  {
                    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                    price: 64,
                    category: "electronics",
                  },
                  {
                    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                    price: 109,
                    category: "electronics",
                  },
                  {
                    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                    price: 109,
                    category: "electronics",
                  },
                  {
                    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                    price: 114,
                    category: "electronics",
                  },
                  {
                    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                    price: 599,
                    category: "electronics",
                  },
                  {
                    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                    price: 999.99,
                    category: "electronics",
                  },
                  {
                    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                    price: 56.99,
                    category: "women's clothing",
                  },
                  {
                    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                    price: 29.95,
                    category: "women's clothing",
                  },
                  {
                    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                    price: 39.99,
                    category: "women's clothing",
                  },
                  {
                    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                    price: 9.85,
                    category: "women's clothing",
                  },
                  {
                    title: "Opna Women's Short Sleeve Moisture",
                    price: 7.95,
                    category: "women's clothing",
                  },
                  {
                    title: "DANVOUY Womens T Shirt Casual Cotton Short",
                    price: 12.99,
                    category: "women's clothing",
                  }
                ]
                `}
            </code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>
              {`
                function search(products, cateName){
                  const electronics = products.filter(product => product.category === catName)
                  return electronics;
                }
                console.log(search(products, electronics))
                `}
            </code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>
              Output:
              {`
                {
                  title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                  price: 64,
                  category: "electronics",
                },
                {
                  title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                  price: 109,
                  category: "electronics",
                },
                {
                  title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                  price: 109,
                  category: "electronics",
                },
                {
                  title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                  price: 114,
                  category: "electronics",
                },
                {
                  title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                  price: 599,
                  category: "electronics",
                },
                {
                  title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                  price: 999.99,
                  category: "electronics",
                },
                `}
            </code>
          </pre>
        </div>
      </div>
    </article>
  );
};

export default FilterProductByName;
