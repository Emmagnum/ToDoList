import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsComponent } from './components/ts/ts.component';
import { WatchComponent } from './component/watch/watch.component';
import { InProcessComponent } from './components/in-process/in-process.component';
import { DoneComponent } from './components/done/done.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KanbanComponent } from './components/kanban/kanban.component';
import { DatabaseComponent } from './components/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    TsComponent,
    WatchComponent,
    InProcessComponent,
    DoneComponent,
    NavbarComponent,
    FooterComponent,
    DragDropComponent,
    KanbanComponent,
    DatabaseComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
