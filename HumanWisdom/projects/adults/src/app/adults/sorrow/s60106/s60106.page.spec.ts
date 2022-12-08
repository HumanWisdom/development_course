import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60106Page } from './s60106.page';

describe('S60106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60106Page;
  let fixture: ComponentFixture<S60106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
