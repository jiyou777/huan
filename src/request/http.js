import { Request } from 'src/until/request.js'

// 5.12.获取专题列表 getTopics
export const getTopics =(obj,data) =>  Request.getData({
  url : `/api/getTopics?page=${obj.page}&pageSize=${obj.pageSize}`,
  method : "post",
  data
});
 //  5.3.获取模板信息 getTemplateInfo
 export const getTemplateInfo =(obj,data) =>  Request.getData({
  url : `/api/getTemplateInfo?code=${obj.code}`,
  method : "get",
  data
});