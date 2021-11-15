import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60017Page } from './s60017.page';

describe('S60017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60017Page;
  let fixture: ComponentFixture<S60017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
