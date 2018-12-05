import Mock from 'mockjs';
import category from './category.json';
import msite from './msite.json';
import shiwu from './shiwu.json';

// Mock.mock("/category",{code:0,data:});
// Mock.mock("/category",{code:0,data:});
Mock.mock("/topicList",{code:0,data:msite.topicList});
Mock.mock("/subCateList",{code:0,data:msite.headCateList.subCateList});
Mock.mock("/focusList",{code:0,data:msite.focusList});
Mock.mock("/cateList",{code:0,data:msite.cateList});
Mock.mock("/tagList",{code:0,data:msite.tagList});
Mock.mock("/policyDescList",{code:0,data:msite.policyDescList});
Mock.mock("/category",{code:0,data:category});