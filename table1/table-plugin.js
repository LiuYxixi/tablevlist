function TableFactory(instance){
    this.instance = instance;
    // console.log(instance);
    this.parent = this.instance.parentNode;
    // console.log(parent);
    this.childrenNode = this.instance.children;
    // console.log(instance.children);

}
TableFactory.prototype = {
    init:function(){
        var theadClone = this.childrenNode[0].cloneNode(true);
        this.parent.onscroll = function(){
            var scrollTop = this.scrollTop;
            if(scrollTop == 0){
                theadClone.parentNode.removeChild(theadClone)
            }
            else{
                theadClone.style.position = "absolute";
                theadClone.style.top = scrollTop + "px";
                theadClone.style.backgroundColor = "#F1F3F5";                        
                this.appendChild(theadClone);
            }
        }
        this.mouseEvent();
    },
    mouseEvent:function(){
        var trItem = null;
        for(let i in this.childrenNode){
            if(this.childrenNode[i].nodeName == "TBODY"){
                var tr = this.childrenNode[i].children;
                // console.log(tr);
                trItem = tr;
            }           
        } 
        for(var i=0;i<trItem.length;i++){
            var color = '';
            trItem[i].addEventListener("mouseenter",function(){
                this.style.backgroundColor = "#d8e8f8 "
            })
            trItem[i].addEventListener("mouseleave",function(){
                this.style.backgroundColor = "";
            })
            
        }
        
    }
};