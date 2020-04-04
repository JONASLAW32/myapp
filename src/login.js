const signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'My custom email label',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      ... // and other custom attributes
    ]
  };
  
  export default withAuthenticator(App, { signUpConfig });