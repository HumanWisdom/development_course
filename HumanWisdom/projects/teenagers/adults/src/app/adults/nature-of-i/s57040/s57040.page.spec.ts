import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57040Page } from './s57040.page';

describe('S57040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57040Page;
  let fixture: ComponentFixture<S57040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
