import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { ProductComponent } from "./component";

import { PaAttrDirective } from "./attr.directive";
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';
import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL } from './log.service';

// setup per un value provider
//let logger = new LogService();
//logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductComponent,
    PaAttrDirective,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [DiscountService, SimpleDataSource, Model,
    //{ provide: LOG_SERVICE, useClass: SpecialLogService, multi: true },
    //{ provide: LOG_SERVICE, useClass: LogService, multi: true }
    //{ provide: LogService, useValue: logger }

    { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
    { provide: "debugLevel", useExisting: LOG_LEVEL},
    {
      provide: LogService, deps: ["debugLevel"]
      , useFactory: (level) => {

        console.log("in factory method");

        let logger = new LogService();
        logger.minimumLevel = level;
        return logger;
      }
    }
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
