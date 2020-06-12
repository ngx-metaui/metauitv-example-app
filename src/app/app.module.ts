import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaConfig, MetaUIRulesModule } from '@ngx-metaui/rules';
import * as userRules from './rules/user-rules';
import { MaterialRulesModule } from '@ngx-metaui/material-rules';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetaUIRulesModule.forRoot({}),
    MaterialRulesModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private config: MetaConfig) {
    
   // mandatory - you need to register app defined rules and types since there is no
   // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);

  }
}
