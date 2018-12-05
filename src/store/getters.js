export default {
    subCateLists({category}){
        return category.map((cate,index)=>{
            return cate.subCateList
        })
    }
}