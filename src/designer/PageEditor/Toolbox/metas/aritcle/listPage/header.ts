import { JUMP_TO_PAGE_ACTION } from "base/PageAction";

export default{
  name: 'GridRow',
  props: {
    justify: 'space-between',
    alignItems: "center",
    marginTop: 2,
    spacing: 2,
  },
  children: [{
      name: 'GridColumn',
      children: [
        {
          name: 'h2',
          props:{
            rxText: '文章列表',            
          }
        }
      ],
    },
    {
      name: 'GridColumn',
      children: [
      {
        name: 'Button',
        props: {
          variant: "contained",
          color: "primary",
          rxText: '新建',
          size: "large",
          onClick:{
            name: JUMP_TO_PAGE_ACTION,
            page:{
              moduleSlug:'article',
              pageSlug:'article',
            }
          }
        }
      }]
    },
  ]
}