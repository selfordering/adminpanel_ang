import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';


// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'localhost:3000'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
