import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46065Page } from './s46065.page';

describe('S46065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46065Page;
  let fixture: ComponentFixture<S46065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
