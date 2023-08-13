import {
  Rule,
  apply,
  url,
  applyTemplates,
  move,
  chain,
  mergeWith,
} from "@angular-devkit/schematics";

import {
  strings,
  normalize
} from "@angular-devkit/core";

import { Schema as MyServiceSchema } from "./schema";

import * as pluralize from 'pluralize';


pluralize
export function angularHttpServiceSchema(options: MyServiceSchema): Rule {
  return async () => {

    if (!options.path) {
      options.path = '/';
    }

    let singularName;

    try {
       singularName=pluralize.singular(strings.classify(options.name));
    } catch (error) {
      singularName = strings.classify(options.name);
    }
    

    const templateSource = apply(url("./files"), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
        singularNameLC:singularName.toLowerCase(),
      }),
      move(normalize(options.path as string)),
    ]);

    return chain([mergeWith(templateSource)]);

  };
}