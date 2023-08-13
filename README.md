Absolutely, here's the updated README in English:

---

# Angular HTTP Service Schematic

This is a custom Angular schematic for generating services that make HTTP requests using HttpClient. It provides basic methods for performing CRUD (Create, Read, Update, Delete) operations on an API.

## Prerequisites

- Angular CLI must be installed in your project.
- Basic knowledge of Angular, HTTP, and services is recommended.

## Installation

1. Clone or download this repository to a location of your choice.
2. Navigate to the root of your Angular project using the terminal.

## Usage

1. Open a terminal and navigate to the root of your Angular project.

2. Run the following command, replacing `path/to/schematic` with the path to the directory containing the custom schematic:

   ```bash
   ng generate path/to/schematic:my-service
   ```

3. Follow the instructions in the terminal to complete the service creation:

   - Provide a name for the service.
   - Specify the path where the service will be created (e.g., `src/app/services`).
   - You can choose to accept the default project name or provide a custom one.

4. Once completed, the service will be generated in the location you specified.

## Features

The generated service includes the following methods for interacting with an API:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlBase = environment.urlBase;
  private readonly route = 'users'

  constructor(private http: HttpClient) { }

  getOne(id: string | number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.urlBase}/${this.route}/${id}`);
  }

  getAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.urlBase}/${this.route}`);
  }

  create(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.urlBase}/${this.route}`, user);
  }

  update(id: string | number, user: UserInterface): Observable<UserInterface> {
    return this.http.patch<UserInterface>(`${this.urlBase}/${this.route}/${id}`, user);
  }

  delete(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${this.route}/${id}`);
  }
}
```

Make sure to adjust the imports and routes according to your project structure.

## Customization

You can customize the schema according to your needs. Edit the `schema.json` file to adjust the properties and options available during service generation.

## Example

Here's an example of how you could use the schema to generate a new service:

```bash
ng generate path/to/schematic:my-service
? What NAME do you want for this service? UserService
? What PATH do you want for this service? src/app/services
? What project do you want to use? projectName
```

## Notes

- This custom schema is a basic tool for generating HTTP services. You may need to adjust it based on the specific requirements of your project.

---

Feel free to customize and expand this README as needed. Remember to provide clear instructions so that other developers can easily use and understand your custom Angular schematic. Good luck!