var render = function (tpl,data) {
    return tpl.replace(/\{\{(\w+)}\}/g,function () {
        // console.log(arguments);
        return data[arguments[1]];
    });//表达式或者正则
}
var content = "<div><h2>{{title}}</h2><p>{{descripton}}</p></div>" ;

var data = [
    {
        title:'概念',
        descripton:'大大饭店烧烤某方面，是你都你放假knew可能你的美奶粉'
    },
    {
        title:'概',
        descripton:'大大饭的美奶粉'
    }
]

data.forEach(function (v) {
    console.log(render(content,v));
})