import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46032Page } from './s46032.page';

describe('S46032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46032Page;
  let fixture: ComponentFixture<S46032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
