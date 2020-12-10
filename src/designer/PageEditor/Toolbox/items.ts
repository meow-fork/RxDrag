
import article from './metas/aritcle/editPage';
import articleLayout from './metas/aritcle/editPage/layout';
import articleHeader from './metas/aritcle/editPage/header';
import articleBasePortlet from './metas/aritcle/editPage/basePortlet';
import articleSeoPortlet from './metas/aritcle/editPage/seoPortlet';
import articleContentPortLet from './metas/aritcle/editPage/contentPortlet';
import articleAppearancePortlet from './metas/aritcle/editPage/appearancePortlet';
import articleMedias from './metas/aritcle/editPage/mediasPortlet';
import artilceList from './metas/aritcle/listPage';
import articleListHeader from './metas/aritcle/listPage/header';
import articleListLayout from './metas/aritcle/listPage/layout';
import aritcleListList from './metas/aritcle/listPage/list';
import portlet from './metas/portlet'

export default [
  {
    titleKey: "template",
    children:[
      {
        titleKey:'article',
        children:[
          {
            title:'列表页',
            meta:artilceList,
            children:[
              {
                title:'栅格布局',
                meta:articleListLayout,
              },              
              {
                title:'页面标题',
                meta:articleListHeader,
              },
              {
                title:'列表控件',
                meta:aritcleListList,
              },
            ]        
          },
          {
            title:'编辑页',
            meta:article,
            children:[
              {
                title: '栅格布局',
                meta: articleLayout,
              },
              {
                title:'页面标题',
                meta: articleHeader,
              },
              {
                title:'基本信息',
                meta:articleBasePortlet,
              },
              {
                title:'SEO数据',
                meta:articleSeoPortlet,
              },
              {
                title:'内容',
                meta:articleContentPortLet,
              },
              {
                title:'显示',
                meta:articleAppearancePortlet,
              },
              {
                title:'媒体',
                meta:articleMedias,
              },

            ]            
          },
        ]
      }
    ]
  },
  {
    titleKey: "layout",
    children:[
      {
        titleKey:'row',
        meta:{name:'GridRow'},
      },
      {
        titleKey:"column",
        meta:{name:'GridColumn'},
      },  
      {
        titleKey:"page-title",
        meta:{
          name:"h2",
          props:{
            rxText:'Page title',
          }
        }
      },      
    ]
  },
  {
    titleKey: "cards",
    children:[
      {
        titleKey:"portlet",
        meta:portlet,
        children:[
          {
            titleKey:"form-grid-container",
            meta: {
              name:'FormGridContainer',
            }
          },
          {
            titleKey:"portlet-footer",
            meta:{
              name:'PortletFooter',
            }
          },          
        ]     
      },  

      {
        titleKey:"medias-portlet",
        meta:{
          name:'MediasPortlet',
          props: {
            elevation: 6,
          },
        }
      },

      {
        titleKey:"one-to-one-portlet",
        meta: {
          name:'OneToOnePortlet',
          props: {
            elevation: 6,
            open:true,
            withHeader:true,
            title:'One to One Portlet',
            collapsible: true,
          },
          children:[
            {
              name:'FormGridContainer',
            }
          ]
        }
      },

      {
        titleKey:"one-to-many-portlet",
        meta: {
          name:'OneToManyPortlet',
          props: {
            elevation: 6,
            open:true,
            withHeader:true,
            title:'One to Many Portlet',
            collapsible: true,
          },
          children:[
            {
              name:'FormGridContainer',
            }
          ]
        }
      },

      {
        titleKey:"one-to-many-table",
        meta: {
          name:'OneToManyTable',
          props: {
            elevation: 6,
            open:true,
            withHeader:true,
            title:'One to Many Table',
            collapsible: true,
          },
        }
      },

    ]
  },
  {
    titleKey: "form",
    children:[
      {
        titleKey:'form-grid-item',
        meta:{
          name:'PortletGridItem',
        }
      },
      {
        titleKey:"text-field",
        meta:{
          name:"TextBox",
          props:{
            label:"TextField",
            variant:"outlined",
            fullWidth:true,
          }
        }
      },
      {
        titleKey:"switch",
        meta:{
          name:'SwitchBox',
          props:{
            label:'switch label',
          }
        },
      },
      {
        titleKey:"checkbox",
        meta:{
          name:'Checkbox',
          props:{
            label:'checkbox label',
          }
        },
      },
      {
        titleKey:"checkbox-group",
        meta:{
          name:'CheckboxGroup',
          props:{
            label:"Checkbox group",
            items:[
              {
                slug:'option1',
                label:'Option 1',
              },
              {
                slug:'option2',
                label:'Option 2',
              },
            ]
          }
        },
      },
      {
        titleKey:"radio-group",
        meta:{
          name:'RadioGroup',
          props:{
            label:"Radio group",
            items:[
              {
                slug:'option1',
                label:'Option 1',
              },
              {
                slug:'option2',
                label:'Option 2',
              },
            ]
          }
        },
      },

      {
        titleKey:"selectbox",
        meta:{
          name: 'SelectBox',
          props:{
            label:"Select",
            variant:"outlined",
            fullWidth:true,
          }
        },
      },
      {
        titleKey:"multi-selectbox",
        meta:{
          name: 'MultiSelectBox',
          props:{
            label:"Select",
            variant:"outlined",
            fullWidth:true,
          }
        },
      },
      {
        titleKey:"tree-select",
        meta:{
          name: 'SelectBox',
          props:{
            label:"Select",
            variant:"outlined",
          }
        },
      },
      {
        titleKey:"combobox",
        meta:{
          name: 'Combobox',
          props:{
            label:"Combobox",
            variant:"outlined",
            xs:6,
            data:{
            }
          }
        },
      },
      {
        title:"TinyMCE",
        meta:{
          name:"TinyMCE",
        }
      },
      {
        titleKey:"button",
        meta:{
          name:"Button",          
          props:{
            variant:"contained",
            rxText: "Button",
          }
        }
      }, 
      {
        titleKey:"typography",
        meta:{
          name:"Typography",
          props:{
            variant:"inherit",
            rxText: "Typography",
          }
        }
      }, 
    ]
  },

  {
    titleKey: "charts",
    children:[
      {
        titleKey:'line-chart'
      }
    ]
  },
]