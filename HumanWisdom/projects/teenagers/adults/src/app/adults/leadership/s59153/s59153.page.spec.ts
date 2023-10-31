import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59153Page } from './s59153.page';

describe('S59153Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59153Page;
  let fixture: ComponentFixture<S59153Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59153Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59153Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
