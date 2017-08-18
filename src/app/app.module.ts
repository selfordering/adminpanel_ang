import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import appRoutes from './app.route';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { HttpModule }    from "@angular/http";
import { Apollo } from 'apollo-angular';



import { AppComponent } from './app.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component'; 


// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}


@NgModule({
  declarations: [
    AppComponent,
    RestaurantHomeComponent,
    RestaurantAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ApolloModule.forRoot(provideClient),
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
