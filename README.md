# Angular HTTP Service Schematic

This is a custom Angular schematic for generating services that make HTTP requests using HttpClient. It provides basic methods for performing CRUD (Create, Read, Update, Delete) operations on an API.

## Prerequisites

- Angular CLI must be installed in your project.
- Basic knowledge of Angular, HTTP, and services is recommended.

## Installation

1. Clone or download this repository to a location of your choice.
2. Navigate to the root of your Angular project using the terminal.
3. Globally install angular schematics

    ```bash
    npm install -g @angular-devkit/schematics-cli
    ```

## Usage

1. Open a terminal and navigate to the root of your Angular project.

2. Run the following command, replacing `path/to/schematic` with the path to the directory containing the custom schematic:

   ```bash
   schematics path/to/schematic:service
   ```

3. Follow the instructions in the terminal to complete the service creation:

   - Provide a name for the service.
   - Specify the path where the service will be created (e.g., `src/app/services`).

4. Once completed, the service will be generated in the location you specified.

## Example

Here's an example of how you could use the schema to generate a new service:

```bash
schematics path/to/schematic:service
? What NAME do you want for this service? users
? What PATH do you want for this service? src/app/services
```

## Features

The generated service includes the following methods for interacting with an API:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * adjust your imports to mach with your project folders
*/
import { environment } from 'src/environments/environment';
import { UsersInterface } from 'src/app/models/users.interface';  // change this extends interface to you interface

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly urlBase = environment.urlBase; // change this urlBase to you url api
  private readonly route = 'users'

  constructor(private http: HttpClient) { }

  getOne(id: string | number):Observable<UsersInterface>{
    return this.http.get<UsersInterface>(`${this.urlBase}/${this.route}/${id}`);
  }

  getAll():Observable<UsersInterface[]>{
    return this.http.get<UsersInterface[]>(`${this.urlBase}/${this.route}`);
  }

  create(user:UsersInterface):Observable<UsersInterface>{
    return this.http.post<UsersInterface>(`${this.urlBase}/${this.route}`,user);
  }

  update(id: string | number, user:UsersInterface):Observable<UsersInterface>{
    return this.http.patch<UsersInterface>(`${this.urlBase}/${this.route}/${id}`,user);
  }

  delete(id: string | number):Observable<any>{
    return this.http.delete<any>(`${this.urlBase}/${this.route}/${id}`);
  }
}
```

Make sure to adjust the imports and routes according to your project structure.

## Customization

You can customize the schema according to your needs. Edit the `schema.json` file to adjust the properties and options available during service generation.

## Notes

- This custom schema is a basic tool for generating HTTP services. You may need to adjust it based on the specific requirements of your project.