import { IRule } from "components/IRule";
import { Rule } from "components/Rule/Rule";

var compoents : { 
  [key: string]: {
    component?:any,
    rule:IRule,
  }
} = {}

function register(name:string, component:any, rule:any = Rule): any{
  compoents[name] = {
    component,
    rule: new rule()
  }
}

function registerHtmlTag(name:string, rule:any = Rule){
  compoents[name] = {
    rule: new rule()
  }  
}

function resolveNode(name:string):any{
  return compoents[name] && compoents[name].component ? compoents[name].component : name
}

function resolveRule(name:string):IRule{
  return  compoents[name] ? compoents[name].rule : new Rule();
}

export {register, resolveNode, resolveRule, registerHtmlTag}