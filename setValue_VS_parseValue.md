# setValue_VS_parseValue - Reactive Forms
1. setValue - Sholud be send value to fields
2. parseValue - send value for some of fileds

- loadAPIData() {
    this.registerationForm.setValue({
      userName : 'kannan',
      password : 'mani',
      confirmPassword : 'mani',
      address : {
         city : 'Coimabatore',
         state : 'Tamilnadu',
         pincode : '111111'
      }
    })
