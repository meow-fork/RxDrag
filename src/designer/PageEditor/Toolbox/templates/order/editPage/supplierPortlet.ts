import { API_LIST_MODEL } from "APIs/model";

export default               {
  name:'OneToManyPortlet',

  designProps:{
    isDeisgning:true,
  },
  props:{
    field:'factoryOrders',                
    title:'工厂合同',
    elevation: 6,
    marginTop: 2,
    collapsible:true,
    open:true,
  },
  children:[
    {
      name:'FormGridContainer',
      children:[
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'SelectBox',
              props:{
                label:'工厂',
                variant:"outlined",
                fullWidth:true,
                field:'title',
                size:'small',
                rule:{
                  valueType:'string',
                  required:true,
                },
                dataApi:{
                  ...API_LIST_MODEL,
                  params:{
                    modelName:'/Model/Supplier',
                  }
                },                            
                
              }
            }
          ]
        },

        {
          name: 'PortletGridItem',
          props:{
            xs:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'合同日期',
                variant:"outlined",
                fullWidth:true,
                size:"small",
                type:'date',
                shrinkLabel:true,
                field:'contract_date',
              },
            }
          ],
        },

        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'合同号',
                variant:"outlined",
                fullWidth:true,
                size:'small',
                field:'contract_no',
                rule:{
                  valueType:'string',
                  required:true,
                }                      
              }
            }
          ]
        },

        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'SelectBox',
              props:{
                label:'付款方式',
                variant:"outlined",
                fullWidth:true,
                size:'small',
                field:'payment_term',
                withoutEmpertyItem:true,
                items:[
                  {
                    slug:'100-0',
                    label:'T/T 100%/0%'
                  },
                  {
                    slug:'50-50',
                    label:'T/T 50%/50%'
                  },                              
                  {
                    slug:'30-70',
                    label:'T/T 30%/70%'
                  },

                  {
                    slug:'20-80',
                    label:'T/T 20%/80%'
                  },
                ]
              }
            }
          ]
        },

        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'SelectBox',
              props:{
                label:'币种',
                variant:"outlined",
                fullWidth:true,
                size:'small',
                field:'currency',
                withoutEmpertyItem:true,
                items:[
                  {
                    slug:'dollor',
                    label:'美元'
                  },
                  {
                    slug:'euro',
                    label:'欧元'
                  },                              
                  {
                    slug:'rmb',
                    label:'人民币'
                  },

                ]
              }
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'合同金额',
                variant:"outlined",
                type:'number',
                fullWidth:true,
                size:'small',
                field:'amount',
              }
            }
          ]
        },

        {
          name: 'PortletGridItem',
          props:{
            md:12,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'货物描述',
                variant:"outlined",
                fullWidth:true,
                multiline:true,
                size:'small',
                rows:5,
                field:'cargo_description',
              },
            }
          ],
        },

        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'预计发货日期',
                variant:"outlined",
                fullWidth:true,
                size:"small",
                type:'date',
                shrinkLabel:true,
                field:'date1',
              },
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'实际发货日期',
                variant:"outlined",
                fullWidth:true,
                size:"small",
                type:'date',
                shrinkLabel:true,
                field:'date2',
              },
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'第一次付款日期',
                variant:"outlined",
                fullWidth:true,
                size:"small",
                type:'date',
                shrinkLabel:true,
                field:'pay_date1',
              },
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'第一次付款金额',
                variant:"outlined",
                type:'number',
                fullWidth:true,
                size:'small',
                field:'payment1',
              }
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'汇率',
                variant:"outlined",
                type:'number',
                fullWidth:true,
                size:'small',
                field:'exchange1',
              }
            }
          ]
        },

        {
          name: 'PortletGridItem',
          props:{
            xs:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'第二次付款日期',
                variant:"outlined",
                fullWidth:true,
                size:"small",
                type:'date',
                shrinkLabel:true,
                field:'pay_date2',
              },
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'第二次付款金额',
                variant:"outlined",
                type:'number',
                fullWidth:true,
                size:'small',
                field:'payment2',
              }
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            md:4,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'汇率',
                variant:"outlined",
                type:'number',
                fullWidth:true,
                size:'small',
                field:'exchange2',
              }
            }
          ]
        },

        {
          name:"PortletGridItem",
          props:{
            xs:12,
          },
          children:[
            {
              name:'TextBox',
              props:{
                fullWidth: true,
                label:'备注',
                variant:"outlined",
                //size:"small",
                multiline:true,
                rows:3,
              }                        
            }
          ]

        },
        
      ],
    }
  ],
}
