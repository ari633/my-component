# My-Components

Storybook preview: https://staging.dacq5a5mx2htp.amplifyapp.com/


### Install
``` bash
  npm i @aripratomo/my-components
```

##  Multiple Dropdown with search
![Feb-16-2025 04-08-51](https://github.com/user-attachments/assets/326c3aa5-b263-461f-97f6-842673e96149)


### Basic usage
```javascript
import { Dropdown } from "@aripratomo/my-components"

<Dropdown 
  multiple={true} 
  withSearch={true} 
  options={['Banna', 'Apple', 'Melon']} 
  onChange={(opt) => console.log(opt)} 
/>
```
