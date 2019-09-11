remember the following for logo in React


Dir
/images/companylogo.svg


App.js |-----| Import Section |

```js
import { ReactComponent as Logo } from './images/companylogo.svg';
```

App.js |-----| Render Section |


  render() {
    return (
      <div className="App">
        <Logo className="logoStyle" />
      </div>
    );
  }