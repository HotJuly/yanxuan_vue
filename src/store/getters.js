export default {
    subCateLists({category}){
        return category.map((cate,index)=>{
            return cate.subCateList
        })
    },
    categoryLists({category}){
        return category.map((cate,index)=>{
            if(!cate.categoryList){
                return [];
            }else{
                return cate.categoryList
            }
        });
    },
}