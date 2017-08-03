import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query restaurants {
    id
    name
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({
      query: CurrentUserForProfile
    }).subscribe(({data}) => {
      console.log(data)
    }); 
  }

 
}
