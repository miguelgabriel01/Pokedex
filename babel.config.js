module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css:{
   loaderOptions: {
     scss:{
       addtionalData:`
       @import "@/styles/functions";
       @import "@/styles/colors";       
       `
     },
   },
  },
}
