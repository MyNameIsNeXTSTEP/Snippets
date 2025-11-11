const data = {
  email: 'gbaster@bk.ru',
  name: '',
  newsletter: true,
  password: undefined,
};

/**
* Validate with a all-in-one functional schema
*/
const functionalSchema = {
  email: {
    validation: {
      requried: (email) => !!email,
      type: (email) => typeof email === 'string',
      includes: (email) => email.includes('@'),
    },
    error: {
      code: 14,
      message: 'Some err msg',
    },
  },
  name: {
    validation: {
      requried: (email) => !!email,
    },
    error: {
      code: 14,
      message: 'Some err msg',
    },
  },
  // ...
};

// Run the validation checks
(
  (data) => {
    console.log('Data for validation checks:', data);
    for (const prop in data) {
      const propSchema = functionalSchema[prop];
      const propData = data[prop];
      if (!propSchema) return null;
      const { validation, error } = propSchema;
      if (!validation || !error) return null;
      for (const [validationName, validationFunc] of Object.entries(validation)) {
        const res = validationFunc(propData);
        if (!res) {
          console.log(`Failed check for prop: '${prop}', action: '${validationName}'`);
          return;
        }
      }
      console.log(`Successfull validation check for prop: '${prop}'`);
    }
  }
)(data);

