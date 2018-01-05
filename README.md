# Swirl Layout

[![Greenkeeper badge](https://badges.greenkeeper.io/cerico/swirl-layout.svg)](https://greenkeeper.io/)

## TLDR / What is it?

A Layout, with header and navbar

## How Do I use it?

### Install

```
➜  yesmate git:(dev) npm i swirl-layout
```

### Import

Import into your main react component

```
import Layout from 'swirl-layout';
```

### Include

Include in your main react component and pass it the links you want displayed and a colour for the swirl, eg

```
const links = [
      {path:'/',title:"home",key:1},
      {path:'/checkout',title:"checkout",key:2}
      ]

const colour = 'pink'
<Layout colour={colour} links={links}/>
```

### In context

eg with a router, in main App.js

```
 const links = [
      {path:'/',title:"home",key:1},
      {path:'/checkout',title:"checkout",key:2}]

  const colour = 'pink'

    return (
      <Router>
        <main>
          <Layout colour={colour} links={links}/>
          <div>
            <Switch>
              <Route exact path="/"  component={Products}/>
              <Route path="/products/:id" component={Product} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </main>
      </Router>
    );
```