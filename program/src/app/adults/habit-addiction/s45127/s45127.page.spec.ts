import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45127Page } from './s45127.page';

describe('S45127Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45127Page;
  let fixture: ComponentFixture<S45127Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45127Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45127Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
