# aurelia2-realworld

An example Aurelia 2 application with some assumed default settings and structure.


## Introduction

There is no right or wrong way to build an Aurelia application. The purpose of this project is to give you a helping hand when it comes to making the decision to build a new Aurelia 2 application. Architecture is often one of the hardest parts of building any application, however, no assumption about your backend or auth provider is made here.

This starter only has Bootstrap 5 as a dependency and that is purely for styling. For CSS, CSS Modules are being used instead of Shadow DOM (there are a few limitations and caveats with Shadow DOM), so there is also some code inside of `main.ts` (documented) which gets around the issue of global CSS for CSS Modules because Bootstrap relies on global classes that should not be renamed.