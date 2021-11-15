import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55038Page } from './s55038.page';

describe('S55038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55038Page;
  let fixture: ComponentFixture<S55038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
