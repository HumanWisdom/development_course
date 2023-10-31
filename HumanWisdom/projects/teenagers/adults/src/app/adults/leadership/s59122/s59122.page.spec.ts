import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59122Page } from './s59122.page';

describe('S59122Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59122Page;
  let fixture: ComponentFixture<S59122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
