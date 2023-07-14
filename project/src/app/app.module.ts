import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todo/components/todolist/todolist.component';
import { TaskComponent } from './todo/components/task/task.component';
import { BmiComponent } from './bmi_converter/component/bmi/bmi.component';
import { BuiltInPipeComponent } from './pipes/component/built-in-pipe/built-in-pipe.component';
import { CustomPipeComponent } from './pipes/component/custom-pipe/custom-pipe.component';
import { FormComponent } from './read_input_store_json/component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './student/component/student-details/student-details.component';
import { GetrequestdataComponent } from './get_data/component/getrequestdata/getrequestdata.component';
import { MoneyConverterComponent } from './money_converter/component/money-converter/money-converter.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TaskComponent,
    BmiComponent,
    BuiltInPipeComponent,
    CustomPipeComponent,
    FormComponent,
    StudentDetailsComponent,
    GetrequestdataComponent,
    MoneyConverterComponent,
    ReactiveformComponent,
    TemplateformComponent ,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
