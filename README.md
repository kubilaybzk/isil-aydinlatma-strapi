query GetCategoryBaseProducts{
  categories(filters: { Name: { eq: "Telefon" } }){
    data{
      id 
      attributes{
        Name
        products(filters: { Name: { eq: "Samsung" } }){
          data{
            id
            attributes{
              Name
              Description
              ProductImage{
                data {
                  attributes {url name }
                }
              }
              
              
            }
          }
        }
      }
    }
  }
}