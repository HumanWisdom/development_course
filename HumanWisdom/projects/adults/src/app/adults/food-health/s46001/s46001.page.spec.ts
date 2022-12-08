import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46001Page } from './s46001.page';

describe('S46001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46001Page;
  let fixture: ComponentFixture<S46001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
