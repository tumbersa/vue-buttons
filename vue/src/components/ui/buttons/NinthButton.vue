<template>
    <button :style="buttonStyle">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'NinthButton',
    props: {
      backgroundColor: {
        type: String,
        default: 'white'
      },
      borderColor: {
        type: String,
        default: 'black'
      },
      textColor: {
        type: String,
        default: 'black'
      },
      topIndent: {
        type: String,
        default: '0px'
      },
      bottomIndent: {
        type: String,
        default: '0px'
      },
      leftIndent: {
        type: String,
        default: '0px'
      },
      rightIndent: {
        type: String,
        default: '0px'
      }
    },
    computed: {
      buttonStyle() {
        return {
          backgroundColor: this.backgroundColor,
          borderColor: this.borderColor,
          color: this.textColor,
          width: '150px',
          height: '25px',
          borderWidth: '2px', 
          borderStyle: 'solid',
          borderRadius: '15px',
          padding: '10px',
          fontSize: '8px',
          textAlign: 'center',
          textTransform: 'uppercase',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: `${this.topIndent} ${this.rightIndent} ${this.bottomIndent} ${this.leftIndent}`
        };
      }
    }
  }
  </script>
  
  <style scoped>
  </style>