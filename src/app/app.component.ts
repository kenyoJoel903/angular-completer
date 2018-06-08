import { Component } from '@angular/core';
import { RemoteData, CompleterService, CompleterItem } from 'ng2-completer';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public dataRemote2: RemoteData;

  public team:string;

  constructor(completerService: CompleterService, http: Http){

    
    this.dataRemote2 = completerService.remote(
      null,
      "text",
      "text");
      //this.dataRemote2.headers(this.getHeaders())
      this.dataRemote2.requestOptions(this.getHeaders());
      this.dataRemote2.urlFormater(term =>{
        return `http://geoserver.geodir.co/builder.api/services/teams-s2?search%5Bvalue%5D=${term}&page=NaN`;
      });
      this.dataRemote2.dataField('results');
    //this.dataRemote2.requestOptions(this.getHeaders());
    

  }

  private getHeaders(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer a049e19d-c241-41f6-95b6-669166cbea7b');
    let options = new RequestOptions({
      headers: headers
    });

    console.log(options);

    return options;

  }

  onClienteSelect(selected: CompleterItem) { 
    if (selected && selected.originalObject != null) {
      console.log(selected.originalObject);
    }
  }

}
