const fs = require('fs');
const path = require('path');

let rootPath = __dirname + '/pages';

let domTree = findAllElement(rootPath);
console.log("最终结果：", domTree);

const DEFAULT_ROOT_PATH = '/pages/';

/*
declare type FunctionRouterConfig{
  routerPath: String | Path
  compontentPath : String | Path
}
*/

class FunctionRouterConfig{
  constructor(router,component){
    this.routerPath = router;
    this.compontentPath = component;
  }
}





//按照一个路径搜索 直到找到所有的vue文件
function findAllElement(_path) {
  let files = [];
  console.log("初始化结果集")
  console.log("in: " + _path);
  let currentSearchPath = _path;
  console.log(currentSearchPath);
  let pathTree = fs.readdirSync(currentSearchPath);
  for (let i = 0; i < pathTree.length; i++) {
    console.log("将要搜索的二级路径：", pathTree[i])
    let secoundPath = path.join(currentSearchPath, pathTree[i]);
    if (fs.statSync(secoundPath).isDirectory()) {
      console.log("这哥们是个路径，准备继续进入: " + secoundPath);
      let res = findAllElement(secoundPath);
      files = files.concat(res);
      console.log("递归搜索获取结果：", res);
      console.log("合并到结果集：", files);
    } else {
      console.log("find file! " + secoundPath)
      if (secoundPath.endsWith(".vue")) {
        console.log("is a vue file, add!");

        let splitPath = secoundPath.split(__dirname);
        files.push('.' + splitPath[1]);
        console.log("添加到结果集：", files);
      }
    }
  }
  console.log("返回的结果集：", files);
  return files;

}
