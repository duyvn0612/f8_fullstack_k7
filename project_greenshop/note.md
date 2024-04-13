# Cấu trúc folder dự án

    index.html --> File chạy chính
    scss --> chứa các file scss
        - style.scss --> File chạy chính scss (Nối các file khác)
        - partials
            - _base.scss
            - _variables.scss
            - _mixin.scss
            - _reset.scss

        - components
            - _header.scss
            - _footer.scss
            - _breadcrums.scss

        -pages
            -home
                - _hero.scss
                - _products.scss
            -products
                - _best_seller.scss
                - _new_product.scss


    images --> chứa các file ảnh
    fonts --> chứa các files fonts
    css --> Các file css được generate từ scss
    pages --> các file html tương ứng với các trang : about.html, products.html, news.html,...
