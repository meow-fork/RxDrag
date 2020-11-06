import React from 'react';
import {makeStyles, Theme, createStyles, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import intl from 'react-intl-universal';
import FieldBoxRow from './SettingsFieldBoxRow';
import FieldBoxValidateArea, { ValidateRule } from '../Attrebutebox/AttributeBoxValidateArea';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      //background:'rgba(0,0,0,0.3)',
      borderRadius:'3px',
      display:'flex',
      flexFlow:'column',
      flex:1,  
      height:'calc(100vh - 65px)',
    },

    listArea:{
      flex:1.2,
      overflowY:'auto',
      padding: theme.spacing(1),
    },
    areaTitle:{
      height:'36px',
      lineHeight:'36px',
      paddingLeft: theme.spacing(1),
      background: 'rgba(0,0,0,0.3)',
    },


    add:{
      display:'flex',
      width:"100%",
      justifyContent:"center"
    }

  }),
);

interface StyleItem{
  name:string;
  value:string;
}

export default function FieldBox(props:{fields:Array<any>, onChange:any}){
  const classes = useStyles();
  const {fields, onChange} = props;
  //const [fields, setFields] = React.useState(props.fields);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [editingIndex, setEditingIndex] = React.useState(-1);

  const handleSelected = (index:number)=>{
    setSelectedIndex(index);
  }

  const handleEditing = (index:number, editing:boolean)=>{
    if(editing){
      setEditingIndex(index);      
    }
    else{
      setEditingIndex(-1); 
    }
  }

  const handleRemove = (index:number)=>{
    fields.splice(index,1);
    onChange([...fields]);

    if(index === selectedIndex){
      setSelectedIndex(-1);
    }

    if(index === editingIndex){
      setEditingIndex(-1);
    }
  }

  const handleNameChange = (newName:string, index:number)=>{
    fields[index].name = newName;
    onChange([...fields]);
  }

  const handleAddNew = ()=>{
    let newFields = [...fields, {name:'', rule:{}}]
    onChange(newFields);
    setSelectedIndex(newFields.length - 1);
    setEditingIndex(newFields.length - 1);
  }

  return (
    <div className={classes.root}>
      <div className = {classes.listArea}>
        {
          fields.map((item:StyleItem, index:number)=>{
            return(
              <FieldBoxRow 
                key={index} 
                field={item.name} 
                selected = {selectedIndex === index} 
                editing = {editingIndex === index} 
                onSelected = {()=>handleSelected(index)}
                onEditing = {(editing)=>handleEditing(index, editing)}
                onRemove = {()=>{handleRemove(index)}}
                onNameChange = {(newName)=>handleNameChange(newName, index)}
              />
            )
          })
        }
        <div className={classes.add}>
          <IconButton aria-label="add"
            onClick = {handleAddNew}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
    
  )
}