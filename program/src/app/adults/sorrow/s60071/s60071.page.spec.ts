import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60071Page } from './s60071.page';

describe('S60071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60071Page;
  let fixture: ComponentFixture<S60071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
