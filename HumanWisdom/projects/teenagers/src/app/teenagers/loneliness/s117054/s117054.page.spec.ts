import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117054Page } from './s117054.page';

describe('S117054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117054Page;
  let fixture: ComponentFixture<S117054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
