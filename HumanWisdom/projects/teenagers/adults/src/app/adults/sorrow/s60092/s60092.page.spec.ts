import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60092Page } from './s60092.page';

describe('S60092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60092Page;
  let fixture: ComponentFixture<S60092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
