export const Tab={
    props:{
        // themes:{
        //     type:Array,
        //     default:[
        //         { index: 0, themeName:'a',color: 'light' },
        //         { index: 1, themeName:'a',color: 'dark' }, 
        //     ],
        // },
        // tabs:{
        //     type:Array,
        //     default:[
        //         { index: 0, data:'Tab1', theme: 'light',active:true },
        //         { index: 1, data:'+', theme: 'light',active:false },
        //     ],
        // } 
    },
    methods:{
        tabClickHandler(index){
            
            this.selectedTabIndex=index;
            this.tabs.forEach((tab, i) => {
                tab.active = i === index;
            });
            this.tabs[index].active=true;
            if(this.tabs[index].data=='+'){
                this.tabs.pop()
                this.tabs.push({ index: index, data:`Tab${index+1}`, theme: 'light',active:true },)
                this.tabs.push({ index: index+1, data:'+', theme: 'light',active:false },)
            }
        },
        themehandler(theme){
            this.tabs[this.selectedTabIndex].theme=theme;
        },
    },
    data() {
        return {
            themes:[
                    { index: 0, themeName:'a',color: 'light' },
                    { index: 1, themeName:'a',color: 'dark' },
                    
        
                ],
            tabs:[
                    { index: 0, data:'Tab1', theme: 'light',active:true },
                    { index: 1, data:'Tab2', theme: 'light',active:false },
                    { index: 2, data:'+', theme: 'light',active:false },
        
                ],
             
            selectedTabIndex:0,     
        }
    },
    
}
export default Tab